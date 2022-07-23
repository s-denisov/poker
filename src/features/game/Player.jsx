import React from 'react';
import { useSelector } from 'react-redux';
import { selectPlayer } from './gameSlice';
import MultipleCards from './MultipleCards';
import { centerStyle } from './style';

export default function Player({ playerNumber, totalPlayers }) {
  const player = useSelector(selectPlayer(playerNumber));
  const style = { position: 'absolute', color: 'white' };
  if (playerNumber === 0) {
    style.bottom = '15%';
    centerStyle(style, true, false);
  }
  if (totalPlayers / playerNumber === 2) {
    style.top = '15%';
    centerStyle(style, true, false);
  }
  if (totalPlayers >= 4) {
    if (playerNumber === 1) {
      centerStyle(style, false, true);
      style.left = '5%';
    }
    if (playerNumber === totalPlayers - 1) {
      centerStyle(style, false, true);
      style.right = '5%';
    }
  }
  if (playerNumber === (totalPlayers - 1) / 2) {
    style.top = '15%';
    style.left = '30%';
  }
  if (playerNumber === (totalPlayers + 1) / 2) {
    style.top = '15%';
    style.right = '30%';
  }
  return (
    <div style={style}>
      {player.money}
      <MultipleCards cards={player.cards} isCommunnityCards={false} />
    </div>
  );
}
