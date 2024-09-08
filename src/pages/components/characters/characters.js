import React, { useState } from 'react';
import styles from './characters.module.css';

export default function Characters() {
    
    const [flipped, setFlipped] = useState({
        kaiba: true,
        yugi: true,
        joey: true,
    });

    const handleFlip = (card) => {
        setFlipped(prevState => ({ ...prevState, [card]: !prevState[card] }));
    };

    return (
        <section className={styles.main}>
            <div className={styles.Box}>
                <div className={styles.boxImg}>
                    <img className={styles.character} src='./assets/Kaiba.jpg' alt='Seto Kaiba' />
                </div>
                <div className={styles.boxDescription}>
                    <h1>Seto Kaiba</h1>
                    <p>Seto Kaiba (海かい馬ば 瀬せ人と Kaiba Seto) is one of the main characters of the Yu-Gi-Oh! anime. He is the older brother of Mokuba and the modern-day reincarnation of Priest Seto, himself the original keeper of the Blue-Eyes White Dragon.</p>
                </div>
                <div className={`${styles.aceMonsterBox} ${flipped.kaiba ? styles.flipped : ''}`} onClick={() => handleFlip('kaiba')}>
                    <div className={styles.card}>
                        <img className={styles.front} src='./assets/blueyes.jpg' alt='Blue-Eyes White Dragon' />
                        <img className={styles.back} src='./assets/background.jpg' alt='Yu-Gi-Oh! Card Back' />
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.boxImg}>
                    <img className={styles.character} src='./assets/muto.jpg' alt='Yugi Muto' />
                </div>
                <div className={styles.boxDescription}>
                    <h1>Yugi Muto</h1>
                    <p>Yugi Muto (武む藤とう 遊ゆう戯ぎ Mutō Yūgi), also romanized as Yugi Mutou, is the main protagonist of the original Yu-Gi-Oh! series, along with Yami Yugi. It was stated once that Yugi is the modern day version of Pharaoh Atem.[8]
                        Together with the spirit of Pharaoh Atem, he holds the title "King of Games" (King of Duelists in Japanese version).

                        Yugi possessed the three thousand-year-old (five thousand in the dub) mystical Millennium Puzzle, which allowed his body to bear host to the spirit of the Puzzle, Yami Yugi. Yugi was initially unaware of his existence and control of Yugi's body, and would involuntarily shift to Yami Yugi at trying times.</p>
                </div>
                <div className={`${styles.aceMonsterBox} ${flipped.yugi ? styles.flipped : ''}`} onClick={() => handleFlip('yugi')}>
                    <div className={styles.card}>
                        <img className={styles.front} src='./assets/darkmagician.jpg' alt='Dark Magician' />
                        <img className={styles.back} src='./assets/background.jpg' alt='Yu-Gi-Oh! Card Back' />
                    </div>
                </div>
            </div>
            <div className={styles.Box}>
                <div className={styles.boxImg}>
                    <img className={styles.character} src='./assets/joey.jpg' alt='Joey Wheeler' />
                </div>
                <div className={styles.boxDescription}>
                    <h1>Joey Wheeler</h1>
                    <p>Joseph "Joey" Wheeler, known as Katsuya Jonouchi (城じょう之の内うち 克かつ也や Jōnouchi Katsuya) in the manga and Japanese version, is one of the main characters in Yu-Gi-Oh!. He is best friends with Yugi Muto. Joey starts out as an inexperienced Duelist, but he later becomes one of the greatest Duelists in the world. He accompanies Yugi throughout his adventures.</p>
                </div>
                <div className={`${styles.aceMonsterBox} ${flipped.joey ? styles.flipped : ''}`} onClick={() => handleFlip('joey')}>
                    <div className={styles.card}>
                        <img className={styles.front} src='./assets/redeyes.webp' alt='Red-Eyes Black Dragon' />
                        <img className={styles.back} src='./assets/background.jpg' alt='Yu-Gi-Oh! Card Back' />
                    </div>
                </div>
            </div>
        </section>
    );
}
