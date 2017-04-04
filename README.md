# Random Quote Generator


Brighten your boring day with a quote on your local machine!

Part of [FreeCodeCamp](https://freecodecamp.com) Challenge for Front-End Dev.

## Usage

Great to use if you run a `virtualenv` in python:

    git clone https://github.com/shantanoo-desai/randomQuoteGenerator.git

    cd randomQuoteGenerator/

    virtualenv quotegen

    source quotegen/bin/activate

Above steps activate your Virtual Environment for you. Now install dependencies

    pip install -r requirements.txt

which should install __Flask__ and some dependencies for you and finally

    ./run.py

This will run a webserver on your `localhost` on port __30002__. In a web-browser:

    http://localhost:30002
