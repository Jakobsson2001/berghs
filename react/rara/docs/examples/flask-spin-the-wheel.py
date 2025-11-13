# Example: Flask Backend for Spin the Wheel App
# File: server/app.py
# This is a simple backend with in-memory storage (no database required!)
# Perfect for learning: demonstrates GET, POST, DELETE endpoints

from flask import Flask, jsonify, request
from flask_cors import CORS  # Allows frontend to call this API
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# In-memory storage (starts with initial names)
# No database needed - this list lives in memory while the server runs
names = [
    "Amanda Sandorov",
    "Elisabeth Toll",
    "Emil Sellberg",
    "Gabriel Mousi",
    "Grace Källstrand",
    "Harry Persson",
    "James Evenlind",
    "Jonathan Jansch",
    "Josefine Lynxén",
    "Julian Martorell",
    "Li",
    "Neda Sadejou",
    "Nils Axe",
    "Nina Amjadi",
    "Sebastian Runvik",
    "Zorro",
]

@app.route('/api/names', methods=['GET'])
def get_names():
    """Get all names in the list"""
    return jsonify({
        'names': names,
        'count': len(names)
    })

@app.route('/api/names', methods=['POST'])
def add_name():
    """Add a new name to the list"""
    data = request.get_json()
    new_name = data.get('name', '').strip()
    
    # Validate input
    if not new_name:
        return jsonify({'error': 'Name is required'}), 400
    
    # Check if name already exists
    if new_name in names:
        return jsonify({'error': 'Name already exists'}), 400
    
    # Add the name
    names.append(new_name)
    
    return jsonify({
        'ok': True,
        'message': f'Added {new_name}',
        'names': names,
        'count': len(names)
    }), 201

@app.route('/api/names/<name>', methods=['DELETE'])
def remove_name(name):
    """Remove a name from the list"""
    # Decode URL-encoded name (handles spaces, special characters)
    import urllib.parse
    decoded_name = urllib.parse.unquote(name)
    
    if decoded_name not in names:
        return jsonify({'error': 'Name not found'}), 404
    
    names.remove(decoded_name)
    
    return jsonify({
        'ok': True,
        'message': f'Removed {decoded_name}',
        'names': names,
        'count': len(names)
    })

@app.route('/api/spin', methods=['GET'])
def spin_wheel():
    """Randomly select a name from the list (spin the wheel!)"""
    if not names:
        return jsonify({'error': 'No names in the list'}), 400
    
    selected_name = random.choice(names)
    
    return jsonify({
        'ok': True,
        'selected': selected_name,
        'remaining_count': len(names)
    })

@app.route('/api/reset', methods=['POST'])
def reset_names():
    """Reset the list to initial names (useful for testing)"""
    global names
    
    return jsonify({
        'ok': True,
        'message': 'Reset to initial names',
        'names': names,
        'count': len(names)
    })

if __name__ == '__main__':
    print("🎡 Spin the Wheel Backend Server")
    print("=" * 40)
    print("Available endpoints:")
    print("  GET    /api/names      - Get all names")
    print("  POST   /api/names      - Add a name (body: {'name': 'John Doe'})")
    print("  DELETE /api/names/<name> - Remove a name")
    print("  GET    /api/spin       - Randomly select a name")
    print("  POST   /api/reset      - Reset to initial names")
    print("=" * 40)
    app.run(debug=True, port=5000)

