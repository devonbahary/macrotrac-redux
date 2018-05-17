import {
  fetchMeals,
  addMeal,
  removeMeal,
  clearMeals
} from '../../actions/meals';

test('should generate fetch meals action object', () => {
    const action = fetchMeals();
    expect(action).toEqual({
      type: 'FETCH_MEALS'
    });
});

test('should generate add meal action object', () => {
    const meal = {
      carbs: 4,
      prot: 3,
      fat: 2
    };

    const action = addMeal(meal);
    expect(action).toEqual({
      type: 'ADD_MEAL',
      meal: {
        ...meal,
        id: expect.any(String)
      }
    });
});

test('should generate remove meal action object', () => {
    const action = removeMeal({ id: '123abc' });
    expect(action).toEqual({
      type: 'REMOVE_MEAL',
      id: '123abc'
    });
});

test('it should generate clear meals action object', () => {
    const action = clearMeals();
    expect(action).toEqual({
      type: 'CLEAR_MEALS'
    });
});
