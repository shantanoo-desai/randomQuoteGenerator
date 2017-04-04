from Quote import quote_page
from flask import render_template


@quote_page.route('/')
def quoter():
    return render_template('index.html')
