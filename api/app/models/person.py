from mongoengine import Document, StringField, ListField, DateField, BooleanField
from random import choice


class Person(Document):
    name = StringField(required=True)
    faces = ListField(required=True)
    last_name = StringField()
    address = StringField()
    birth_date = StringField()
    birth_place = StringField()
    sex = StringField()
    cin_no = StringField()
    cin_date = StringField()
    cin_place = StringField()
    career_name = StringField()
    career_place = StringField()

    def format(self):
        person = dict()
        person['id'] = str(self.id)
        person['faces'] = [{'image': p['image']}
                           for p in self.faces]
        person['name'] = self.name
        person['last_name'] = self.last_name
        person['address'] = self.address
        person['birth_date'] = self.birth_date
        person['birth_place'] = self.birth_place
        person['sex'] = self.sex
        person['cin_no'] = self.cin_no
        person['cin_date'] = self.cin_date
        person['cin_place'] = self.cin_place
        person['career_name'] = self.career_name
        person['career_place'] = self.career_place
        return person

    def summary(self):
        person = dict()
        person['id'] = str(self.id)
        person['face'] = choice(self.faces)['image']
        person['face_length'] = len(self.faces)
        person['name'] = self.name
        person['last_name'] = self.last_name
        person['cin_no'] = self.cin_no
        return person

    @classmethod
    def by_id(cls, id_):
        return cls.objects(id=id_).first()
