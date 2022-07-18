import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { newGame, selectCommunityCards, selectPlayer } from './gameSlice';
import MultipleCards from './MultipleCards';

export default function Game() {
  const communityCards = useSelector(selectCommunityCards);
  const player1 = useSelector(selectPlayer(0));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newGame({ numPlayers: 5 }));
  }, []); // run only when first loaded

  return (
    <div style={{ position: 'relative' }}>
      <img src="poker-table.png" alt="poker table" width="100%" height="100%" />
      <MultipleCards cards={communityCards} playerNumber={-1} />
      {player1 !== undefined
        ? <MultipleCards cards={player1.cards} isCommunityCards={false} /> 
        : undefined}
    </div>
  );
}
