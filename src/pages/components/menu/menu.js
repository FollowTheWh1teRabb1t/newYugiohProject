import React, { useState } from 'react';
import styles from './menu.module.css';

const Menu = ({ handleFilterChange, handleSearch }) => { // **Adicionado handleSearch como prop**
    const [searchTerm, setSearchTerm] = useState(''); // **Estado local para searchTerm**

    const onSearchChange = (event) => { // **Função para lidar com mudanças na busca**
        const value = event.target.value;
        setSearchTerm(value);
        handleSearch(value); // **Chamando handleSearch ao mudar searchTerm**
    };

    return (
        <div className={styles.menu}>
            <button className={styles.allCards} onClick={() => handleFilterChange('All')}>All Cards</button>
            <button className={styles.monsters} onClick={() => handleFilterChange('Monster')}>Monsters Cards</button>
            <button className={styles.magic} onClick={() => handleFilterChange('Spell')}>Magic Cards</button>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={onSearchChange} 
                placeholder="Search for a card" 
                className={styles.searchInput} // **Adicionado campo de busca**
            />
        </div>
    );
};

export default Menu;
