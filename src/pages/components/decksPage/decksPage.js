import React, { useState } from 'react';
import styles from './decksPage.module.css';

const DecksPage = ({ decks, removeCardFromDeck, addNewDeck, deleteDeck }) => {
    const [newDeckName, setNewDeckName] = useState('');

    const handleAddDeck = () => {
        if (newDeckName.trim()) {
            addNewDeck(newDeckName);
            setNewDeckName('');
        }
    };

    return (
        <section className={styles.decksPage}>
            <div className={styles.boxInstructions}>
                <div className={styles.envelopeText}>
                    <h1><strong>Dark Magician:</strong> Welcome to the SDC! [System Deck Creation]</h1>
                    <h1>Here you can create your decks and formulate your strategies!</h1>
                </div>
                <div>
                    <img className={styles.darkMagician} src='./assets/magician.webp'/>
                </div>
            </div>
            <div className={styles.newDeckForm}>
                <input className={styles.searchBar}
                    type="text"
                    value={newDeckName}
                    onChange={(e) => setNewDeckName(e.target.value)}
                    placeholder="Enter new deck name"
                />
                <button className={styles.createDeck} onClick={handleAddDeck}>Create Deck</button>
            </div>
            {decks.map((deck, deckIndex) => (
                <div key={deckIndex} className={styles.deckEnvelope}>
                    <img className={styles.potOfGreed} src='./assets/giphy2.webp'/>
                    <h3 className={styles.deckName}>{deck.name}</h3>
                    <div className={styles.deck}>
                        <ul>
                            {deck.cards.map((card, cardIndex) => (
                                <li key={cardIndex}>
                                    <img className={styles.cardDeck} src={card.card_images[0].image_url} alt={card.name} />
                                    <button className={styles.removeButton} onClick={() => removeCardFromDeck(deckIndex, cardIndex)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                       
                    </div>
                    <button className={styles.deleteDeckButton} onClick={() => deleteDeck(deckIndex)}>Delete Deck</button>
                </div>
            ))}
        </section>
    );
};

export default DecksPage;
