import React from "react";
import "./navbar.css";

const Navbar = () => {  
    return (
        <nav className="navbar">
            <div className="navbar-logo">AniBaw</div>
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input type="text" className="searchbar" placeholder="Поиск аниме..." />
            </div>
            <ul className="navbar-links">
                <li><a href="/">Главная</a></li>
                <li><a href="/login">Войти</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;