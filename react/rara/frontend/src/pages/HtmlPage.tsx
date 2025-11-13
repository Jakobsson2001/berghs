import { useState, useEffect, useRef } from 'react';
import { Container, Box, Typography, Paper, TextField, Button, Accordion, AccordionSummary, AccordionDetails, Link as MuiLink } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const HtmlPage = () => {
  const [htmlInput, setHtmlInput] = useState(`<h1>Hello HTML 👋</h1>
<p>Change this text to see live updates.</p>
<ul>
  <li>Use headings and paragraphs</li>
  <li>Add lists and links</li>
  <li>Try images with good alt text</li>
</ul>`);
  const [previewSrc, setPreviewSrc] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const starterHtml = `<h1>Hello HTML 👋</h1>
<p>Change this text to see live updates.</p>
<ul>
  <li>Use headings and paragraphs</li>
  <li>Add lists and links</li>
  <li>Try images with good alt text</li>
</ul>`;

  useEffect(() => {
    const wrapped = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Preview</title>
    <style>
      :root { color-scheme: light dark; }
      body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; line-height: 1.5; padding: 16px; }
      img, video { max-width: 100%; height: auto; }
      * { box-sizing: border-box; }
    </style>
  </head>
  <body>
    ${htmlInput}
  </body>
</html>`;
    setPreviewSrc(wrapped);
  }, [htmlInput]);

  const handleReset = () => {
    setHtmlInput(starterHtml + '\n');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(htmlInput);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
          HTML
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Use this page to outline your HTML lessons. Consider sections for semantics, accessibility, forms, media, and document structure.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Starter snippet
        </Typography>
        <Box component="figure" sx={{ m: '1.25rem 0' }}>
          <img src="/assets/Dog meme.jpeg" alt="Dog meme" style={{ maxWidth: '100%', height: 'auto', display: 'block', marginBottom: '1rem' }} />
          <Typography component="figcaption" variant="caption" sx={{ display: 'block', mt: 1 }}>
            Dog meme
          </Typography>
        </Box>

        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          Beginner's guide to HTML ✨
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          HTML is the language that structures every web page. Think of it as the building blocks for content: headings, paragraphs, images, and links. This guide is designed for non‑technical creative students—simple, practical, and visual.
        </Typography>

        <Box
          component="nav"
          aria-label="Table of contents"
          className="toc"
          sx={{
            m: '16px 0 28px',
            p: '14px 16px',
            background: 'radial-gradient(600px 200px at 0% -40%, rgba(56,189,248,0.10), transparent), var(--panel)',
            border: '1px solid var(--border)',
            borderRadius: 3,
          }}
        >
          <Typography component="strong" sx={{ display: 'block', mb: 0.5, fontWeight: 600 }}>
            📚 Table of contents
          </Typography>
          <Box component="ul" sx={{ m: '8px 0 0', pl: 2 }}>
            <li>
              <MuiLink href="#basics" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Basics
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#what-is-html" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    💡 What is HTML?
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#watch-html" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🎥 Watch: HTML in ~5 minutes
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#page-skeleton" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🏗️ The basic page skeleton
                  </MuiLink>
                </li>
              </Box>
            </li>
            <li>
              <MuiLink href="#content" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Content
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#headings-paragraphs" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    📝 Headings and paragraphs
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#links-images" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🔗🖼️ Links and images
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#lists" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    📋 Lists
                  </MuiLink>
                </li>
              </Box>
            </li>
            <li>
              <MuiLink href="#structure" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Structure
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#semantic-tags" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🏷️ Semantic tags
                  </MuiLink>
                </li>
              </Box>
            </li>
            <li>
              <MuiLink href="#accessibility" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Accessibility
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#a11y-basics" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    ♿ Accessibility basics
                  </MuiLink>
                </li>
              </Box>
            </li>
            <li>
              <MuiLink href="#practice" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Practice
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#try-it" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🧪 Try it yourself
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#live-demo" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    ⚡ Live HTML demo
                  </MuiLink>
                </li>
              </Box>
            </li>
            <li>
              <MuiLink href="#reference" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                Reference
              </MuiLink>
              <Box component="ul" sx={{ m: '6px 0 10px 18px' }}>
                <li>
                  <MuiLink href="#checklist" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    ✅ Quick checklist
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#mistakes" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    🚫 Common mistakes
                  </MuiLink>
                </li>
                <li>
                  <MuiLink href="#next" sx={{ color: 'var(--text)', textDecoration: 'none', '&:hover': { color: 'var(--accent)', textDecoration: 'underline' } }}>
                    ➡️ Where to go next
                  </MuiLink>
                </li>
              </Box>
            </li>
          </Box>
        </Box>

        <Typography id="basics" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Basics
        </Typography>

        <Typography id="what-is-html" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          💡 What is HTML?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          HTML stands for <strong>HyperText Markup Language</strong>. It tells the browser what each piece of content is. A <em>tag</em> looks like this: <code>&lt;p&gt;...&lt;/p&gt;</code>. Most tags come in pairs and wrap your content.
        </Typography>

        <Typography id="watch-html" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🎥 Watch: HTML in ~5 minutes
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Prefer to watch first? This short video explains the basics quickly.
        </Typography>
        <MuiLink
          href="https://www.youtube.com/watch?v=salY_Sm6mv4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch a 5-minute introduction to HTML on YouTube (opens in a new tab)"
          sx={{ display: 'block', mb: 2 }}
        >
          <img
            src="https://img.youtube.com/vi/salY_Sm6mv4/maxresdefault.jpg"
            alt="YouTube thumbnail: 5-minute introduction to HTML"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,.12)' }}
          />
          <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '0.9rem', opacity: 0.8 }}>
            Opens YouTube in a new tab · ~5 min
          </Typography>
        </MuiLink>

        <Typography id="page-skeleton" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🏗️ The basic page skeleton
        </Typography>
        <Paper
          component="pre"
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2,
            overflow: 'auto',
            mb: 2,
          }}
        >
          <code style={{ color: '#bae6fd' }}>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My first page</title>
  </head>
  <body>
    <main>Content goes here</main>
  </body>
</html>`}</code>
        </Paper>

        <Box component="figure" sx={{ m: '1.25rem 0' }}>
          <svg
            viewBox="0 0 600 260"
            role="img"
            aria-labelledby="html-structure-diagram-title html-structure-diagram-desc"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,.08)' }}
          >
            <title id="html-structure-diagram-title">Visual diagram of an HTML page layout</title>
            <desc id="html-structure-diagram-desc">Rectangles labeled header, nav, main, and footer show a typical structure.</desc>
            <rect x="10" y="10" width="580" height="60" rx="10" fill="#E3F2FD" stroke="#90CAF9" />
            <text x="300" y="45" textAnchor="middle" fill="#0D47A1" fontFamily="Arial, Helvetica, sans-serif" fontSize="18">
              header
            </text>
            <rect x="10" y="80" width="120" height="120" rx="10" fill="#E8F5E9" stroke="#A5D6A7" />
            <text x="70" y="145" textAnchor="middle" fill="#1B5E20" fontFamily="Arial, Helvetica, sans-serif" fontSize="18">
              nav
            </text>
            <rect x="140" y="80" width="450" height="120" rx="10" fill="#FFF3E0" stroke="#FFCC80" />
            <text x="365" y="145" textAnchor="middle" fill="#E65100" fontFamily="Arial, Helvetica, sans-serif" fontSize="18">
              main
            </text>
            <rect x="10" y="205" width="580" height="45" rx="10" fill="#F3E5F5" stroke="#CE93D8" />
            <text x="300" y="235" textAnchor="middle" fill="#4A148C" fontFamily="Arial, Helvetica, sans-serif" fontSize="18">
              footer
            </text>
          </svg>
          <Typography component="figcaption" variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '0.9rem', opacity: 0.85 }}>
            A simple mental model: header and nav on top, main content in the middle, footer at the bottom.
          </Typography>
        </Box>

        <Typography id="content" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Content
        </Typography>

        <Typography id="headings-paragraphs" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          📝 Headings and paragraphs
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Use headings to structure your content (like a magazine). <code>&lt;h1&gt;</code> is the main title, then <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. Paragraphs use <code>&lt;p&gt;</code>.
        </Typography>
        <Paper
          component="pre"
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2,
            overflow: 'auto',
            mb: 2,
          }}
        >
          <code style={{ color: '#bae6fd' }}>{`<h1>My Portfolio</h1>
<h2>Projects</h2>
<p>I design digital experiences.</p>`}</code>
        </Paper>

        <Typography id="links-images" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🔗🖼️ Links and images
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Links use <code>&lt;a&gt;</code> with an <code>href</code>. Images use <code>&lt;img&gt;</code> with a source (<code>src</code>) and an accessible description (<code>alt</code>).
        </Typography>
        <Paper
          component="pre"
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2,
            overflow: 'auto',
            mb: 2,
          }}
        >
          <code style={{ color: '#bae6fd' }}>{`<a href="https://example.com">Visit my site</a>
<img src="headshot.jpg" alt="Portrait of me smiling" />`}</code>
        </Paper>

        <Box component="figure" sx={{ m: '1.25rem 0' }}>
          <svg
            viewBox="0 0 640 240"
            role="img"
            aria-labelledby="img-alt-title img-alt-desc"
            style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 14px rgba(0,0,0,.08)' }}
          >
            <title id="img-alt-title">Why alt text matters</title>
            <desc id="img-alt-desc">Two simplified images, one without alt text and one with descriptive alt text.</desc>
            <rect x="20" y="20" width="280" height="200" rx="12" fill="#fff" stroke="#e0e0e0" />
            <rect x="40" y="40" width="240" height="120" fill="#BBDEFB" />
            <text x="160" y="190" textAnchor="middle" fill="#9e9e9e" fontFamily="Arial, Helvetica, sans-serif" fontSize="14">
              No alt text
            </text>
            <rect x="340" y="20" width="280" height="200" rx="12" fill="#fff" stroke="#e0e0e0" />
            <rect x="360" y="40" width="240" height="120" fill="#C8E6C9" />
            <text x="480" y="170" textAnchor="middle" fill="#2e7d32" fontFamily="Arial, Helvetica, sans-serif" fontSize="14">
              Good alt: "Designer at a studio desk"
            </text>
          </svg>
          <Typography component="figcaption" variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '0.9rem', opacity: 0.85 }}>
            Alt text helps people using screen readers understand images.
          </Typography>
        </Box>

        <Typography id="lists" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          📋 Lists
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Use ordered lists (<code>&lt;ol&gt;</code>) for steps, unordered lists (<code>&lt;ul&gt;</code>) for bullet points.
        </Typography>
        <Paper
          component="pre"
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2,
            overflow: 'auto',
            mb: 2,
          }}
        >
          <code style={{ color: '#bae6fd' }}>{`<ul>
  <li>Art direction</li>
  <li>Brand design</li>
  <li>Interaction design</li>
</ul>`}</code>
        </Paper>

        <Typography id="structure" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Structure
        </Typography>

        <Typography id="semantic-tags" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🏷️ Semantic tags (meaningful structure)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          These tags describe the role of content, which helps both humans and assistive technologies:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <code>&lt;header&gt;</code> top of the page/section
          </li>
          <li>
            <code>&lt;nav&gt;</code> navigation
          </li>
          <li>
            <code>&lt;main&gt;</code> the unique main content
          </li>
          <li>
            <code>&lt;section&gt;</code> a grouped topic
          </li>
          <li>
            <code>&lt;article&gt;</code> a self‑contained piece (like a post)
          </li>
          <li>
            <code>&lt;footer&gt;</code> bottom area or credits
          </li>
        </Box>

        <Typography id="accessibility" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Accessibility
        </Typography>

        <Typography id="a11y-basics" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          ♿ Accessibility basics (small habits, big impact)
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <strong>Alt text</strong>: describe images with <code>alt</code>.
          </li>
          <li>
            <strong>Headings in order</strong>: start at <code>&lt;h1&gt;</code>, don't skip levels.
          </li>
          <li>
            <strong>Link text</strong>: say where the link goes (avoid "click here").
          </li>
          <li>
            <strong>Contrast and size</strong>: readable text helps everyone.
          </li>
        </Box>

        <Typography id="practice" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Practice
        </Typography>

        <Typography id="try-it" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🧪 Try it yourself
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Copy this into a file named <code>my-page.html</code> and open it in a browser.
        </Typography>
        <Paper
          component="pre"
          sx={{
            background: 'rgba(2, 6, 23, 0.6)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 2,
            overflow: 'auto',
            mb: 2,
          }}
        >
          <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello creative world</title>
  </head>
  <body>
    <header>
      <h1>Hello!</h1>
      <nav><a href="#work">Work</a> | <a href="#about">About</a></nav>
    </header>
    <main>
      <h2 id="work">Selected work</h2>
      <ul>
        <li>Brand refresh for Cafe North</li>
        <li>Exhibition identity & site</li>
      </ul>
      <h2 id="about">About me</h2>
      <p>Designer exploring interaction and identity.</p>
      <img src="me.jpg" alt="Designer at a studio desk" />
    </main>
    <footer>&copy; 2025 Me</footer>
  </body>
