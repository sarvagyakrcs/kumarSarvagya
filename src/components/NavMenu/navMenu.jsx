import React, { useCallback, useState } from 'react';
import './navMenu.css';
import BurgerButton from './images/burgerButton.png';
import exitButton from './images/exitButton.png';

const NavMenu = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setTimeout(() => {
            setMenuOpen((prev) => !prev);
        }, 100);
    }, [setMenuOpen]);

    const menuOptions = props.MenuOptions;

    const menu = (
        <div className={`Nav-menu ${menuOpen ? 'open' : ''}`}>
            <h1>Menu</h1>
            <div className="exitButton" style={{ position: 'absolute', top: 0, right: 0 }}>
                <button onClick={toggleMenu}><img src={exitButton} alt="Exit" /></button>
            </div>
            {Object.entries(menuOptions).map(([key, value], index) => (
                <div className="menu-item" key={index}>
                    <button className="menu-item">
                        <h2>{value.menuOption}</h2>
                        <img src={value.icon} alt={value.menuOption} />
                    </button>
                </div>
            ))}
        </div>
    );

    const burgerButton = (
        <div className="burgerButton" onClick={toggleMenu}>
            <img src={BurgerButton} alt="" />
            <h2 style={{'color' : 'tomato'}}>Menu</h2>
        </div>
    );

    return (
        <div className="mainContainer">
            {menuOpen ? menu : burgerButton}
        </div>
    );
};

export default NavMenu;
