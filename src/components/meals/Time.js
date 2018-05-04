import React from 'react';
import moment from 'moment';

const Time = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const time = new moment();
    const date = time.format('MMMM D');
    const day = daysOfWeek[time.day()];

    return (
        <div className="Time">
            <div className="Time__container">
                <div className="Time__day">{day}</div>
                <div className="Time__date">{date}</div>
            </div>
        </div>
    );
};

export default Time;
