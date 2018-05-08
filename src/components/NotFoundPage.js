import React from 'react';
import { Link } from 'react-router-dom';
import MacrotracLogo from './MacrotracLogo';

const NotFoundPage = () => (
    <div className="NotFoundPage">
        <MacrotracLogo />
        <div className="NotFoundPage__description">
            <p className="NotFoundPage__404">404</p>
            <p>Could not find the page you requested.</p>
            <Link to="/foods">Let's get back to eating!</Link>
        </div>
    </div>
);

export default NotFoundPage;
