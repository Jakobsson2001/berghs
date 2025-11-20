import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Button, Alert, CircularProgress, Grid } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { API_BASE_URL } from '../config/api';

const API_URL = `${API_BASE_URL}/api`;

interface Card {
  id: number;
  character: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    if (gameStarted) {
      fetchGameState();
    }
  }, [gameStarted]);

  const fetchGameState = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/memory/state`);
      if (!response.ok) {
        throw new Error('Failed to fetch game state. Is the backend running?');
      }
      const data = await response.json();
      setCards(data.cards || []);
      setMatches(data.matches || 0);
      setMoves(data.moves || 0);
    } catch (error) {
      console.error('Error fetching game state:', error);
      setError('Cannot connect to backend. Make sure Flask is running.');
    } finally {
      setLoading(false);
    }
  };

  const startNewGame = async () => {
    setLoading(true);
    setError(null);
    setFlippedCards([]);
    setMatches(0);
    setMoves(0);
    try {
      const response = await fetch(`${API_URL}/memory/new`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setCards(data.cards || []);
        setGameStarted(true);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to start game');
      }
    } catch (error) {
      console.error('Error starting game:', error);
      setError('Failed to start game. Check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = async (cardId: number) => {
    const card = cards.find(c => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched || flippedCards.length >= 2) {
      return;
    }

    // Flip the card locally first
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Update local state
    const updatedCards = cards.map(c =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);

    // Always send flip request to backend (for both first and second card)
    try {
      const response = await fetch(`${API_URL}/memory/flip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cardId }),
      });

      if (response.ok) {
        const data = await response.json();
        setCards(data.cards);
        setMatches(data.matches);
        setMoves(data.moves);
        
        // If two cards are flipped, check for match
        if (newFlippedCards.length === 2) {
          if (data.isMatch) {
            // Match found - keep cards matched
            setFlippedCards([]);
          } else {
            // No match - flip cards back after delay
            setTimeout(async () => {
              try {
                const resetResponse = await fetch(`${API_URL}/memory/reset`, {
                  method: 'POST',
                });
                if (resetResponse.ok) {
                  const resetData = await resetResponse.json();
                  setCards(resetData.cards);
                  setFlippedCards([]);
                }
              } catch (error) {
                console.error('Error resetting cards:', error);
                // Fallback: manually reset flipped state using current data
                setCards(prevCards => 
                  prevCards.map(c =>
                    newFlippedCards.includes(c.id) && !c.isMatched
                      ? { ...c, isFlipped: false }
                      : c
                  )
                );
                setFlippedCards([]);
              }
            }, 1000);
          }
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to flip card');
        // Revert local state on error - flip back the card we just flipped
        setCards(prevCards => 
          prevCards.map(c => c.id === cardId ? { ...c, isFlipped: false } : c)
        );
        setFlippedCards(prev => prev.filter(id => id !== cardId));
      }
    } catch (error) {
      console.error('Error flipping card:', error);
      setError('Failed to flip card. Check backend connection.');
      // Revert local state on error - flip back the card we just flipped
      setCards(prevCards => 
        prevCards.map(c => c.id === cardId ? { ...c, isFlipped: false } : c)
      );
      setFlippedCards(prev => prev.filter(id => id !== cardId));
    }
  };

  const resetGame = async () => {
    if (!confirm('Reset the game?')) return;
    await startNewGame();
  };

  const allMatched = cards.length > 0 && cards.every(card => card.isMatched);

  return (
    <Box>
      <Typography variant="h2" sx={{ fontSize: '28px', mb: 2, color: 'var(--text)' }}>
        🧠 Memory Game
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted)', fontSize: '17px' }}>
        Match pairs of cards in a 2x5 grid. The backend tracks your progress!
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {allMatched && (
        <Paper
          sx={{
            p: 4,
            mb: 3,
            background: 'linear-gradient(135deg, rgba(16,185,129,0.95), rgba(5,150,105,0.95), rgba(34,197,94,0.95))',
            color: 'white',
            textAlign: 'center',
            borderRadius: 3,
            boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
            animation: 'pulse 2s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': {
                transform: 'scale(1)',
                boxShadow: '0 8px 32px rgba(16,185,129,0.4)',
              },
              '50%': {
                transform: 'scale(1.02)',
                boxShadow: '0 12px 40px rgba(16,185,129,0.6)',
              },
            },
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              mb: 2,
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
          >
            🎉🎊 Congratulations! 🎊🎉
          </Typography>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, opacity: 0.95 }}>
            You Won! 🏆
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', opacity: 0.9, mb: 1 }}>
            You completed the game in <strong>{moves}</strong> {moves === 1 ? 'move' : 'moves'}!
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.85, fontStyle: 'italic' }}>
            {moves <= 10 ? '🌟 Outstanding performance! 🌟' : 
             moves <= 15 ? '✨ Great job! ✨' : 
             '👍 Well done! 👍'}
          </Typography>
        </Paper>
      )}

      {!gameStarted ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={startNewGame}
            disabled={loading}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              '&:hover': {
                background: 'linear-gradient(135deg, #764ba2, #667eea)',
              },
            }}
          >
            {loading ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                Starting...
              </>
            ) : (
              '🎮 Start New Game'
            )}
          </Button>
        </Box>
      ) : (
        <>
          <Paper sx={{ p: 2, mb: 3, background: 'rgba(59,130,246,0.05)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                  Matches: <strong style={{ color: 'var(--text)' }}>{matches}</strong> / 5
                </Typography>
                <Typography variant="body2" sx={{ color: 'var(--muted)', mt: 0.5 }}>
                  Moves: <strong style={{ color: 'var(--text)' }}>{moves}</strong>
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                onClick={resetGame}
                disabled={loading}
                startIcon={<RestartAltIcon />}
                color="error"
              >
                Reset
              </Button>
            </Box>
          </Paper>

          {loading && cards.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2, color: 'var(--muted)' }}>
                Loading game...
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={2} sx={{ mb: 3 }}>
              {cards.map((card) => (
                <Grid 
                  item 
                  xs={6} 
                  sm={4} 
                  md={2.4}
                  sx={{
                    '@media (min-width: 900px)': {
                      flexBasis: 'calc(20% - 16px)',
                      maxWidth: 'calc(20% - 16px)',
                    },
                  }}
                  key={card.id}
                >
                  <Paper
                    onClick={() => handleCardClick(card.id)}
                    sx={{
                      aspectRatio: '1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: card.isMatched || card.isFlipped || flippedCards.length >= 2 ? 'default' : 'pointer',
                      background: card.isMatched
                        ? 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(5,150,105,0.2))'
                        : card.isFlipped
                        ? 'linear-gradient(135deg, rgba(102,126,234,0.1), rgba(118,75,162,0.1))'
                        : 'rgba(0,0,0,0.05)',
                      border: card.isMatched
                        ? '2px solid #10b981'
                        : card.isFlipped
                        ? '2px solid #667eea'
                        : '2px solid var(--border)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: card.isMatched || card.isFlipped || flippedCards.length >= 2 ? 'none' : 'scale(1.05)',
                        boxShadow: card.isMatched || card.isFlipped || flippedCards.length >= 2 ? 'none' : '0 4px 12px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    {card.isFlipped || card.isMatched ? (
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: '3rem',
                          fontWeight: 'bold',
                          color: 'var(--text)',
                        }}
                      >
                        {card.character}
                      </Typography>
                    ) : (
                      <Typography
                        variant="h3"
                        sx={{
                          fontSize: '2rem',
                          color: 'var(--muted)',
                        }}
                      >
                        ?
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}

      <Box
        sx={{
          mt: 4,
          p: 2,
          background: 'rgba(217,70,239,0.08)',
          border: '1px solid var(--border)',
          borderRadius: 2,
        }}
      >
        <Typography variant="body2" sx={{ color: 'var(--text)', mb: 1, fontWeight: 600 }}>
          💡 How it works:
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
          Click cards to flip them and find matching pairs. The backend tracks which cards are flipped,
          matched, and your game progress. All game state is stored on the server!
        </Typography>
      </Box>
    </Box>
  );
};

export default MemoryGame;

