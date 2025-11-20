# Flask Backend for Mini Games
# Main application file that imports and registers all game modules

import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from games.spin_the_wheel import spin_the_wheel_bp
from games.memory_game import memory_game_bp

app = Flask(__name__)

# Configure CORS to only allow specific origins
# Get allowed origins from environment variable (comma-separated list)
# In production, set ALLOWED_ORIGINS to your frontend URL(s)
# Example: ALLOWED_ORIGINS=https://your-frontend.onrender.com,https://www.yourdomain.com
allowed_origins_env = os.getenv('ALLOWED_ORIGINS', '')

# Build list of allowed origins
allowed_origins = []
if allowed_origins_env:
    # Split by comma and strip whitespace
    allowed_origins = [origin.strip() for origin in allowed_origins_env.split(',') if origin.strip()]

# Always allow localhost for development
# Add common localhost variations
localhost_origins = [
    'http://localhost:5173',  # Vite default
    'http://localhost:3000',  # React default
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000',
]

# Combine allowed origins
all_allowed_origins = localhost_origins + allowed_origins

# Configure CORS with specific origins
CORS(app, origins=all_allowed_origins, supports_credentials=True)

# Additional security: Validate Origin header for all requests
@app.before_request
def check_origin():
    # Skip origin check for OPTIONS requests (CORS preflight)
    if request.method == 'OPTIONS':
        return None
    
    origin = request.headers.get('Origin')
    
    # Allow requests without Origin header (e.g., direct API calls, Postman)
    # In production, you might want to be stricter and reject these
    if origin is None:
        return None
    
    # Check if origin is in allowed list
    if origin not in all_allowed_origins:
        return jsonify({'error': 'Origin not allowed'}), 403
    
    return None

# Register game blueprints
app.register_blueprint(spin_the_wheel_bp)
app.register_blueprint(memory_game_bp)

if __name__ == '__main__':
    print("🎮 Mini Games Backend Server")
    print("=" * 50)
    print("SPIN THE WHEEL endpoints:")
    print("  GET    /api/names           - Get all names")
    print("  POST   /api/names           - Add a name (body: {'name': 'John Doe'})")
    print("  DELETE /api/names/<name>    - Remove a name")
    print("  GET    /api/spin            - Randomly select a name")
    print("  POST   /api/reset           - Reset to initial names")
    print("")
    print("MEMORY GAME endpoints:")
    print("  POST   /api/memory/new      - Start a new game")
    print("  GET    /api/memory/state    - Get current game state")
    print("  POST   /api/memory/flip     - Flip a card (body: {'cardId': 0})")
    print("  POST   /api/memory/reset    - Reset flipped cards")
    print("=" * 50)
    app.run(debug=True, port=5000)

