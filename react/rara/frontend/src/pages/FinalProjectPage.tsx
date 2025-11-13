import { Container, Box, Typography, Link as MuiLink } from '@mui/material';

const FinalProjectPage = () => {
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
          🎯 Final Project – Bringing It All Together
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted)', fontSize: '17px' }}>
          Programming & Methods Pt. 1 • Berghs School of Communication
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Overview
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          In the final part of the course you'll build an individual or small-team project that shows your ability to combine
          <strong> HTML, CSS, JavaScript, Git, frameworks</strong> and <strong>AI-assisted tools</strong>.
          The goal isn't perfection — it's to demonstrate understanding, reflection and creativity.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Pick a concept you care about: a portfolio, a company site, a small product prototype, or something experimental.
          Make it meaningful and achievable within the timeframe.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          When to Start
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Most focused build time is in the <strong>last week</strong>, but I strongly recommend you start earlier:
          explore ideas, try stacks (React, Tailwind, simple APIs), and set up your repo.
          Starting now makes it easier to ask for help and iterate calmly.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Technical Requirements
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Use <strong>Git</strong> for version control (frequent commits, branching, PRs).</li>
          <li>Include <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> — or use a framework such as <strong>React</strong>.</li>
          <li><em>Recommended:</em> <strong>Tailwind CSS</strong> and/or <strong>MUI</strong> for consistent, fast styling.</li>
          <li><em>Recommended:</em> connect to a simple <strong>API</strong> or an <strong>AI model</strong> (optional if cost is an issue).</li>
          <li><em>Optional:</em> host on <strong>Vercel</strong>, <strong>Netlify</strong> or <strong>GitHub Pages</strong>.</li>
        </Box>
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
            💡 Backend & Database Requirements
          </Typography>
          <Typography sx={{ m: 0 }}>
            Backends are for secrets, validation, and calling external services (CMS, email, public APIs). <strong>Databases are optional and not required to pass this course.</strong> For examples of DB-free backends, see the <MuiLink href="/backend" sx={{ color: 'var(--accent)' }}>Backend page</MuiLink> and <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>Resources page</MuiLink>.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Working With or Without a Backend
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          If your idea is primarily a <strong>static front-end</strong> (portfolio, company site, landing page), that's fine for the final deliverable.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Backend with .env for handling keys is optional.</strong> If you want to explore backend functionality, consider:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><strong>CMS integration</strong> — Try a headless CMS like <strong>Strapi</strong> to manage content without touching code. Perfect for content engineers!</li>
          <li><strong>Email marketing</strong> — Integrate with <strong>Mailchimp</strong> or similar services for newsletter subscriptions or contact forms</li>
          <li><strong>API proxies</strong> — Create backend routes that call external APIs while keeping your keys safe</li>
        </Box>
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
            You <em>could</em> build your own CMS or email marketing system (like Mailchimp) with a backend and database. 
            But these services exist for a reason — they handle complex infrastructure, deliverability, templates, and more. 
            It's usually not worth building these yourself. Use existing services and focus on your unique project value.
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          To experiment safely, create a separate branch such as <code>backend/experiment</code> where you try a lightweight Python/Node API.
          <strong>Do not merge</strong> this branch into your production branch unless you truly need it.
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
          <Typography sx={{ m: 0 }}>
            💡 <strong>Tip:</strong> Keep production clean. Use branches to explore safely.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          GitHub & Collaboration Setup
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Invite me to your repository on GitHub: <strong>jakobsson2001</strong>.
          This lets me review your <em>commit history</em>, <em>branching strategy</em> and overall Git hygiene.
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Work in <strong>branches</strong> (e.g., <code>feature/...</code>, <code>fix/...</code>, <code>experiment/...</code>).</li>
          <li>Open <strong>pull requests</strong> (PRs) to merge changes — even when working solo.</li>
          <li><strong>Review your own PRs</strong> or use AI tools (Cursor Auto Mode, Lovable, Copilot) to comment on diffs.</li>
          <li>Prefer <strong>Squash & merge</strong> to keep history tidy.</li>
          <li>Write clear, descriptive commit messages.</li>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Project Management (Trello + GitHub)
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Create a simple Trello board (Backlog → In Progress → Done). For each card, create a matching branch and PR.
          This gives you checkpoints and makes scope visible. Treat it like a real project, even if you're working alone.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Two Recommended Workflows
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <strong>Option 1 — Start with Lovable:</strong> Prototype quickly, then export or rebuild parts locally in an IDE
            (e.g., Cursor) for finer control, Git discipline, and final polish.
          </li>
          <li>
            <strong>Option 2 — Start directly in Cursor/VS Code:</strong> Full control from day one with strong Git workflow.
            Still use AI assistance to accelerate (Cursor Auto Mode, Copilot, etc.).
          </li>
        </Box>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Choose the path that fits how you like to work. Remember: <em>we don't want to reinvent the wheel</em> —
          use frameworks and libraries to move faster and focus on design, logic, and content.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Grading Criteria
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Pass (P)
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Shows understanding of fundamentals (HTML, CSS, JS, Git).</li>
          <li>Working front-end with at least one interactive element.</li>
          <li>Consistent Git usage (commits/branches/PRs) and a clear repo.</li>
          <li><strong>README.md</strong> (markdown format) with short reflection on process and learning.</li>
        </Box>
        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Pass with Distinction (PD)
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Demonstrates independent problem solving and thoughtful design choices.</li>
          <li>Explores back-end concepts/APIs/data handling (a separate branch is acceptable).</li>
          <li>Integration with CMS, email services, or external APIs (optional but earns plus points).</li>
          <li>Smart, transparent use of AI-assisted tools with notes in the README.md.</li>
          <li>Professional Git workflow: branches, PRs, reviews, and clean history (squash merges).</li>
        </Box>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
          <em>Note:</em> Frameworks (React, Tailwind, MUI) are recommended but not required. Using HTML/CSS is perfectly acceptable — choose the approach that best fits your project.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Presentation & Submission
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Final presentations: <strong>around November 26</strong>.</li>
          <li>Submit your <strong>GitHub repository link</strong> via Canvas. The <strong>README.md</strong> (markdown format) should be in your repository — it's not too important to post it separately on Canvas since I can view it directly on GitHub where it will render nicely.</li>
          <li>If deployed, include the <strong>live link</strong> (optional but encouraged).</li>
        </Box>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
          Unsure about your idea or setup? Reach out early — it's much easier to guide you before the final week.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Recommended Tutorials & Resources
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For CMS, email services, and API integration examples, see the <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>Resources page</MuiLink>. Here are some helpful guides for common project setups:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>
              CMS & Email Services
            </MuiLink>
            {' '}— Recommended headless CMS platforms (Sanity, Contentful, Strapi) and email services (SendGrid, Mailchimp) for your project.
          </li>
        </Box>
      </Box>
    </Container>
  );
};

export default FinalProjectPage;

