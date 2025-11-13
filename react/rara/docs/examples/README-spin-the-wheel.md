# Spin the Wheel Backend Example

A simple Flask backend example that demonstrates in-memory storage (no database required!) for a spin-the-wheel app.

## Features

- ✅ **No database required** - Uses in-memory list storage
- ✅ **REST API** - GET, POST, DELETE endpoints
- ✅ **CORS enabled** - Works with React frontend
- ✅ **Perfect for learning** - Simple, clear code

## Setup

1. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   
   Or install manually:
   ```bash
   pip install flask>=2.3.0 flask-cors>=4.0.0
   ```
   
   **Note:** If you see `ImportError: cannot import name 'escape' from 'jinja2'`, you have a version mismatch. Use `requirements.txt` to fix it.

2. **Run the server:**
   ```bash
   python flask-spin-the-wheel.py
   ```

3. **The server will start on:** `http://localhost:5000`

## Testing with cURL

Test your backend API directly from the command line! See [TESTING-WITH-CURL.md](./TESTING-WITH-CURL.md) for complete examples.

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

See [SETUP-GUIDE.md](./SETUP-GUIDE.md) for instructions on running both the backend and React frontend together.

## API Endpoints

### GET `/api/names`
Get all names in the list.

**Response:**
```json
{
  "names": ["Amanda Sandorov", "Elisabeth Toll", ...],
  "count": 16
}
```

### POST `/api/names`
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

### DELETE `/api/names/<name>`
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

### GET `/api/spin`
Randomly select a name from the list (spin the wheel!).

**Response:**
```json
{
  "ok": true,
  "selected": "Neda Sadejou",
  "remaining_count": 16
}
```

### POST `/api/reset`
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

## Frontend Integration

See `spin-the-wheel-frontend-example.tsx` for a complete React component that connects to this backend.

## Why This Example?

- **No database needed** - Perfect for learning backend concepts without database complexity
- **Real-world pattern** - Many apps use in-memory storage for simple use cases
- **Easy to extend** - Add features like persistence, authentication, etc.
- **Fun project** - Spin the wheel is engaging and visual!

## Next Steps

- Add persistence (save to file or database)
- Add user authentication
- Add multiple wheel lists
- Add animation/visual effects in the frontend
- Deploy to a hosting service (Vercel, Railway, etc.)

