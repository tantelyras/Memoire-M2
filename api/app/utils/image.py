import base64
import io
from PIL import *


def img_to_string(image):
    imgBytArr = io.BytesIO()
    image.save(imgBytArr, format='PNG')
    string_image = base64.b64encode(imgBytArr.getvalue()).decode('ascii')
    return string_image


def string_to_img(str_img):
    b = bytes(str_img, "ascii")
    buf_image = io.BytesIO(base64.b64decode(b))
    return Image.open(buf_image)
