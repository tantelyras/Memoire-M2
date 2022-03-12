from flask import request, jsonify
from app.utils.img_to_string import img_to_string
from app.utils.face import get, encode


class Faces():
    def __init__(self, app):
        @app.route('/faces', methods=['POST'])
        def faces():
            image = request.files['file']
            faces = get(image)
            string_faces = list()

            for face in faces:
                string = img_to_string(face)
                try:
                    len(encode(string))
                    string_faces.append(string)
                except TypeError:
                    pass
            return jsonify(string_faces)
