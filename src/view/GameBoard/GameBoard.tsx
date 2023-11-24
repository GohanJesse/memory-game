import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Styles from './GameBoard.module.css';
import { CardType } from '../../models/CardType';

interface GameBoardProps {
    onCardClick: () => void;
    setPairsFound: (pairs: number) => void;
    cards: CardType[];
    gameRestarted: boolean;
    currentTheme: string;
}


const GameBoard: React.FC<GameBoardProps> = ({ onCardClick, setPairsFound, cards, gameRestarted, currentTheme }) => {

    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    const [foundPairs, setFoundPairs] = useState<number[]>([]);
    const [canClick, setCanClick] = useState(true);



    useEffect(() => {
        if (gameRestarted) {
            setSelectedCards([]);
            setFoundPairs([]);
            setCanClick(true);
        }
    }, [gameRestarted]);

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

    const getGameBoardStyle = () => {
        switch (currentTheme) {
            case 'dragonball':
                return Styles.gameBoardDragonball;
            case 'pokemon':
                return Styles.gameBoardPokemon;
            case 'frozen':
                return Styles.gameBoardFrozen;
            default:
                return '';
        }
    };

    return (
        <div className={`${Styles.gameBoard} ${getGameBoardStyle()}`}>
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    card={card}
                    onCardClick={() => handleCardClick(index)}
                    isFlipped={!gameRestarted && (selectedCards.includes(index) || foundPairs.includes(index))}
                    theme={currentTheme}
                />
            ))}
        </div>
    );
}

export default GameBoard;