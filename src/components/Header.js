import React from 'react';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';

const Header = (props) => {
    let title;
    if (props.location.location.pathname.startsWith('/foods/edit')) {
        title = 'Edit Food';
    } else {
        switch (props.location.location.pathname) {
            case '/meals':
                title = 'Today';
                break;
            case '/meals/create':
                title = 'Add Meal';
                break;
            case '/foods':
                title = 'Foods';
                break;
            case '/foods/create':
                title = 'Add Food';
                break;
            case '/user':
                title = 'Settings';
                break;
            default:
                title = 'Macrotrac';
        }
    }

    return (
        <div>
            <MediaQuery minWidth={1224}>
                <header className="Header--largeDevice">
                    <NavLink to="/" className="Header__link--title">
                        Macrotrac
                    </NavLink>
                    <NavLink to="/meals" activeClassName="active-link" className="Header__link">
                        Home
                    </NavLink>
                    <NavLink to="/foods" activeClassName="active-link" className="Header__link">
                        Foods
                    </NavLink>
                    <NavLink to="/user" exact activeClassName="active-link" className="Header__link">
                        Settings
                    </NavLink>
                </header>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <header className="Header--smallDevice">
                    <span className="Header__text">
                      {title}
                    </span>
                </header>
            </MediaQuery>
        </div>
    );
};

export default Header;
