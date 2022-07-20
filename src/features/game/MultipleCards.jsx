import React from 'react';
import Card from './Card';
import '../../App.css';

const centerStyle = (style, horizontally, vertically) => {
  if (horizontally) style.left = '50%';
  if (vertically) style.top = '50%';
  const translationAmount = (bool) => (bool ? '-50%' : '0%');
  style.transform = `translate(${translationAmount(horizontally)}, ${translationAmount(vertically)})`;
};

// if community cards then playerNumber is -1
export default function MultipleCards({
  cards, playerNumber, totalPlayers,
}) {
  console.log(playerNumber, totalPlayers)
  const style = {
    display: 'flex', padding: 0, gap: '2vw', position: 'absolute',
  };
  if (playerNumber === -1) {
    centerStyle(style, true, true);
  }
  if (playerNumber === 0) {
    console.log(playerNumber)
    style.bottom = '15%';
    centerStyle(style, true, false);
  }
  if (totalPlayers / playerNumber === 2) {
    console.log(playerNumber)
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
      { cards.map((card, i) => (
        <Card
          suit={card.suit}
          number={card.number}
          faceDown={card.faceDown}
        />
      ))}
    </div>
  );
}
