import Styles from './VictoryMessage.module.css';

interface VictoryMessageProps {
  clickCount: number;
  onRestart: () => void;
}

const VictoryMessage: React.FC<VictoryMessageProps> = ({ clickCount, onRestart }) => {
  return (
    <div className={Styles.background}>
      <div className={Styles.victoryMessage}>
        <h1>Félicitations ! Vous avez gagné !</h1>
        <p>Nombre de clics : {clickCount}</p>
        <button onClick={onRestart}>Refaire une partie</button>
      </div>
    </div>
  )
}

export default VictoryMessage;