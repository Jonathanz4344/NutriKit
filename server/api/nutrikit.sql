DROP table if EXISTS category, food_item, food_item_category CASCADE;

CREATE TABLE category(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30)
);

INSERT INTO category(name)
            VALUES('Proteins');
INSERT INTO category(name)
            VALUES('Fruits');
INSERT INTO category(name)
            VALUES('Vegetables');
INSERT INTO category(name)
            VALUES('Dairy');
INSERT INTO category(name)
            VALUES('Grain');       

CREATE TABLE food_item(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30),
    calories FLOAT DEFAULT 0,
    total_fat FLOAT DEFAULT 0,
    saturated_fat FLOAT DEFAULT 0,
    trans_fat FLOAT DEFAULT 0,
    protein FLOAT DEFAULT 0,
    carbohydrate FLOAT DEFAULT 0
);

-- Proteins

INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('steak', 300, 5.73, 2.183, 0.182, 29.44, 0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('ground beef', 200, 13.1, 5.3, 0.6, 15.18, 0.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('chicken', 100, 9.3, 2.5, 0.1, 27.14, 0.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('fish', 80, 6.34, 1.0, 0.0, 19.84, 0.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('soy', 50, 19.94, 2.884, 0.0, 36.49, 30.16);

-- Fruits

INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('orange', 300, 1, 1, 0, 0, 5);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('banana', 200, 1.2, 1.2, 0.0, 2.0, 6.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('pineapple', 100, 1.2, 1.2, 0.0, 0.5, 12.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('grapes', 80, 0.0, 0.0, 0.0, 0.0, 4.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('blueberries', 50, 0.0, 0.0, 0.0, 0.0, 3.0);

-- Vegetables

INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('romaine', 30, 1.2, 1.2, 0, 2, 3);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('green beans', 40, 2.4, 2.4, 0.0, 6.0, 4.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('squash', 100, 1.2, 1.2, 0.0, 3.0, 6.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('spinach', 50, 0.0, 0.0, 0.0, 7.0, 3.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('kale', 10, 0.0, 0.0, 0.0, 4.0, 1.0);

-- Dairy

INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('milk', 300, 12.1, 8.6, 2.5, 7, 13);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('yoghurt', 200, 6.2, 6.2, 0.0, 11.0, 8.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('cheddar cheese', 200, 12.1, 8.6, 2.5, 3.0, 1.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('skim milk', 100, 3.0, 3.0, 0.0, 3.0, 7.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('cottage cheese', 80, 6.0, 5.0, 1.0, 3.0, 4.0);

-- Grain

INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('bread', 200, 5, 5, 0, 2, 16);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('bagel', 300, 7.0, 7.0, 0.0, 2.0, 24.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('pita', 250, 5, 5, 0.0, 1.0, 12.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('naan', 210, 4, 4, 0.0, 1.2, 16.0);
INSERT INTO food_item(name, calories, total_fat, saturated_fat, trans_fat, protein, carbohydrate)
            VALUES('tortilla', 120, 3, 3, 0.0, 0.8, 11.0);

CREATE TABLE food_item_category(
    id SERIAL PRIMARY KEY NOT NULL,
    category_id INTEGER NOT NULL REFERENCES category(id),
    food_item_id INTEGER NOT NULL REFERENCES food_item(id)
);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,1);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,2);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,3);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,4);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(1,5);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,6);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,7);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,8);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,9);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(2,10);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,11);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,12);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,13);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,14);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(3,15);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,16);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,17);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,18);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,19);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(4,20);

INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,21);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,22);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,23);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,24);
INSERT INTO food_item_category(category_id, food_item_id)
            VALUES(5,25);