from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

class get_all_categories(Resource):
    def get(self):
    # NOTE: No need to replicate code; use the util function!
       result = exec_get_all("""SELECT name FROM category """)
       categories = [category[0] for category in result ]
       
       return categories
   
class get_all_food_items(Resource):
    def get(self,category):
    # NOTE: No need to replicate code; use the util function!
       category_id = exec_get_one(f"""SELECT id FROM category WHERE name='{category}'""")
       result = exec_get_all(f"""SELECT fi.name, fi.calories, fi.total_fat, fi.saturated_fat, fi.trans_fat, fi.protein, fi.carbohydrate 
                                    FROM food_item_category 
                                        INNER JOIN food_item as fi ON fi.id = food_item_category.food_item_id 
                                            WHERE category_id = {category_id[0]} """)
    # categories = [category[0] for category in result ]
       
       return result
   
class put_food_item(Resource):
    def put(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('calories', type=str, required=True)
        parser.add_argument('totalFat', type=str, required=True)
        parser.add_argument('saturatedFat', type=str, required=True)
        parser.add_argument('transFat', type=str, required=True)
        parser.add_argument('protein', type=str, required=True)
        parser.add_argument('carbohydrate', type=str, required=True)
        
        args = parser.parse_args()
        
        name = args['name']
        calories = args['calories']
        total_fat = args['totalFat']
        saturated_fat = args['saturatedFat']
        trans_fat = args['transFat']
        protein = args['protein']
        carbohydrate = args['carbohydrate']
        
        exec_commit(f"""UPDATE food_item set calories='{calories}', total_fat='{total_fat}',
                            saturated_fat='{saturated_fat}', trans_fat='{trans_fat}',
                                protein='{protein}', carbohydrate='{carbohydrate}' WHERE name = '{name}'""")
        
        return (name + " has been updated")
class post_new_food_item(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('category', type=str, required=True)
        parser.add_argument('name', type=str, required=True)
        parser.add_argument('calories', type=str, required=True)
        parser.add_argument('totalFat', type=str, required=True)
        parser.add_argument('saturatedFat', type=str, required=True)
        parser.add_argument('transFat', type=str, required=True)
        parser.add_argument('protein', type=str, required=True)
        parser.add_argument('carbohydrate', type=str, required=True)
        
        args = parser.parse_args()
        
        category = args['category']
        name = args['name']
        calories = args['calories']
        total_fat = args['totalFat']
        saturated_fat = args['saturatedFat']
        trans_fat = args['transFat']
        protein = args['protein']
        carbohydrate = args['carbohydrate']
        
        category_id = exec_get_one(f"""SELECT id from category WHERE name='{category}'""")
        exec_commit(f""" INSERT INTO food_item (name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
                                VALUES ('{name}', '{calories}', '{total_fat}', '{saturated_fat}',
                                        '{trans_fat}', '{protein}','{carbohydrate}')""")
        food_item_id = exec_get_one(f"""select id from food_item WHERE name='{name}'""" )
        exec_commit(f""" INSERT INTO food_item_category (category_id, food_item_id)
                            VALUES ('{category_id[0]}','{food_item_id[0]}')""")
        
        return (name + " has been added to " + category)
    
class delete_food_item(Resource):
    def delete(self,name):
        food_item_id = exec_get_one(f"""select id from food_item WHERE name='{name}'""" )
        exec_commit(f"""DELETE FROM food_item_category WHERE food_item_id='{food_item_id[0]}'""")
        exec_commit(f"""DELETE FROM food_item WHERE name = '{name}'""")
        
        return (name + " has been deleted")