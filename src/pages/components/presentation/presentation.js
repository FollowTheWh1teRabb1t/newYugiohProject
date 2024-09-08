import React from 'react';
import styles from './presentation.module.css';

export default function Presentation() {
    return (
        <section className={styles.presentationSection}>
            <div className={styles.boxSlifer}>
                <div className={styles.description}>
                     Slifer, the Celestial Dragon: Guardian of justice and wisdom, with the power of divine storms.
                </div>
            </div>
            <div className={styles.boxText}>
                <h3>
                    In ancient times in Egypt, three gods of unimaginable power protected the land:
                    <strong className={styles.sliferText}>  Slifer the Celestial Dragon, guardian of justice</strong>,
                    <strong className={styles.obeliskText}> Obelisk, the Tormented Executioner</strong>, symbol of brute force and
                    <strong className={styles.wingedText}> Ra, the God of the Flaming Sun,</strong> source of life and supreme power.
                    Together, they formed an unbeatable trinity that defended Egypt from threats.
                </h3>
                <h3>
                    When evil creatures emerged to corrupt Egypt, the gods rose again in epic battles, confronting the darkness with their colossal powers. The fate of Egypt depended on this titanic struggle between the light of the gods and the forces of darkness, an eternal reminder of the battle between good and evil.
                </h3>
            </div>
            <div className={styles.boxObelisk}>
                <div className={styles.description}>
                Obelisk, the Tormented Executioner: Imposing and powerful, symbol of brute strength.
                </div>
            </div>
            <div className={styles.boxWinged}>
                <div className={styles.description}>
                    Ra, the Flaming Sun God: Source of life and supreme power, radiating heat and energy.
                </div>
            </div>
        </section>
    );
}
