import React, { useState } from 'react';
import Styles from './Card.module.css';
import { CardType } from '../../models/CardType';

interface CardProps {
  onCardClick: () => void;
  card: CardType;
}

const Card: React.FC<CardProps> = ({ card, onCardClick }) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    onCardClick();
  };


  return (
    <div className={`${Styles.card} ${isFlipped ? Styles.flipped : ''}`} onClick={handleClick}>
      <div className={Styles.cardFront} style={{ backgroundImage: `url(${card.imageUrl})` }}>
      </div>
      <div className={Styles.cardBack}></div>
    </div>
  );
};

export default Card;
