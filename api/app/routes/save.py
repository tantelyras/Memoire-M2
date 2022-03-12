from flask import request, jsonify
from app.models.person import Person
from app.utils.face import encode, store


class Save():
    def __init__(self, app):
        @app.route('/save', methods=['POST'])
        def save():
            _id = request.json.get('id')
            new_face = request.json.get('new_face')
            person = Person.by_id(_id)
            if new_face:
                new_face_encoding = encode(new_face)
                # filename = store(new_face)
                faces = person.faces
                faces.append({
                    'image': new_face,
                    'encoding': new_face_encoding
                })
                person.faces = faces

            person.name = request.json.get('name')
            person.last_name = request.json.get('last_name')
            person.address = request.json.get('address')
            person.birth_date = request.json.get('birth_date')
            person.birth_place = request.json.get('birth_place')
            person.sex = request.json.get('sex')
            person.cin_no = request.json.get('cin_no')
            person.cin_date = request.json.get('cin_date')
            person.cin_place = request.json.get('cin_place')
            person.career_name = request.json.get('career_name')
            person.career_place = request.json.get('career_place')
            person.save()
            return jsonify({
                'success': True
            })
