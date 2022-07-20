import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { newGame, selectCommunityCards, selectPlayers } from './gameSlice';
import MultipleCards from './MultipleCards';

export default function Game() {
  const communityCards = useSelector(selectCommunityCards);
  const players = useSelector(selectPlayers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newGame({ numPlayers: 2 }));
  }, []); // run only when first loaded

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src="poker-table.png" alt="poker table" width="100%" height="100%" />
      <MultipleCards cards={communityCards} playerNumber={-1} />
      { players.map((player, i, arr) => (
        <MultipleCards
          playerNumber={i}
          cards={player.cards}
          totalPlayers={arr.length}
        />
      ))}
    </div>
  );
}
