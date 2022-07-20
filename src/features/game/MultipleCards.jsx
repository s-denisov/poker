import React from 'react';
import Card from './Card';
import '../../App.css';

// if community cards then playerNumber is -1
export default function MultipleCards({
  cards,
}) {
  const style = {
    display: 'flex', padding: 0, gap: '2vw',
  };
  return (
    <div style={style}>
      { cards.map((card) => (
        <Card
          suit={card.suit}
          number={card.number}
          faceDown={card.faceDown}
        />
      ))}
    </div>
  );
}
