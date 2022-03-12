from face_recognition import face_encodings, compare_faces, load_image_file, face_locations
from app.utils.image import string_to_img, img_to_string
from app.models.person import Person
from app.utils.string import generate_random
import numpy as np
from os import getenv, mkdir, remove
from PIL import Image
import io
import base64

from app.utils.minio import store_to_minio


def store(face):
    filename = generate_random(getenv('FILENAME_LENGTH', 64))
    folder = './faces/'
    try:
        mkdir(folder)
    except FileExistsError:
        pass
    path = folder + filename + ".png"
    face = string_to_img(face)
    face.save(path)
    face.close()
    store_to_minio(path, filename)
    remove(path)
    return filename


def get(new_image):
    img = Image.open(new_image)
    imgBytArr = io.BytesIO()
    img.save(imgBytArr, format='PNG')
    image = load_image_file(imgBytArr)
    locations = face_locations(image)
    image = Image.fromarray(image, 'RGB')
    faces = list()
    for face in locations:
        distance_x = face[1]-face[3]
        # distance_y = face[0]-face[2]
        param_crop = (face[1]-distance_x, face[0], face[3]+distance_x, face[2])
        cropped_img = image.crop(param_crop)
        faces.append(cropped_img)
    return faces


def encode(face):
    face = string_to_img(face)
    face = np.array(face)
    try:
        encoding = face_encodings(face)[0]
    except IndexError:
        encoding = None
    return encoding


def who_is(face):
    face = encode(face)
    persons = Person.objects()
    matchs = list()
    if not persons:
        return None
    for person in persons:
        encodings = np.array([(p['encoding']) for p in person.faces])
        # Comparaison de avec tous les encodings de la personne

        match = compare_faces(np.array(face), encodings)
        # Calculer le pourcentage de prédiction vrai par rapport à au nombre de faces
        true_prediction = list(filter(None, match))
        confidence = len(true_prediction) / len(match)
        # Stocker tous les pourcentages
        matchs.append({
            'confidence': confidence,
            'id': person.id
        })
        # Tsy alefa ny encoding
        # person.faces = [face['image'] for face in person.faces]

        if len(true_prediction) == len(match):
            return person

    best_match = max(matchs, key=lambda x: x['confidence'])
    # try:
    # except ValueError:
    #     return None
    if best_match['confidence'] >= float(getenv('MINIMUM_CONFIDENCE', '0.9')):
        return [person for person in persons if person.id == best_match['id']][0]
    else:
        return None

