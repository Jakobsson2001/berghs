# Backend Security Configuration

This document explains how to secure your Flask backend to prevent unauthorized access.

## CORS Configuration

The backend is configured to only accept requests from specific allowed origins. This prevents other websites from making requests to your API.

### How It Works

1. **Development**: Automatically allows localhost origins (for local development)
2. **Production**: Requires setting `ALLOWED_ORIGINS` environment variable with your frontend URL(s)

### Setting Up Allowed Origins in Production

In your Render dashboard (or other hosting platform):

1. Go to your backend service
2. Navigate to **Environment** section
3. Add environment variable:
   - **Key**: `ALLOWED_ORIGINS`
   - **Value**: Your frontend URL(s), comma-separated if multiple
   
   Examples:
   - Single origin: `https://your-frontend.onrender.com`
   - Multiple origins: `https://your-frontend.onrender.com,https://www.yourdomain.com`
   - With www: `https://www.yourdomain.com,https://yourdomain.com`

4. Save and redeploy

### Default Allowed Origins (Development)

The following localhost origins are automatically allowed for development:
- `http://localhost:5173` (Vite default)
- `http://localhost:3000` (React default)
- `http://127.0.0.1:5173`
- `http://127.0.0.1:3000`

### Security Features

1. **CORS Protection**: Only requests from allowed origins are accepted
2. **Origin Header Validation**: Additional check on the Origin header for all requests
3. **403 Forbidden**: Requests from unauthorized origins are rejected with a 403 error

### Testing

To test that CORS is working:

```bash
# This should work (from allowed origin)
curl -H "Origin: https://your-frontend.onrender.com" \
     https://your-backend.onrender.com/api/names

# This should fail (from unauthorized origin)
curl -H "Origin: https://evil-site.com" \
     https://your-backend.onrender.com/api/names
```

### Important Notes

- **Always set `ALLOWED_ORIGINS` in production** - Without it, only localhost origins are allowed
- **Include both www and non-www versions** if your site supports both
- **Requests without Origin header** are currently allowed (useful for direct API testing, but you can make this stricter if needed)
- **CORS preflight requests** (OPTIONS) are automatically handled

### Making It Stricter (Optional)

If you want to reject all requests without an Origin header (even stricter security), you can modify `app.py`:

```python
@app.before_request
def check_origin():
    if request.method == 'OPTIONS':
        return None
    
    origin = request.headers.get('Origin')
    
    # Reject requests without Origin header
    if origin is None:
        return jsonify({'error': 'Origin header required'}), 403
    
    if origin not in all_allowed_origins:
        return jsonify({'error': 'Origin not allowed'}), 403
    
    return None
```

