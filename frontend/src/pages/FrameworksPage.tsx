import { Container, Box, Typography, Paper, Link as MuiLink, Button } from '@mui/material';
import SEO from '../components/SEO';

const FrameworksPage = () => {
  return (
    <>
      <SEO
        title="Web Frameworks Guide - React, Tailwind, MUI | Berghs Class"
        description="Learn modern web frameworks: React for UI components, Tailwind CSS for styling, and Material-UI (MUI) for design systems. Build faster with these powerful tools."
        path="/frameworks"
      />
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
              Next Steps
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              From Basics to Frameworks
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn how React, Tailwind, and MUI help you build faster by reusing proven patterns instead of starting from scratch.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
              <Button variant="contained" component="a" href="#installation">
                Get Started
              </Button>
              <Button variant="outlined" component="a" href="#react">
                Learn More
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#d946ef"/>
                  <stop offset="100%" stopColor="#38bdf8"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#g2)" opacity="0.18"/>
              <circle cx="70" cy="120" r="34" fill="#f0abfc" opacity="0.9"/>
              <circle cx="160" cy="80" r="46" fill="#60a5fa" opacity="0.85"/>
              <rect x="110" y="120" width="90" height="28" rx="8" fill="#f472b6" opacity="0.8"/>
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
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(217,70,239,0.08), rgba(56,189,248,0.08))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 2.5,
            mb: 3,
            textAlign: 'center',
          }}
        >
          <Typography sx={{ m: 0, fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            💡 Don't reinvent the wheel — build on what others have made better.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 0, mb: 2, color: 'var(--text)' }}>
          From Basics to Frameworks
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Once you've learned the fundamentals of HTML, CSS, and JavaScript, you might notice that writing everything from scratch
          becomes repetitive. Each new project needs navigation bars, layouts, buttons, and similar patterns. Developers quickly realized
          they were "reinventing the wheel" — building the same components again and again.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Why Use Frameworks?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Frameworks like <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>Material UI (MUI)</strong> solve this problem by providing
          reusable building blocks and consistent patterns. Instead of focusing on boilerplate code, you can focus on logic,
          interactivity, and design. These tools help you write clean, maintainable code faster — without starting over every time.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2,
            mb: 4,
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(180deg, rgba(56,189,248,0.10), rgba(56,189,248,0.02))',
              border: '1px solid var(--border)',
              borderRadius: 3.5,
              p: 2.25,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '32px', mb: 1 }}>⚛️</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75, color: 'var(--text)' }}>
              React
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', m: 0 }}>
              Component-based UI library
            </Typography>
          </Box>
          <Box
            sx={{
              background: 'linear-gradient(180deg, rgba(217,70,239,0.10), rgba(217,70,239,0.02))',
              border: '1px solid var(--border)',
              borderRadius: 3.5,
              p: 2.25,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🎨</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75, color: 'var(--text)' }}>
              Tailwind
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', m: 0 }}>
              Utility-first CSS framework
            </Typography>
          </Box>
          <Box
            sx={{
              background: 'linear-gradient(180deg, rgba(14,165,233,0.10), rgba(14,165,233,0.02))',
              border: '1px solid var(--border)',
              borderRadius: 3.5,
              p: 2.25,
              textAlign: 'center',
            }}
          >
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🧩</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75, color: 'var(--text)' }}>
              MUI
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', m: 0 }}>
              Pre-styled components
            </Typography>
          </Box>
        </Box>

        <Typography variant="h2" id="installation" sx={{ fontSize: '28px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Installation Guide
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Before you can start using React and other frameworks, you need to set up your development environment. This guide will walk you through installing the necessary tools on both <strong>macOS (MacBook)</strong> and <strong>Windows</strong>.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Step 1: Install Node.js and npm
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>npm</strong> (Node Package Manager) comes bundled with Node.js. It's the default package manager for JavaScript and allows you to install libraries and tools for your projects. <strong>npm is sufficient for this class</strong> — you don't need to install any additional package managers.
        </Typography>

        <Paper
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2.5,
            mb: 3,
          }}
        >
          <Typography variant="h4" sx={{ mt: 0, mb: 1.5, color: 'var(--accent)' }}>
            📱 macOS (MacBook)
          </Typography>
          <Box component="ol" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>Visit <MuiLink href="https://nodejs.org" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>nodejs.org</MuiLink></li>
            <li>Download the <strong>LTS (Long Term Support)</strong> version for macOS</li>
            <li>Open the downloaded <code>.pkg</code> file and follow the installation wizard</li>
            <li>Open <strong>Terminal</strong> (found in Applications → Utilities)</li>
            <li>Verify the installation by running:
              <Paper
                component="pre"
                sx={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  p: 1.5,
                  m: '8px 0',
                  overflow: 'auto',
                }}
              >
                <code style={{ color: '#bae6fd' }}>{`node --version
npm --version`}</code>
              </Paper>
              You should see version numbers for both commands.
            </li>
          </Box>

          <Typography variant="h4" sx={{ mt: 3, mb: 1.5, color: 'var(--accent)' }}>
            🪟 Windows
          </Typography>
          <Box component="ol" sx={{ m: '12px 0', pl: 2.5 }}>
            <li>Visit <MuiLink href="https://nodejs.org" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>nodejs.org</MuiLink></li>
            <li>Download the <strong>LTS (Long Term Support)</strong> version for Windows</li>
            <li>Run the downloaded <code>.msi</code> installer file</li>
            <li>Follow the installation wizard (accept the default settings)</li>
            <li>Open <strong>Command Prompt</strong> or <strong>PowerShell</strong> (search for "cmd" or "powershell" in the Start menu)</li>
            <li>Verify the installation by running:
              <Paper
                component="pre"
                sx={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  p: 1.5,
                  m: '8px 0',
                  overflow: 'auto',
                }}
              >
                <code style={{ color: '#bae6fd' }}>{`node --version
npm --version`}</code>
              </Paper>
              You should see version numbers for both commands.
            </li>
          </Box>
        </Paper>

        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          For more detailed information about React, frameworks, and build tools, see the full documentation in the original HTML version or visit the official React documentation.
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default FrameworksPage;

