from flask import Flask, jsonify
from app.routes.recognize import Recognize
from app.routes.add import Add
from app.routes.save import Save
from app.routes.get_all_faces import Get_all_faces
from app.routes.faces import Faces
from app.routes.search import Search
from app.routes.hello_world import HelloWorld
from app.routes.master_list import MasterList
from app.routes.person import GetPerson
from app.routes.delete import Delete
from app.routes.cin import CIN
from os import getenv
from flask_mongoengine import MongoEngine
from flask_cors import CORS, cross_origin
def create_app():
    _app = Flask(__name__)

    @_app.route('/', methods=['GET'])
    def index():
        return "It works from memoryapi"
    cors = CORS(_app)
    _app.secret_key = 'api_secret_key'
    _app.config.update(
        MONGODB_SETTINGS={
            'host': getenv('MONGODB_HOST', 'mongodb://localhost:27017/identity'),
            'retryWrites': False
        }
    )
        
    MongoEngine(_app)
    Recognize(_app)
    Add(_app)
    Save(_app)
    Faces(_app)
    Search(_app)
    HelloWorld(_app)
    MasterList(_app)
    GetPerson(_app)
    Delete(_app)
    CIN(_app)
    configure_before_request(_app)
    configure_after_request(_app)
    configure_error_handlers(_app)
    return _app


def configure_before_request(app):
    """Logs before processing request."""
    from flask import request

    @app.before_request
    def before_request():
        _address = request.environ.get(
            'HTTP_X_FORWARDED_FOR') or request.remote_addr
        app.logger.info('{} -> {} {}'.format(_address,
                                             request.method, request.path))


def configure_after_request(app):
    """Response headers modifications after request."""

    @app.after_request
    def after_request(response):
        headers = {
            ('Access-Control-Allow-Origin', '*'),
            ('Access-Control-Allow-Headers', 'Content-Type,Authorization'),
            ('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'),
            ('Access-Control-Expose-Headers', 'Content-Disposition')
        }
        [response.headers.add(*header) for header in headers]
        return response


def configure_error_handlers(app):

    @app.errorhandler(404)
    def not_found(error):
        return jsonify(dict(description='Resource Not Found.')), 404

    @app.errorhandler(405)
    def not_allowed(error):
        return jsonify(dict(description='Method Not Allowed.')), 405

    @app.errorhandler(500)
    def internal_server_error(error):
        return jsonify(dict(description='Internal Server Error.')), 500
