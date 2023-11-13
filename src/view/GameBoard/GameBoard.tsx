import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Styles from './GameBoard.module.css';
import dragonBallData from '../../themes/dragonball.json';
import { CardType } from '../../models/CardType';

interface GameBoardProps {
    onCardClick: () => void;
    cards: CardType[];
}

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

const GameBoard: React.FC<GameBoardProps> = ({ onCardClick }) => {

    const [cards, setCards] = useState<CardType[]>([]);

    useEffect(() => {
        // Mélange les cartes lors du premier chargement du composant
        setCards(shuffleCards([...dragonBallData]));
    }, []);

    return (
        <div className={Styles.gameBoard}>
            {cards.map((card: CardType) => (
                <Card key={card.id} card={card} onCardClick={onCardClick} />
            ))}
        </div>
    );
}

export default GameBoard;