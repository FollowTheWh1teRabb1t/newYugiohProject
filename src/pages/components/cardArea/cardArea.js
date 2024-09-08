import React, { useState, useEffect } from 'react';
import styles from './cardArea.module.css';
import axios from 'axios';
import Card from '../cards/card';

const CardArea = ({ filter, searchTerm, decks, addCardToDeck }) => { 
    const [allCards, setAllCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(6);

    useEffect(() => {
        fetchAllCards();
    }, [filter, searchTerm]);

    useEffect(() => {
        updateDisplayedCards();
    }, [allCards, offset, limit]);

    const fetchAllCards = async () => {
        setLoading(true);
        try {
            let url;
            if (searchTerm) { 
                url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${searchTerm}`;
            } else {
                url = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
            }

            const response = await axios.get(url);
            const allFetchedCards = response.data.data;

            const filteredCards = allFetchedCards.filter((card) => {
                if (filter === 'All') return true;
                if (filter === 'Monster') return card.type.includes('Monster');
                if (filter === 'Spell') return card.type.includes('Spell');
                return true;
            });

            setAllCards(filteredCards);
        } catch (error) {
            console.error('Erro ao carregar cartas:', error);
        }
        setLoading(false);
    };

    const updateDisplayedCards = () => {
        const startIndex = offset;
        const endIndex = offset + limit;
        setCards(allCards.slice(startIndex, endIndex));
    };

    return (
        <section id="cardArea" className={styles.cardArea}>
            <div>
                
            </div>
            {loading && <p className={styles.loading}>Loading...</p>} 
            {!loading && cards.map(card => (
                <Card key={card.id} card={card} addCardToDeck={addCardToDeck} decks={decks} />
            ))}
            <div className={styles.pagination}>
                <button
                    onClick={() => setOffset(prev => Math.max(prev - limit, 0))} 
                    disabled={offset === 0} 
                    className={styles.previousButton}
                >
                    Previous
                </button>
                <button
                    onClick={() => setOffset(prev => Math.min(prev + limit, allCards.length - limit))} 
                    disabled={offset + limit >= allCards.length}
                    className={styles.nextButton}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default CardArea;
