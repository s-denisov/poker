/* eslint-env jest */

import gameReducer, { newGame, createShuffledDeckTestingOnly } from './gameSlice';

describe('game reducer', () => {
  it('should create new shuffled deck correctly', () => {
    const deck = createShuffledDeckTestingOnly();
    const deck2 = createShuffledDeckTestingOnly();
    expect(deck.length).toEqual(52);
    expect(deck).not.toEqual(deck2);
  });
  it('should create a new game correctly', () => {
    const gameState = gameReducer(undefined, newGame({ numPlayers: 5 }));
    expect(gameState.players.length).toEqual(5);
    expect(gameState.players[0].cards.length).toEqual(2);
    expect(gameState.players[4].cards.length).toEqual(2);
    expect(gameState.communityCards.length).toEqual(5);
    const allCards = gameState.communityCards.slice();
    gameState.players.forEach((player) => allCards.push(...player.cards));
    expect(allCards.length).toEqual(15);
    expect(new Set(allCards).size).toEqual(allCards.length); // no duplicates
  });
});
