# Memory Game Routes
# Handles all endpoints for the memory game

from flask import Blueprint, jsonify, request
import random

# Create a Blueprint for memory game routes
memory_game_bp = Blueprint('memory_game', __name__)

# Memory game state (3x3 grid = 9 cards, 4 pairs + 1 extra)
# Characters for the memory game
memory_characters = ['🎮', '🎯', '🎲', '🎪', '🎨', '🎭', '🎸', '🎺']
memory_game_state = {
    'cards': [],
    'flipped_cards': [],
    'matches': 0,
    'moves': 0,
    'game_active': False
}

@memory_game_bp.route('/api/memory/new', methods=['POST'])
def memory_new_game():
    """Start a new memory game - creates a 2x5 grid with 5 pairs"""
    global memory_game_state, memory_characters
    
    # Create 5 pairs (10 cards) for 2x5 grid
    # We'll use 5 characters, each appearing twice
    selected_chars = random.sample(memory_characters, 5)
    card_chars = selected_chars * 2  # 5 pairs = 10 cards
    random.shuffle(card_chars)
    
    # Create card objects
    cards = []
    for i, char in enumerate(card_chars):
        cards.append({
            'id': i,
            'character': char,
            'isFlipped': False,
            'isMatched': False
        })
    
    # Reset game state
    memory_game_state = {
        'cards': cards,
        'flipped_cards': [],
        'matches': 0,
        'moves': 0,
        'game_active': True
    }
    
    return jsonify({
        'ok': True,
        'message': 'New game started',
        'cards': cards,
        'matches': 0,
        'moves': 0
    })

@memory_game_bp.route('/api/memory/state', methods=['GET'])
def memory_get_state():
    """Get current memory game state"""
    global memory_game_state
    
    if not memory_game_state.get('game_active', False):
        return jsonify({
            'ok': False,
            'error': 'No active game. Start a new game first.'
        }), 400
    
    return jsonify({
        'ok': True,
        'cards': memory_game_state['cards'],
        'matches': memory_game_state['matches'],
        'moves': memory_game_state['moves']
    })

@memory_game_bp.route('/api/memory/flip', methods=['POST'])
def memory_flip_card():
    """Flip a card and check for matches"""
    global memory_game_state
    
    if not memory_game_state.get('game_active', False):
        return jsonify({'error': 'No active game'}), 400
    
    data = request.get_json()
    card_id = data.get('cardId')
    
    if card_id is None:
        return jsonify({'error': 'cardId is required'}), 400
    
    # Find the card
    card = next((c for c in memory_game_state['cards'] if c['id'] == card_id), None)
    if not card:
        return jsonify({'error': 'Card not found'}), 404
    
    if card['isMatched']:
        return jsonify({'error': 'Card already matched'}), 400
    
    if card['isFlipped']:
        return jsonify({'error': 'Card already flipped'}), 400
    
    # Flip the card
    card['isFlipped'] = True
    flipped = memory_game_state['flipped_cards']
    flipped.append(card_id)
    
    is_match = False
    
    # Check if we have 2 flipped cards
    if len(flipped) == 2:
        memory_game_state['moves'] += 1
        card1 = next(c for c in memory_game_state['cards'] if c['id'] == flipped[0])
        card2 = next(c for c in memory_game_state['cards'] if c['id'] == flipped[1])
        
        # Check if they match
        if card1['character'] == card2['character']:
            # Match found!
            card1['isMatched'] = True
            card2['isMatched'] = True
            memory_game_state['matches'] += 1
            is_match = True
            flipped.clear()  # Clear flipped cards
        # If no match, cards stay flipped until frontend calls reset endpoint
    
    return jsonify({
        'ok': True,
        'cards': memory_game_state['cards'],
        'isMatch': is_match,
        'matches': memory_game_state['matches'],
        'moves': memory_game_state['moves'],
        'flippedCards': flipped.copy()
    })

@memory_game_bp.route('/api/memory/reset', methods=['POST'])
def memory_reset():
    """Reset flipped cards (used when no match) - only resets the two currently flipped cards"""
    global memory_game_state
    
    if not memory_game_state.get('game_active', False):
        return jsonify({'error': 'No active game'}), 400
    
    # Only flip back the two currently flipped cards (not all cards)
    flipped = memory_game_state['flipped_cards']
    for card_id in flipped:
        card = next((c for c in memory_game_state['cards'] if c['id'] == card_id), None)
        if card and not card['isMatched']:
            card['isFlipped'] = False
    
    memory_game_state['flipped_cards'] = []
    
    return jsonify({
        'ok': True,
        'cards': memory_game_state['cards'],
        'matches': memory_game_state['matches'],
        'moves': memory_game_state['moves']
    })

