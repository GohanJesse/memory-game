import { useState } from 'react';
import { CardType } from './models/CardType';
import Sidebar from './view/Sidebar/Sidebar';
import GameBoard from './view/GameBoard/GameBoard';
import VictoryMessage from '../src/view/VictoryMessage/VictoryMessage';
import OrientationWarning from '../src/view/OrientationWarning/OrientationWarning';
import dragonBallData from '../src/themes/dragonball.json';
import frozenData from '../src/themes/frozen.json';
import pokemonData from '../src/themes/pokemon.json';
import Styles from './App.module.css';

const shuffleCards = (cards: CardType[]): CardType[] => {
  // Crée des copies des objets pour garantir que React détecte les changements
  const shuffledCards = cards.map(card => ({ ...card }));
  let currentIndex = shuffledCards.length, randomIndex;

  // Mélange les cartes
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
      shuffledCards[randomIndex], shuffledCards[currentIndex]];
  }

  return shuffledCards;
};


export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [pairsFound, setPairsFound] = useState(0);
  const [currentTheme, setCurrentTheme] = useState('dragonball');
  const [cards, setCards] = useState<CardType[]>(() => shuffleCards([...dragonBallData]));
  const [gameRestarted, setGameRestarted] = useState(false);

  const restartGame = () => {
    setClickCount(0);
    setPairsFound(0);
    setGameRestarted(true);

    switch (currentTheme) {
      case 'frozen':
        setCards(shuffleCards([...frozenData]));
        break;
      case 'pokemon':
        setCards(shuffleCards([...pokemonData]));
        break;
      case 'dragonball':
      default:
        setCards(shuffleCards([...dragonBallData]));
    }
    setTimeout(() => setGameRestarted(false), 500);
  };

  const changeTheme = (newTheme: string) => {
    setCurrentTheme(newTheme);
    let newThemeData;
    switch (newTheme) {
      case 'frozen':
        newThemeData = frozenData;
        break;
      case 'pokemon':
        newThemeData = pokemonData;
        break;
      case 'dragonball':
      default:
        newThemeData = dragonBallData;
    }
    setCards(shuffleCards([...newThemeData]));
    setGameRestarted(true);
    setTimeout(() => setGameRestarted(false), 0);
    setTimeout(() => {
    }, 500);
    setClickCount(0);
    setPairsFound(0);

  };

  const incrementClickCount = () => {
    setClickCount(clickCount + 1);
  };

  const getAppStyle = () => {
    switch (currentTheme) {
      case 'dragonball':
        return Styles.appDragonball;
      case 'pokemon':
        return Styles.appPokemon;
      case 'frozen':
        return Styles.appFrozen;
      default:
        return ''; // ou une classe par défaut si nécessaire
    }
  };

  return (
    <div className={`${Styles.app} ${getAppStyle()}`}>
      <OrientationWarning />
      <div className={Styles.sidebarWrapper}>
        <Sidebar
          clickCount={clickCount}
          pairsFound={pairsFound}
          onRestart={restartGame}
          onThemeChange={changeTheme}
        />
      </div>
      <div className={Styles.gameBoardWrapper}>
        <GameBoard
          onCardClick={incrementClickCount}
          cards={cards}
          setPairsFound={setPairsFound}
          gameRestarted={gameRestarted}
          currentTheme={currentTheme}
        />
      </div>
      {pairsFound === 10 && (
        <VictoryMessage
          clickCount={clickCount}
          onRestart={restartGame}
          currentTheme={currentTheme}
        />
      )}
    </div>
  );
}
