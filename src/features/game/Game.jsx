import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { newGame, selectTotalPlayers } from './gameSlice';
import Player from './Player';
import SharedArea from './SharedArea';

export default function Game() {
  const totalPlayers = useSelector(selectTotalPlayers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newGame({ numPlayers: 2 }));
  }, []); // run only when first loaded

  const playerComponents = [];
  for (let i = 0; i < totalPlayers; i += 1) {
    playerComponents.push(<Player playerNumber={i} totalPlayers={totalPlayers} />);
  }
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img src="poker-table.png" alt="poker table" width="100%" height="100%" style={{ zIndex: -1 }}/>
      <SharedArea />
      { playerComponents }
    </div>
  );
}
