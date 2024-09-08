import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import CardArea from './components/cardArea/cardArea';
import Menu from './components/menu/menu';
import Presentation from './components/presentation/presentation';
import DecksPage from './components/decksPage/decksPage';
import Characters from './components/characters/characters';
import Quizzes from './components/quizzes/quizzes';
import '../styles/globals.css';

const App = () => {
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [decks, setDecks] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const savedDecks = localStorage.getItem('decks');
        if (savedDecks) {
            setDecks(JSON.parse(savedDecks));
        }
    }, []);

    useEffect(() => {
        if (decks.length > 0) {
            localStorage.setItem('decks', JSON.stringify(decks));
        }
    }, [decks]);

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const addCardToDeck = (deckIndex, card) => {
        setDecks(prevDecks => {
            const newDecks = [...prevDecks];
            if (newDecks[deckIndex].cards.filter(c => c.id === card.id).length < 2) {
                if (newDecks[deckIndex].cards.length < 30) {
                    newDecks[deckIndex].cards.push(card);
                }
            }
            return newDecks;
        });
    };

    const removeCardFromDeck = (deckIndex, cardIndex) => {
        setDecks(prevDecks => {
            const newDecks = [...prevDecks];
            newDecks[deckIndex].cards.splice(cardIndex, 1);
            return newDecks;
        });
    };

    const addNewDeck = (deckName) => {
        setDecks(prevDecks => [...prevDecks, { name: deckName, cards: [] }]);
    };

    const deleteDeck = (deckIndex) => {
        setDecks(prevDecks => prevDecks.filter((_, index) => index !== deckIndex));
    };

    if (!isClient) {
        return null;
    }

    return (
        <Router>
            <section>
                <Header />
                <Routes>
                    <Route 
                        path="/" 
                        element={
                            <>
                                <Presentation />
                                <Menu handleFilterChange={handleFilterChange} handleSearch={handleSearch} />
                                <CardArea filter={filter} searchTerm={searchTerm} decks={decks} addCardToDeck={addCardToDeck} />
                            </>
                        } 
                    />
                    <Route 
                        path="/decks" 
                        element={
                            <>
                                <DecksPage 
                                    decks={decks} 
                                    removeCardFromDeck={removeCardFromDeck} 
                                    addNewDeck={addNewDeck}
                                    deleteDeck={deleteDeck}  // Passando a função deleteDeck para DecksPage
                                />
                            </>
                        } 
                    />
                    <Route path='/characters' element={<Characters />} />
                    <Route path='/quizzes' element={<Quizzes />} />
                </Routes>
            </section>
        </Router>
    );
};

export default App;
