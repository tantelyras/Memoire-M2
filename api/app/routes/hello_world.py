from flask import jsonify, request
from app.utils.get_faces import get_faces


class HelloWorld:
    def __init__(self, app):
        @app.route('/', methods=['GET'])
        def hello_world():
            image = request.files['files']
            faces = get_faces(image)
            return 'hello world'
