import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import CommonButton from './CommonButton';

const HeaderNavButton = ({ to, buttonText }) => (
    <div>
        <Link to={to} className="HeaderNavButton">
            <MediaQuery minWidth={1224}>
                <CommonButton
                  iconClass="ion-plus-round"
                  buttonText={buttonText}
                  active={true}
                />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <span className="ion-plus-round"></span>
            </MediaQuery>
        </Link>
    </div>
);

export default HeaderNavButton;
