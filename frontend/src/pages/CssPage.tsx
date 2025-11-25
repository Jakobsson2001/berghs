import { useState } from 'react';
import { Container, Box, Typography, Paper, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@mui/material';
import SEO from '../components/SEO';

const CssPage = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState('');

  const questions = [
    {
      id: 'q1',
      question: 'Vad gör CSS-egenskapen color?',
      options: [
        { value: 'a', label: 'Ändrar bakgrundsfärgen på ett element' },
        { value: 'b', label: 'Ändrar textfärgen på ett element' },
        { value: 'c', label: 'Lägger till en kantlinje runt ett element' },
      ],
      correct: 'b',
    },
    {
      id: 'q2',
      question: 'Vad betyder selektorn .container i CSS?',
      options: [
        { value: 'a', label: 'Ett element med taggen <container>' },
        { value: 'b', label: 'Alla element med id="container"' },
        { value: 'c', label: 'Alla element med class="container"' },
      ],
      correct: 'c',
    },
    {
      id: 'q3',
      question: 'Vilken CSS-syntax är rätt för att sätta bakgrundsfärg till blå?',
      options: [
        { value: 'a', label: 'background-color: blue;' },
        { value: 'b', label: 'bg-color = blue;' },
        { value: 'c', label: 'color-background: blue;' },
      ],
      correct: 'a',
    },
  ];

  const handleCheck = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        score++;
      }
    });
    setResult(`Du fick ${score} av ${questions.length} rätt!`);
  };

  return (
    <>
      <SEO
        title="CSS Tutorial - Learn Web Styling | Berghs Class"
        description="Master CSS (Cascading Style Sheets) for web design. Learn selectors, box model, flexbox, grid, responsive design, animations, and best practices. Includes interactive quiz and examples."
        path="/css"
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
          CSS: Cascading Style Sheets
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS is the language that transforms plain HTML into beautiful, styled web pages. Think of HTML as the skeleton of a webpage—it defines the structure. CSS is like the skin, clothes, and makeup—it controls how everything looks, from colors and fonts to spacing and layout.
        </Typography>

        <Box sx={{ mb: 4, p: 2, background: 'rgba(56,189,248,0.04)', border: '1px solid var(--border)', borderRadius: 3 }}>
          <Typography variant="h2" sx={{ fontSize: '24px', mb: 2, color: 'var(--text)' }}>
            CSS-quiz
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)' }}>
            Testa dina kunskaper om CSS genom att svara på frågorna nedan.
          </Typography>

          {questions.map((q) => (
            <Box key={q.id} sx={{ mb: 3 }}>
              <Typography variant="h3" sx={{ fontSize: '20px', mb: 1, color: 'var(--text)' }}>
                {q.id.replace('q', '')}. {q.question}
              </Typography>
              <FormControl>
                <RadioGroup
                  value={answers[q.id] || ''}
                  onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                >
                  {q.options.map((opt) => (
                    <FormControlLabel
                      key={opt.value}
                      value={opt.value}
                      control={<Radio />}
                      label={opt.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Box>
          ))}

          <Button variant="contained" onClick={handleCheck} sx={{ mb: 2 }}>
            Kolla resultat
          </Button>
          {result && (
            <Typography variant="body1" sx={{ color: 'var(--accent)', fontWeight: 600 }}>
              {result}
            </Typography>
          )}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How CSS Works
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS works by applying rules to HTML elements. Each rule has three parts:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <strong>Selector</strong> — tells the browser which elements to style (e.g., <code>p</code>, <code>.class-name</code>, <code>#id-name</code>)
          </li>
          <li>
            <strong>Property</strong> — what aspect to change (e.g., <code>color</code>, <code>margin</code>, <code>font-size</code>)
          </li>
          <li>
            <strong>Value</strong> — the specific setting (e.g., <code>blue</code>, <code>16px</code>, <code>Arial</code>)
          </li>
        </Box>

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
          <code style={{ color: '#bae6fd' }}>{`/* Example CSS rule */
p {
  color: blue;
  font-size: 16px;
  margin: 10px;
}`}</code>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          The Box Model
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Every HTML element is treated as a rectangular box with four layers:
        </Typography>
        <Box component="ol" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>
            <strong>Content</strong> — the actual text or image
          </li>
          <li>
            <strong>Padding</strong> — space inside the element, around the content
          </li>
          <li>
            <strong>Border</strong> — a line around the padding
          </li>
          <li>
            <strong>Margin</strong> — space outside the element, between elements
          </li>
        </Box>

        <Box sx={{ background: 'linear-gradient(135deg, rgba(217,70,239,0.08), rgba(56,189,248,0.08))', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Box sx={{ background: 'rgba(233,30,99,0.1)', border: '2px dashed var(--pink-400)', p: 2, m: 1.25, textAlign: 'center' }}>
            <Box sx={{ background: 'rgba(233,30,99,0.2)', p: 1.25, border: '1px solid var(--pink-600)' }}>
              Content
            </Box>
            <Typography variant="caption" sx={{ display: 'block', mt: 0.5, fontSize: '12px', color: 'var(--muted)' }}>
              Padding → Border → Margin
            </Typography>
          </Box>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Selectors: Targeting Elements
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS selectors let you choose which elements to style. Here are the most common types:
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Element Selector
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
          <code style={{ color: '#bae6fd' }}>{`p {
  color: red;
}
/* Styles all <p> elements */`}</code>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Class Selector
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
          <code style={{ color: '#bae6fd' }}>{`.highlight {
  background-color: yellow;
}
/* Styles elements with class="highlight" */`}</code>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          ID Selector
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
          <code style={{ color: '#bae6fd' }}>{`#header {
  font-size: 24px;
}
/* Styles the element with id="header" */`}</code>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Layout with Flexbox
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Flexbox is a powerful layout system that makes it easy to align and distribute space among items. It's perfect for creating flexible, responsive layouts.
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
          <code style={{ color: '#bae6fd' }}>{`.container {
  display: flex;
  justify-content: center;  /* horizontal alignment */
  align-items: center;      /* vertical alignment */
  gap: 20px;                /* space between items */
}`}</code>
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: 1.25, background: 'rgba(56,189,248,0.1)', border: '1px solid var(--border)', borderRadius: 2, p: 2.5, my: 2.5 }}>
          <Box sx={{ background: 'var(--pink-200)', p: 2, borderRadius: 2, flex: 1, textAlign: 'center' }}>Item 1</Box>
          <Box sx={{ background: 'var(--pink-200)', p: 2, borderRadius: 2, flex: 1, textAlign: 'center' }}>Item 2</Box>
          <Box sx={{ background: 'var(--pink-200)', p: 2, borderRadius: 2, flex: 1, textAlign: 'center' }}>Item 3</Box>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Layout with CSS Grid
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS Grid is ideal for creating two-dimensional layouts with rows and columns. It gives you precise control over both dimensions.
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
          <code style={{ color: '#bae6fd' }}>{`.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}`}</code>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1.25, my: 2.5 }}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} sx={{ background: 'var(--pink-100)', p: 2.5, borderRadius: 2, textAlign: 'center' }}>
              {num}
            </Box>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Responsive Design with Media Queries
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Media queries let you apply different styles based on screen size, making your website work on phones, tablets, and desktops.
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
          <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`/* Default styles for mobile */
.container {
  padding: 10px;
}

/* Styles for tablets and larger */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Styles for desktops */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
    max-width: 1200px;
  }
}`}</code>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          CSS Variables (Custom Properties)
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS variables let you store values that you can reuse throughout your stylesheet. Change the variable once, and it updates everywhere.
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
          <code style={{ color: '#bae6fd' }}>{`:root {
  --primary-color: #e91e63;
  --spacing: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}`}</code>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Transitions and Animations
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          CSS can create smooth transitions and animations without JavaScript. Use <code>transition</code> for simple changes and <code>@keyframes</code> for complex animations.
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
          <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`/* Simple transition */
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: red;
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}`}</code>
        </Paper>

        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Button
            variant="contained"
            sx={{
              background: 'linear-gradient(135deg, var(--pink-400), var(--pink-600))',
              color: 'white',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(233,30,99,0.3)',
              },
            }}
          >
            Hover me!
          </Button>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Common CSS Properties
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Here are some essential properties you'll use frequently:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><code>color</code> — text color</li>
          <li><code>background-color</code> — background color</li>
          <li><code>font-size</code> — text size</li>
          <li><code>font-family</code> — font type</li>
          <li><code>margin</code> — outer spacing</li>
          <li><code>padding</code> — inner spacing</li>
          <li><code>border</code> — border around element</li>
          <li><code>border-radius</code> — rounded corners</li>
          <li><code>display</code> — how element is displayed (block, inline, flex, grid)</li>
          <li><code>width</code> and <code>height</code> — element dimensions</li>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Best Practices
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><strong>Use classes, not IDs</strong> — Classes are reusable and have lower specificity, making them easier to override</li>
          <li><strong>Keep selectors simple</strong> — Avoid overly specific selectors like <code>div.container &gt; ul &gt; li</code></li>
          <li><strong>Use meaningful class names</strong> — <code>.card</code> is better than <code>.box1</code></li>
          <li><strong>Organize your CSS</strong> — Group related rules together (typography, layout, colors, etc.)</li>
          <li><strong>Use CSS variables</strong> — Store colors, spacing, and other values in variables for easy maintenance</li>
          <li><strong>Test in multiple browsers</strong> — Use browser developer tools to preview and debug</li>
          <li><strong>Start mobile-first</strong> — Design for small screens first, then add styles for larger screens</li>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Browser Developer Tools
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Every modern browser includes developer tools that let you:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Inspect elements and see their CSS</li>
          <li>Edit CSS live and see changes instantly</li>
          <li>Test different screen sizes</li>
          <li>Debug layout issues</li>
        </Box>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Press <code>F12</code> or right-click and select "Inspect" to open developer tools.
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default CssPage;


