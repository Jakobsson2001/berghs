# How to Run the Backend and Frontend Together

This guide shows you how to run both the Flask backend and React frontend so they can communicate.

## Prerequisites

- Python 3.x installed
- Node.js and npm installed
- Flask and flask-cors installed

## Step 1: Install Backend Dependencies

```bash
# Navigate to backend directory
cd backend

# Install Flask and flask-cors (recommended: use requirements.txt)
pip install -r requirements.txt
```

Or install manually:
```bash
pip install flask>=2.3.0 flask-cors>=4.0.0
```

**Important:** Make sure you have compatible versions. If you see an `ImportError: cannot import name 'escape' from 'jinja2'`, you have a version mismatch. Use the `requirements.txt` file to ensure compatibility.

## Step 2: Start the Flask Backend

Open a terminal and navigate to your project directory:

```bash
cd backend
python app.py
```

You should see:
```
🎮 Mini Games Backend Server
==================================================
SPIN THE WHEEL endpoints:
  GET    /api/names           - Get all names
  POST   /api/names           - Add a name (body: {'name': 'John Doe'})
  DELETE /api/names/<name>    - Remove a name
  GET    /api/spin            - Randomly select a name
  POST   /api/reset           - Reset to initial names

MEMORY GAME endpoints:
  POST   /api/memory/new      - Start a new game
  GET    /api/memory/state    - Get current game state
  POST   /api/memory/flip     - Flip a card (body: {'cardId': 0})
  POST   /api/memory/reset    - Reset flipped cards
==================================================
 * Running on http://127.0.0.1:5000
```

**Keep this terminal open!** The backend server needs to keep running.

## Step 3: Start the React Frontend

Open a **new terminal** (keep the backend running in the first one) and navigate to your project root:

```bash
# From project root
npm run dev
```

The React app will start on `http://localhost:5173` (or similar port).

## Step 4: Configure Frontend to Connect to Backend

In your React component, make sure the API URL points to your Flask backend:

```typescript
const API_URL = 'http://localhost:5000/api';
```

## Step 5: Test the Connection

1. Open your React app in the browser: `http://localhost:5173`
2. Navigate to your mini games page (`/minigame`)
3. Try adding a name, spinning the wheel, or playing the memory game

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console, make sure `flask-cors` is installed and the backend has:

```python
from flask_cors import CORS
CORS(app)  # Enable CORS for all routes
```

### Connection Refused

- Make sure the Flask backend is running on port 5000
- Check that the API_URL in your frontend matches the backend URL
- Try accessing `http://localhost:5000/api/names` directly in your browser

### Port Already in Use

If port 5000 is already in use, you can change it in `backend/app.py`:

```python
app.run(debug=True, port=5001)  # Use a different port
```

Then update your frontend API_URL accordingly.

## Running Both Servers in One Command (Optional)

You can use a tool like `concurrently` to run both servers at once:

```bash
npm install --save-dev concurrently
```

Then add to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "dev:full": "concurrently \"npm run dev\" \"cd backend && python app.py\""
  }
}
```

Run with:
```bash
npm run dev:full
```

