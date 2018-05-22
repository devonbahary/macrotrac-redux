import React from 'react';

const Notification = ({
  error,
  success,
  notification
}) => (
    <div className="Notification">
        <span className={error ? 'error' : success ? 'success' : ''}>
          <span className={error ? 'ion-alert-circled' : success ? 'ion-checkmark-circled' : ''}></span> {notification}
        </span>
    </div>
);

export default Notification;
