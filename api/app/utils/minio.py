# from minio.error import (ResponseError, BucketAlreadyOwnedByYou,
#                          BucketAlreadyExists)
from minio import Minio
from os import getenv, remove
from PIL import Image
minioClient = Minio('minio:9000',
                    access_key=getenv('MINIO_ACCESS_KEY', 'azertyuiop0123456789'),
                    secret_key=getenv('MINIO_SECRET_KEY', 'azertyuiop0123456789'),
                    secure=False)


def store_to_minio(src_filepath, dst_filename):

    # try:
    minioClient.fput_object(
        'faces', dst_filename + ".png", src_filepath)

    # except ResponseError as err:
    #     print(err)


def delete_from_minio(obj_names):
    # try:
    minioClient.remove_object('faces', obj_names)

    # except ResponseError as err:
    #     print(err)
