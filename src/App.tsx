import { useState } from 'react';
import Styles from './App.module.css';
import Sidebar from './view/Sidebar/Sidebar';
import GameBoard from './view/GameBoard/GameBoard';
import dragonBallData from './themes/dragonball.json';
import { CardType } from './models/CardType';

// Ajoute la fonction shuffleCards ici
const shuffleCards = (cards: CardType[]): CardType[] => {
  let currentIndex = cards.length, randomIndex;

  // Tant qu'il reste des éléments à mélanger...
  while (currentIndex !== 0) {
    // Prendre un élément restant...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Et l'échanger avec l'élément actuel.
    [cards[currentIndex], cards[randomIndex]] = [
      cards[randomIndex], cards[currentIndex]];
  }

  return cards;
};


export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [cards, setCards] = useState<CardType[]>([]);

  const restartGame = () => {
    setClickCount(0); // Réinitialise le nombre de clics
    // Tu peux ajouter d'autres états à réinitialiser ici
    setCards(shuffleCards([...dragonBallData])); // Mélange à nouveau les cartes
  };

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className={Styles.app}>
      <div className={Styles.sidebarWrapper}>
        <Sidebar clickCount={clickCount} onRestart={restartGame} />
      </div>
      <div className={Styles.gameBoardWrapper}>
        <GameBoard onCardClick={incrementClickCount} cards={cards} />
      </div>
    </div>
  );
}

