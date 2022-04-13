from flask import Flask,render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
import wonderwords
from wonderwords import RandomWord
app = Flask(__name__, static_url_path='/static')

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://postgres:postgres@localhost/mfgdb'
db = SQLAlchemy(app)
class userinformation(db.Model):
    email=db.Column(db.String(1000), primary_key=True)
    username=db.Column(db.String(20))
    password=db.Column(db.String(100))

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/signuplogin', methods=['POST'])
def signuporlogin():
    return render_template('signup.html')

@app.route('/covidinfo', methods=['POST'])
def covidinformation():
    return render_template('covidinfo.html')

@app.route('/chats', methods=['POST'])
def gotochats():
    return render_template('threads.html')

@app.route('/login', methods=['POST'])
def login():
    return render_template('login.html')

@app.route('/adduser', methods=['POST'])
def adduser():
    email = request.form['email']
    username = request.form['username']
    password = request.form['password']
    userdata = userinformation(email=email, username=username, password=password)
    db.session.add(userdata)
    db.session.commit()
    return render_template('dashboard.html')

@app.route('/letuserin', methods=['POST'])
def letuserin():
    email = request.form['email']
    password = request.form['password']
    #query=db.select([userinformation]).where(userinformation.email==email)
    #result=userinformation
    result=userinformation.query.all()
    print(result)
    result=str(result)
    print(result)
    if email in result:
        return render_template('dashboard.html')
    else:
        return render_template('signup.html')

@app.route('/algebraone', methods=['POST'])
def alg1():
    return render_template('algebraone.html')

@app.route('/todoodle', methods=['POST'])
def todoodle():
    return render_template('hackcode.html')

@app.route('/chatroom', methods=['POST'])
def chatroom():
    return render_template('thread.html')