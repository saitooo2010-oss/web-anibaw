import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="search-container">
            <input 
                type="text" 
                className="search-input" 
                placeholder="Поиск аниме..."
            />
            <button className="search-button">Найти</button>
        </div>
    );
};

export default Search;