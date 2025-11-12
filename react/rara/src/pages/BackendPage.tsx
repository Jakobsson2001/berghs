import { Container, Box, Typography, Paper, Link as MuiLink, Button } from '@mui/material';

const BackendPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: 2 }}>
      <Box
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 4,
          boxShadow: 'var(--shadow)',
          mb: 4,
          mt: 4,
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 3, alignItems: 'center' }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                fontSize: '12px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                mb: 1,
              }}
            >
              Backend Fundamentals
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              Backend & Databases
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn how to store data, build APIs, and connect your frontend to a backend. From databases to Python servers, explore the tools that power modern web applications.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
              <Button variant="contained" component="a" href="#installation">
                Get Started
              </Button>
              <Button variant="outlined" component="a" href="#databases">
                Learn More
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#g3)" opacity="0.18" />
              <circle cx="70" cy="120" r="34" fill="#34d399" opacity="0.9" />
              <circle cx="160" cy="80" r="46" fill="#60a5fa" opacity="0.85" />
              <rect x="110" y="120" width="90" height="28" rx="8" fill="#4ade80" opacity="0.8" />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box
        className="prose"
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 5,
          boxShadow: 'var(--shadow)',
        }}
      >
        <Box sx={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(59,130,246,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            💡 The backend is where your data lives and your business logic runs — the engine behind every interactive website.
          </Typography>
        </Box>

        <Typography id="what-is-backend" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is a Backend?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Think of a website like a restaurant. The <strong>frontend</strong> is what customers see — the menu, the dining room, the plates. The <strong>backend</strong> is the kitchen — where orders are processed, ingredients are stored, and food is prepared. Customers don't see the kitchen, but it's essential for the restaurant to function.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          In web development, the backend handles:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><strong>Storing data</strong> — User accounts, posts, products, anything that needs to be saved</li>
          <li><strong>Processing requests</strong> — When a user submits a form or clicks a button, the backend decides what to do</li>
          <li><strong>Security</strong> — Protecting sensitive information and validating user actions</li>
          <li><strong>Business logic</strong> — Calculations, validations, and rules that make your app work</li>
        </Box>

        <Typography id="installation" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Backend Installation Guide
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Before you can start building backends, you need to set up your development environment. This guide covers installing Python (for Flask/FastAPI) and setting up databases.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Installing Python (Recommended for Beginners)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Python</strong> is an excellent choice for backend development. It comes pre-installed on macOS, but you may need to install or update it on Windows.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            📱 macOS (MacBook)
          </Typography>
          <Box component="ol" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>
              Python 3 is usually pre-installed. Check by opening <strong>Terminal</strong> and running:
              <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
                <code style={{ color: '#bae6fd' }}>python3 --version</code>
              </Paper>
            </li>
            <li>
              If Python is not installed or you want the latest version:
              <Box component="ul" sx={{ m: '8px 0', pl: 2.5 }}>
                <li>Visit <MuiLink href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>python.org/downloads</MuiLink></li>
                <li>Download the latest Python 3.x version for macOS</li>
                <li>Run the installer and follow the wizard</li>
                <li>Make sure to check "Add Python to PATH" if the option appears</li>
              </Box>
            </li>
          </Box>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            🪟 Windows
          </Typography>
          <Box component="ol" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>Visit <MuiLink href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>python.org/downloads</MuiLink></li>
            <li>Download the latest Python 3.x version for Windows</li>
            <li>Run the downloaded <code>.exe</code> installer</li>
            <li><strong>Important:</strong> Check the box "Add Python to PATH" at the bottom of the installer</li>
            <li>Click "Install Now" and wait for installation to complete</li>
            <li>Open <strong>Command Prompt</strong> or <strong>PowerShell</strong></li>
            <li>Verify the installation:
              <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
                <code style={{ color: '#bae6fd' }}>{`python --version
pip --version`}</code>
              </Paper>
            </li>
          </Box>
        </Paper>

        <Typography id="databases" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Choosing a Database
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          A <strong>database</strong> is like a digital filing cabinet where you store all your app's data. When you create a user account, post a comment, or save a product, that information goes into a database.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Recommended Databases: MongoDB and SQLite
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For this class, we recommend <strong>MongoDB</strong> or <strong>SQLite</strong>. Both are beginner-friendly and work great with Python.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.10), rgba(168,85,247,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🍃</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75 }}>
              MongoDB
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
              Recommended for learning and real projects
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, fontSize: '14px' }}>
              <li>NoSQL — flexible document storage</li>
              <li>Works great with Python</li>
              <li>Free cloud tier (MongoDB Atlas)</li>
              <li>Intuitive JSON-like data structure</li>
              <li>Great for handling files, images, and binary data</li>
            </Box>
          </Paper>

          <Paper sx={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🗄️</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75 }}>
              SQLite
            </Typography>
            <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
              Perfect for small projects and learning
            </Typography>
            <Box component="ul" sx={{ m: 0, pl: 2.5, fontSize: '14px' }}>
              <li>No server needed — file-based</li>
              <li>Built into Python</li>
              <li>Great for prototypes</li>
              <li>Zero configuration required</li>
            </Box>
          </Paper>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Backend Options: Python (Recommended)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Your backend needs a programming language and a framework to handle requests and connect to your database. For this class, we'll focus on <strong>Python</strong>, which is beginner-friendly and powerful.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Python (Recommended for Beginners)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Python</strong> is an excellent choice for learning backend development. It's readable, beginner-friendly, and has powerful frameworks.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Why Python?
          </Typography>
          <Box component="ul" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>✅ Easy to read and write — looks almost like English</li>
            <li>✅ Huge community and excellent documentation</li>
            <li>✅ Great libraries for databases, APIs, and more</li>
            <li>✅ Used by major companies (Instagram, Spotify, Netflix)</li>
          </Box>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            Popular Python Frameworks
          </Typography>
          <Box component="ul" sx={{ m: '12px 0', pl: 2.5 }}>
            <li><strong>Flask</strong> — Simple and lightweight, perfect for learning</li>
            <li><strong>FastAPI</strong> — Modern, fast, with automatic API documentation</li>
            <li><strong>Django</strong> — Full-featured, includes admin panel and ORM</li>
          </Box>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            Simple Python Backend Example
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
        {'id': 1, 'name': 'Alice'},
        {'id': 2, 'name': 'Bob'}
    ]
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)`}</code>
          </Paper>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Connecting Frontend to Backend
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          There are several ways to connect your frontend (React, HTML, etc.) to your backend. The method you choose depends on your security needs and project complexity.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Method 1: REST API (Most Common)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>REST API</strong> is the standard way to connect frontend and backend. Your frontend makes HTTP requests (GET, POST, PUT, DELETE) to your backend, which responds with data (usually JSON).
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            How It Works
          </Typography>
          <Box component="ol" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>Frontend sends a request: <code>fetch('https://api.example.com/users')</code></li>
            <li>Backend processes the request and queries the database</li>
            <li>Backend sends back JSON data: <code>{'{ users: [...] }'}</code></li>
            <li>Frontend receives the data and updates the UI</li>
          </Box>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Backend development involves choosing the right database, building APIs, and connecting them to your frontend. Here are the key takeaways:
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { emoji: '🍃', title: 'MongoDB', desc: 'Recommended for learning and real projects. Flexible NoSQL database that works great with Python and handles files, images, and binary data.' },
            { emoji: '🗄️', title: 'SQLite', desc: 'Perfect for learning and small projects. File-based, zero setup, built into Python.' },
            { emoji: '🐍', title: 'Python Backend', desc: 'Recommended for beginners. Use Flask or FastAPI to build REST APIs that connect to your database.' },
            { emoji: '🔗', title: 'REST APIs', desc: 'Standard way to connect frontend and backend. Frontend makes HTTP requests, backend responds with JSON.' },
          ].map((item) => (
            <Paper key={item.title} sx={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.10), rgba(168,85,247,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
              <Typography sx={{ fontSize: '32px', mb: 1 }}>{item.emoji}</Typography>
              <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default BackendPage;

