import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import SwitchCSSTransitionGroup from 'switch-css-transition-group';
import { fetchFoods } from '../actions/foods';
import { fetchMeals } from '../actions/meals';
import { fetchUser } from '../actions/user';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AddFoodPage from '../components/foods/AddFoodPage';
import AddMealPage from '../components/meals/AddMealPage';
import EditFoodPage from '../components/foods/EditFoodPage';
import FoodsPage from '../components/foods/FoodsPage';
import MainNav from '../components/MainNav';
import MealsPage from '../components/meals/MealsPage';
import NotFoundPage from '../components/NotFoundPage';
import UserPage from '../components/user/UserPage';

class AppRouter extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchFoods());
        this.props.dispatch(fetchMeals());
        this.props.dispatch(fetchUser());
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="content-window">
                        <Route render={({ history }) => (
                            <SwitchCSSTransitionGroup
                              location={history.location}
                              transitionName="route"
                              transitionEnterTimeout={250}
                              transitionLeaveTimeout={250}
                            >
                                <Route path='/' exact component={HomePage} key={history.location.key} />
                                <Route path='/foods' exact component={FoodsPage} key={history.location.key} />
                                <Route path='/foods/create' exact component={AddFoodPage} key={history.location.key} />
                                <Route path='/foods/edit/:id' exact component={EditFoodPage} key={history.location.key} />
                                <Route path='/meals' exact component={MealsPage} key={history.location.key} />
                                <Route path='/meals/create' exact component={AddMealPage} key={history.location.key} />
                                <Route path='/user' exact component={UserPage} key={history.location.key} />
                                <Route component={NotFoundPage} key={history.location.key} />
                            </SwitchCSSTransitionGroup>
                        )}/>
                    </div>
                    <MainNav />
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(AppRouter);
