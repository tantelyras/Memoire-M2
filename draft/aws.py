import boto3
from PIL import Image
import io
import base64
import json
client = boto3.client('rekognition', 
                        aws_access_key_id = "AKIA3HKHYZEKECVULKEV",
                        aws_secret_access_key = "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",
                        region_name = "us-east-2")

def img_to_string(image):
    imgBytArr = io.BytesIO()
    image.save(imgBytArr, format='PNG')
    string_image = base64.b64encode(imgBytArr.getvalue()).decode('ascii')
    return string_image

img = Image.open('/home/diamondra/Pictures/Webcam/diamondra.jpg')
string = img_to_string(img)


face = string.encode('ascii')
face = base64.b64decode(face)
response = client.detect_faces(Image={'Bytes' : face}, Attributes=[
    'ALL',
] )

# print(json.dumps(response, indent=4, sort_keys=True))
ageRange = response['FaceDetails'][0]['AgeRange']
emotions = max(response['FaceDetails'][0]['Emotions'], key=lambda emotion: emotion["Confidence"])["Type"]
print(emotions)
# print(f"{str(ageRange['Low'])}-{str(ageRange['High'])}")
# print(response['FaceDetails'][0]['Gender']['Value'])