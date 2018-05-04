import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
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
                    <Header location={({ location })} />
                    <div className="content-window">
                        <Switch>
                            <Route path='/' exact component={HomePage} />
                            <Route path='/foods' exact component={FoodsPage} />
                            <Route path='/foods/create' exact component={AddFoodPage} />
                            <Route path='/foods/edit/:id' exact component={EditFoodPage} />
                            <Route path='/meals' exact component={MealsPage} />
                            <Route path='/meals/create' exact component={AddMealPage} />
                            <Route path='/user' exact component={UserPage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                    <MainNav />
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(AppRouter);
