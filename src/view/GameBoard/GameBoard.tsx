import React, { useState } from 'react';
import Card from '../Card/Card';
import Styles from './GameBoard.module.css';
import { CardType } from '../../models/CardType';

interface GameBoardProps {
    onCardClick: () => void;
    setPairsFound: (pairs: number) => void;
    cards: CardType[];
}


const GameBoard: React.FC<GameBoardProps> = ({ onCardClick, setPairsFound, cards }) => {

    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [foundPairs, setFoundPairs] = useState<number[]>([]);
    const [canClick, setCanClick] = useState(true);

    const handleCardClick = (index: number) => {
        if (!canClick || foundPairs.includes(index) || selectedCards.includes(index)) {
            return; // Ne rien faire si on ne peut pas cliquer ou si la carte est déjà retournée ou trouvée
        }

        const newSelectedCards = [...selectedCards, index];
        setSelectedCards(newSelectedCards);

        if (newSelectedCards.length === 2) {
            setCanClick(false); // Empêche d'autres clics pendant la vérification
            const match = cards[newSelectedCards[0]].title === cards[newSelectedCards[1]].title;

            if (match) {
                const newFoundPairs = [...foundPairs, newSelectedCards[0], newSelectedCards[1]];
                setFoundPairs(newFoundPairs);
                setPairsFound(newFoundPairs.length / 2);

                setSelectedCards([]);
            } else {
                setTimeout(() => {
                    setSelectedCards([]); // Retourne les cartes après un délai
                }, 1000); // Donne 1 seconde pour voir les cartes
            }

            setTimeout(() => {
                setCanClick(true); // Permet de cliquer à nouveau après la vérification
            }, 1000);
        }

        onCardClick(); // Incrémente le compteur de clics
    };

    return (
        <div className={Styles.gameBoard}>
            {cards.map((card, index) => (
                <Card key={card.id} card={card} onCardClick={() => handleCardClick(index)}
                    isFlipped={selectedCards.includes(index) || foundPairs.includes(index)} />
            ))}
        </div>
    );
}

export default GameBoard;