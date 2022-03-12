from flask import request, jsonify
from app.models.person import Person
from copy import *


class MasterList():
    def __init__(self, app):
        @app.route('/master_list', methods=['GET'])
        def master_list():
            persons = Person.objects()

            response = list()

            for person in persons:
                response.append(person.summary())
            return jsonify(response)
