from flask import Flask, render_template, request, redirect, url_for,jsonify
from flask_restful import Resource, Api
import flask
import json
import ast


app = Flask(__name__)

my_dict=[]
@app.route('/', methods=['GET','POST'])
def form():
    data=request.data
    try:
        my_dict=json.loads(data)
        # .decode('utf8')
        print(my_dict,type(my_dict))
        print(my_dict['email'])
    except json.decoder.JSONDecodeError:
        print("String cannot be converted")

    return "Success"

# @app.route('/login', methods=['GET','POST'])
# def login():
#     data=request.data
#     try:
#         my_dict=json.loads(data)
       
#         print(my_dict,type(my_dict))
#         print(my_dict['password'])
#         if(my_dict['email']== 'kc1999@gmail.com' and  my_dict['password']=='khushboo') :
#             return redirect(url_for("home"))
#         else :
#             return "Failure"


#     except json.decoder.JSONDecodeError:
#         print("String cannot be converted")

#     return "Error"


app.run()