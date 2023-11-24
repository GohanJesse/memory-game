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

  const getLeftImage = () => {
    switch (currentTheme) {
      case 'dragonball':
        return '/images/leftDecorationMessWinDBZ.png';
      case 'pokemon':
        return '/images/leftDecorationMessWinPokemon.png';
      case 'frozen':
        return '/images/leftDecorationMessWinFrozen.png';
      default:
        return '';
    }
  };

  const getRightImage = () => {
    switch (currentTheme) {
      case 'dragonball':
        return '/images/rightDecorationMessWinDBZ.png';
      case 'pokemon':
        return '/images/rightDecorationMessWinPokemon.png';
      case 'frozen':
        return '/images/rightDecorationMessWinFrozen.png';
      default:
        return '';
    }
  };

  return (
    <div className={Styles.background}>
      <div className={Styles.victoryMessage}>
        <div className={Styles.leftDecoration}>
          <img src={getLeftImage()} alt="Décoration gauche" className={Styles.leftDecorationImg} />
        </div>
        <div className={Styles.messageBloc}>
          <h1 className={getFontStyle()}>BRAVO ! VOUS GAGNEZ !</h1>
          <p className={Styles.clickCount}><strong>{clickCount} Clics</strong></p>
          <div className={Styles.restartBtn} onClick={onRestart}>REJOUER</div>
        </div>
        <div className={Styles.rightDecoration}>
          <img src={getRightImage()} alt="Décoration droite" className={Styles.rightDecorationImg} />
        </div>
      </div>
    </div>
  )
}

export default VictoryMessage;