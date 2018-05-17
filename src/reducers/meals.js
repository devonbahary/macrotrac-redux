import uuid from 'uuid';

const initialMealsState = [];

export default (prevState = initialMealsState, action) => {
    let meals;
    switch (action.type) {
        case 'FETCH_MEALS':
            meals = localStorage.getItem('meals');
            return meals ? JSON.parse(meals) : prevState;
        case 'ADD_MEAL':
            meals = [ ...prevState, action.meal ];
            localStorage.setItem('meals', JSON.stringify(meals));
            return meals;
        case 'REMOVE_MEAL':
            meals = prevState.filter(meal => meal.id !== action.id)
            localStorage.setItem('meals', JSON.stringify(meals));
            return meals;
        case 'CLEAR_MEALS':
            localStorage.setItem('meals', JSON.stringify([]));
            return [];
        default:
            return prevState;
    }
};
