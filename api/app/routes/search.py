from flask import request, jsonify
from app.models.person import Person
from app.utils.face import who_is
from app.utils.aws import gender_rekognition


class Search():
    def __init__(self, app):
        @app.route('/search', methods=['POST'])
        def search():
            face = request.json.get('face')
            identity = who_is(face)
            if identity:
                return jsonify(identity.format())
            else:
                # gender = gender_rekognition(face)
                return jsonify({})
                # return jsonify(gender)
