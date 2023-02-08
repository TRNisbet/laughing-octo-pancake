import math
from flask import Flask, render_template, url_for, request
app = Flask(__name__)
@app.route('/', methods=['GET', 'POST'])
def index():
  QTc_result = False
  if request.method == 'POST':
    form = request.form
    QTc_result = calculate_qtc(form)
  return render_template('templates/index.html', QTc_result=QTc_result)
def calculate_qtc(form):
  sex = request.form['sex']
  heart_rate = int(request.form['hr'])
  qt_int = int(request.form['qt'])
 
  qt_seconds = qt_int / 1000 
  rr_interval = (6000 / heart_rate) 
  QTc = qt_seconds / math.sqrt(rr_interval) 
  formated_QTc = round((QTc * 1000) * 10, 0)
  if (formated_QTc > 440 and sex == 'm') or (formated_QTc > 460 and sex == 'f'):
    prolonged = True
  else:
    prolonged = False
  return (formated_QTc, prolonged)
if __name__ == "__main__":
  app.run(debug=True)