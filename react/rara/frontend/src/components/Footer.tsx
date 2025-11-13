import { Box, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid var(--border)',
        color: 'var(--muted)',
        py: 5,
        mt: 6,
      }}
    >
      <Box sx={{ maxWidth: '1080px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          &copy; {currentYear} Berghs Class
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;


