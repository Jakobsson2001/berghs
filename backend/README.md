# Mini Games Backend

A Flask backend for mini games (Spin the Wheel and Memory Game) using in-memory storage (no database required!).

## Features

- ✅ **No database required** - Uses in-memory list storage
- ✅ **REST API** - GET, POST, DELETE endpoints
- ✅ **CORS enabled** - Works with React frontend
- ✅ **Security configured** - CORS restricted to allowed origins only
- ✅ **Modular structure** - Separate modules for each game
- ✅ **Perfect for learning** - Simple, clear code

## Project Structure

```
backend/
├── app.py                    # Main Flask application
├── requirements.txt          # Python dependencies
├── games/
│   ├── __init__.py
│   ├── spin_the_wheel.py    # Spin the Wheel game routes
│   └── memory_game.py       # Memory Game routes
└── README.md                # This file
```

## Setup

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
   
   Or install manually:
   ```bash
   pip install flask>=2.3.0 flask-cors>=4.0.0
   ```
   
   **Note:** If you see `ImportError: cannot import name 'escape' from 'jinja2'`, you have a version mismatch. Use `requirements.txt` to fix it.

2. **Run the server:**
   ```bash
   python app.py
   ```

3. **The server will start on:** `http://localhost:5000`

## Testing with cURL

Test your backend API directly from the command line! See [TESTING.md](./TESTING.md) for complete examples.

**Quick test:**
```bash
# Get all names
curl http://localhost:5000/api/names

# Add a name
curl -X POST http://localhost:5000/api/names \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Person"}'

# Spin the wheel
curl http://localhost:5000/api/spin
```

## Running with React Frontend

See [SETUP.md](./SETUP.md) for instructions on running both the backend and React frontend together.

## Security Configuration

The backend is configured to only accept requests from specific allowed origins. This prevents unauthorized access from other websites.

**For production deployment**, you must set the `ALLOWED_ORIGINS` environment variable with your frontend URL(s).

See [SECURITY.md](./SECURITY.md) for detailed security configuration instructions.

## API Endpoints

### Spin the Wheel

#### GET `/api/names`
Get all names in the list.

**Response:**
```json
{
  "names": ["Amanda Sandorov", "Elisabeth Toll", ...],
  "count": 16
}
```

#### POST `/api/names`
Add a new name to the list.

**Request body:**
```json
{
  "name": "John Doe"
}
```

**Response:**
```json
{
  "ok": true,
  "message": "Added John Doe",
  "names": [...],
  "count": 17
}
```

#### DELETE `/api/names/<name>`
Remove a name from the list.

**Example:** `DELETE /api/names/Amanda%20Sandorov`

**Response:**
```json
{
  "ok": true,
  "message": "Removed Amanda Sandorov",
  "names": [...],
  "count": 15
}
```

#### GET `/api/spin`
Randomly select a name from the list (spin the wheel!).

**Response:**
```json
{
  "ok": true,
  "selected": "Neda Sadejou",
  "remaining_count": 16
}
```

#### POST `/api/reset`
Reset the list to initial names.

**Response:**
```json
{
  "ok": true,
  "message": "Reset to initial names",
  "names": [...],
  "count": 16
}
```

### Memory Game

#### POST `/api/memory/new`
Start a new memory game - creates a 2x5 grid with 5 pairs.

**Response:**
```json
{
  "ok": true,
  "message": "New game started",
  "cards": [...],
  "matches": 0,
  "moves": 0
}
```

#### GET `/api/memory/state`
Get current memory game state.

**Response:**
```json
{
  "ok": true,
  "cards": [...],
  "matches": 0,
  "moves": 0
}
```

#### POST `/api/memory/flip`
Flip a card and check for matches.

**Request body:**
```json
{
  "cardId": 0
}
```

**Response:**
```json
{
  "ok": true,
  "cards": [...],
  "isMatch": false,
  "matches": 0,
  "moves": 1,
  "flippedCards": [0, 1]
}
```

#### POST `/api/memory/reset`
Reset flipped cards (used when no match).

**Response:**
```json
{
  "ok": true,
  "cards": [...],
  "matches": 0,
  "moves": 1
}
```

## Architecture

The backend uses Flask Blueprints to organize routes by game:

- `games/spin_the_wheel.py` - Contains all Spin the Wheel routes
- `games/memory_game.py` - Contains all Memory Game routes
- `app.py` - Main application that imports and registers both blueprints

This modular structure makes it easy to:
- Add new games
- Maintain and test each game independently
- Scale the application

## Why This Structure?

- **No database needed** - Perfect for learning backend concepts without database complexity
- **Real-world pattern** - Many apps use in-memory storage for simple use cases
- **Easy to extend** - Add features like persistence, authentication, etc.
- **Modular design** - Each game is self-contained in its own module
- **Fun project** - Mini games are engaging and visual!

## Next Steps

- Add persistence (save to file or database)
- Add user authentication
- Add multiple wheel lists
- Add animation/visual effects in the frontend
- Deploy to a hosting service (Vercel, Railway, etc.)

