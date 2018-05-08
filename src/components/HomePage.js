import React from 'react';
import { Link } from 'react-router-dom';
import sampleGif from '../../assets/gifs/sample.gif';

const HomePage = (props) => (
    <div className="HomePage">
        <div className="HomePage__overlay"></div>
        <img
          className="HomePage__sampleImg"
          src={`/dist/${sampleGif}`}
        />
        <div className="HomePage__descriptionBox">
            <Link
              to="/user"
              className="HomePage__Link"
            >
                <div className="HomePage__LinkIcon ion-person"></div>
                <div>Set goals</div>
            </Link>
            <Link
              to="/foods"
              className="HomePage__Link"
            >
                <div className="HomePage__LinkIcon ion-fork"></div>
                <div>Record Food</div>
            </Link>
            <Link
              to="/meals"
              className="HomePage__Link"
            >
                <div className="HomePage__LinkIcon ion-home"></div>
                <div>Track Meals</div>
            </Link>
        </div>
    </div>
);

export default HomePage;
