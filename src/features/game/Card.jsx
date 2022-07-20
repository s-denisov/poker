import React from 'react';

const defaultWidth = 5; // in vw
const defaultHeight = defaultWidth * 1.4;
const vwToStr = (vw) => `${vw}vw`;


export default function Card({ faceDown, suit, number }) {
  const cardColor = ['hearts', 'diamonds'].includes(suit) ? 'red' : 'black';
  if (faceDown) {
    return (
      <img
        style={{
          width: vwToStr(defaultWidth),
          height: vwToStr(defaultHeight),
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
      width: vwToStr(defaultWidth),
      height: vwToStr(defaultHeight),
      padding: vwToStr(defaultWidth / 10),
      fontSize: vwToStr(defaultWidth / 2),
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
