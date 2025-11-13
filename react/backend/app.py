# Flask Backend for Mini Games
# Main application file that imports and registers all game modules

from flask import Flask
from flask_cors import CORS
from games.spin_the_wheel import spin_the_wheel_bp
from games.memory_game import memory_game_bp

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

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

