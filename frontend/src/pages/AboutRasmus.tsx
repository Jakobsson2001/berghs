import { Container, Box, Typography } from '@mui/material';
import SEO from '../components/SEO';

const AboutRasmus = () => {
  return (
    <>
      <SEO
        title="About Rasmus | Berghs Class"
        description="Learn more about Rasmus and the Berghs Class web development course."
        path="/about-rasmus"
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
          About
        </Typography>
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
          Rasmus
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
          Learn more about Rasmus.
        </Typography>
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
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          About Rasmus
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          This is a placeholder page about Rasmus. Add your content here.
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default AboutRasmus;


