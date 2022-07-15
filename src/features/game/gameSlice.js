import { createSlice } from "@reduxjs/toolkit";

const suits = ["hearts", "diamonds", "clubs", "spades"];
const numbers = ["A", "K", "Q", "J"];
for (const i = 10; i >= 2; i--) {
    numbers.push(i.toString());
}

export default createSlice({
    name: "game",
    initialState: {
        communityCards: [],
        pot: 0,
        players: [],
    },
    reducers: {
        newRound: (state, action) => {
            const deck = [];
            for (const suit of suits) {
                for (const number of numbers) {
                    deck.push({ suit, number, faceDown: true });
                }
            }
            deck.sort(() => Math.random - 0.5)
            ;
        }
    }
}).reducer;