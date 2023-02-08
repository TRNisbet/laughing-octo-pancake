#import dependencies
import pandas as pd
from pathlib import Path
from sklearn import tree
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingClassifier
from collections import Counter
from sklearn.datasets import make_blobs
from sklearn.model_selection import train_test_split
from sklearn.metrics import confusion_matrix, accuracy_score, classification_report
from sklearn.linear_model import LogisticRegression
import pickle
import json
from pandas import json_normalize
from flask import Flask #Import flask mains
from flask import request #Import flask requests
from flask import render_template #Import flask render templates
from flask import Flask, request, render_template, jsonify
# from flask_cors import CORS

# model file is two dirs above this 
loaded_model = pickle.load(open('./model.pkl', 'rb'))

# Set up Flask:
app = Flask(__name__)

# Homepage route: returns the index.html template file
@app.route('/')
def index():
    return render_template('index.html')

# Predict route: reads the passed JSON, does the calculations, returns JSON
@app.route("/predict", methods=["POST"])
def predictStatus():

    # this reads the JSON, decodes it, and puts it in a dict named data
    data = request.get_json()
    print(data)
    
    # convert dict from json to a dataframe
    df = pd.DataFrame(data, index=[0])
    print("Raw df follows")
    print(df.head())

    # make sure the dataframe order is right
    predict_df = df[['HighBP', "HighChol", "CholCheck", "BMI_Range", "Smoker", "Stroke", "HeartDiseaseorAttack", "PhysActivity", "Fruits", "Veggies", "HvyAlcoholConsump", "AnyHealthcare", "NoDocbcCost", "GenHlth", "Mental_Health_Range", "Physical_Health_Range", "DiffWalk", "Sex", "Age", "Education", "Income"]]
    print("Predict_df follows")
    print(predict_df.head())

    #set  predict dataframe to predict values  and run prediction against trained model 
    y_pred = loaded_model.predict(df)
    print(y_pred)

    # now we need to put that into something JSON'able
    results = { 
      "diabetes": y_pred.item(0) 
    }
    return jsonify(results)
    
# Run the app:
if __name__ == "__main__":
    app.run()

