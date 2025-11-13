import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { AppBar, Toolbar, Box, Button, IconButton, Typography, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/html', text: 'HTML' },
    { href: '/css', text: 'CSS' },
    { href: '/javascript', text: 'JavaScript' },
    { href: '/frameworks', text: 'Frameworks' },
    { href: '/backend', text: 'Backend' },
    { href: '/resources', text: 'Resources' },
    { href: '/spin-the-wheel', text: '🎡 Spin Wheel' },
    { href: '/git', text: 'Git' },
    { href: '/finalproject', text: 'Final Project' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'rgba(255,255,255,0.86)',
        backdropFilter: 'saturate(120%) blur(6px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ maxWidth: '1080px', width: '100%', mx: 'auto', px: 2, justifyContent: 'space-between' }}>
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <Badge
            sx={{
              width: 28,
              height: 28,
              borderRadius: 2,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-strong))',
              color: '#ffffff',
              display: 'inline-grid',
              placeItems: 'center',
              fontWeight: 800,
              boxShadow: 'var(--shadow)',
            }}
          >
            B
          </Badge>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700, color: 'var(--text)', letterSpacing: '0.2px' }}>
            Berghs Class
          </Typography>
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              to={link.href}
              sx={{
                color: isActive(link.href) ? 'var(--text)' : 'var(--muted)',
                backgroundColor: isActive(link.href) ? 'rgba(2,6,23,0.06)' : 'transparent',
                borderRadius: '999px',
                px: 1.5,
                py: 1,
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(2,6,23,0.06)',
                },
              }}
            >
              {link.text}
            </Button>
          ))}
        </Box>

        <IconButton
          sx={{ display: { xs: 'flex', md: 'none' }, color: 'var(--text)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {mobileOpen && (
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', p: 2, gap: 1 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              sx={{
                color: isActive(link.href) ? 'var(--text)' : 'var(--muted)',
                backgroundColor: isActive(link.href) ? 'rgba(2,6,23,0.06)' : 'transparent',
                borderRadius: '999px',
                px: 1.5,
                py: 1,
                fontWeight: 600,
                textTransform: 'none',
                justifyContent: 'flex-start',
              }}
            >
              {link.text}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;