</html>`}</code>
        </Paper>

        <Typography id="live-demo" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          ⚡ Live HTML demo
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Type HTML on the left, and see the result on the right. This preview is sandboxed (safe) and perfect for quick experiments.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'stretch',
            mb: 4,
          }}
        >
          <Box sx={{ flex: '1 1 320px', minWidth: '280px' }}>
            <Typography component="label" sx={{ display: 'block', mb: 0.5, fontWeight: 600 }}>
              Your HTML
            </Typography>
            <TextField
              id="live-html-input"
              multiline
              rows={10}
              value={htmlInput}
              onChange={(e) => setHtmlInput(e.target.value)}
              sx={{
                width: '100%',
                '& .MuiInputBase-root': {
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: '13px',
                  lineHeight: 1.4,
                  background: 'rgba(2, 6, 23, 0.6)',
                  color: 'var(--text)',
                },
              }}
            />
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '0.9rem', opacity: 0.8 }}>
              Tip: You can paste your own snippet. JavaScript is disabled for safety.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
              <Button variant="outlined" onClick={handleReset} size="small">
                Reset example
              </Button>
              <Button variant="outlined" onClick={handleCopy} size="small">
                Copy HTML
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 320px', minWidth: '280px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
              <Typography sx={{ fontWeight: 600 }}>Preview</Typography>
              <Typography variant="caption" sx={{ fontSize: '0.85rem', opacity: 0.7 }}>
                Ready
              </Typography>
            </Box>
            <Box
              component="iframe"
              ref={iframeRef}
              title="Live HTML preview"
              sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin"
              srcDoc={previewSrc}
              sx={{
                width: '100%',
                height: '280px',
                border: '1px solid var(--border)',
                borderRadius: 2.5,
                background: '#fff',
              }}
            />
          </Box>
        </Box>

        <Typography id="reference" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          Reference
        </Typography>

        <Typography id="checklist" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          ✅ Quick checklist
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>One clear <code>&lt;h1&gt;</code> per page</li>
          <li>Logical headings and sections</li>
          <li>Meaningful link text</li>
          <li>Images have helpful <code>alt</code> text</li>
          <li>Mobile‑friendly with the viewport meta tag</li>
        </Box>

        <Typography id="mistakes" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          🚫 Common mistakes
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Forgetting closing tags (use pairs like <code>&lt;p&gt;...&lt;/p&gt;</code>)</li>
          <li>Nesting tags in the wrong order</li>
          <li>Using headings for size instead of structure</li>
          <li>Links without <code>href</code> or vague link text</li>
        </Box>

        <Typography id="next" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          ➡️ Where to go next
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Style your page with <MuiLink component={Link} to="/css" sx={{ color: 'var(--accent)' }}>CSS</MuiLink> and add interactivity with <MuiLink component={Link} to="/javascript" sx={{ color: 'var(--accent)' }}>JavaScript</MuiLink>.
        </Typography>

        <Typography id="faq" variant="h2" sx={{ fontSize: '24px', mt: 6, mb: 2, color: 'var(--text)' }}>
          ❓ FAQ
        </Typography>

        <Accordion sx={{ mb: 1, border: '1px solid var(--border)', borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>What does "semantic HTML" mean? 🏷️</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'var(--muted)' }}>
              It means using tags that describe meaning and structure (like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>). This improves accessibility, SEO, and maintainability.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1, border: '1px solid var(--border)', borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>How many <code>&lt;h1&gt;</code> elements should a page have? #️⃣</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'var(--muted)' }}>
              Generally one <code>&lt;h1&gt;</code> per page to represent the main topic. Subsections then use <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, and so on in order.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1, border: '1px solid var(--border)', borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>Do images always need <code>alt</code> text? 🖼️</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'var(--muted)' }}>
              Yes, unless an image is purely decorative. If decorative, use empty alt (<code>alt=""</code>) so assistive tech skips it. Otherwise write a concise description.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1, border: '1px solid var(--border)', borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>What's the difference between <code>&lt;section&gt;</code> and <code>&lt;div&gt;</code>? 📦</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'var(--muted)' }}>
              <code>&lt;section&gt;</code> is semantic (a thematically grouped block with a heading). <code>&lt;div&gt;</code> is a generic container with no meaning—use it when no semantic tag fits.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ mb: 1, border: '1px solid var(--border)', borderRadius: 3 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>Why does my HTML look different in each browser? 🌐</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'var(--muted)' }}>
              Browsers apply default styles. Add a CSS reset or set consistent styles yourself. Always test on multiple browsers and devices.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default HtmlPage;


