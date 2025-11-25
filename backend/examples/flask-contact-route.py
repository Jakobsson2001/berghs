# Example: Flask API Route
# File: server/app.py
# This route handles contact form submissions and sends emails via SendGrid/Postmark/Mailgun

from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        email = data.get('email')
        message = data.get('message')
        name = data.get('name')

        # Validate input
        if not email or not message:
            return jsonify({'error': 'Email and message are required'}), 400

        # Get API key from environment variables (stored in .env file)
        api_key = os.getenv('SENDGRID_API_KEY')
        if not api_key:
            return jsonify({'error': 'Email service not configured'}), 500

        # TODO: Call SendGrid API
        # Example with SendGrid:
        # import requests
        # response = requests.post(
        #     'https://api.sendgrid.com/v3/mail/send',
        #     headers={
        #         'Authorization': f'Bearer {api_key}',
        #         'Content-Type': 'application/json',
        #     },
        #     json={
        #         'personalizations': [{'to': [{'email': 'your-email@example.com'}]}],
        #         'from': {'email': 'noreply@yourdomain.com'},
        #         'subject': f'Contact form: {name or "Anonymous"}',
        #         'content': [{'type': 'text/plain', 'value': f'From: {email}\n\n{message}'}],
        #     }
        # )

        # For now, just return success
        return jsonify({'ok': True, 'message': 'Contact form submitted successfully'})
    except Exception as e:
        print(f'Contact form error: {e}')
        return jsonify({'error': 'Failed to send message'}), 500

if __name__ == '__main__':
    app.run(debug=True)

