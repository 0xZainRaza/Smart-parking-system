from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
import random
import string
from multichain import MultiChain

app = Flask(__name__)
CORS(app)

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.office365.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'smartpakingsystem@outlook.com'
app.config['MAIL_PASSWORD'] = 'smartparkingsystem123'

mail = Mail(app)

# Connect to Multichain
multichain = MultiChain("chain1rpc", user="multichainrpc", password="rpcpassword", port=12345)

def generate_verification_code(length=6):
    characters = string.ascii_lowercase + string.digits
    verification_code = ''.join(random.choice(characters) for i in range(length))
    return verification_code

def publish_to_multichain(data):
    stream_name = "user_registration_stream"
    item = {'email': data['email'], 'verification_code': data['verification_code']}
    multichain.publish(stream_name, "registration", item)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json
    print(data)
    receiver_email = data.get('email')
    if not receiver_email:
        return jsonify({'error': 'Email address not provided'}), 400

    verification_code = generate_verification_code()

    # Create a Message instance
    msg = Message('Your Code', sender='smartpakingsystem@outlook.com', recipients=[receiver_email])

    # Add body to the email
    msg.body = f"Your Verification Code: {verification_code}"

    # Send the email
    try:
        mail.send(msg)
        print("Email sent successfully!")
        # Publish to Multichain stream
        data['verification_code'] = verification_code
        publish_to_multichain(data)
        return jsonify({'message': 'Email sent successfully'}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        return jsonify({'error': 'Failed to send email'}), 500

if __name__ == '__main__':
    app.secret_key = 'super_secret_key'
    app.run(debug=True)
