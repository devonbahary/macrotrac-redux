import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import CommonButton from './CommonButton';
import sampleGif from '../../assets/gifs/sample.gif';
import mealsImg from '../../assets/imgs/MealsDesktop.png';
import foodsImg from '../../assets/imgs/FoodsDesktop.png';
import userImg from '../../assets/imgs/UserDesktop.png';

const HomePage = (props) => (
    <div className="HomePage">
        <MediaQuery minWidth={1224}>
            <div className="HomePage__slide">
                <div>
                    <div className="HomePage__captionContainer">
                        <h1>Nutrition Tracker</h1>
                        <p>Track your meals throughout the day to track your nutritional goals.</p>
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
                    </div>
                </div>
                <div className="HomePage__imgContainer">
                    <img src={`/dist/${mealsImg}`} />
                </div>
              </div>
              <div className="HomePage__slide">
                  <div className="HomePage__imgContainer">
                      <img src={`/dist/${foodsImg}`} />
                  </div>
                  <div>
                      <div className="HomePage__captionContainer">
                          <h1>Personalized</h1>
                          <p>Keep a list of foods you eat and record their nutrition profile.</p>
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
                      </div>
                  </div>
              </div>
              <div className="HomePage__slide">
                  <div>
                      <div className="HomePage__captionContainer">
                          <h1>Meet Your Goals</h1>
                          <p>Set your nutritional goals to cater the app to your objectives.</p>
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
                      </div>
                  </div>
                  <div className="HomePage__imgContainer">
                      <img src={`/dist/${userImg}`} />
                  </div>
              </div>
        </MediaQuery>
        <MediaQuery maxWidth={1224}>
            <img src={`/dist/${sampleGif}`} className="HomePage__gif" />
            <div className="HomePage__overlay"></div>
            <div className="HomePage__links">
                <Link to="/meals" className="HomePage__link" style={{textDecoration: 'none'}}>
                    <div className="HomePage__linkIcon">
                        <span className="ion-home"></span>
                    </div>
                    <div className="HomePage__linkText">
                      Track Meals
                    </div>
                </Link>
                <Link to="/foods" className="HomePage__link" style={{textDecoration: 'none'}}>
                    <div className="HomePage__linkIcon">
                        <span className="ion-fork"></span>
                    </div>
                    <div className="HomePage__linkText">
                      Record Foods
                    </div>
                </Link>
                <Link to="/user" className="HomePage__link" style={{textDecoration: 'none'}}>
                    <div className="HomePage__linkIcon">
                        <span className="ion-person"></span>
                    </div>
                    <div className="HomePage__linkText">
                      Set Goals
                    </div>
                </Link>
            </div>
        </MediaQuery>
    </div>
);

export default HomePage;
