from flask import request, jsonify
from app.models.person import Person


class GetPerson():
    def __init__(self, app):
        @app.route('/person/<id>', methods=['GET'])
        def person(id):
            person = Person.by_id(id)
            return jsonify(person.format())
