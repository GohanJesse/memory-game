// import React, { useState } from 'react';
import Styles from './Card.module.css';
import { CardType } from '../../models/CardType';

interface CardProps {
  onCardClick: () => void;
  card: CardType;
  isFlipped: boolean;
  theme: string;
}

const Card: React.FC<CardProps> = ({ card, onCardClick, isFlipped, theme }) => {

  const getCardBackStyle = () => {
    switch (theme) {
      case 'dragonball':
        return Styles.cardBackDragonball;
      case 'pokemon':
        return Styles.cardBackPokemon;
      case 'frozen':
        return Styles.cardBackFrozen;
      default:
        return '';
    }
  };

  const getCardFrontStyle = () => {
    switch (theme) {
      case 'dragonball':
        return Styles.cardFrontDragonball;
      case 'pokemon':
        return Styles.cardFrontPokemon;
      case 'frozen':
        return Styles.cardFrontFrozen;
      default:
        return '';
    }
  };

  return (
    <div className={`${Styles.card} ${isFlipped ? Styles.flipped : ''}`} onClick={onCardClick}>
      <div className={`${Styles.cardFront} ${getCardFrontStyle()}`} style={{ backgroundImage: `url(${card.imageUrl})` }}>
      </div>
      <div className={`${Styles.cardBack} ${getCardBackStyle()}`}></div>
    </div>
  );
};

export default Card;
