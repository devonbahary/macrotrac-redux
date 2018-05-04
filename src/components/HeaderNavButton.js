import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNavButton = (props) => (
    <Link to={props.to} className="HeaderNavButton">
        <span className="ion-plus-round"></span>
    </Link>
);

export default HeaderNavButton;
