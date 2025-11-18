import { Link } from 'react-router-dom';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';

const Home = () => {
  const cards = [
    { href: '/html', title: 'HTML', description: 'Structure content with semantic markup and accessible patterns.' },
    { href: '/css', title: 'CSS', description: 'Style your pages with responsive, modern layouts.' },
    { href: '/javascript', title: 'JavaScript', description: 'Add interactivity and dynamic behavior using vanilla JS.' },
    { href: '/backend', title: 'Backend', description: 'APIs, secrets protection, and connecting to external services.' },
    { href: '/seo', title: 'SEO & SSR', description: 'Search engine optimization and server-side rendering explained for beginners.' },
    { href: '/hosting-domain', title: 'Hosting & Domain', description: 'Connect your custom domain to your hosted application, configure DNS records, and understand hosting options.' },
    { href: '/ai-ml', title: 'AI & ML', description: 'Open-source models, Hugging Face, datasets, and OpenAI API integration.' },
    { href: '/resources', title: 'Resources', description: 'CMS and email service recommendations for your projects.' },
    { href: '/minigame', title: '🎮 Mini Games', description: 'Interactive games: Spin the Wheel and Memory Game connecting React frontend to Flask backend (no database!).' },
    { href: '/git', title: 'Git', description: 'Version control fundamentals and everyday workflows.' },
    { href: '/startup-journey', title: 'Startup Journey', description: 'Learn the fundamentals of building a startup from idea to execution, based on Sam Altman\'s Startup Playbook.' },
    { href: '/finalproject', title: 'Final Project', description: 'Bringing it all together — build your final project.' },
  ];

  return (
    <Container maxWidth="lg" sx={{ px: 2 }}>
      <Box className="hero" sx={{ py: 8, pb: 3 }}>
        <Box
          className="panel"
          sx={{
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderRadius: 5,
            p: 4,
            boxShadow: 'var(--shadow)',
            mb: 4,
          }}
        >
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
            Course Starter
          </Typography>
          <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
            Welcome to your class template
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--muted)', lineHeight: 1.7 }}>
            A clean, modern starting point with a shared navbar and four subpages for your curriculum: HTML, CSS, JavaScript, and Git.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2,
            mb: 4,
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.href}
              component={Link}
              to={card.href}
              sx={{
                textDecoration: 'none',
                background: 'linear-gradient(180deg, rgba(56,189,248,0.10), rgba(56,189,248,0.02))',
                border: '1px solid var(--border)',
                borderRadius: 3.5,
                p: 2.25,
                color: 'var(--text)',
                transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 'var(--shadow)',
                  borderColor: 'rgba(56,189,248,0.35)',
                },
              }}
            >
              <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                <Typography variant="h3" sx={{ fontSize: '18px', mb: 0.75, color: 'var(--text)' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--muted)', m: 0 }}>
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(217,70,239,0.10), rgba(59,130,246,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            mb: 4,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: '20px', mb: 1, color: 'var(--text)' }}>
            🎯 Don't Reinvent the Wheel
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--text)', lineHeight: 1.7, mb: 1.5 }}>
            Prefer CMS and email services for content and messaging. Use a thin backend to protect keys and validate input. <strong>Databases are optional.</strong>
          </Typography>
          <Box
            sx={{
              borderLeft: '3px solid var(--accent)',
              pl: 2,
              mb: 1.5,
            }}
          >
            <Typography variant="body2" sx={{ color: 'var(--text)', lineHeight: 1.7, fontWeight: 500, mb: 0.5 }}>
              Frontend = what users touch. Backend = where secrets live and decisions happen. CMS = editable content without code.
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: 'var(--muted)', lineHeight: 1.6, fontSize: '14px' }}>
            You need a backend when you must hide keys, validate input, or call services securely. For this course, build a thin backend (Next.js API routes or Flask) and integrate CMS/email — no database required.
          </Typography>
        </Box>

        <Box component="figure" sx={{ m: 0, mb: 4 }}>
          <img src="/assets/Neda.png" alt="Portrait of Neda" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
        </Box>
      </Box>

      <Box component="section" sx={{ mb: 4 }}>
        <Box component="figure" sx={{ m: 0 }}>
          <img src="/assets/Neda.HEIC" alt="Portrait of Neda" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
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
        <Typography variant="h2" sx={{ fontSize: '28px', mt: 0, mb: 2, color: 'var(--text)' }}>
          How to use this template
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Use the navbar to navigate the four core topics.</li>
          <li>Replace the placeholder content on each subpage with your lessons.</li>
          <li>Extend styles in <code>assets/styles.css</code> and scripts in <code>assets/script.js</code>.</li>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;


