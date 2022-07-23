import React from 'react';

export default function Card({ faceDown, suit, number, cardWidth }) {
  const cardHeight = cardWidth * 1.4;
  const vwToStr = (vw) => `${vw}vw`;
  const cardColor = ['hearts', 'diamonds'].includes(suit) ? 'red' : 'black';
  if (faceDown) {
    return (
      <img
        style={{
          width: vwToStr(cardWidth),
          height: vwToStr(cardHeight),
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
      width: vwToStr(cardWidth),
      height: vwToStr(cardHeight),
      padding: vwToStr(cardWidth / 10),
      fontSize: vwToStr(cardWidth / 2),
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
