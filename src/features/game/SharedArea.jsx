import React from 'react';
import { useSelector } from 'react-redux';
import { selectCommunityCards } from './gameSlice';
import MultipleCards from './MultipleCards';
import { centerStyle } from './style';

export default function SharedArea() {
  const communityCards = useSelector(selectCommunityCards);
  const style = { position: 'absolute' };
  centerStyle(style, true, true);
  return (
    <div style={style}>
      <MultipleCards cards={communityCards} isCommunnityCards />
    </div>
  );
}
