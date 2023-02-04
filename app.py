from flask import Flask, request, render_template, jsonify
from flask_cors import CORS

# Set up Flask:
app = Flask(__name__)
# Set up Flask to bypass CORS at the front end:
cors = CORS(app)

# Homepage route: returns the index.html template file
@app.route('/')
def index():
    return render_template('index.html')

# Process_bmi route: reads the passed JSON, does the calculations, returns JSON
@app.route("/process_bmi", methods=["POST"])
def processBMI():
    data = request.get_json()

    bmi = round(703 * data['weight'] / data['height']**2, 1)
    if bmi <= 18.5:
      cat = "underweight"
    elif bmi < 25:
      cat = "healthy"
    elif bmi < 30:
      cat = "overweight"
    else:
      cat = "obese"
    results = {
      "bmi": bmi,
      "category": cat
    }
    return jsonify(results)

# Run the app:
if __name__ == "__main__":
    app.run()
