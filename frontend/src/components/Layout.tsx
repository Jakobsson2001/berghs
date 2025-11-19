import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Skip to main content link for keyboard navigation (WCAG 2.2) */}
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: 'absolute',
          top: '-40px',
          left: 0,
          background: 'var(--accent)',
          color: '#ffffff',
          padding: '8px 16px',
          textDecoration: 'none',
          zIndex: 1000,
          '&:focus': {
            top: 0,
          },
        }}
      >
        Skip to main content
      </Box>
      <Header />
      <Box component="main" id="main-content" sx={{ flex: 1, py: 4 }} tabIndex={-1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;


