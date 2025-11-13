import React from 'react';
import { Container, Box, Typography, Paper, Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';

const SeoPage = () => {
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
              Web Performance & Discovery
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              SEO, GEO & Server-Side Rendering
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn how search engines find your website, how AI tools recommend content, why rendering matters, and how backend architecture affects discoverability.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="seoGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#seoGradient)" opacity="0.18" />
              <circle cx="80" cy="100" r="30" fill="#fbbf24" opacity="0.9" />
              <rect x="120" y="60" width="80" height="80" rx="8" fill="#60a5fa" opacity="0.85" />
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
        <Box sx={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(59,130,246,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            🔍 SEO helps people find your website. 🤖 GEO helps AI recommend it. SSR helps search engines understand it.
          </Typography>
        </Box>

        <Typography id="what-is-seo" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is SEO? (Search Engine Optimization)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>SEO</strong> is the practice of making your website easy to find in search engines like Google. When someone searches for "best pizza in Stockholm" or "how to learn React", you want your website to appear in the results.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            How Search Engines Work (Simple Version)
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Search engines (like Google) send bots to visit websites and read their content" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="They store information about your pages in their database" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="When someone searches, Google shows relevant pages from its database" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="SEO helps Google understand what your page is about and rank it higher" />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Basic SEO Factors
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Title tags</strong> — The title that appears in search results (in your HTML <code>&lt;title&gt;</code> tag)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Meta descriptions</strong> — Short descriptions that appear under your title in search results</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Headings</strong> — Using <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, etc. to structure content</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Content quality</strong> — Useful, original content that answers people's questions</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Page speed</strong> — Fast-loading pages rank better</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Mobile-friendly</strong> — Websites that work well on phones rank higher</>} />
          </ListItem>
        </List>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is GEO? (Generative Engine Optimization)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>GEO</strong> (Generative Engine Optimization) is the practice of optimizing your content so that AI tools like ChatGPT, Perplexity, and Google AI Overviews mention and cite your website in their generated answers.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            The Difference: SEO vs GEO
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>SEO:</strong> Gets your website listed in search results (users click to visit)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GEO:</strong> Gets your content recommended in AI answers (AI summarizes your content directly)</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Why Does GEO Matter?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Search is changing. More and more people are using AI tools like ChatGPT and Google AI Overviews instead of traditional search results. When someone asks an AI tool a question, it generates a direct answer—often without requiring the user to click through to any website.
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
            📊 The Numbers
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            According to research, <strong>13% of all Google queries now trigger AI Overviews</strong> (and that number is growing fast). 
            A study shows that <strong>80% of users answer 40% of their queries without clicking a link</strong> when using AI tools. 
            If your content isn't included in AI answers, fewer people will see it.
          </Typography>
        </Box>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          How SEO and GEO Are Similar
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Both reward high-quality, well-structured content" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Both value clear headings, bullet points, and organized formatting" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Both prefer authoritative, trustworthy sources" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Both benefit from original research and unique data" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          How SEO and GEO Are Different
        </Typography>
        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>SEO:</strong> Optimize for keywords (short phrases like "best pizza")</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GEO:</strong> Optimize for prompts (full questions like "What is the best pizza restaurant in Stockholm?")</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>SEO:</strong> Success = ranking higher in search results</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GEO:</strong> Success = being mentioned or cited in AI-generated answers</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>SEO:</strong> Users click through to your website</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GEO:</strong> AI summarizes your content directly (users may not visit your site)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>SEO:</strong> Content can stay ranked for years</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>GEO:</strong> Content must stay fresh and up-to-date to remain cited</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          How to Optimize for GEO
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          To optimize for generative engines like ChatGPT and Google AI Overviews:
        </Typography>

        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Write clear, direct answers</strong> to specific questions (not just keyword-stuffed content)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Add FAQ sections</strong> with short, factual responses</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Use subheadings</strong> that match how users phrase questions</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Keep content fresh</strong> — AI tools prioritize recent, up-to-date information</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Make content context-independent</strong> — excerpts should make sense even when quoted without full explanation</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Build authority</strong> — get mentioned across the web (LinkedIn, Wikidata, other trusted sources)</>} />
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
            💡 The Bottom Line
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>SEO gets you listed. GEO gets you recommended.</strong> If you already produce strong SEO content, you're halfway to GEO. 
            The key difference is writing complete, trustworthy answers to specific questions rather than just optimizing for keywords.
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2, mt: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          For more detailed information, see <MuiLink href="https://www.semrush.com/blog/geo-vs-seo/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Semrush's guide on GEO vs SEO</MuiLink> and <MuiLink href="https://www.wired.com/story/goodbye-seo-hello-geo-brandlight-openai/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Wired's article on the shift from SEO to GEO</MuiLink>.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          The Problem: Client-Side Rendering vs Search Engines
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          When you build a website with React (or vanilla JavaScript), here's what happens:
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Client-Side Rendering (React/Vite) Flow
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="User visits your website" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Browser receives an almost-empty HTML file" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="JavaScript runs and builds the page content" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Page appears to the user" />
            </ListItem>
          </List>
        </Paper>

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
            ⚠️ The SEO Problem
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            Search engine bots sometimes don't wait for JavaScript to finish running. They might see an empty HTML page and think your site has no content! 
            This means your carefully written blog posts, product descriptions, or articles might not be indexed properly.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is Server-Side Rendering (SSR)?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Server-Side Rendering (SSR)</strong> solves this problem by building the HTML page on the server <em>before</em> sending it to the browser. The browser receives a complete, ready-to-display HTML page with all content already in it.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Server-Side Rendering Flow
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="User visits your website" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Server builds the complete HTML page (fetches data, renders React components)" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Browser receives a complete HTML page with all content" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Search engines can read the content immediately" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="JavaScript then 'hydrates' the page to make it interactive" />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How Backend Architecture Affects SEO
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Your backend architecture directly impacts SEO because it determines how your pages are rendered and delivered to search engines.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Static Site (No Backend) — Good for Simple Sites
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ HTML files are pre-built and served as-is" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Search engines can read everything immediately" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="❌ No dynamic content (can't show user-specific data)" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="❌ Content changes require rebuilding the entire site" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Client-Side Rendering (React/Vite) — Fast Development, SEO Challenges
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Fast development and great user experience" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Dynamic content and interactivity" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="⚠️ Search engines might not see content (depends on bot capabilities)" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="⚠️ Slower initial page load (JavaScript must download and run)" />
          </ListItem>
        </List>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Server-Side Rendering (Next.js, Remix) — Best for SEO
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Search engines see complete HTML immediately" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Fast initial page load (content is ready)" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="✅ Dynamic content from backend APIs" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="⚠️ More complex setup (requires a server)" />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary="⚠️ Server must handle rendering for every request" />
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
            💡 When Do You Need SSR?
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>You need SSR if:</strong> Your site needs to be found in Google (blog, e-commerce, news site, portfolio that needs visibility).
          </Typography>
          <Typography sx={{ m: 0, mt: 1 }}>
            <strong>You don't need SSR if:</strong> Your site is behind a login (internal tools, dashboards), it's a portfolio that doesn't need search visibility, or it's a simple landing page.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          SSR Implementation Options
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          If you decide you need SSR, here are your options:
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Next.js (Recommended for React Projects)
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            Next.js makes SSR easy. You can use Server Components and API routes in the same project:
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`// app/blog/[slug]/page.tsx
// This page is server-rendered by default in Next.js

export default async function BlogPost({ params }) {
  // This runs on the server
  const post = await fetchPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}`}</code>
          </Paper>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Flask/Python Backend with Template Rendering
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            You can also use Flask to render HTML templates on the server:
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/blog/<slug>')
def blog_post(slug):
    post = get_post_from_cms(slug)  # Fetch from CMS
    # Render HTML on server - search engines see complete page
    return render_template('blog_post.html', post=post)`}</code>
          </Paper>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary: SEO, GEO & SSR
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>SEO</strong> helps search engines find and rank your website in traditional search results</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>GEO</strong> helps AI tools like ChatGPT and Google AI Overviews mention and cite your content in generated answers</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Client-side rendering</strong> (React/Vite) can make SEO harder because content is added by JavaScript</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Server-side rendering</strong> (SSR) builds HTML on the server, making it easier for search engines and AI tools to read</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>You need SSR</strong> if your site needs to be found in Google or recommended by AI tools (blogs, e-commerce, public content)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>You don't need SSR</strong> for internal tools, dashboards, or simple portfolios that don't need search visibility</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Next.js</strong> makes SSR easy for React projects. Flask can also render templates server-side</>} />
          </ListItem>
        </List>

        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            my: 3,
          }}
        >
          <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>For this course:</strong> Most projects don't need SSR. Client-side rendering is fine for portfolios and internal tools. 
            If you're building a blog or public-facing site that needs to be found in Google, consider Next.js for easy SSR.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SeoPage;

