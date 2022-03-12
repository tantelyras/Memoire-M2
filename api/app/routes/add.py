from flask import request, jsonify
from app.utils.string_to_img import string_to_img
from app.utils.save_person import save_person
from app.models.person import Person
from app.utils.face import encode, store

class Add():
    def __init__(self, app):
        @app.route('/add', methods=['POST'])
        def add():
            face = request.json.get('new_face')
            face_encoding = encode(face)
            # filename = store(face)
            faces = [{
                'image': face,
                'encoding': face_encoding
            }]
            person = Person()
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
            return jsonify({'success': True, '_id': person}), 201
