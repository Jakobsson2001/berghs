import React from 'react';
import { Container, Box, Typography, Paper, Link as MuiLink, Button, List, ListItem, ListItemText } from '@mui/material';

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
              Backend & APIs
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn how to build APIs, protect secrets, and connect your frontend to external services. From CMS integration to email services, explore the tools that power modern web applications.
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
            💡 The backend is where secrets are protected and external services are called — the engine behind every interactive website.
          </Typography>
        </Box>

        <Typography id="what-is-backend" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is a Backend? (Simple Analogies)
        </Typography>
        
        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Body Analogy
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Think of web development like a human body:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>HTML</strong> = bones (structure)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>CSS</strong> = skin/clothes (appearance)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>JavaScript</strong> = nerves/muscles (interactivity)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Backend</strong> = brain + spinal cord (decides, protects secrets, talks to other organs/APIs)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Database</strong> = long-term memory (remembers facts over time) — <em>optional for this course</em></>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>CMS</strong> = notebook the person carries (easy, non-developer way to edit content without touching code)</>} />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Restaurant Analogy
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Or think of it like a restaurant:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Frontend</strong> = waiter + menu (what users see/click)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Backend</strong> = kitchen (validates orders, combines ingredients, talks to suppliers/APIs)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Database</strong> = pantry/inventory (persistent stock) — <em>optional for this course</em></>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>CMS</strong> = menu manager (change descriptions/prices without disturbing the kitchen)</>} />
          </ListItem>
        </List>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          When Do You Actually Need a Backend?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          You need a backend when you must:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Keep secrets safe</strong> — API keys for email, payments, analytics → must live on server (using <code>.env</code> files)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Validate & protect</strong> — Spam filters, rate limits, input checks</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Aggregate/shape data</strong> — Call external APIs, clean/reshape responses for the UI</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Handle actions</strong> — Send emails, subscribe to newsletters, file uploads</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Server-rendering or SEO needs</strong> — Optional in our course, but common in real projects</>} />
          </ListItem>
        </List>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            ✅ Important: No database is required for any of the above in this course.
          </Typography>
        </Box>

        <Typography id="installation" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Backend Installation Guide
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Before you can start building backends, you need to set up your development environment. This guide covers installing Python (for Flask/FastAPI) or Node.js (for Next.js API routes).
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
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText>
                Python 3 is usually pre-installed. Check by opening <strong>Terminal</strong> and running:
                <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
                  <code style={{ color: '#bae6fd' }}>python3 --version</code>
                </Paper>
              </ListItemText>
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText>
                If Python is not installed or you want the latest version:
                <List sx={{ m: '8px 0', pl: 2.5, listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item', pl: 0 }}>
                    <ListItemText primary="Visit " secondary={
                      <MuiLink href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>python.org/downloads</MuiLink>
                    } />
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: 0 }}>
                    <ListItemText primary="Download the latest Python 3.x version for macOS" />
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: 0 }}>
                    <ListItemText primary="Run the installer and follow the wizard" />
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: 0 }}>
                    <ListItemText primary='Make sure to check "Add Python to PATH" if the option appears' />
                  </ListItem>
                </List>
              </ListItemText>
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            🪟 Windows
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Visit " secondary={
                <MuiLink href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>python.org/downloads</MuiLink>
              } />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Download the latest Python 3.x version for Windows" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Run the downloaded <code>.exe</code> installer</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Important:</strong> Check the box "Add Python to PATH" at the bottom of the installer</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary='Click "Install Now" and wait for installation to complete' />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Open <strong>Command Prompt</strong> or <strong>PowerShell</strong></></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText>
                Verify the installation:
                <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
                  <code style={{ color: '#bae6fd' }}>{`python --version
pip --version`}</code>
                </Paper>
              </ListItemText>
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Examples: DB-Free Backend Use Cases
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Here are practical examples you can use in your final assignment (all database-free):
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Contact form</strong> → Frontend POST → <code>/api/contact</code> → SendGrid/Postmark/Mailgun (transactional email)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Newsletter subscribe</strong> → Frontend POST → <code>/api/subscribe</code> → Mailchimp/Brevo/ConvertKit/MailerLite</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Content feed via CMS</strong> → Frontend GET → <code>/api/posts</code> → Sanity/Contentful/Strapi (server route uses token)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Public API proxy</strong> → Frontend GET → <code>/api/weather?city=…</code> → server calls a public API and returns trimmed JSON</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Spin the wheel app</strong> → In-memory list (no DB!) → <code>/api/names</code>, <code>/api/spin</code> → Perfect learning example! See <code>backend/app.py</code> and <code>backend/games/</code></>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Webhook → rebuild hint</strong> (optional) → CMS calls your <code>/api/revalidate</code> after publishing to refresh your site cache</>} />
          </ListItem>
        </List>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 Don't Reinvent the Wheel
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            You <em>could</em> build your own email marketing system (like Mailchimp) or CMS with a backend and database. 
            But these services handle complex features like deliverability, spam compliance, templates, automation, permissions, and media storage. 
            It's usually not worth building these yourself — use existing services and focus on your unique value.
          </Typography>
        </Box>

        <Typography id="databases" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Databases (Optional – for the curious)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          A <strong>database</strong> is like a digital filing cabinet where you store all your app's data. When you create a user account, post a comment, or save a product, that information goes into a database.
        </Typography>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0 }}>
            💡 <strong>Note:</strong> Databases are <strong>optional</strong> and not required to pass this course. We mention them only for those who want to explore.
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          If you want to try a database later:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>SQLite</strong> (local) — file-based, zero setup, built into Python</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Postgres</strong> (Neon/Supabase for serverless) — powerful relational database</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>MongoDB Atlas</strong> — NoSQL, flexible document storage, free cloud tier</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Firebase</strong> — Google's real-time database and hosting platform</>} />
          </ListItem>
        </List>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Backend Options: Python (Recommended)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Your backend needs a programming language and a framework to handle requests and call external services. For this class, we'll focus on <strong>Python</strong> or <strong>Node.js</strong> (Next.js API routes), which are beginner-friendly and powerful.
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
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Easy to read and write — looks almost like English" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Huge community and excellent documentation" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Great libraries for databases, APIs, and more" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Used by major companies (Instagram, Spotify, Netflix)" />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            Popular Python Frameworks
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Flask</strong> — Simple and lightweight, perfect for learning</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>FastAPI</strong> — Modern, fast, with automatic API documentation</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Django</strong> — Full-featured, includes admin panel and ORM</>} />
            </ListItem>
          </List>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            Simple Python Backend Example
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, jsonify
import os
from dotenv import load_dotenv

