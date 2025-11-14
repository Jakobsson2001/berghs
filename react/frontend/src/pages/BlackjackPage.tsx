/*
Plan:
1. Extend the Blackjack game with betting + bankroll tracking (persisted via localStorage).
2. Support multiple player hands (split) and enhanced payouts (blackjack 3:2, standard 1:1).
3. Layer these on top of the existing UI so routing/components stay intact and easy to follow.
*/

import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
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

type GamePhase = 'BETTING' | 'PLAYER_TURN' | 'DEALER_TURN' | 'ROUND_COMPLETE';

interface PlayerHand {
  cards: Card[];
  bet: number;
  status: 'PLAYING' | 'STAND' | 'BUST' | 'WIN' | 'LOSE' | 'PUSH' | 'BLACKJACK';
  label: string;
  isBlackjack?: boolean;
}

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

const isBlackjack = (hand: Card[]) => hand.length === 2 && calculateHandValue(hand) === 21;

const BANKROLL_STORAGE_KEY = 'blackjack-bankroll';

const loadBankroll = () => {
  if (typeof window === 'undefined') return 1000;
  const stored = window.localStorage.getItem(BANKROLL_STORAGE_KEY);
  return stored ? Number(stored) : 1000;
};

const saveBankroll = (value: number) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(BANKROLL_STORAGE_KEY, String(value));
};

const formatCurrency = (value: number) => `💰 ${value.toFixed(0)}`;

