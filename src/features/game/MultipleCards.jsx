import React from 'react';
import Card from './Card';
import '../../App.css';

// if community cards then playerNumber is -1
export default function MultipleCards({
  cards, playerNumber, totalPlayers,
}) {
  const style = {
    display: 'flex', padding: 0, gap: '2vw', position: 'absolute',
  };
  if (playerNumber === -1) {
    style.justifyContent = 'center';
    style.alignItems = 'center';
  } else {
    style.top = '15%';
    style.justifyContent = 'center';
  }
  return (
    <div className="centred" style={style}>
      { cards.map((card, i) => (
        <Card
          suit={card.suit}
          number={card.number}
          faceDown={i === 0}
        />
      ))}
    </div>
  );
}
