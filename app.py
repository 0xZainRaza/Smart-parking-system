from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json  # Assuming you are sending JSON data from the client
    # Process the data as needed, e.g., store it in a database
    # ...

    # Return a response (you can customize this based on your needs)
    print(data)
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
