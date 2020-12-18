import React, { useState } from 'react';
import logo from "../logo.png";

function NavigationBar() {
    const [issNavVisible, setIsNavVisible] = useState(true);

    const toggleNav = () => {
        setIsNavVisible(!issNavVisible);
    };

    return(
        <header className="header">
            <img src={logo} className="logo" alt="logo"/>
            {issNavVisible && (
                <nav className="nav">
                <a href="/" >Home</a>
                <a href="/" >Calulator</a>
                <a href="/" >Science</a>
                <button>Logout</button>
            </nav>
            )}
            <button onClick={toggleNav} className="burger">
                🍔
            </button>
        </header>
    );
}

export default NavigationBar