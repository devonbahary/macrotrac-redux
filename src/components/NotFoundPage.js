import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="NotFoundPage">
        <div className="NotFoundPage__logoBackground">
            <span className="NotFoundPage__logo ion-fork"></span>
        </div>
        <div className="NotFoundPage__description">
            <p className="NotFoundPage__404">404</p>
            <p>Could not find the page you requested.</p>
            <Link to="/foods">Let's get back to eating!</Link>
        </div>
    </div>
);

export default NotFoundPage;
