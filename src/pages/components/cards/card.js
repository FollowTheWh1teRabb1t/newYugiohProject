import React, { useState } from 'react';
import styles from './card.module.css';

const Card = ({ card, addCardToDeck, decks }) => {
    const [selectedDeck, setSelectedDeck] = useState(decks.length > 0 ? decks[0].name : '');

    const handleAddCard = () => {
        const deckIndex = decks.findIndex(deck => deck.name === selectedDeck);
        if (deckIndex !== -1) {
            addCardToDeck(deckIndex, card);
        }
    };

    return (
        <div className={styles.card}>
            <div>
                <img src={card.card_images[0].image_url} alt={card.name} />
            </div>
            <div className={styles.cardContent}>
                <h3>{card.name}</h3>
                <p className={styles.type}>Type: {card.type}</p>
                {card.type.includes('Monster') && (
                    <>
                        <div className={styles.boxStatus}>
                            <h2 className={styles.atkRed}>ATK: {card.atk}</h2>
                            <h2 className={styles.defBlue}>DEF: {card.def}</h2>
                            <h2 className={styles.level}>Level: {card.level}</h2>
                        </div>
                    </>
                )}
                {decks.length > 0 && (
                    <>
                        <select value={selectedDeck} onChange={(e) => setSelectedDeck(e.target.value)}>
                            {decks.map((deck, index) => (
                                <option key={index} value={deck.name}>{deck.name}</option>
                            ))}
                        </select>
                        <button className={styles.addButton} onClick={handleAddCard}>Add to Deck</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Card;
    