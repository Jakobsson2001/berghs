import { useState } from 'react';
import { Container, Box, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

const JavaScriptPage = () => {
  const [helloText, setHelloText] = useState('');
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const quizData = [
    {
      q: 'What is JavaScript used for on a web page?',
      options: [
        'To build the basic structure',
        'To style the page and choose colors',
        'To make the page react and do things',
        'To store the website on the server',
      ],
      answerIdx: 2,
    },
    {
      q: 'In the house metaphor on this page, JavaScript is compared to:',
      options: [
        'The walls and the floor',
        'The paint and the furniture',
        'The electricity',
        'The front door',
      ],
      answerIdx: 2,
    },
    {
      q: 'Which of these is something you can build with JavaScript?',
      options: [
        'A printed book',
        'A web app',
        'A paper poster',
        'A cardboard box',
      ],
      answerIdx: 1,
    },
  ];

  const handleAnswer = (selectedIdx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(selectedIdx);
    const isCorrect = selectedIdx === quizData[quizIndex].answerIdx;
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (quizIndex < quizData.length - 1) {
        setQuizIndex(quizIndex + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuizIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

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
              Beginner Guide
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              Learn JavaScript
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              The language that makes web pages come alive. Build interactivity step by step with approachable examples.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, mt: 2 }}>
              <Button variant="contained" component="a" href="#first-example">
                Get Started
              </Button>
              <Button variant="outlined" component="a" href="#resources">
                Read More
              </Button>
            </Box>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#g1)" opacity="0.18" />
              <circle cx="70" cy="120" r="34" fill="#f0abfc" opacity="0.9" />
              <circle cx="160" cy="80" r="46" fill="#60a5fa" opacity="0.85" />
              <rect x="110" y="120" width="90" height="28" rx="8" fill="#f472b6" opacity="0.8" />
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
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          JavaScript
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Use this page to plan your JavaScript lessons. Consider variables, functions, DOM, events, fetch, and modules.
        </Typography>

        <Typography variant="h1" sx={{ fontSize: '34px', mb: 2, color: 'var(--text)' }}>
          Get Started with JavaScript
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is JavaScript?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          JavaScript is the language that makes web pages come alive — the programming language that web browsers understand.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          It lets you write small instructions that make things happen on the page instantly, without reloading.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          HTML builds the structure, CSS makes it look nice — and JavaScript makes it react.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          It can make buttons clickable, lights turn on, or even start a game.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How does it work with HTML and CSS?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Imagine you're building a house:
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><strong>HTML</strong> is the walls and the floor.</li>
          <li><strong>CSS</strong> is the paint, the lights, and the furniture.</li>
          <li><strong>JavaScript</strong> is the electricity — it makes things work when you flip the switch.</li>
        </Box>

        <Typography id="first-example" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          A first example
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Let's say you have a button on your page. With JavaScript, you can write: "When someone clicks this button — show the text <em>Hello, world!</em>". That's how easy it is to start creating interaction.
        </Typography>

        <Box sx={{ margin: '16px 0', p: 2, border: '1px solid var(--border)', borderRadius: 3, background: 'rgba(56,189,248,0.04)' }}>
          <Button
            variant="contained"
            onClick={() => setHelloText('Hello, world!')}
            sx={{ mb: 1.5 }}
          >
            Click me
          </Button>
          {helloText && (
            <Typography sx={{ color: 'var(--muted)', mt: 1.5 }}>
              {helloText}
            </Typography>
          )}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What can you make with JavaScript?
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Small games</li>
          <li>Web apps</li>
          <li>Animations</li>
          <li>Calculators</li>
        </Box>

        <Typography id="resources" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Tips for getting started
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Try examples on <MuiLink href="https://www.w3schools.com/js/" target="_blank" rel="noopener noreferrer">W3Schools</MuiLink></li>
          <li>Explore <MuiLink href="https://developer.mozilla.org/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">MDN Web Docs</MuiLink></li>
          <li>Start small — change one thing at a time and see what happens.</li>
        </Box>

        <Box sx={{ background: 'linear-gradient(135deg, rgba(217,70,239,0.08), rgba(56,189,248,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mt: 4, textAlign: 'center' }}>
          <Typography sx={{ mb: 1.5, fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            💡 Ready for the next step?
          </Typography>
          <Typography sx={{ mb: 2, color: 'var(--muted)' }}>
            Learn how frameworks like React, Tailwind, and MUI help you build faster.
          </Typography>
          <Button variant="contained" component={Link} to="/frameworks">
            Explore Frameworks →
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 3, mb: 4 }}>
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
          <Typography variant="h2" sx={{ fontSize: '24px', mb: 2, color: 'var(--text)' }}>
            Quick JavaScript Quiz
          </Typography>
          {!showResult ? (
            <Box>
              <Typography variant="h3" sx={{ fontSize: '20px', mb: 2, color: 'var(--text)' }}>
                {quizData[quizIndex].q}
              </Typography>
              <Box sx={{ display: 'grid', gap: 1.25 }}>
                {quizData[quizIndex].options.map((opt, i) => {
                  const isSelected = selectedAnswer === i;
                  const isCorrect = i === quizData[quizIndex].answerIdx;
                  const showFeedback = selectedAnswer !== null;

                  return (
                    <Button
                      key={i}
                      variant="outlined"
                      onClick={() => handleAnswer(i)}
                      disabled={selectedAnswer !== null}
                      sx={{
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        ...(showFeedback && isCorrect && {
                          background: 'rgba(34,197,94,0.15)',
                          borderColor: 'rgba(34,197,94,0.6)',
                          color: '#16a34a',
                          fontWeight: 700,
                        }),
                        ...(showFeedback && isSelected && !isCorrect && {
                          background: 'rgba(239,68,68,0.15)',
                          borderColor: 'rgba(239,68,68,0.6)',
                          color: '#dc2626',
                          fontWeight: 700,
                        }),
                      }}
                    >
                      {String.fromCharCode(97 + i)}) {opt}
                    </Button>
                  );
                })}
              </Box>
              <Typography variant="body2" sx={{ mt: 1.25, color: 'var(--muted)', fontSize: '14px' }}>
                {quizIndex + 1} / {quizData.length}
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="h3" sx={{ fontSize: '20px', mb: 1, color: 'var(--text)' }}>
                Great job!
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)' }}>
                You scored {score} / {quizData.length}.
              </Typography>
              <Button variant="contained" onClick={resetQuiz}>
                Try Again
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default JavaScriptPage;


