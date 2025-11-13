import { Container, Box, Typography, Paper, Link as MuiLink } from '@mui/material';

const ResourcesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: 2 }}>
      <Box
        className="prose"
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 5,
          boxShadow: 'var(--shadow)',
          mt: 4,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          📚 Resources: CMS & Email Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted)', fontSize: '17px' }}>
          Recommended tools for content management and email integration — all database-free
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Content Management Systems (CMS)
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
          <Typography sx={{ m: 0, mb: 1, fontWeight: 600 }}>
            🎯 Why CMS is Perfect for Content Engineers
          </Typography>
          <Typography sx={{ m: 0 }}>
            CMS platforms are <strong>purely for content creation</strong> — a hot topic for content engineer classes! 
            They let you edit content, manage blog posts, update product descriptions, and change copy <strong>without touching code</strong>. 
            This is exactly what content engineers do: focus on creating and managing content while developers handle the technical infrastructure. 
            Headless CMS platforms provide APIs that your frontend can consume, making them perfect for modern web projects.
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Headless CMS platforms provide content APIs that your frontend can consume. No database setup required — the CMS handles storage for you.
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
            💡 Don't Reinvent the Wheel
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            You <em>could</em> build your own CMS with a backend and database — storing content, building admin panels, handling media uploads. 
            But it's usually not worth it. These platforms handle authentication, permissions, media storage, versioning, and more. 
            Focus on your content and let the CMS handle the infrastructure.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            {
              emoji: '🎨',
              title: 'Sanity',
              desc: 'Real-time collaborative editing studio, generous free tier. Great developer experience with structured content.',
              link: 'https://www.sanity.io',
            },
            {
              emoji: '✨',
              title: 'Contentful',
              desc: 'Polished UI, excellent roles and permissions. Great for teams managing content with clear workflows.',
              link: 'https://www.contentful.com',
            },
            {
              emoji: '🚀',
              title: 'Strapi',
              desc: 'Quick to prototype, Node-based, self-hosted or cloud. Perfect for trying CMS concepts — great for beginners!',
              link: 'https://strapi.io',
            },
            {
              emoji: '📰',
              title: 'Ghost',
              desc: 'Great for blog/newsletter publishing. Beautiful editor, built-in membership features, excellent for content creators.',
              link: 'https://ghost.org',
            },
            {
              emoji: '🌐',
              title: 'WordPress (Headless)',
              desc: 'Use familiar WP Admin with REST/GraphQL APIs to your React/Next.js app. Leverage existing WordPress knowledge.',
              link: 'https://wordpress.org',
            },
          ].map((item) => (
            <Paper
              key={item.title}
              sx={{
                background: 'linear-gradient(180deg, rgba(168,85,247,0.10), rgba(168,85,247,0.02))',
                border: '1px solid var(--border)',
                borderRadius: 3.5,
                p: 2.25,
              }}
            >
              <Typography sx={{ fontSize: '32px', mb: 1 }}>{item.emoji}</Typography>
              <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
                {item.desc}
              </Typography>
              <MuiLink href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
                Visit {item.title} →
              </MuiLink>
            </Paper>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Email Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Email services handle sending emails for you — transactional (contact forms, confirmations) or marketing (newsletters, campaigns). 
          All work without databases. Your backend just needs to call their APIs with your secret key (stored in <code>.env</code>).
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Marketing Email Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Perfect for newsletters, campaigns, and subscriber management:
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
            💡 Don't Reinvent the Wheel
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            You <em>could</em> build your own email marketing system with a backend and database — storing subscribers, managing lists, 
            sending campaigns, tracking opens/clicks. But services like <strong>Mailchimp</strong> handle deliverability, spam compliance, 
            beautiful templates, automation, analytics, and more. It's rarely worth building this yourself.
          </Typography>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            {
              emoji: '📬',
              title: 'Mailchimp',
              desc: 'Most popular, great free tier, excellent templates. Perfect for beginners starting with email marketing.',
              link: 'https://mailchimp.com',
            },
            {
              emoji: '📧',
              title: 'Brevo (Sendinblue)',
              desc: 'Generous free tier, good deliverability. Great alternative to Mailchimp with similar features.',
              link: 'https://www.brevo.com',
            },
            {
              emoji: '✉️',
              title: 'ConvertKit',
              desc: 'Built for creators, excellent automation. Great if you want to focus on content creator workflows.',
              link: 'https://convertkit.com',
            },
            {
              emoji: '📮',
              title: 'MailerLite',
              desc: 'Simple, affordable, good free tier. Great for small projects and learning email marketing basics.',
              link: 'https://www.mailerlite.com',
            },
          ].map((item) => (
            <Paper
              key={item.title}
              sx={{
                background: 'linear-gradient(180deg, rgba(16,185,129,0.10), rgba(16,185,129,0.02))',
                border: '1px solid var(--border)',
                borderRadius: 3.5,
                p: 2.25,
              }}
            >
              <Typography sx={{ fontSize: '32px', mb: 1 }}>{item.emoji}</Typography>
              <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
                {item.desc}
              </Typography>
              <MuiLink href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
                Visit {item.title} →
              </MuiLink>
            </Paper>
          ))}
        </Box>

        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Transactional Email Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Perfect for contact forms, order confirmations, password resets, and automated notifications:
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, my: 3 }}>
          {[
            {
              emoji: '📨',
              title: 'Postmark',
              desc: 'Excellent deliverability, great for transactional emails. Simple API, reliable delivery.',
              link: 'https://postmarkapp.com',
            },
            {
              emoji: '📤',
              title: 'SendGrid',
              desc: 'Popular choice, good free tier. Used by many major companies, comprehensive API.',
              link: 'https://sendgrid.com',
            },
            {
              emoji: '📥',
              title: 'Mailgun',
              desc: 'Developer-friendly, powerful API. Great for high-volume transactional emails.',
              link: 'https://www.mailgun.com',
            },
          ].map((item) => (
            <Paper
              key={item.title}
              sx={{
                background: 'linear-gradient(180deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))',
                border: '1px solid var(--border)',
                borderRadius: 3.5,
                p: 2.25,
              }}
            >
              <Typography sx={{ fontSize: '32px', mb: 1 }}>{item.emoji}</Typography>
              <Typography variant="h4" sx={{ fontSize: '18px', mb: 0.75 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
                {item.desc}
              </Typography>
              <MuiLink href={item.link} target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
                Visit {item.title} →
              </MuiLink>
            </Paper>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How to Use These Services
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          All these services work the same way:
        </Typography>
        <Box component="ol" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Sign up for the service and get an API key</li>
          <li>Store the API key in a <code>.env</code> file on your backend (never commit this file!)</li>
          <li>Create a backend API route (e.g., <code>/api/contact</code> or <code>/api/subscribe</code>)</li>
          <li>In your route, use the API key to call the service's API</li>
          <li>Your frontend calls your backend route, which then calls the external service</li>
        </Box>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          See the <MuiLink href="/backend" sx={{ color: 'var(--accent)' }}>Backend page</MuiLink> for example API routes and the <MuiLink href="/finalproject" sx={{ color: 'var(--accent)' }}>Final Project page</MuiLink> for project ideas.
        </Typography>
      </Box>
    </Container>
  );
};

export default ResourcesPage;

