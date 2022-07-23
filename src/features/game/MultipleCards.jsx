import React from 'react';
import Card from './Card';
import '../../App.css';

// if community cards then playerNumber is -1
export default function MultipleCards({
  cards, isCommunnityCards,
}) {
  const style = {
    display: 'flex', padding: 0, gap: isCommunnityCards ? '2vw' : '1vw',
  };
  return (
    <div style={style}>
      { cards.map((card) => (
        <Card
          suit={card.suit}
          number={card.number}
          faceDown={card.faceDown}
          cardWidth={isCommunnityCards ? 5 : 3}
        />
      ))}
    </div>
  );
}
