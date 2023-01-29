# Import libraries
from flask import Flask
from sqlalchemy import create_engine



# Read the HTML file 
HTML_File=open('index.html')
html = HTML_File.read().format()


app = Flask(__name__)


# engine = create_engine("json_file")

# Instantiate Flask
app = Flask('diabetes_predict')

# session = Session(engine)

@app.route('/')

def testing():
    # return html
    return html
    
    # f(HTML_File)
    # f"Welcome<br/>"
    # f"Available Routes:<br/>" 
    # f"/json object to feed into model<br/>"
    # f"/result to feed into html<br/>"

    
    

# @app.route("/api/v1.0/json_object")
# def json_object():
