import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Typography, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [frontendMenuAnchor, setFrontendMenuAnchor] = useState<null | HTMLElement>(null);
  const [backendMenuAnchor, setBackendMenuAnchor] = useState<null | HTMLElement>(null);

  const frontendLinks = [
    { href: '/html', text: 'HTML' },
    { href: '/css', text: 'CSS' },
    { href: '/javascript', text: 'JavaScript' },
    { href: '/frameworks', text: 'Frameworks' },
    { href: '/file-storage', text: 'File Storage' },
  ];

  const backendLinks = [
    { href: '/backend', text: 'Backend & APIs' },
    { href: '/seo', text: 'SEO & SSR' },
    { href: '/file-storage', text: 'File Storage' },
    { href: '/resources', text: 'Resources (CMS & Email)' },
  ];

  const otherLinks = [
    { href: '/minigame', text: '🎮 Mini Games' },
    { href: '/blackjack', text: 'Blackjack' }, // New Blackjack subpage to reach the card game
    { href: '/git', text: 'Git' },
    { href: '/finalproject', text: 'Final Project' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isInSection = (links: typeof frontendLinks) => links.some(link => isActive(link.href));

  const handleFrontendMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFrontendMenuAnchor(event.currentTarget);
  };

  const handleBackendMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setBackendMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setFrontendMenuAnchor(null);
    setBackendMenuAnchor(null);
  };

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
          {/* Frontend Dropdown */}
          <Button
            onClick={handleFrontendMenuOpen}
            sx={{
              color: isInSection(frontendLinks) ? 'var(--text)' : 'var(--muted)',
              backgroundColor: isInSection(frontendLinks) ? 'rgba(2,6,23,0.06)' : 'transparent',
              borderRadius: '999px',
              px: 1.5,
              py: 1,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(2,6,23,0.06)',
              },
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            Frontend
          </Button>
          <Menu
            anchorEl={frontendMenuAnchor}
            open={Boolean(frontendMenuAnchor)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {frontendLinks.map((link) => (
              <MenuItem
                key={link.href}
                component={Link}
                to={link.href}
                onClick={handleMenuClose}
                selected={isActive(link.href)}
                sx={{
                  color: isActive(link.href) ? 'var(--accent)' : 'var(--text)',
                  fontWeight: isActive(link.href) ? 600 : 400,
                }}
              >
                {link.text}
              </MenuItem>
            ))}
          </Menu>

          {/* Backend Dropdown */}
          <Button
            onClick={handleBackendMenuOpen}
            sx={{
              color: isInSection(backendLinks) ? 'var(--text)' : 'var(--muted)',
              backgroundColor: isInSection(backendLinks) ? 'rgba(2,6,23,0.06)' : 'transparent',
              borderRadius: '999px',
              px: 1.5,
              py: 1,
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'rgba(2,6,23,0.06)',
              },
            }}
            endIcon={<ArrowDropDownIcon />}
          >
            Backend
          </Button>
          <Menu
            anchorEl={backendMenuAnchor}
            open={Boolean(backendMenuAnchor)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          >
            {backendLinks.map((link) => (
              <MenuItem
                key={link.href}
                component={Link}
                to={link.href}
                onClick={handleMenuClose}
                selected={isActive(link.href)}
                sx={{
                  color: isActive(link.href) ? 'var(--accent)' : 'var(--text)',
                  fontWeight: isActive(link.href) ? 600 : 400,
                }}
              >
                {link.text}
              </MenuItem>
            ))}
          </Menu>

          {/* Other Links */}
          {otherLinks.map((link) => (
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
          <Typography variant="overline" sx={{ px: 1.5, py: 0.5, color: 'var(--muted)', fontSize: '11px', fontWeight: 700 }}>
            FRONTEND
          </Typography>
          {frontendLinks.map((link) => (
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
          <Typography variant="overline" sx={{ px: 1.5, py: 0.5, mt: 1, color: 'var(--muted)', fontSize: '11px', fontWeight: 700 }}>
            BACKEND
          </Typography>
          {backendLinks.map((link) => (
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
          <Typography variant="overline" sx={{ px: 1.5, py: 0.5, mt: 1, color: 'var(--muted)', fontSize: '11px', fontWeight: 700 }}>
            OTHER
          </Typography>
          {otherLinks.map((link) => (
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


