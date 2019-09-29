import React from 'react';
import {NavLink} from 'react-router-dom';
import LanguageSelector from '../../components/translation/language-selector';

const Header = () => {
    return (
        <header>
            <nav>
                <LanguageSelector />
                <ul>
                    <li>
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin">Админка</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
