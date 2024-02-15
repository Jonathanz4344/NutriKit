from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS

from api.swen_344_db_utils import *
from api.nutrikit_api import *


app = Flask(__name__) #create Flask instance
CORS(app, supports_credentials= True) #Enable CORS on Flask server to work with Nodejs pages
api = Api(app) #api router

api.add_resource(get_all_categories,'/get_all_categories')
api.add_resource(get_all_food_items,'/get_all_food_items/<string:category>')
api.add_resource(put_food_item, '/put_food_item')
api.add_resource(post_new_food_item, '/post_new_food_item')
api.add_resource(delete_food_item,'/delete_food_item/<string:name>')
if __name__ == '__main__':
    print("Loading db")
    exec_sql_file('server/api/nutrikit.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask

