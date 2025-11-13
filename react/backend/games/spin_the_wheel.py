# Spin the Wheel Game Routes
# Handles all endpoints for the spin the wheel game

from flask import Blueprint, jsonify, request
import random
import urllib.parse

# Create a Blueprint for spin the wheel routes
spin_the_wheel_bp = Blueprint('spin_the_wheel', __name__)

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

@spin_the_wheel_bp.route('/api/names', methods=['GET'])
def get_names():
    """Get all names in the list"""
    return jsonify({
        'names': names,
        'count': len(names)
    })

@spin_the_wheel_bp.route('/api/names', methods=['POST'])
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

@spin_the_wheel_bp.route('/api/names/<name>', methods=['DELETE'])
def remove_name(name):
    """Remove a name from the list"""
    # Decode URL-encoded name (handles spaces, special characters)
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

@spin_the_wheel_bp.route('/api/spin', methods=['GET'])
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

@spin_the_wheel_bp.route('/api/reset', methods=['POST'])
def reset_names():
    """Reset the list to initial names (useful for testing)"""
    global names
    
    return jsonify({
        'ok': True,
        'message': 'Reset to initial names',
        'names': names,
        'count': len(names)
    })

