# Example: Flask API Route
# File: server/app.py
# This route handles newsletter subscriptions via Mailchimp/Brevo/ConvertKit

from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        email = data.get('email')

        # Validate input
        if not email or '@' not in email:
            return jsonify({'error': 'Valid email is required'}), 400

        # Get API key from environment variables (stored in .env file)
        api_key = os.getenv('MAILCHIMP_API_KEY')
        list_id = os.getenv('MAILCHIMP_LIST_ID')
        
        if not api_key or not list_id:
            return jsonify({'error': 'Email service not configured'}), 500

        # TODO: Call Mailchimp API
        # Example with Mailchimp:
        # import requests
        # response = requests.post(
        #     f'https://us1.api.mailchimp.com/3.0/lists/{list_id}/members',
        #     headers={
        #         'Authorization': f'Bearer {api_key}',
        #         'Content-Type': 'application/json',
        #     },
        #     json={
        #         'email_address': email,
        #         'status': 'subscribed',
        #     }
        # )

        # For now, just return success
        return jsonify({'ok': True, 'message': 'Successfully subscribed to newsletter'})
    except Exception as e:
        print(f'Subscribe error: {e}')
        return jsonify({'error': 'Failed to subscribe'}), 500

if __name__ == '__main__':
    app.run(debug=True)

