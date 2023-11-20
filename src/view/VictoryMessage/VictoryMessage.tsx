import Styles from './VictoryMessage.module.css';

interface VictoryMessageProps {
  clickCount: number;
  onRestart: () => void;
  currentTheme: string;
}

const VictoryMessage: React.FC<VictoryMessageProps> = ({ clickCount, onRestart, currentTheme }) => {

  const getFontStyle = () => {
    switch (currentTheme) {
      case 'dragonball':
        return Styles.victoryMessageDragonball;
      case 'pokemon':
        return Styles.victoryMessagePokemon;
      case 'frozen':
        return Styles.victoryMessageFrozen;
      default:
        return '';
    }
  };

  return (
    <div className={Styles.background}>
      <div className={Styles.victoryMessage}>
        <h1 className={getFontStyle()}>BRAVO ! VOUS GAGNEZ !</h1>
        <p className={Styles.clickCount}><strong>{clickCount} Clics</strong></p>
        <div className={Styles.restartBtn} onClick={onRestart}>REJOUER</div>
      </div>
    </div>
  )
}

export default VictoryMessage;