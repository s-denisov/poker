import React from 'react';

export default function Card({ faceDown, suit, number }) {
  const cardColor = ['hearts', 'diamonds'].includes(suit) ? 'red' : 'black';
  if (faceDown) {
    return (
      <img
        style={{
          width: '5vw',
          height: '7vw',
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'black',
        }}
        src="card-back.png"
        alt="face down card"
      />
    );
  }
  return (
    <div style={{
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'black',
      width: '5vw',
      height: '7vw',
      padding: '0.5vw',
      fontSize: '2.5vw',
      boxSizing: 'border-box',
      position: 'relative',
      fontWeight: 'bold',
      color: cardColor,
      backgroundColor: 'white',
    }}
    >
      {number}
      <img width="50%" height="35%" src={`${suit}.png`} alt={suit} style={{ position: 'absolute', bottom: '7%', right: '7%' }} />
    </div>
  );
}
