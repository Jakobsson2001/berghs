# Testing the Backend with cURL

cURL is a command-line tool for making HTTP requests. It's perfect for testing your backend API without needing a frontend!

## Install cURL

- **macOS/Linux:** Usually pre-installed. Check with `curl --version`
- **Windows:** Download from [curl.se](https://curl.se/windows/) or use Git Bash (includes curl)

## Start the Backend First

Make sure your Flask backend is running:
```bash
cd backend
python app.py
```

## cURL Examples

### Spin the Wheel Endpoints

#### 1. Get All Names (GET)

```bash
curl http://localhost:5000/api/names
```

**Response:**
```json
{
  "count": 16,
  "names": [
    "Amanda Sandorov",
    "Elisabeth Toll",
    ...
  ]
}
```

**Pretty print (with jq):**
```bash
curl http://localhost:5000/api/names | jq
```

#### 2. Add a Name (POST)

```bash
curl -X POST http://localhost:5000/api/names \
  -H "Content-Type: application/json" \
  -d '{"name": "Test Person"}'
```

**Response:**
```json
{
  "count": 17,
  "message": "Added Test Person",
  "names": [...],
  "ok": true
}
```

**One-liner (Windows PowerShell):**
```powershell
curl -X POST http://localhost:5000/api/names -H "Content-Type: application/json" -d '{\"name\": \"Test Person\"}'
```

#### 3. Remove a Name (DELETE)

```bash
curl -X DELETE "http://localhost:5000/api/names/Test%20Person"
```

Or with URL encoding:
```bash
curl -X DELETE "http://localhost:5000/api/names/Test Person"
```

**Response:**
```json
{
  "count": 16,
  "message": "Removed Test Person",
  "names": [...],
  "ok": true
}
```

#### 4. Spin the Wheel (GET)

```bash
curl http://localhost:5000/api/spin
```

**Response:**
```json
{
  "ok": true,
  "remaining_count": 16,
  "selected": "Neda Sadejou"
}
```

#### 5. Reset Names (POST)

```bash
curl -X POST http://localhost:5000/api/reset
```

**Response:**
```json
{
  "count": 16,
  "message": "Reset to initial names",
  "names": [...],
  "ok": true
}
```

### Memory Game Endpoints

#### 1. Start New Game (POST)

```bash
curl -X POST http://localhost:5000/api/memory/new
```

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

#### 2. Get Game State (GET)

```bash
curl http://localhost:5000/api/memory/state
```

**Response:**
```json
{
  "ok": true,
  "cards": [...],
  "matches": 0,
  "moves": 0
}
```

#### 3. Flip a Card (POST)

```bash
curl -X POST http://localhost:5000/api/memory/flip \
  -H "Content-Type: application/json" \
  -d '{"cardId": 0}'
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

#### 4. Reset Flipped Cards (POST)

```bash
curl -X POST http://localhost:5000/api/memory/reset
```

**Response:**
```json
{
  "ok": true,
  "cards": [...],
  "matches": 0,
  "moves": 1
}
```

## Testing Workflow Example

Here's a complete workflow to test all endpoints:

```bash
# Spin the Wheel
# 1. Get initial names
curl http://localhost:5000/api/names

# 2. Add a new name
curl -X POST http://localhost:5000/api/names \
  -H "Content-Type: application/json" \
  -d '{"name": "New Student"}'

# 3. Verify it was added
curl http://localhost:5000/api/names

# 4. Spin the wheel
curl http://localhost:5000/api/spin

# 5. Remove the name we added
curl -X DELETE "http://localhost:5000/api/names/New%20Student"

# Memory Game
# 6. Start a new memory game
curl -X POST http://localhost:5000/api/memory/new

# 7. Get game state
curl http://localhost:5000/api/memory/state

# 8. Flip a card
curl -X POST http://localhost:5000/api/memory/flip \
  -H "Content-Type: application/json" \
  -d '{"cardId": 0}'
```

## Using cURL in VS Code Terminal

You can run these commands directly in VS Code's integrated terminal:

1. Open terminal: `` Ctrl+` `` (or View → Terminal)
2. Make sure backend is running
3. Run any curl command above

## Alternative: Use Postman or Thunder Client

If you prefer a GUI:
- **Postman:** [postman.com](https://www.postman.com/)
- **Thunder Client:** VS Code extension (search in Extensions)

## Why Use cURL?

- ✅ Test your backend without building a frontend
- ✅ Quick debugging - see exact API responses
- ✅ Learn HTTP methods (GET, POST, DELETE)
- ✅ Works in any terminal
- ✅ Great for documentation and examples

## Common cURL Flags

- `-X` or `--request`: Specify HTTP method (GET, POST, DELETE)
- `-H` or `--header`: Add headers (like Content-Type)
- `-d` or `--data`: Send data in request body
- `-v` or `--verbose`: Show detailed request/response info
- `-i` or `--include`: Include response headers in output

**Example with verbose output:**
```bash
curl -v -X POST http://localhost:5000/api/names \
  -H "Content-Type: application/json" \
  -d '{"name": "Test"}'
```

