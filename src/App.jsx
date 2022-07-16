import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Card } from './features/game/Card';

function App() {
  return (
    <div>
      <Card faceDown={false} number="2" suit="clubs" />
      <Card faceDown={false} number="J" suit="hearts" />
      <Card faceDown={false} number="A" suit="spades" />
      <Card faceDown={false} number="10" suit="diamonds" />
      <Card faceDown number="1" suit="clubs" />
    </div>
  );
}

export default App;
