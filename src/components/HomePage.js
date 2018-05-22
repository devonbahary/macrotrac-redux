import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import CommonButton from './CommonButton';
import mealsImg from '../../assets/imgs/MealsDesktop.png';
import foodsImg from '../../assets/imgs/FoodsDesktop.png';
import userImg from '../../assets/imgs/UserDesktop.png';

const HomePage = () => (
    <div className="HomePage">
        <div className="HomePage__slide">
            <div>
                <div className="HomePage__captionContainer">
                    <MediaQuery maxWidth={1224}>
                        <div className="HomePage__smallDeviceLandingIconContainer">
                            <span className="HomePage__landingIcon ion-home"></span>
                        </div>
                    </MediaQuery>
                    <h1>Nutrition Tracker</h1>
                    <p>Track your meals throughout the day to track your nutritional goals.</p>
                    <MediaQuery minWidth={1224}>
                        <div className="HomePage__buttonContainer">
                            <Link
                              to="/meals"
                              style={{textDecoration: 'none'}}
                            >
                                <CommonButton
                                  iconClass='ion-home'
                                  buttonText='Track Meals'
                                  active={true}
                                />
                            </Link>
                        </div>
                    </MediaQuery>
                </div>
                <div className="HomePage__downArrow">
                    <span className="ion-chevron-down"></span>
                </div>
            </div>
            <MediaQuery minWidth={1224}>
                <div className="HomePage__imgContainer">
                    <img src={`/dist/${mealsImg}`} />
                </div>
            </MediaQuery>
          </div>
          <div className="HomePage__slide">
              <MediaQuery minWidth={1224}>
                  <div className="HomePage__imgContainer">
                      <img src={`/dist/${foodsImg}`} />
                  </div>
              </MediaQuery>
              <div>
                  <div className="HomePage__captionContainer">
                      <MediaQuery maxWidth={1224}>
                          <div className="HomePage__smallDeviceLandingIconContainer">
                              <span className="HomePage__landingIcon ion-fork"></span>
                          </div>
                      </MediaQuery>
                      <h1>Personalized</h1>
                      <p>Keep a list of foods you eat and record their nutrition profile.</p>
                      <MediaQuery minWidth={1224}>
                          <div className="HomePage__buttonContainer">
                              <Link
                                to="/foods"
                                style={{textDecoration: 'none'}}
                              >
                                  <CommonButton
                                    iconClass='ion-fork'
                                    buttonText='Record Foods'
                                    active={true}
                                  />
                              </Link>
                          </div>
                      </MediaQuery>
                  </div>
              </div>
          </div>
          <div className="HomePage__slide">
              <div>
                  <div className="HomePage__captionContainer">
                      <MediaQuery maxWidth={1224}>
                          <div className="HomePage__smallDeviceLandingIconContainer">
                              <span className="HomePage__landingIcon ion-person"></span>
                          </div>
                      </MediaQuery>
                      <h1>Meet Your Goals</h1>
                      <p>Set your nutritional goals to cater the app to your objectives.</p>
                      <MediaQuery minWidth={1224}>
                          <div className="HomePage__buttonContainer">
                              <Link
                                to="/user"
                                style={{textDecoration: 'none'}}
                              >
                                  <CommonButton
                                    iconClass='ion-person'
                                    buttonText='Set Goals'
                                    active={true}
                                  />
                              </Link>
                          </div>
                      </MediaQuery>
                  </div>
              </div>
              <MediaQuery minWidth={1224}>
                  <div className="HomePage__imgContainer">
                      <img src={`/dist/${userImg}`} />
                  </div>
              </MediaQuery>
              <Link to="/foods" className="HomePage__buttonGetStarted">
                Get Started
              </Link>
          </div>
    </div>
);

export default HomePage;
