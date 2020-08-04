import React from 'react';
import { NavLink } from 'react-router-dom';
import SubHeader from './SubHeader'

const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <NavLink className="header__title" to="/" exact={true}>
                    <h1>Russell Goodloe</h1>
                </NavLink>
                <SubHeader className="header__title"/>
            </div>
        </div>
    </header>
);
export default Header;