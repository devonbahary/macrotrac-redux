import mealsReducer from '../../reducers/meals';
import meals from '../fixtures/meals';


const mockState = meals;

beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('meals', JSON.stringify(meals));
});

// @@INIT
test('should set up default state', () => {
    const state = mealsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

// FETCH_MEALS
test('should fetch meals from localStorage', () => {
    const state = mealsReducer(undefined, { type: 'FETCH_MEALS' });
    expect(state).toEqual(meals);
});

// ADD_MEAL
test('should add meal', () => {
    const meal = {
      id: '123',
      name: 'pumpkin',
      servingSize: 8,
      servingUnit: 'pounds (lb)',
      carbs: 23,
      prot: 4,
      fat: 6
    };
    const action = {
      type: 'ADD_MEAL',
      meal
    };
    const state = mealsReducer(mockState, action);
    expect(state).toEqual([ ...meals, meal ]);
});

test('should add meal to localStorage', () => {
    const meal = {
      id: '123',
      name: 'pumpkin',
      servingSize: 8,
      servingUnit: 'pounds (lb)',
      carbs: 23,
      prot: 4,
      fat: 6
    };
    const action = {
      type: 'ADD_MEAL',
      meal
    };
    const state = mealsReducer(mockState, action);
    const storage = JSON.parse(localStorage.getItem('meals'));
    expect(state).toEqual(storage);
});

// REMOVE_MEAL
test('should remove meal by id', () => {
    const action = {
      type: 'REMOVE_MEAL',
      id: meals[1].id
    };

    const state = mealsReducer(mockState, action);
    expect(state).toEqual([ meals[0], meals[2] ]);
});

test('should NOT remove meal by invalid id', () => {
    const action = {
      type: 'REMOVE_MEAL',
      id: '-1'
    };

    const state = mealsReducer(mockState, action);
    expect(state).toEqual(meals);
});

test('should remove meal from localStorage', () => {
    const action = {
      type: 'REMOVE_MEAL',
      id: meals[1].id
    };

    const state = mealsReducer(mockState, action);
    const storage = JSON.parse(localStorage.getItem('meals'));
    expect(storage).toEqual([ meals[0], meals[2] ]);
});
