/*
Plan:
1. Create a BlackjackPage with helper utilities (deck setup, scoring, dealer logic) and a clear UI.
2. Register the page under the /blackjack route so it becomes part of the existing router.
3. Expose the page through the main navigation so students can reach it from anywhere.
*/

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
type Suit = '♠' | '♥' | '♦' | '♣';

interface Card {
  rank: Rank;
  suit: Suit;
}

type GameStatus =
  | 'PLAYER_TURN'
  | 'DEALER_TURN'
  | 'PLAYER_BUST'
  | 'DEALER_BUST'
  | 'PLAYER_WIN'
  | 'DEALER_WIN'
  | 'PUSH';

const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits: Suit[] = ['♠', '♥', '♦', '♣'];

const createDeck = (): Card[] =>
  suits.flatMap((suit) => ranks.map((rank) => ({ rank, suit } as Card)));

const shuffleDeck = (cards: Card[]): Card[] => {
  const deck = [...cards];
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

const getCardValue = (rank: Rank): number => {
  if (rank === 'A') return 11;
  if (['K', 'Q', 'J'].includes(rank)) return 10;
  return Number(rank);
};

const calculateHandValue = (hand: Card[]): number => {
  let total = 0;
  let aces = 0;

  hand.forEach((card) => {
    total += getCardValue(card.rank);
    if (card.rank === 'A') {
      aces += 1;
    }
  });

  // Convert aces from 11 to 1 as needed so we avoid busting
  while (total > 21 && aces > 0) {
    total -= 10;
    aces -= 1;
  }

  return total;
};

const Hand = ({
  title,
  hand,
  hideHoleCard = false,
}: {
  title: string;
  hand: Card[];
  hideHoleCard?: boolean;
}) => {
  const visibleTotal = useMemo(() => calculateHandValue(hand), [hand]);
  const displayTotal = hideHoleCard ? '??' : visibleTotal;

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid var(--border)',
        background: 'var(--panel)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" sx={{ fontSize: '24px', color: 'var(--text)' }}>
          {title}
        </Typography>
        <Chip
          label={`Total: ${displayTotal}`}
          color="primary"
          sx={{ fontWeight: 600, backgroundColor: 'var(--accent)', color: '#fff' }}
        />
      </Stack>

      <Stack direction="row" flexWrap="wrap" gap={1.5}>
        {hand.map((card, index) => {
          const isHidden = hideHoleCard && index === 1;
          return (
            <Box
              key={`${card.rank}-${card.suit}-${index}`}
              sx={{
                width: 64,
                height: 96,
                borderRadius: 2,
                border: '2px solid var(--border)',
                background: isHidden ? 'var(--muted)' : '#fff',
                color: isHidden ? '#fff' : 'var(--text)',
                display: 'grid',
                placeItems: 'center',
                fontWeight: 700,
                fontSize: '20px',
                position: 'relative',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              {isHidden ? '🂠' : (
                <Stack alignItems="center" spacing={0}>
                  <span>{card.rank}</span>
                  <span>{card.suit}</span>
                </Stack>
              )}
            </Box>
          );
        })}
      </Stack>
    </Paper>
  );
};

const BlackjackPage = () => {
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('PLAYER_TURN');
  const [message, setMessage] = useState('Click "New Game" to start playing.');
  const [dealerHidden, setDealerHidden] = useState(true);

  const dealInitialHands = useCallback((shuffledDeck: Card[]) => {
    const workingDeck = [...shuffledDeck];
    const player = [workingDeck.pop()!, workingDeck.pop()!];
    const dealer = [workingDeck.pop()!, workingDeck.pop()!];

    setDeck(workingDeck);
    setPlayerHand(player);
    setDealerHand(dealer);
    setGameStatus('PLAYER_TURN');
    setDealerHidden(true);
    setMessage('Hit for another card or Stand to let the dealer play.');
  }, []);

  const startNewGame = useCallback(() => {
    const freshDeck = shuffleDeck(createDeck());
    dealInitialHands(freshDeck);
  }, [dealInitialHands]);

  useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const isGameOver = gameStatus !== 'PLAYER_TURN' && gameStatus !== 'DEALER_TURN';

  const finishDealerTurn = (currentDeck: Card[], currentDealerHand: Card[]) => {
    let workingDeck = [...currentDeck];
    let workingDealer = [...currentDealerHand];

    while (calculateHandValue(workingDealer) < 17 && workingDeck.length > 0) {
      workingDealer = [...workingDealer, workingDeck.pop()!];
    }

    const playerTotal = calculateHandValue(playerHand);
    const dealerTotal = calculateHandValue(workingDealer);

    if (dealerTotal > 21) {
      setGameStatus('DEALER_BUST');
      setMessage('Dealer busts 💥 — you win!');
    } else if (dealerTotal > playerTotal) {
      setGameStatus('DEALER_WIN');
      setMessage('Dealer wins. Try again!');
    } else if (dealerTotal < playerTotal) {
      setGameStatus('PLAYER_WIN');
      setMessage('You win! 🎉');
    } else {
      setGameStatus('PUSH');
      setMessage('It’s a tie! Push.');
    }

    setDeck(workingDeck);
    setDealerHand(workingDealer);
  };

  const handleHit = () => {
    if (gameStatus !== 'PLAYER_TURN') return;
    if (deck.length === 0) return;

    const workingDeck = [...deck];
    const nextCard = workingDeck.pop()!;
    const newHand = [...playerHand, nextCard];

    setDeck(workingDeck);
    setPlayerHand(newHand);

    const total = calculateHandValue(newHand);
    if (total > 21) {
      setGameStatus('PLAYER_BUST');
      setMessage('You busted! Dealer wins.');
      setDealerHidden(false);
    }
  };

  const handleStand = () => {
    if (gameStatus !== 'PLAYER_TURN') return;
    setDealerHidden(false);
    setGameStatus('DEALER_TURN');
    finishDealerTurn(deck, dealerHand);
  };

  const statusChip = useMemo(() => {
    switch (gameStatus) {
      case 'PLAYER_BUST':
        return { label: 'Player Bust', color: 'error' as const };
      case 'DEALER_BUST':
        return { label: 'Dealer Bust', color: 'success' as const };
      case 'PLAYER_WIN':
        return { label: 'You Win', color: 'success' as const };
      case 'DEALER_WIN':
        return { label: 'Dealer Wins', color: 'error' as const };
      case 'PUSH':
        return { label: 'Push', color: 'warning' as const };
      case 'DEALER_TURN':
        return { label: 'Dealer Playing', color: 'info' as const };
      default:
        return { label: 'Your Turn', color: 'primary' as const };
    }
  }, [gameStatus]);

  return (
    <Container maxWidth="lg" sx={{ px: 2, py: 4 }}>
      <Box
        sx={{
          background: 'var(--panel)',
          borderRadius: 5,
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
          p: { xs: 3, md: 5 },
        }}
      >
        <Stack spacing={1}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h1" sx={{ fontSize: '34px', color: 'var(--text)', fontWeight: 800 }}>
              ♠ Blackjack
            </Typography>
            <Chip label={statusChip.label} color={statusChip.color} sx={{ fontWeight: 600 }} />
          </Stack>
          <Typography variant="body1" sx={{ color: 'var(--muted)', fontSize: '17px' }}>
            Practice decision making with a simplified Blackjack game built in React.
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
            {message}
          </Typography>
        </Stack>

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Hand title="Dealer" hand={dealerHand} hideHoleCard={dealerHidden} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Hand title="Player" hand={playerHand} />
          </Grid>
        </Grid>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mt={4}>
          <Button variant="contained" color="success" onClick={startNewGame}>
            New Game
          </Button>
          <Button variant="contained" onClick={handleHit} disabled={isGameOver}>
            Hit
          </Button>
          <Button variant="outlined" onClick={handleStand} disabled={isGameOver}>
            Stand
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default BlackjackPage;


