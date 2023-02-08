#import dependencies
import pandas as pd
# import matplotlib.pyplot as plt
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
from flask_cors import CORS

loaded_model = pickle.load(open('model.pkl', 'rb'))

# Set up Flask:
app = Flask(__name__)
# Set up Flask to bypass CORS at the front end:
#cors = CORS(app)

# Homepage route: returns the index.html template file
@app.route('/')
def index():
    return render_template('index.html')

# Process_bmi route: reads the passed JSON, does the calculations, returns JSON
@app.route("/process_bmi", methods=["POST"])
def predictStatus():
    data = request.get_json()
    print(data)
    print("Bob the builder buildin a dataframe")

    dict = json.loads(data)
    #df = json_normalize(dict)
    print(dict)

    # print("imma start predictin in this biyatch")
    # #set  predict dataframe to predict values  and run prediction against trained model 
    # #y_pred = loaded_model.predict(df)
    # print("watch this ya'll")
    # print(y_pred)
    # # return jsonify(y_pred)
    # return(print("GET OFF MY LAWN"))
    
# Run the app:
if __name__ == "__main__":
    app.run()

