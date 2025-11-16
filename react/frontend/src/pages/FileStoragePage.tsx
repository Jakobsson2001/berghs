import { Container, Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const FileStoragePage = () => {
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
              File & Image Management
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              File Storage Guide
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn where and how to store images and files in your web projects. From static assets in the frontend to user uploads handled by the backend.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="fileGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#fileGradient)" opacity="0.18" />
              <rect x="40" y="40" width="60" height="80" rx="4" fill="#a78bfa" opacity="0.9" />
              <rect x="120" y="60" width="60" height="80" rx="4" fill="#60a5fa" opacity="0.85" />
              <rect x="200" y="50" width="50" height="70" rx="4" fill="#34d399" opacity="0.8" />
              <circle cx="70" cy="140" r="8" fill="#fbbf24" opacity="0.9" />
              <circle cx="150" cy="160" r="8" fill="#f59e0b" opacity="0.9" />
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
        <Box sx={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(59,130,246,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            📁 Static files go in the frontend. User uploads go through the backend. No database needed!
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Overview: When to Use Which Method
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          There are three main ways to store files in web applications. The best choice depends on whether files are static (never change) or dynamic (user uploads):
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, my: 3 }}>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.10), rgba(139,92,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>📂</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Frontend Public Folder
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
              For static files: logos, icons, backgrounds, PDFs that never change.
            </Typography>
          </Paper>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>💾</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Backend File System
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
              For user uploads: profile pictures, blog images, documents that users submit.
            </Typography>
          </Paper>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>☁️</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Cloud Storage
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
              For production: automatic optimization, CDN delivery, and scaling.
            </Typography>
          </Paper>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Method 1: Frontend Public Folder (For Static Files)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For static files that never change (logos, icons, backgrounds, PDFs), put them directly in your frontend's <code>public/</code> folder. These files are served directly by your frontend server.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Example Structure
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`frontend/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   └── hero-bg.jpg
│   └── documents/
│       └── resume.pdf
└── src/
    └── App.tsx`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            Use in your HTML/React: <code>&lt;img src="/images/logo.png" alt="Logo" /&gt;</code> or <code>&lt;a href="/documents/resume.pdf"&gt;Download Resume&lt;/a&gt;</code>
          </Typography>
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
            ✅ When to Use Public Folder
          </Typography>
          <List sx={{ m: '8px 0 0 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Static images (logos, icons, backgrounds)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="PDFs, documents that don't change" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Files that are part of your frontend build" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Files that are the same for all users" />
            </ListItem>
          </List>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Method 2: Backend File System (For User Uploads)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For files that users upload (profile pictures, blog post images, documents), store them on your backend's file system. This gives you control over security, validation, and processing.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Why Use Backend File System?
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>✅ <strong>Security</strong> — Validate file types, sizes, and scan for malware before saving</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>✅ <strong>Control</strong> — Process files (resize images, compress PDFs) before serving</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>✅ <strong>Organization</strong> — Keep user uploads separate from static assets</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>✅ <strong>No Database Needed</strong> — Files are stored on disk, metadata can be in memory or a simple JSON file</></>} />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Complete Flask File Upload Example
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, request, send_from_directory, jsonify
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'pdf'}
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if file and allowed_file(file.filename):
        # Secure the filename (prevent directory traversal attacks)
        filename = secure_filename(file.filename)
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        
        # Return URL where the file can be accessed
        return jsonify({
            'ok': True,
            'url': f'/uploads/{filename}',
            'filename': filename
        })
    
    return jsonify({'error': 'File type not allowed'}), 400

@app.route('/uploads/<filename>')
def serve_file(filename):
    # Serve uploaded files
    return send_from_directory(UPLOAD_FOLDER, filename)`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            Frontend code: <code>{`const formData = new FormData(); formData.append('file', fileInput.files[0]); fetch('/api/upload', { method: 'POST', body: formData })`}</code>
          </Typography>
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
            💡 File Organization Tips
          </Typography>
          <List sx={{ m: '8px 0 0 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Organize by date: <code>uploads/2024/01/image.jpg</code>" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Organize by type: <code>uploads/images/</code> and <code>uploads/documents/</code>" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Use unique filenames: Add timestamps or UUIDs to prevent overwrites" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Store metadata in memory or a simple JSON file (no database needed!)" />
            </ListItem>
          </List>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Method 3: Object Storage / Cloud Storage (Production Best Practice)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For production apps, use <strong>object storage</strong> services like <strong>Cloudinary</strong> (images), <strong>AWS S3</strong> (any files), or <strong>Cloudflare Images</strong>. Object storage stores files as "objects" in the cloud rather than on your server's file system. They handle optimization, CDN delivery, and scaling automatically.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Local File System vs Object Storage
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, mt: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '16px', mb: 1, color: 'var(--accent)' }}>
                📁 Local File System
              </Typography>
              <List sx={{ m: '8px 0', pl: 2.5 }}>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="Files stored on your server's hard drive" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Simple setup, no external service needed" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ No additional costs" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Limited by server storage space" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ No automatic backups" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Slower for users far from your server" />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '16px', mb: 1, color: 'var(--accent)' }}>
                ☁️ Object Storage (Cloud)
              </Typography>
              <List sx={{ m: '8px 0', pl: 2.5 }}>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="Files stored in cloud &quot;buckets&quot; (like folders)" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Unlimited storage (scales automatically)" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Automatic backups and redundancy" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ CDN delivery (fast worldwide)" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Built-in image optimization" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Costs money (usually pay per GB stored/transferred)" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Popular Object Storage Services
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Cloudinary</strong> — Best for images. Automatic optimization, transformations, and CDN. Free tier available.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>AWS S3</strong> — Industry standard for any file type. Very reliable, integrates with other AWS services.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Cloudflare Images</strong> — Fast, affordable image storage with automatic optimization.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Supabase Storage</strong> — Open-source alternative, good free tier, easy to use.</>} />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Example: Uploading to Cloudinary (Python/Flask)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            Here's how to upload an image to Cloudinary from your backend:
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, request, jsonify
import cloudinary
import cloudinary.uploader
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Configure Cloudinary (get these from cloudinary.com dashboard)
cloudinary.config(
    cloud_name=os.getenv('CLOUDINARY_CLOUD_NAME'),
    api_key=os.getenv('CLOUDINARY_API_KEY'),
    api_secret=os.getenv('CLOUDINARY_API_SECRET')
)

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    try:
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(
            file,
            folder='uploads',  # Optional: organize files in folders
            transformation=[
                {'width': 800, 'height': 600, 'crop': 'limit'},  # Resize
                {'quality': 'auto'},  # Auto optimize quality
            ]
        )
        
        # result['secure_url'] is the CDN URL you can use in your frontend
        return jsonify({
            'ok': True,
            'url': result['secure_url'],
            'public_id': result['public_id']
        })
    except Exception as e:
        print(f'Upload error: {e}')
        return jsonify({'error': 'Failed to upload image'}), 500`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            <strong>Install:</strong> <code>pip install cloudinary</code><br />
            <strong>Note:</strong> Cloudinary automatically optimizes images, generates thumbnails, and serves them via CDN. The URL returned can be used directly in your frontend <code>&lt;img&gt;</code> tags.
          </Typography>
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
            📝 Quick Decision Guide
          </Typography>
          <List sx={{ m: '8px 0 0 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><><strong>Static files (logo, icons, PDFs):</strong> → <code>public/</code> folder in frontend</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><><strong>User uploads (profile pics, blog images):</strong> → Backend file system (development) or cloud storage (production)</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><><strong>Production apps with many files:</strong> → Cloud storage (Cloudinary for images, S3 for any files)</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><><strong>No database needed:</strong> Files are stored on disk/cloud, metadata can be in memory or JSON</></>} />
            </ListItem>
          </List>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Static files</strong> (logos, icons, PDFs) → Store in <code>frontend/public/</code> folder</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>User uploads</strong> (profile pics, blog images) → Store on backend file system or cloud storage</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Production apps</strong> → Use cloud storage (Cloudinary, S3) for optimization and scaling</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>No database required</strong> — Files are stored on disk/cloud, metadata can be in memory or JSON</>} />
          </ListItem>
        </List>

        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            my: 3,
          }}
        >
          <Typography variant="body1" sx={{ mb: 0, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>Remember:</strong> Static files belong in the frontend. User uploads belong in the backend. Both approaches work without a database!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default FileStoragePage;

