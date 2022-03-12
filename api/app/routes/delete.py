from flask import request, jsonify
from app.models.person import Person
from app.utils.minio import delete_from_minio


class Delete():
    def __init__(self, app):
        @app.route('/delete/<id>', methods=['GET'])
        def delete(id):
            person = Person.by_id(id)
            # for face in person.faces:
            #     delete_from_minio(face['image']+'.png')
            person.delete()

            return jsonify(None), 200
