import { Container, Box, Typography, Paper, Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';

const HostingDomainPage = () => {
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
              Domain & Hosting
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              Hosting & Domain Setup
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn how to connect your custom domain to your hosted application, configure DNS records, and understand different hosting options and their costs.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="hostingGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#hostingGradient)" opacity="0.18" />
              <circle cx="70" cy="100" r="25" fill="#a78bfa" opacity="0.9" />
              <rect x="120" y="70" width="90" height="60" rx="8" fill="#22d3ee" opacity="0.85" />
              <path d="M 50 150 L 210 150 L 210 180 L 50 180 Z" fill="#34d399" opacity="0.8" />
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
        <Box sx={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(6,182,212,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            🌐 Your domain is your address. DNS records are the directions that tell the internet where to find your website.
          </Typography>
        </Box>

        <Typography id="web-hosting-providers" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Web Hosting Providers
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          There are many web hosting providers where you can register and manage your domain. For this course, we'll use <strong>Loopia</strong> as our domain registrar and DNS provider.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Popular Web Hosting Providers
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Loopia</strong> — Swedish provider, good for Swedish domains (.se), user-friendly DNS editor (we'll use this)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Namecheap</strong> — Popular international provider, affordable pricing</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GoDaddy</strong> — Large international provider, many domain extensions</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Cloudflare</strong> — Free DNS management, excellent performance and security</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Google Domains</strong> — Simple interface, integrated with Google services</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography id="dns-records" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          DNS Records Explained
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          DNS (Domain Name System) records tell the internet where to find your website. There are different types of records for different purposes:
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Common DNS Record Types
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>A Record</strong> — Points your domain directly to an IP address. Works without www (e.g., example.com)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>CNAME Record</strong> — Points your domain to another domain name. Requires www (e.g., www.example.com)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>MX Record</strong> — Points to email servers (for email hosting)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>TXT Record</strong> — Used for verification, SPF records, and other text-based configurations</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography id="connecting-domain" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Connecting Your Domain to Render
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          We use <strong>CNAME records</strong> to redirect our domain to our page hosted on Render. This method requires the <code>www</code> subdomain (e.g., <code>www.example.com</code>).
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            How to Set Up CNAME for Render
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="In your Render dashboard, get your app's URL (e.g., myapp.onrender.com)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Go to your domain provider's DNS editor (e.g., Loopia)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Add a CNAME record:" />
              <List sx={{ m: '8px 0', pl: 2.5, listStyleType: 'disc' }}>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="Name/Host: www" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="Type: CNAME" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="Value/Target: myapp.onrender.com" />
                </ListItem>
              </List>
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Wait for DNS propagation (can take a few minutes to 48 hours)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Your site will be accessible at www.example.com" />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(139,92,246,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            ⚠️ Important: CNAME Requires www
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            CNAME records only work with subdomains like <code>www.example.com</code>. If you want to use <code>example.com</code> (without www), you'll need to use an A record instead (see below).
          </Typography>
        </Box>

        <Typography id="a-record-vs-cname" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          A Record vs CNAME: Cost Comparison
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          There are two main ways to connect your domain to your hosting. Each has different costs and requirements:
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Option 1: A Record (No www Required)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            An A record points directly to an IP address. This allows you to use your domain without www (e.g., <code>example.com</code>).
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Works without www (example.com)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="❌ Requires a static IP address" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="💰 Costs more: You need to pay for a static IP on Render (~$25/month)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="🔧 Setup: Point A record to Render's static IP address" />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5, mt: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Option 2: CNAME (Requires www) — What We Use
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            A CNAME record points to another domain name. This is what we use for our setup.
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Free or low-cost (uses Render's free tier)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="✅ Easy to set up" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="⚠️ Requires www (www.example.com)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="🔧 Setup: Point CNAME record to your Render app URL" />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5, mt: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Option 3: "Ugly" Workaround (Budget Alternative)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            A workaround if you want example.com (without www) but don't want to pay $25/month for a static IP.
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="💰 Costs ~$4/month for a cheap VPS/server" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="🔧 Setup: Rent a cheap server, point A record to it, and set up a redirect from example.com to www.example.com" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="⚠️ More complex setup and maintenance" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="⚠️ Adds an extra hop (slightly slower)" />
            </ListItem>
          </List>
          <Box
            sx={{
              borderLeft: '3px solid #f59e0b',
              pl: 2,
              mt: 2,
              background: 'rgba(245,158,11,0.1)',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontStyle: 'italic' }}>
              This is a "hacky" solution. Most people either use CNAME with www or pay for the static IP if they really need example.com without www.
            </Typography>
          </Box>
        </Paper>

        <Typography id="ttl" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          TTL (Time To Live)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>TTL</strong> (Time To Live) determines how long DNS servers cache your DNS records. This affects how quickly changes you make in your DNS editor take effect.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Understanding TTL
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>High TTL (e.g., 3600 seconds = 1 hour)</strong> — DNS servers cache your records longer. Changes take longer to propagate, but reduces DNS queries (better performance).</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Low TTL (e.g., 300 seconds = 5 minutes)</strong> — DNS servers cache your records for a shorter time. Changes propagate faster, but increases DNS queries.</>} />
            </ListItem>
          </List>
          <Box
            sx={{
              borderLeft: '3px solid var(--accent)',
              pl: 2,
              mt: 2,
              background: 'rgba(139,92,246,0.1)',
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontWeight: 600, mb: 0.5 }}>
              💡 Pro Tip
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
              When you're actively making DNS changes, set TTL to a low value (e.g., 300 seconds) so updates appear faster. Once everything is working, you can increase TTL to improve performance.
            </Typography>
          </Box>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          How to Change TTL in Loopia
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          In Loopia's DNS editor, you can usually find the TTL setting for each DNS record:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Go to your domain's DNS settings in Loopia" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Edit the DNS record you want to change" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Look for a TTL field (usually in seconds)" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="Set it to 300 (5 minutes) for faster updates, or 3600 (1 hour) for better performance" />
          </ListItem>
        </List>

        <Typography id="summary" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Here's a quick summary of what we covered:
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { emoji: '🌐', title: 'Domain Providers', desc: 'Loopia is our choice for domain registration and DNS management. Other options include Namecheap, GoDaddy, and Cloudflare.' },
            { emoji: '🔗', title: 'CNAME Records', desc: 'We use CNAME to point www.example.com to our Render app. This is free but requires the www subdomain.' },
            { emoji: '📍', title: 'A Records', desc: 'A records point directly to IP addresses, allow example.com (no www), but require a static IP (~$25/month on Render).' },
            { emoji: '⏱️', title: 'TTL Settings', desc: 'Lower TTL (300s) makes DNS changes propagate faster. Higher TTL (3600s) improves performance but slows updates.' },
            { emoji: '💰', title: 'Cost Options', desc: 'CNAME (free), A record with static IP (~$25/month), or workaround with cheap server (~$4/month but more complex).' },
            { emoji: '⚙️', title: 'DNS Editor', desc: 'Use your domain provider\'s DNS editor (e.g., Loopia) to add and modify DNS records. Changes can take minutes to hours to propagate.' },
          ].map((item) => (
            <Paper key={item.title} sx={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.10), rgba(139,92,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
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
      </Box>
    </Container>
  );
};

export default HostingDomainPage;

