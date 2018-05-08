import React from 'react';
import foodSampleImg from '../../assets/imgs/FoodSample.png';
import mealsSampleImg from '../../assets/imgs/MealsSample.png';
import HomePageButton from './HomePageButton';
import MacrotracLogo from './MacrotracLogo';

class HomePage extends React.Component {
    state = {
      slide: 0
    };

    onSlideForward = () => {
        this.setState((prevState) => ({ slide: prevState.slide + 1 }));
    };

    onEndInstruction = () => {
        this.props.history.push('/meals');
    };

    render() {
        switch (this.state.slide) {
            case 1:
                return (
                    <div className="HomePage">
                        <div className="HomePage__slide">
                            <img
                              className="HomePage__sampleImg"
                              src={`/dist/${mealsSampleImg}`}
                            />
                            <div className="HomePage__descriptionBox">
                                <span className="theme-color">Macrotrac</span> is a nutrition tracker to help you meet your daily macronutrient ratio goals.
                            </div>
                        </div>
                        <HomePageButton buttonText="Next" onClick={this.onSlideForward} />
                    </div>
                );
            case 2:
            case 3:
                return (
                    <div className="HomePage">
                        <div className="HomePage__slide">
                            <img
                              className="HomePage__sampleImg"
                              src={`/dist/${foodSampleImg}`}
                            />
                            <div className="HomePage__descriptionBox">
                                {this.state.slide === 2 ? (
                                  'All your interactions with food will give you a visualization of how your food contributes towards your goals.'
                                ) : (
                                  'Calories are shown as a percentage of your daily limit and macronutrients as ratios of the calories they contribute.'
                                )}
                            </div>
                        </div>
                        <HomePageButton buttonText="Next" onClick={this.onSlideForward} />
                    </div>
                );
            case 4:
                return (
                    <div className="HomePage">
                        <div className="HomePage__slide">
                            <div className="HomePage__descriptionBox">
                                <p>That's all there is to it!</p>
                            </div>
                            <div className="HomePage__descriptionBox">
                                <p><span className="HomePage__routeIcon ion-home"></span> : Track your meals</p>
                                <p><span className="HomePage__routeIcon ion-fork"></span> : Save your favorite foods</p>
                                <p><span className="HomePage__routeIcon ion-person"></span> : Set your goals</p>
                            </div>
                        </div>
                        <HomePageButton buttonText="Let's Go!" onClick={this.onEndInstruction} />
                    </div>
                );
            default:
                return (
                  <div className="HomePage">
                      <div className="HomePage__slide">
                          <MacrotracLogo />
                          <h1 className="HomePage__title">Macrotrac</h1>
                      </div>
                      <HomePageButton buttonText="Welcome" onClick={this.onSlideForward} />
                  </div>
                );
        }
    }
}

export default HomePage;
