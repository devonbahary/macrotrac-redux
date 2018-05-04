import React from 'react';

const Notification = (props) => (
    <div className="Notification">
        <span className={props.error ? 'error' : props.success ? 'success' : ''}>
          <span className={props.error ? 'ion-alert-circled' : props.success ? 'ion-checkmark-circled' : ''}></span> {props.notification}
        </span>
    </div>
);

export default Notification;
