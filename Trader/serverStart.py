from flask import Flask, render_template, jsonify


app = Flask(__name__)  # __name__ referencing this file


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/cityTrader')
def javaPlace():
    return render_template('city_trader.html')


@app.route('/jQuery')
def jQuery():
    return render_template('jQuery.html')


@app.route('/adjList', methods=['GET'])
def adj():
    return jsonify(open('adjList.txt', 'r', encoding='utf-8').readlines())


@app.route('/nounList', methods=['GET'])
def noun():
    return jsonify(open('nounList.txt', 'r', encoding='utf-8').readlines())


@app.route('/femaleHumanNames', methods=['GET'])
def female():
    return jsonify(open('femaleHuman.txt', 'r', encoding='utf-8').readlines())


@app.route('/maleHumanNames', methods=['GET'])
def male():
    return jsonify(open('maleHuman.txt', 'r', encoding='utf-8').readlines())


if __name__ == '__main__':  # this script runs only if it is main one
    app.run(debug=True)             # (being envoke directly)
