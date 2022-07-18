import { createSlice } from '@reduxjs/toolkit';

const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
const numbers = ['A', 'K', 'Q', 'J'];
for (let i = 10; i >= 2; i -= 1) {
  numbers.push(i.toString());
}

// From https://stackoverflow.com/a/25984542
const shuffle = (a) => {
  let [b, c, d] = [0, 0, 0];
  // eslint-disable-next-line
  c=a.length;while(c)b=Math.random()*(--c+1)|0,d=a[c],a[c]=a[b],a[b]=d
};

const createShuffledDeck = () => {
  const deck = suits.flatMap((suit) => numbers
    .map((number) => ({ suit, number, faceDown: true })));
  shuffle(deck);
  return deck;
};

export const createShuffledDeckTestingOnly = createShuffledDeck;

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    communityCards: [],
    pot: 0,
    players: [],
  },
  reducers: {
    newGame: (state, action) => {
      for (let i = 0; i < action.payload.numPlayers; i += 1) {
        state.players.push({ cards: [], money: 1000, bet: 0 });
      }
      gameSlice.caseReducers.newRound(state);
    },
    newRound: (state) => {
      const deck = createShuffledDeck();
      state.communityCards = deck.slice(0, 5);
      let i = 5;
      state.players.forEach((player) => {
        player.cards = deck.slice(i, i + 2);
        i += 2;
      });
    },
  },
});

export const selectCommunityCards = (state) => state.game.communityCards;
export const selectPlayer = (playerNum) => (state) => state.game.players[playerNum];

export const { newGame, newRound } = gameSlice.actions;
export default gameSlice.reducer;