const Hand = ({
  title,
  hand,
  hideHoleCard = false,
  highlight = false,
  subtitle,
  status,
}: {
  title: string;
  hand: Card[];
  hideHoleCard?: boolean;
  highlight?: boolean;
  subtitle?: string;
  status?: PlayerHand['status'];
}) => {
  const visibleTotal = useMemo(() => calculateHandValue(hand), [hand]);
  const displayTotal = hideHoleCard ? '??' : visibleTotal;
  const statusMap: Record<PlayerHand['status'], { label: string; color: 'default' | 'error' | 'success' | 'warning' | 'primary' }> = {
    PLAYING: { label: 'Your move', color: 'primary' },
    STAND: { label: 'Standing', color: 'default' },
    BUST: { label: 'Bust', color: 'error' },
    WIN: { label: 'Win', color: 'success' },
    LOSE: { label: 'Lose', color: 'error' },
    PUSH: { label: 'Push', color: 'warning' },
    BLACKJACK: { label: 'Blackjack', color: 'success' },
  };
  const statusChip = status ? statusMap[status] : undefined;

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        border: '1px solid var(--border)',
        background: highlight ? 'rgba(2,6,23,0.06)' : 'var(--panel)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h4" sx={{ fontSize: '24px', color: 'var(--text)' }}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          {subtitle && (
            <Chip
              size="small"
              label={subtitle}
              sx={{ fontWeight: 600, backgroundColor: 'rgba(2,6,23,0.08)' }}
            />
          )}
          {statusChip && (
            <Chip
              size="small"
              label={statusChip.label}
              color={statusChip.color}
              sx={{ fontWeight: 600 }}
            />
          )}
          <Chip
            label={`Total: ${displayTotal}`}
            color="primary"
            sx={{ fontWeight: 600, backgroundColor: 'var(--accent)', color: '#fff' }}
          />
        </Stack>
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
  const [playerHands, setPlayerHands] = useState<PlayerHand[]>([]);
  const [currentHandIndex, setCurrentHandIndex] = useState(0);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>('PLAYER_TURN');
  const [message, setMessage] = useState('Place a bet to start playing.');
  const [dealerHidden, setDealerHidden] = useState(true);
  const [bankroll, setBankroll] = useState<number>(() => loadBankroll());
  const [currentBet, setCurrentBet] = useState(0);
  const [customBet, setCustomBet] = useState('');
  const [gamePhase, setGamePhase] = useState<GamePhase>('BETTING');

  useEffect(() => {
    saveBankroll(bankroll);
  }, [bankroll]);

  const resetRoundState = () => {
    setPlayerHands([]);
    setDealerHand([]);
    setDealerHidden(true);
    setCurrentHandIndex(0);
    setGameStatus('PLAYER_TURN');
    setDeck([]);
  };

  const dealInitialHands = useCallback((shuffledDeck: Card[]) => {
    const workingDeck = [...shuffledDeck];
    const playerCards = [workingDeck.pop()!, workingDeck.pop()!];
    const dealerCards = [workingDeck.pop()!, workingDeck.pop()!];

    const firstHand: PlayerHand = {
      cards: playerCards,
      bet: currentBet,
      status: 'PLAYING',
      label: 'Hand 1',
      isBlackjack: isBlackjack(playerCards),
    };

    setDeck(workingDeck);
    setPlayerHands([firstHand]);
    setDealerHand(dealerCards);
    setGameStatus('PLAYER_TURN');
    setDealerHidden(true);
    setMessage('Hit, Stand or Split (if available).');
    setCurrentHandIndex(0);
    setGamePhase('PLAYER_TURN');
  }, [currentBet]);

  const startRound = useCallback(() => {
    if (currentBet <= 0) {
      setMessage('Please select a bet before dealing.');
      return;
    }
    if (bankroll < currentBet) {
      setMessage('Insufficient bankroll for that bet.');
      return;
    }

    const freshDeck = shuffleDeck(createDeck());
    setBankroll((prev) => prev - currentBet); // remove bet upfront
    resetRoundState();
    dealInitialHands(freshDeck);
  }, [bankroll, currentBet, dealInitialHands]);

  const isGameOver = gamePhase === 'ROUND_COMPLETE';

  const finishDealerTurn = (currentDeck: Card[], currentDealerHand: Card[]) => {
    let workingDeck = [...currentDeck];
    let workingDealer = [...currentDealerHand];

    while (calculateHandValue(workingDealer) < 17 && workingDeck.length > 0) {
      workingDealer = [...workingDealer, workingDeck.pop()!];
    }

    settleHands(workingDealer);
    setDeck(workingDeck);
    setDealerHand(workingDealer);
  };

  const updateHand = (handIndex: number, updater: (hand: PlayerHand) => PlayerHand) => {
    let nextHands: PlayerHand[] = [];
    setPlayerHands((prev) => {
      nextHands = prev.map((hand, index) => (index === handIndex ? updater(hand) : hand));
      return nextHands;
    });
    return nextHands;
  };

  const advanceToNextHand = (handsParam?: PlayerHand[]) => {
    const hands = handsParam ?? playerHands;
    const nextIndex = hands.findIndex(
      (hand, index) => index > currentHandIndex && hand.status === 'PLAYING',
    );
    if (nextIndex !== -1) {
      setCurrentHandIndex(nextIndex);
      setMessage(`Playing ${hands[nextIndex].label}. Hit or Stand.`);
      return;
    }

    const hasActiveHand = hands.some((hand) => hand.status !== 'BUST');
    if (hasActiveHand) {
      setDealerHidden(false);
      setGamePhase('DEALER_TURN');
      finishDealerTurn(deck, dealerHand);
    } else {
      setMessage('All hands busted. Dealer wins by default.');
      setGameStatus('DEALER_WIN');
      setGamePhase('ROUND_COMPLETE');
    }
  };

  const handleHit = () => {
    if (gamePhase !== 'PLAYER_TURN') return;
    const activeHand = playerHands[currentHandIndex];
    if (!activeHand || deck.length === 0) return;

    const workingDeck = [...deck];
    const nextCard = workingDeck.pop()!;

    setDeck(workingDeck);
    const updatedHands = updateHand(currentHandIndex, (hand) => ({
      ...hand,
      cards: [...hand.cards, nextCard],
    }));

    const newTotal = calculateHandValue(updatedHands[currentHandIndex].cards);
    if (newTotal > 21) {
      const bustedHands = updateHand(currentHandIndex, (hand) => ({ ...hand, status: 'BUST' }));
      setMessage(`${activeHand.label} busts. Moving to the next hand.`);
      advanceToNextHand(bustedHands);
    }
  };

  const handleStand = () => {
    if (gamePhase !== 'PLAYER_TURN') return;
    const updatedHands = updateHand(currentHandIndex, (hand) => ({ ...hand, status: 'STAND' }));
    const label = updatedHands[currentHandIndex]?.label ?? `Hand ${currentHandIndex + 1}`;
    setMessage(`${label} stands. Switching hands.`);
    advanceToNextHand(updatedHands);
  };

  const handleSplit = () => {
    const activeHand = playerHands[0];
    if (
      !activeHand ||
      gamePhase !== 'PLAYER_TURN' ||
      playerHands.length > 1 ||
      activeHand.cards.length !== 2 ||
      bankroll < currentBet
    ) {
      return;
    }

    const [firstCard, secondCard] = activeHand.cards;
    if (getCardValue(firstCard.rank) !== getCardValue(secondCard.rank)) {
      return;
    }

    if (deck.length < 2) return;

    const workingDeck = [...deck];
    const firstNewCard = workingDeck.pop()!;
    const secondNewCard = workingDeck.pop()!;

    const splitHands: PlayerHand[] = [
      {
        cards: [firstCard, firstNewCard],
        bet: currentBet,
        status: 'PLAYING',
        label: 'Hand 1',
      },
      {
        cards: [secondCard, secondNewCard],
        bet: currentBet,
        status: 'PLAYING',
        label: 'Hand 2',
      },
    ];

    setDeck(workingDeck);
    setPlayerHands(splitHands);
    setCurrentHandIndex(0);
    setBankroll((prev) => prev - currentBet); // second bet required for split
    setMessage('Hands split! Play Hand 1, then Hand 2.');
  };

  const settleHands = (finalDealerHand: Card[]) => {
    const dealerTotal = calculateHandValue(finalDealerHand);
    const dealerHasBlackjack = isBlackjack(finalDealerHand);

    let winnings = 0;
    let hasPlayerWin = false;
    let hasDealerWin = false;
    let hasPush = false;

    setPlayerHands((prevHands) =>
      prevHands.map((hand) => {
        const playerTotal = calculateHandValue(hand.cards);
        let finalStatus = hand.status;
        let payout = 0;

        if (hand.status === 'BUST') {
          finalStatus = 'LOSE';
          hasDealerWin = true;
        } else if (hand.isBlackjack && hand.cards.length === 2) {
          if (dealerHasBlackjack) {
            finalStatus = 'PUSH';
            payout = hand.bet;
            hasPush = true;
          } else {
            finalStatus = 'BLACKJACK';
            payout = hand.bet * 2.5;
            hasPlayerWin = true;
          }
        } else if (dealerTotal > 21) {
          finalStatus = 'WIN';
          payout = hand.bet * 2;
          hasPlayerWin = true;
        } else if (dealerHasBlackjack && hand.cards.length === 2 && isBlackjack(hand.cards)) {
          finalStatus = 'PUSH';
          payout = hand.bet;
          hasPush = true;
        } else if (playerTotal > dealerTotal) {
          finalStatus = 'WIN';
          payout = hand.bet * 2;
          hasPlayerWin = true;
        } else if (playerTotal < dealerTotal) {
          finalStatus = 'LOSE';
          hasDealerWin = true;
        } else {
          finalStatus = 'PUSH';
          payout = hand.bet;
          hasPush = true;
        }

        winnings += payout;
        return { ...hand, status: finalStatus };
      }),
    );

    if (winnings > 0) {
      setBankroll((prev) => prev + winnings);
    }

    if (hasPlayerWin && !hasDealerWin) {
      setGameStatus(dealerTotal > 21 ? 'DEALER_BUST' : 'PLAYER_WIN');
    } else if (!hasPlayerWin && hasDealerWin) {
      setGameStatus('DEALER_WIN');
    } else if (hasPlayerWin && hasDealerWin) {
      setGameStatus('PUSH');
    } else if (hasPush) {
      setGameStatus('PUSH');
    } else {
      setGameStatus('PUSH');
    }

    setGamePhase('ROUND_COMPLETE');
    setMessage('Round complete. Adjust your bet and deal again!');
  };

  useEffect(() => {
    if (gamePhase !== 'PLAYER_TURN') return;
    const activeHand = playerHands[0];
    if (!activeHand) return;

    const dealerHasBlackjack = isBlackjack(dealerHand);
    if (activeHand.isBlackjack) {
      if (dealerHasBlackjack) {
        setPlayerHands((prev) => prev.map((hand) => ({ ...hand, status: 'PUSH' })));
        setBankroll((prev) => prev + currentBet);
        setMessage('Both player and dealer have Blackjack. Push!');
      } else {
        setPlayerHands((prev) => prev.map((hand) => ({ ...hand, status: 'BLACKJACK' })));
        setBankroll((prev) => prev + currentBet * 2.5);
        setMessage('Blackjack! Paid 3:2.');
        setGameStatus('PLAYER_WIN');
      }
      setGamePhase('ROUND_COMPLETE');
      setDealerHidden(false);
    } else if (dealerHasBlackjack) {
      setDealerHidden(false);
      setMessage('Dealer has Blackjack. Better luck next round.');
      setGameStatus('DEALER_WIN');
      setGamePhase('ROUND_COMPLETE');
    }
  }, [playerHands, dealerHand, gamePhase, currentBet]);

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

  const canDeal = gamePhase === 'BETTING' && currentBet > 0 && bankroll >= currentBet;
  const canInteract = gamePhase === 'PLAYER_TURN' && !isGameOver;
  const activeHand = playerHands[currentHandIndex];
  const canSplit =
    playerHands.length === 1 &&
    activeHand?.cards.length === 2 &&
    getCardValue(activeHand.cards[0].rank) === getCardValue(activeHand.cards[1].rank) &&
    bankroll >= currentBet &&
    !activeHand.isBlackjack;

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
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h1" sx={{ fontSize: '34px', color: 'var(--text)', fontWeight: 800 }}>
              ♠ Blackjack
            </Typography>
            <Chip label={statusChip.label} color={statusChip.color} sx={{ fontWeight: 600 }} />
          </Stack>
          <Typography variant="body1" sx={{ color: 'var(--muted)', fontSize: '17px' }}>
            Practice decision making with a simplified Blackjack game built in React.
          </Typography>
          <Alert severity="info">{message}</Alert>

          <Paper
            sx={{
              p: 3,
              borderRadius: 4,
              border: '1px solid var(--border)',
              background: 'rgba(2,6,23,0.04)',
            }}
          >
            <Stack spacing={2}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ md: 'center' }}>
                <Typography variant="h6" sx={{ color: 'var(--text)' }}>
                  {formatCurrency(bankroll)} available
                </Typography>
                <Chip label={`Current bet: ${currentBet || 0}`} color="secondary" />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems="flex-start">
                {[10, 25, 50, 100].map((amount) => (
                  <Button
                    key={amount}
                    variant={currentBet === amount ? 'contained' : 'outlined'}
                    onClick={() => setCurrentBet(amount)}
                    disabled={amount > bankroll}
                  >
                    Bet {amount}
                  </Button>
                ))}
                <TextField
                  label="Custom bet"
                  type="number"
                  value={customBet}
                  size="small"
                  onChange={(event) => setCustomBet(event.target.value)}
                  onBlur={() => {
                    const value = Number(customBet);
                    if (!Number.isNaN(value) && value > 0) {
                      setCurrentBet(value);
                    }
                  }}
                  sx={{ width: { xs: '100%', sm: 140 } }}
                  InputProps={{ inputProps: { min: 1, max: bankroll } }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={startRound}
                  disabled={!canDeal}
                >
                  Deal Cards
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Hand
              title="Dealer"
              hand={dealerHand}
              hideHoleCard={dealerHidden}
              subtitle="House"
              status={dealerHidden ? undefined : gameStatus === 'DEALER_BUST' ? 'BUST' : 'STAND'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              {playerHands.length === 0 && (
                <Paper sx={{ p: 3, borderRadius: 4, border: '1px dashed var(--border)' }}>
                  <Typography variant="body2" sx={{ color: 'var(--muted)' }}>
                    Place a bet and deal to see your hand!
                  </Typography>
                </Paper>
              )}
              {playerHands.map((hand, index) => (
                <Hand
                  key={hand.label}
                  title={hand.label}
                  hand={hand.cards}
                  highlight={index === currentHandIndex && gamePhase === 'PLAYER_TURN'}
                  subtitle={`Bet ${hand.bet}`}
                  status={hand.status}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mt={4}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              if (gamePhase === 'PLAYER_TURN') return;
              setGamePhase('BETTING');
              setMessage('Place a bet to start a new round.');
              resetRoundState();
            }}
            disabled={gamePhase === 'PLAYER_TURN'}
          >
            New Round
          </Button>
          <Button variant="contained" onClick={handleHit} disabled={!canInteract}>
            Hit
          </Button>
          <Button variant="outlined" onClick={handleStand} disabled={!canInteract}>
            Stand
          </Button>
          <Button variant="outlined" onClick={handleSplit} disabled={!canSplit}>
            Split
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default BlackjackPage;


