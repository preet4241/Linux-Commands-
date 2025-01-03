from flask import Flask, render_template, request, jsonify
import datetime

app = Flask(__name__)

# Predefined Linux commands and their outputs
commands = {
    'ls': 'listing directories and files...',
    'pwd': '/home/user',
    'echo Hello World': 'Hello World',
    'date': str(datetime.datetime.now()),
    # Add more predefined commands as needed
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/execute', methods=['POST'])
def execute_command():
    command = request.form.get('command')
    result = commands.get(command, f'bash: {command}: command not found')
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