load_dotenv()  # Load .env file

app = Flask(__name__)

@app.route('/api/contact', methods=['POST'])
def contact():
    # Get API key from environment
    api_key = os.getenv('SENDGRID_API_KEY')
    # Call email service...
    return jsonify({'ok': True})

if __name__ == '__main__':
    app.run(debug=True)`}</code>
          </Paper>

          <Typography variant="h4" sx={{ fontSize: '18px', mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            Node.js / Next.js API Routes
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            If you're using Next.js, you can create API routes directly in your React project:
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`// app/api/contact/route.ts
export async function POST(req: Request) {
  const { email, message } = await req.json();
  const apiKey = process.env.SENDGRID_API_KEY;
  // Call email service...
  return Response.json({ ok: true });
}`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            See example routes in <code>backend/examples/</code> for both Next.js and Flask implementations.
          </Typography>
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
          <strong>REST API</strong> is the standard way to connect frontend and backend. Your frontend makes HTTP requests (GET, POST, PUT, PATCH, DELETE) to your backend, which responds with data (usually JSON).
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            How It Works
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Frontend sends a request: <code>fetch('https://api.example.com/users')</code></></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Backend processes the request and calls external services (CMS, email, APIs)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Backend sends back JSON data: <code>{'{ users: [...] }'}</code></></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Frontend receives the data and updates the UI" />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          HTTP Methods (Verbs)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          HTTP methods tell the server <em>what action</em> you want to perform. Think of them as verbs in a sentence — they describe what you're doing with the data.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GET</strong> — Read/fetch data (like opening a book). <em>Example:</em> Get all users, get a blog post</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>POST</strong> — Create new data (like writing a new entry). <em>Example:</em> Submit a contact form, create a new user</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>PUT</strong> — Replace/update entire resource (like rewriting a whole page). <em>Example:</em> Update all user information</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>PATCH</strong> — Partially update data (like editing just one sentence). <em>Example:</em> Update only the user's email address</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>DELETE</strong> — Remove data (like deleting a page). <em>Example:</em> Delete a user account, remove a blog post</>} />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 PUT vs PATCH
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>PUT</strong> replaces the entire resource. If you update a user with PUT and only send the email, you might lose their name! 
            <strong>PATCH</strong> only updates the fields you send. For partial updates, PATCH is usually safer and more efficient.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          HTTP Status Codes
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Every HTTP response includes a <strong>status code</strong> — a number that tells you if the request succeeded or failed. Status codes are grouped by their first digit:
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Common Status Codes
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>200 OK</strong> — Success! The request worked perfectly</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>201 Created</strong> — Success! A new resource was created (common after POST)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>400 Bad Request</strong> — The request was malformed (missing data, wrong format)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>401 Unauthorized</strong> — You need to log in (authentication required)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>403 Forbidden</strong> — You're logged in, but don't have permission</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>404 Not Found</strong> — The resource doesn't exist (wrong URL)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>500 Internal Server Error</strong> — Something went wrong on the server (bug in backend code)</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="body1" sx={{ mb: 2, mt: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Status codes help you debug issues. If you see <code>404</code>, check your URL. If you see <code>500</code>, check your backend code. 
          For a complete list, see <MuiLink href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Wikipedia's HTTP status codes</MuiLink> or <MuiLink href="https://grandur.se/blogg/http-statuskoder/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Grandur's guide</MuiLink>.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          CORS (Cross-Origin Resource Sharing)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>CORS</strong> is a security feature that controls which websites can make requests to your backend. By default, browsers block requests from <code>localhost:3000</code> (your React app) to <code>localhost:5000</code> (your Flask backend) because they're different "origins" (different ports).
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            How to Enable CORS
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            In Flask, you enable CORS with one line:
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from any origin (fine for development)`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            In production, you'd restrict CORS to only your frontend domain for security. For development, allowing all origins is fine.
          </Typography>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          SEO & Server-Side Rendering (SSR)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>SEO</strong> (Search Engine Optimization) helps your website appear in Google search results. <strong>Server-Side Rendering (SSR)</strong> is a technique that can improve SEO by ensuring search engines can read your content.
        </Typography>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            📚 Learn More About SEO & SSR
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            For a complete guide on SEO, how search engines work, why SSR matters, and how backend architecture affects discoverability, see the <MuiLink href="/seo" sx={{ color: 'var(--accent)' }}>SEO & SSR page</MuiLink>.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Storing Files Without a Database
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          You don't need a database to store files! There are several ways to handle images and other files in your web application. The best approach depends on whether the files are static (never change) or dynamic (user uploads).
        </Typography>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            📚 Complete File Storage Guide
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            For a comprehensive guide covering all file storage methods (frontend public folder for static files, backend file system for user uploads, and cloud storage for production), see the dedicated <MuiLink href="/file-storage" sx={{ color: 'var(--accent)' }}>File Storage page</MuiLink>.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Backend development involves building APIs, protecting secrets, and connecting to external services. Here are the key takeaways:
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { emoji: '🔐', title: 'Protect Secrets', desc: 'Use .env files to store API keys. Never expose keys in frontend code. Backend keeps secrets safe on the server.' },
            { emoji: '📧', title: 'Email Services', desc: 'SendGrid, Postmark, Mailgun for transactional emails. Mailchimp, Brevo, ConvertKit for newsletters. All work without databases.' },
            { emoji: '📝', title: 'CMS Integration', desc: 'Sanity, Contentful, Strapi provide content APIs. Perfect for content engineers — edit content without touching code.' },
            { emoji: '🔗', title: 'HTTP Methods', desc: 'GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove). Status codes (200, 404, 500) tell you if requests succeeded.' },
            { emoji: '🌐', title: 'CORS & SSR', desc: 'CORS allows frontend-backend communication. SSR (Server-Side Rendering) improves SEO by sending complete HTML to search engines.' },
            { emoji: '🖼️', title: 'Image Storage', desc: 'Static images go in public/images/. User uploads go to backend file system or cloud storage (Cloudinary, S3) for security and scalability.' },
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
        <Typography variant="body1" sx={{ mb: 2, mt: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          For detailed CMS and email service recommendations, see the <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>Resources page</MuiLink>.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How to Teach It in 3 Lines
        </Typography>
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            my: 3,
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>1. Frontend = what users touch. Backend = where secrets live and decisions happen. CMS = editable content without code.</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>2. You need a backend when you must hide keys, validate input, or call services securely.</strong>
          </Typography>
          <Typography variant="body1" sx={{ mb: 0, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>3. For this course, build a thin backend (Next.js API routes or Flask) and integrate CMS/email — no DB required.</strong>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default BackendPage;

