// Example: React Frontend for Spin the Wheel App
// This shows how to connect your React frontend to the Flask backend
// File: src/components/SpinTheWheel.tsx

import { useState, useEffect } from 'react';

const API_URL = 'http://localhost:5000/api'; // Your Flask backend URL

interface SpinTheWheelProps {
  // Add any props you need
}

const SpinTheWheel = ({}: SpinTheWheelProps) => {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string | null>(null);
  const [newName, setNewName] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch names when component mounts
  useEffect(() => {
    fetchNames();
  }, []);

  const fetchNames = async () => {
    try {
      const response = await fetch(`${API_URL}/names`);
      const data = await response.json();
      setNames(data.names);
    } catch (error) {
      console.error('Error fetching names:', error);
    }
  };

  const addName = async () => {
    if (!newName.trim()) return;

    setLoading(true);
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
        const error = await response.json();
        alert(error.error || 'Failed to add name');
      }
    } catch (error) {
      console.error('Error adding name:', error);
      alert('Failed to add name');
    } finally {
      setLoading(false);
    }
  };

  const removeName = async (name: string) => {
    setLoading(true);
    try {
      const encodedName = encodeURIComponent(name);
      const response = await fetch(`${API_URL}/names/${encodedName}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const data = await response.json();
        setNames(data.names);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to remove name');
      }
    } catch (error) {
      console.error('Error removing name:', error);
      alert('Failed to remove name');
    } finally {
      setLoading(false);
    }
  };

  const spinWheel = async () => {
    if (names.length === 0) {
      alert('No names in the list!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/spin`);
      const data = await response.json();

      if (response.ok) {
        setSelectedName(data.selected);
        // Add animation/visual feedback here!
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to spin');
      }
    } catch (error) {
      console.error('Error spinning wheel:', error);
      alert('Failed to spin wheel');
    } finally {
      setLoading(false);
    }
  };

  const resetNames = async () => {
    if (!confirm('Reset to initial names?')) return;

    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🎡 Spin the Wheel</h1>

      {/* Selected Name Display */}
      {selectedName && (
        <div
          style={{
            padding: '2rem',
            margin: '2rem 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            borderRadius: '12px',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          🎉 {selectedName} 🎉
        </div>
      )}

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={loading || names.length === 0}
        style={{
          width: '100%',
          padding: '1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          background: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '2rem',
        }}
      >
        {loading ? 'Spinning...' : '🎡 Spin the Wheel!'}
      </button>

      {/* Add Name Form */}
      <div style={{ marginBottom: '2rem' }}>
        <h2>Add Name</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addName()}
            placeholder="Enter a name..."
            style={{
              flex: 1,
              padding: '0.75rem',
              fontSize: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <button
            onClick={addName}
            disabled={loading || !newName.trim()}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Names List */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h2>Names ({names.length})</h2>
          <button
            onClick={resetNames}
            disabled={loading}
            style={{
              padding: '0.5rem 1rem',
              background: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.875rem',
            }}
          >
            Reset
          </button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {names.map((name, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem',
                marginBottom: '0.5rem',
                background: '#f3f4f6',
                borderRadius: '4px',
              }}
            >
              <span>{name}</span>
              <button
                onClick={() => removeName(name)}
                disabled={loading}
                style={{
                  padding: '0.25rem 0.75rem',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {names.length === 0 && (
          <p style={{ textAlign: 'center', color: '#6b7280', padding: '2rem' }}>
            No names in the list. Add some names to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default SpinTheWheel;

