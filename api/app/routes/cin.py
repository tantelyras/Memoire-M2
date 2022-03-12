import io
from PIL import Image
import boto3
import base64
import json
import re
from flask_cors import cross_origin
from flask import request, jsonify


access_key = "AKIA3HKHYZEKECVULKEV"
secret_key = "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"


client = boto3.client('textract',
                      aws_access_key_id=access_key,
                      aws_secret_access_key=secret_key,
                      region_name="us-east-2")


class CIN():
    def __init__(self, app):
        @app.route('/cin', methods=['POST'])
        def cin():

            image = request.json.get('image')
            string = image.encode('ascii')
            string = base64.b64decode(string)

            response = client.detect_document_text(
                Document={'Bytes': string})
            resultat = ""

            # Print detected text
            for item in response["Blocks"]:
                if item["BlockType"] == "LINE":
                    resultat += item["Text"]+' '
                    # print('\033[94m' + item["Text"] + '\033[0m')

            tab = [row for row in re.split('; |: |- |/ | ', resultat) if row]
            print(tab)
            tab.index('Nom')

            nom_start = tab.index('Nom')
            nom_stop = tab.index("FANAMPIN'")

            nom = " ".join(tab[nom_start+1:nom_stop])
            print(nom)

            prenom_start = tab.index('Prénoms')
            prenom_stop = tab.index("TERAKA")

            prenom = " ".join(tab[prenom_start+1:prenom_stop])
            print(prenom)

            birthday_start = tab.index('le')
            birthday_stop = tab.index("TAO")

            birthday = " ".join(tab[birthday_start+1:birthday_stop])
            print(birthday)

            birthday_place_start = tab.index('à')
            birthday_place_stop = tab.index("FAMANTARANA")

            birthday_place = " ".join(
                tab[birthday_place_start+1:birthday_place_stop])
            print(birthday_place)

            number_start = tab.index('N°')

            number = " ".join(tab[number_start+1:])
            return jsonify({
                'nom': nom,
                'prenom': prenom,
                'birthday': birthday,
                'number': number
            })
