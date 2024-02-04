from flask import Flask, request, jsonify, flash, render_template, redirect, url_for
from flask_cors import CORS
from flask_mail import Mail, Message
import random
import string

app = Flask(__name__)
CORS(app)

# Configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Update with your SMTP server
app.config['MAIL_PORT'] = 465  # Update with your SMTP port
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USERNAME'] = 'zainaliraza2003@gmail.com'  # Update with your email
app.config['MAIL_PASSWORD'] = '****'  # Update with your email password

mail = Mail(app)

def generate_verification_code(length=6):
    characters = string.ascii_lowercase + string.digits
    verification_code = ''.join(random.choice(characters) for i in range(length))
    return verification_code


@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json  
    print(data)
    email = data['email']

    if not email:
        return jsonify({'error': 'Email address not provided'}), 400

    verification_code = generate_verification_code()

    msg = Message('Your Randomly Generated Password', sender='zainaliraza2003@gmail.com', recipients=[email])
    msg.body = f'Your Verification code  is: {verification_code}'

    try:
        mail.send(msg)
        print('Password sent successfully!', 'success')
    except Exception as e:
        print(f'Failed to send password. Error: {str(e)}', 'error')

    return jsonify({'message': 'Form submitted successfully'})


if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.run(debug=True)
