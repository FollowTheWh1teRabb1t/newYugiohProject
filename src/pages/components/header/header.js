import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link do react-router-dom
import styles from './header.module.css'

export default function Header() {
    const scrollToCardArea = () => {
        const cardAreaSection = document.getElementById('cardArea');
        if (cardAreaSection) {
            cardAreaSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <section className={styles.sectionHeader}>
                <div className={styles.boxYugioh}>
                    <img className={styles.yugiohTitle} src='assets/yugioh.png' alt="Yugioh Title"/>
                </div>
                <div>
                    <img src='./assets/giphy.webp' className={styles.slifer} alt="Slifer"/>
                </div>
                <div className={styles.boxYugi}>
                    <img className={styles.yugiIcon} src='assets/yugi.png.png' alt="Yugi Icon"/>
                </div>
                <div className={styles.nav}>
                    <Link href="#card-area" to="/" className={styles.linkA} onClick={scrollToCardArea}>Home</Link>
                    <Link to="/decks" className={styles.linkA}>Decks</Link>
                    <Link to="/quizzes" className={styles.linkA}>Quizzes</Link>
                    <Link to="/characters" className={styles.linkA}>Favorite Characters</Link>
                </div>
            </section>
        </header>
    )
}
