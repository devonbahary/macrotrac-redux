import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const MainNav = () => (
    <MediaQuery maxWidth={1224}>
        <nav className="MainNav">
            <NavLink to="/meals" activeClassName="active-link" className="MainNav__link">
                <span className="MainNav__linkIcon ion-home"></span>
            </NavLink>
            <NavLink to="/foods" activeClassName="active-link" className="MainNav__link">
                <span className="MainNav__linkIcon ion-fork"></span>
            </NavLink>
            <NavLink to="/user" exact activeClassName="active-link" className="MainNav__link">
                <span className="MainNav__linkIcon ion-person"></span>
            </NavLink>
        </nav>
    </MediaQuery>
);

export default MainNav;
