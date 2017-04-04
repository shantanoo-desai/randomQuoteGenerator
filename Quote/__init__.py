from flask import Flask

quote_page = Flask(__name__)

from Quote import views
