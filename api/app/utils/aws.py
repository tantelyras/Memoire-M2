
import boto3
from os import getenv
import io
import base64

client = boto3.client('rekognition', 
                        aws_access_key_id = "AKIA3HKHYZEKECVULKEV",
                        aws_secret_access_key = "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",
                        region_name = "us-east-2"
)

def gender_rekognition(face):
    face = face.encode('ascii')
    face = base64.b64decode(face)
    response = client.detect_faces(Image={'Bytes' : face}, Attributes=[
        'ALL',
    ] )
    ageRange = response['FaceDetails'][0]['AgeRange']
    return {
        "sex" : response['FaceDetails'][0]['Gender']['Value'],
        "ageRange" : f"{str(ageRange['Low'])}-{str(ageRange['High'])}",
        "emotion" : max(response['FaceDetails'][0]['Emotions'], key=lambda emotion: emotion["Confidence"])["Type"]
    } 