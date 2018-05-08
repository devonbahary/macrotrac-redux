import React from 'react';

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
        <header className="Header">
            <span className="Header__text">
              {title}
            </span>
        </header>
    );
};

export default Header;
