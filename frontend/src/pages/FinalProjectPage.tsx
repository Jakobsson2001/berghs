import React from 'react';
import { Container, Box, Typography, Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';
import SEO from '../components/SEO';

const FinalProjectPage = () => {
  return (
    <>
      <SEO
        title="Final Project - Bring It All Together | Berghs Class"
        description="Complete your web development journey with a final project. Combine HTML, CSS, JavaScript, frameworks, and backend knowledge to build a comprehensive web application."
        path="/finalproject"
      />
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
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>Use <strong>Git</strong> for version control (frequent commits, branching, PRs).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>Include <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> — or use a framework such as <strong>React</strong>.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Recommended:</em> <strong>Tailwind CSS</strong> and/or <strong>MUI</strong> for consistent, fast styling.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Recommended:</em> connect to a simple <strong>API</strong> or an <strong>AI model</strong> (optional if cost is an issue).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Optional:</em> host on <strong>Vercel</strong>, <strong>Netlify</strong> or <strong>GitHub Pages</strong>.</>} />
          </ListItem>
        </List>
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
            💡 Backend Requirements
          </Typography>
          <Typography sx={{ m: 0, mb: 1 }}>
            Backends are for secrets, validation, and calling external services (CMS, email, public APIs). <strong>For Pass with Distinction (PD), demonstrating understanding of backend concepts and setting up a backend is required.</strong> This can be done in a separate branch if you prefer to keep your main project front-end only.
          </Typography>
          <Typography sx={{ m: 0 }}>
            <strong>Databases are NOT required</strong> — you can build a fully functional backend without a database. <strong>CMS and email services are also optional</strong> — not required to pass, but nice additions if you want to explore them! For examples of DB-free backends, see the <MuiLink href="/backend" sx={{ color: 'var(--accent)' }}>Backend page</MuiLink> and <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>Resources page</MuiLink>.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Working With or Without a Backend
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          If your idea is primarily a <strong>static front-end</strong> (portfolio, company site, landing page), that's fine for the final deliverable.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For <strong>Pass (P)</strong>, a static front-end is sufficient. For <strong>Pass with Distinction (PD)</strong>, you need to demonstrate understanding of backend concepts by setting up and using a backend (even if it's in a separate branch). If you want to explore backend functionality, consider:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>API proxies</strong> — Create backend routes that call external APIs while keeping your keys safe (using <code>.env</code> for environment variables)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Optional:</em> <strong>CMS integration</strong> — Try a headless CMS like <strong>Strapi</strong> to manage content without touching code. Perfect for content engineers!</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Optional:</em> <strong>Email services</strong> — Integrate with <strong>Resend</strong> or similar services (like Mailchimp) for transactional emails, newsletter subscriptions, or contact forms</>} />
          </ListItem>
        </List>
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
            You <em>could</em> build your own CMS or email marketing system (like Resend or Mailchimp) with a backend and database. 
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
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '16px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            👥 Team Information
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>If you're working in a team, make it clear in your GitHub repository!</strong> Include team member names in your <code>README.md</code>, repository description, or as collaborators. I need to know who worked on each project for grading purposes.
          </Typography>
        </Box>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>Work in <strong>branches</strong> (e.g., <code>feature/...</code>, <code>fix/...</code>, <code>experiment/...</code>).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>Open <strong>pull requests</strong> (PRs) to merge changes — even when working solo.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Review your own PRs</strong> or use AI tools (Cursor Auto Mode, Lovable, Copilot) to comment on diffs.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>Prefer <strong>Squash & merge</strong> to keep history tidy.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Write clear, descriptive commit messages." />
          </ListItem>
        </List>

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
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Option 1 — Start with Lovable:</strong> Prototype quickly, then export or rebuild parts locally in an IDE (e.g., Cursor) for finer control, Git discipline, and final polish.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Option 2 — Start directly in Cursor/VS Code:</strong> Full control from day one with strong Git workflow. Still use AI assistance to accelerate (Cursor Auto Mode, Copilot, etc.).</>} />
          </ListItem>
        </List>
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
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Shows understanding of fundamentals (HTML, CSS, JS, Git)." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Working front-end with at least one interactive element." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Consistent Git usage (commits/branches/PRs) and a clear repo." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>README.md</strong> (markdown format) with short reflection on process and learning.</>} />
          </ListItem>
        </List>
        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Pass with Distinction (PD)
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Demonstrates independent problem solving and thoughtful design choices." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Required:</strong> Shows understanding of backend concepts by setting up and using a backend (e.g., Flask, Express, or similar). This can be done in a separate branch if you prefer to keep your main project front-end only.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><em>Optional but nice:</em> Integration with CMS, email services, or external APIs (these are not required, but show extra initiative).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Smart, transparent use of AI-assisted tools with notes in the README.md." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary="Professional Git workflow: branches, PRs, reviews, and clean history (squash merges)." />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Required:</strong> A reflection paper (around one page) submitted with your project, addressing the following sections. <strong>Recommended:</strong> Write it in markdown format in your <code>README.md</code> or as a separate <code>REFLECTION.md</code> file in your repository. Alternatively, you can generate and send a PDF via Canvas.</>} />
          </ListItem>
        </List>
        <List
          sx={{
            m: '8px 0 16px 48px',
            pl: 1,
            listStyleType: 'circle',
            '& .MuiListItem-root': {
              display: 'list-item',
              paddingTop: 0,
              paddingBottom: 0.5,
            },
            '& .MuiListItemText-root': {
              margin: 0,
            },
          }}
        >
          <ListItem>
            <ListItemText primary="What was hard? What challenges did you face and how did you overcome them?" />
          </ListItem>
          <ListItem>
            <ListItemText primary="What would you do differently if you did it again? What would you change about your approach, tools, or process?" />
          </ListItem>
          <ListItem>
            <ListItemText primary="What would you want to change about the assignment if you had free hands? How would you modify the requirements or structure?" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Additional reflection questions to consider: What did you learn that surprised you? How did working with AI tools change your workflow? What would you tell someone starting this project?" />
          </ListItem>
        </List>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
          <em>Note:</em> Frameworks (React, Tailwind, MUI) are recommended but not required. Using HTML/CSS is perfectly acceptable — choose the approach that best fits your project.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Presentation & Submission
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Final Presentations
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Final presentations will be held <strong>around November 26</strong>. Each team/individual will have approximately <strong>15 minutes</strong> (depending on the number of teams in the class). The class is 1.5 hours total, so it's good practice to keep within your time limit.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Your presentation should include:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Show your end project</strong> — Demonstrate the working application (live demo or screenshots/video).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Talk about the journey</strong> — Share your process: how you started, key decisions, challenges you faced, and how you solved them.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Answer reflection questions</strong> — Address some of the reflection questions from your paper (what was hard, what you'd do differently, etc.).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Be prepared for questions</strong> — Both I and your classmates may ask questions about your technical choices, design decisions, or the development process.</>} />
          </ListItem>
        </List>
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
            💡 <strong>Tip:</strong> Practice your presentation and time yourself. Being able to present within time limits is an important professional skill.
          </Typography>
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
            📅 Focus & Timeline
          </Typography>
          <Typography sx={{ m: 0 }}>
            I suggest you <strong>focus on the assignment and preparing your presentation</strong> leading up to the presentation date. After presentations, you can focus on writing your self-reflection. The <strong>hard deadline for the self-reflection is November 30th</strong>.
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ fontSize: '24px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Submission Requirements
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>You can hand in your assignment in whatever way you prefer. There is a <strong>Canvas page</strong> available where you can submit your <strong>GitHub repository link</strong>. The <strong>README.md</strong> (markdown format) should be in your repository — it's not too important to post it separately on Canvas since I can view it directly on GitHub where it will render nicely.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><strong>Make team information clear</strong> — If working in a team, include all team member names in your <code>README.md</code> or repository description so I know who worked on the project.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>For <strong>Pass with Distinction (PD)</strong>: Submit your <strong>reflection paper</strong> (around one page) by <strong>November 30th</strong>. <strong>Recommended:</strong> Include it in your repository as markdown (in <code>README.md</code> or <code>REFLECTION.md</code>). Alternatively, you can generate and send a PDF via Canvas.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<>If deployed, include the <strong>live link</strong> (optional but encouraged).</>} />
          </ListItem>
        </List>
        <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
          Unsure about your idea or setup? Reach out early — it's much easier to guide you before the final week.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '28px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Recommended Tutorials & Resources
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For CMS, email services, and API integration examples, see the <MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>Resources page</MuiLink>. Here are some helpful guides for common project setups:
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1, listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item', py: 0.5 }}>
            <ListItemText primary={<><MuiLink href="/resources" sx={{ color: 'var(--accent)' }}>CMS & Email Services</MuiLink> — Recommended headless CMS platforms (Sanity, Contentful, Strapi) and email services (Resend, SendGrid, Mailchimp) for your project.</>} />
          </ListItem>
        </List>
      </Box>
    </Container>
    </>
  );
};

export default FinalProjectPage;

