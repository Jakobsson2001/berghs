import { useState } from 'react';
import { Container, Box, Typography, Paper, RadioGroup, FormControlLabel, Radio, FormControl, Button, Stepper, Step, StepLabel } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SchoolIcon from '@mui/icons-material/School';
import SEO from '../components/SEO';

const GitPage = () => {
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState<string>('');
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      label: 'Get Started',
      description: 'Learn the basics',
      icon: <PlayArrowIcon />,
      prompt: 'I\'m a beginner learning Git for version control. Can you explain how to initialize a Git repository, make my first commit, and understand the basic workflow? Please provide step-by-step instructions with examples I can follow.',
    },
    {
      label: 'Work Together',
      description: 'Branches & collaboration',
      icon: <AccountTreeIcon />,
      prompt: 'I need help understanding Git branches and how to collaborate with others. Can you explain how to create branches, switch between them, merge changes, and handle conflicts? Also, how do I push my code to GitHub and work with remote repositories?',
    },
    {
      label: 'Best Practices',
      description: 'Professional workflows',
      icon: <SchoolIcon />,
      prompt: 'I want to learn Git best practices for my backend project. Can you explain common workflows like feature branches, pull requests, and how to write good commit messages? Also, what are some common mistakes beginners make and how can I avoid them?',
    },
  ];

  const questions = [
    {
      q: 'What is GitHub, primarily?',
      a: ['A programming language', 'A website that hosts git repositories and adds collaboration tools', 'A database for large files', 'A code editor'],
      correct: 1,
    },
    {
      q: 'Which statement about a branch is true?',
      a: ['It permanently replaces the main branch', "It's a separate line of work you can merge later", 'It deletes your commit history', 'It only works for private repos'],
      correct: 1,
    },
    {
      q: 'What do Pull Requests (PRs) do?',
      a: ['They reset your repo to an older commit', 'They propose changes and enable reviews before merging', 'They automatically deploy to production', 'They create forks of other repositories'],
      correct: 1,
    },
    {
      q: 'Difference between Git and GitHub?',
      a: ['There is no difference', 'Git is local version control; GitHub is a hosted platform built around git', 'GitHub is a programming language; Git is a website', 'Git only works online; GitHub only works offline'],
      correct: 1,
    },
    {
      q: 'Which file tells git which paths to ignore?',
      a: ['README.md', '.gitignore', 'LICENSE', 'package.json'],
      correct: 1,
    },
    {
      q: 'What does "clone" mean?',
      a: ['Upload local changes to GitHub', 'Download a remote repository to your machine', 'Merge two branches', 'Create a new commit'],
      correct: 1,
    },
    {
      q: 'Which action typically triggers CI checks in GitHub Actions?',
      a: ['Opening a Pull Request', 'Editing a README locally', 'Closing an Issue', 'Creating a fork'],
      correct: 0,
    },
    {
      q: 'What is a fork used for?',
      a: ['To delete a repository', 'To copy a repository to your account so you can propose changes', 'To encrypt a repository', 'To create a new branch in the same repo'],
      correct: 1,
    },
  ];

  const checkAnswers = () => {
    let correct = 0;
    questions.forEach((item, idx) => {
      if (answers[`q${idx}`] && Number(answers[`q${idx}`]) === item.correct) {
        correct++;
      }
    });
    const emoji = correct === 8 ? '🔥 Perfect!' : correct >= 6 ? '👏 Great job!' : correct >= 4 ? '👍 Nice!' : '💡 Review and try again.';
    setScore(`Score: ${correct} / 8 — ${emoji}`);
  };

  const resetQuiz = () => {
    setAnswers({});
    setScore('');
  };

  return (
    <>
      <SEO
        title="Git Version Control Tutorial | Berghs Class"
        description="Learn Git fundamentals and version control workflows. Master essential commands, branching, merging, and collaboration. Includes interactive quiz to test your Git knowledge."
        path="/git"
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
          Friendly guide
        </Typography>
        <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
          GitHub, explained — the platform where software teams collaborate.
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
          GitHub is a cloud home for your code and its history. It builds on git, a version control system, so people can work together with branches, pull requests, and reviews — and automate builds with Actions.
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
          New here? Skim the sections, copy the starter commands, and prove yourself in the mini-quiz at the end. 🧠 Even if you don't code, this page will make you sound like you do.
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
          mb: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is GitHub?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          GitHub is an online platform for hosting git repositories. It adds collaboration tools (Issues, Pull Requests, code review), automation (Actions), and discovery (open-source) on top of git's version history.
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How GitHub works
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { title: 'Repositories', desc: 'Stores your code + history. Public or private. Default branch often main.' },
            { title: 'Branches', desc: 'Develop features without breaking main. Merge via PR.' },
            { title: 'Pull Requests', desc: 'Propose changes, show diffs, run checks, collect feedback.' },
            { title: 'Issues', desc: 'Track work; link PRs so progress auto-updates.' },
            { title: 'Actions', desc: 'CI/CD via YAML workflows that run on pushes/PRs.' },
            { title: 'Forks', desc: 'Copy a repo to your account to propose changes to projects you don\'t own.' },
          ].map((item) => (
            <Paper key={item.title} sx={{ p: 2, border: '1px solid var(--border)', borderRadius: 3 }}>
              <Typography variant="h3" sx={{ fontSize: '18px', mb: 1, color: 'var(--text)' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Key concepts & terms
        </Typography>
        <Box component="ul" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li><strong>Commit:</strong> a saved snapshot of your work.</li>
          <li><strong>Clone:</strong> download a remote repository to your machine.</li>
          <li><strong>Remote (origin):</strong> a pointer to the hosted repo on GitHub.</li>
          <li><strong>Merge:</strong> combine branch changes preserving history.</li>
          <li><strong>Rebase:</strong> replay commits on top of another branch.</li>
          <li><strong>.gitignore:</strong> tells git which paths not to track.</li>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Common commands
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
          <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`# configure once
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

# create & connect
mkdir my-app && cd my-app
git init
git branch -M main
git remote add origin <repo-url>

# everyday flow
git checkout -b feat/login
# ...edit files
git add .
git commit -m "feat: add login form"
git push -u origin feat/login

# open a Pull Request on GitHub`}</code>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Typical team workflow
        </Typography>
        <Box component="ol" sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <li>Pick issue → create branch from <code>main</code>.</li>
          <li>Commit small, focused changes with clear messages.</li>
          <li>Push branch and open a PR.</li>
          <li>CI checks run via Actions.</li>
          <li>Get review, address comments, and merge when approved.</li>
          <li>Delete branch; PR links back to the issue automatically.</li>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Git vs GitHub
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Git</strong> = local version control tool (offline OK).
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>GitHub</strong> = hosted platform around git (collab, reviews, automation).
        </Typography>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Learn Git with ChatGPT
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--text)', lineHeight: 1.7 }}>
          Use these prompts with ChatGPT to learn Git step by step. Each prompt is designed to help you understand different aspects of version control.
        </Typography>

        <Paper
          sx={{
            background: 'var(--panel)',
            border: '1px solid var(--border)',
            borderRadius: 3,
            p: 3,
            mb: 4,
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  StepIconComponent={() => (
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: activeStep === index ? 'var(--accent)' : 'var(--border)',
                        color: activeStep === index ? 'white' : 'var(--muted)',
                        transition: 'all 0.3s',
                      }}
                    >
                      {step.icon}
                    </Box>
                  )}
                >
                  <Box sx={{ textAlign: 'center', mt: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--text)', fontSize: '16px' }}>
                      {step.label}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--muted)', fontSize: '12px', display: 'block' }}>
                      {step.description}
                    </Typography>
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box sx={{ mt: 4, mb: 2 }}>
            <Box
              sx={{
                p: 3,
                background: 'rgba(2, 6, 23, 0.6)',
                border: '1px solid var(--border)',
                borderRadius: 2,
                minHeight: 200,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  mb: 1.5,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'var(--muted)',
                  fontWeight: 600,
                }}
              >
                💬 ChatGPT Prompt:
              </Typography>
              <Paper
                component="pre"
                sx={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 2,
                  p: 2,
                  overflow: 'auto',
                  border: '1px solid var(--border)',
                  mb: 2,
                }}
              >
                <code
                  style={{
                    color: '#bae6fd',
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  {steps[activeStep].prompt}
                </code>
              </Paper>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  navigator.clipboard.writeText(steps[activeStep].prompt);
                }}
              >
                Copy Prompt
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              variant="contained"
              onClick={() => setActiveStep(activeStep + 1)}
              disabled={activeStep === steps.length - 1}
            >
              Next
            </Button>
          </Box>
        </Paper>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Mini‑quiz
        </Typography>
        <Typography variant="body2" sx={{ mb: 3, color: 'var(--muted)' }}>
          Eight quick questions. Prove you're PR‑ready. 🐙💻
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, mb: 3 }}>
          {questions.map((item, idx) => (
            <Paper key={idx} sx={{ p: 2, border: '1px solid var(--border)', borderRadius: 3 }}>
              <Typography variant="h3" sx={{ fontSize: '16px', mb: 1, color: 'var(--text)' }}>
                Q{idx + 1}: {item.q}
              </Typography>
              <FormControl component="fieldset">
                <RadioGroup
                  value={answers[`q${idx}`] || ''}
                  onChange={(e) => setAnswers({ ...answers, [`q${idx}`]: e.target.value })}
                >
                  {item.a.map((opt, i) => (
                    <FormControlLabel
                      key={i}
                      value={String(i)}
                      control={<Radio />}
                      label={opt}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Paper>
          ))}
        </Box>

        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', flexWrap: 'wrap', mb: 2 }}>
          <Button variant="contained" onClick={checkAnswers}>
            Check answers
          </Button>
          <Button variant="outlined" onClick={resetQuiz}>
            Try again
          </Button>
          {score && (
            <Typography sx={{ fontWeight: 700, color: 'var(--text)' }}>
              {score}
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default GitPage;


