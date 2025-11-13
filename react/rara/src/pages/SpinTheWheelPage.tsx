import { useState, useEffect } from 'react';
import { Container, Box, Typography, Paper, Button, TextField, List, ListItem, ListItemText, IconButton, Alert, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';

const API_URL = 'http://localhost:5000/api'; // Flask backend URL

const SpinTheWheelPage = () => {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [spinning, setSpinning] = useState(false);

  // Fetch names when component mounts
  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/names`);
      if (!response.ok) {
        throw new Error('Failed to fetch names. Is the backend running?');
      }
      const data = await response.json();
      setNames(data.names || []);
    } catch (error) {
      console.error('Error fetching names:', error);
      setError('Cannot connect to backend. Make sure Flask is running on http://localhost:5000');
    } finally {
      setLoading(false);
    }
  };

  const addName = async () => {
    if (!newName.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/names`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      });

      if (response.ok) {
        const data = await response.json();
        setNames(data.names);
        setNewName('');
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add name');
      }
    } catch (error) {
      console.error('Error adding name:', error);
      setError('Failed to add name. Check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const removeName = async (name: string) => {
    setLoading(true);
    setError(null);
    try {
      const encodedName = encodeURIComponent(name);
      const response = await fetch(`${API_URL}/names/${encodedName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        setNames(data.names);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to remove name');
      }
    } catch (error) {
      console.error('Error removing name:', error);
      setError('Failed to remove name. Check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const spinWheel = async () => {
    if (names.length === 0) {
      setError('No names in the list! Add some names first.');
      return;
    }

    setSpinning(true);
    setError(null);
    setSelectedName(null);
    
    try {
      // Add a small delay for visual effect
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const response = await fetch(`${API_URL}/spin`);
      const data = await response.json();

      if (response.ok) {
        setSelectedName(data.selected);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to spin');
      }
    } catch (error) {
      console.error('Error spinning wheel:', error);
      setError('Failed to spin wheel. Check backend connection.');
    } finally {
      setSpinning(false);
    }
  };

  const resetNames = async () => {
    if (!confirm('Reset to initial names?')) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}/reset`, {
        method: 'POST',
      });

      if (response.ok) {
        const data = await response.json();
        setNames(data.names);
        setSelectedName(null);
      }
    } catch (error) {
      console.error('Error resetting names:', error);
      setError('Failed to reset names. Check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ px: 2 }}>
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
          🎡 Spin the Wheel
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: 'var(--muted)', fontSize: '17px' }}>
          A live example connecting React frontend to Flask backend (no database required!)
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {/* Selected Name Display */}
        {selectedName && (
          <Paper
            sx={{
              p: 4,
              mb: 3,
              background: 'linear-gradient(135deg, rgba(102,126,234,0.9), rgba(118,75,162,0.9))',
              color: 'white',
              textAlign: 'center',
              borderRadius: 3,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 1 }}>
              🎉 {selectedName} 🎉
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Selected!
            </Typography>
          </Paper>
        )}

        {/* Spin Button */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={spinWheel}
            disabled={loading || spinning || names.length === 0}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.25rem',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #10b981, #059669)',
              '&:hover': {
                background: 'linear-gradient(135deg, #059669, #047857)',
              },
            }}
          >
            {spinning ? (
              <>
                <CircularProgress size={20} sx={{ mr: 1, color: 'white' }} />
                Spinning...
              </>
            ) : (
              '🎡 Spin the Wheel!'
            )}
          </Button>
        </Box>

        {/* Add Name Form */}
        <Paper sx={{ p: 3, mb: 3, background: 'rgba(59,130,246,0.05)' }}>
          <Typography variant="h3" sx={{ fontSize: '20px', mb: 2, color: 'var(--text)' }}>
            Add Name
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              fullWidth
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && !loading && addName()}
              placeholder="Enter a name..."
              disabled={loading}
              variant="outlined"
            />
            <Button
              variant="contained"
              onClick={addName}
              disabled={loading || !newName.trim()}
              sx={{ minWidth: 100 }}
            >
              Add
            </Button>
          </Box>
        </Paper>

        {/* Names List */}
        <Paper sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h3" sx={{ fontSize: '20px', color: 'var(--text)' }}>
              Names ({names.length})
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={resetNames}
              disabled={loading}
              startIcon={<RefreshIcon />}
              color="error"
            >
              Reset
            </Button>
          </Box>

          {loading && names.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CircularProgress />
              <Typography variant="body2" sx={{ mt: 2, color: 'var(--muted)' }}>
                Loading names...
              </Typography>
            </Box>
          ) : names.length === 0 ? (
            <Typography variant="body2" sx={{ textAlign: 'center', py: 4, color: 'var(--muted)' }}>
              No names in the list. Add some names to get started!
            </Typography>
          ) : (
            <List>
              {names.map((name, index) => (
                <ListItem
                  key={index}
                  sx={{
                    background: index % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent',
                    borderRadius: 1,
                    mb: 0.5,
                  }}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      onClick={() => removeName(name)}
                      disabled={loading}
                      color="error"
                      size="small"
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          )}
        </Paper>

        {/* Info Box */}
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
            This page connects to a Flask backend running on <code>http://localhost:5000</code>. 
            The backend uses in-memory storage (no database!). Make sure to start the backend server first. 
            See <code>docs/examples/flask-spin-the-wheel.py</code> and <code>docs/examples/SETUP-GUIDE.md</code> for setup instructions.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default SpinTheWheelPage;

