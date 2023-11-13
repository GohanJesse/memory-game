// import React, { useState } from 'react';
import Styles from './Card.module.css';
import { CardType } from '../../models/CardType';

interface CardProps {
  onCardClick: () => void;
  card: CardType;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, onCardClick, isFlipped }) => {

  return (
    <div className={`${Styles.card} ${isFlipped ? Styles.flipped : ''}`} onClick={onCardClick}>
      <div className={Styles.cardFront} style={{ backgroundImage: `url(${card.imageUrl})` }}>
      </div>
      <div className={Styles.cardBack}></div>
    </div>
  );
};

export default Card;
