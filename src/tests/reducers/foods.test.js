import foodsReducer from '../../reducers/foods';
import foods from '../fixtures/foods';

const mockState = {
  items: foods,
  notification: ''
};

beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('foods', JSON.stringify(foods));
});

// @@INIT
test('should set up default state', () => {
    const state = foodsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      items: [],
      notification: ''
    });
});

// FETCH_FOODS
test('should fetch food from localStorage', () => {
    const state = foodsReducer(undefined, { type: 'FETCH_FOODS' });
    expect(state.items).toEqual(foods);
});

test('should assign appropriate notification for result from fetch food ', () => {
    const state = foodsReducer(undefined, { type: 'FETCH_FOODS' });
    expect(state.notification).toBe(`Found ${foods.length} foods.` : 'No food items found.');
});

// ADD_FOOD
test('should add food', () => {
    const food = {
      id: '123',
      name: 'pumpkin',
      servingSize: 8,
      servingUnit: 'pounds (lb)',
      carbs: 23,
      prot: 4,
      fat: 6
    };
    const action = {
      type: 'ADD_FOOD',
      food
    };
    const state = foodsReducer(mockState, action);
    expect(state.items).toEqual([ ...foods, food ]);
});

test('should add food to localStorage', () => {
    const food = {
      id: '123',
      name: 'pumpkin',
      servingSize: 8,
      servingUnit: 'pounds (lb)',
      carbs: 23,
      prot: 4,
      fat: 6
    };
    const action = {
      type: 'ADD_FOOD',
      food
    };
    const state = foodsReducer(undefined, action);
    const storage = JSON.parse(localStorage.getItem('foods'));
    expect(state.items).toEqual(storage);
});

test('should assign appropriate notification for result from add food ', () => {
    const food = {
      id: '123',
      name: 'pumpkin',
      servingSize: 8,
      servingUnit: 'pounds (lb)',
      carbs: 23,
      prot: 4,
      fat: 6
    };
    const action = {
      type: 'ADD_FOOD',
      food
    };

    const state = foodsReducer(undefined, action);
    expect(state.notification).toBe('Added new food item.');
});

// EDIT_FOOD
test('should edit food by id', () => {
    const carbs = 22;
    const updates = {
      carbs
    };
    const action = {
      type: 'EDIT_FOOD',
      id: foods[1].id,
      updates
    };

    const state = foodsReducer(mockState, action);
    expect(state.items[1].carbs).toBe(carbs);
});

test('should NOT edit food with invalid id', () => {
    const carbs = 22;
    const updates = {
      carbs
    };
    const action = {
      type: 'EDIT_FOOD',
      id: '-1',
      updates
    };

    const state = foodsReducer(mockState, action);
    expect(state.items).toEqual(foods);
});

test('should edit food by id in localStorage', () => {
    const carbs = 22;
    const updates = {
      carbs
    };
    const action = {
      type: 'EDIT_FOOD',
      id: foods[1].id,
      updates
    };

    const state = foodsReducer(mockState, action);
    const storage = JSON.parse(localStorage.getItem('foods'));
    expect(storage[1].carbs).toBe(carbs);
});

test('should assign appropriate notification for result from edit food', () => {
  const updates = {
    name: ''
  };
  const action = {
    type: 'EDIT_FOOD',
    id: foods[1].id,
    updates
  };

    const state = foodsReducer(undefined, action);
    expect(state.notification).toBe('Updated food item.');
});

// REMOVE_FOOD
test('should remove food by id', () => {
    const action = {
      type: 'REMOVE_FOOD',
      id: foods[1].id
    };

    const state = foodsReducer(mockState, action);
    expect(state.items).toEqual([ foods[0], foods[2] ]);
});

test('should NOT remove food by invalid id', () => {
    const action = {
      type: 'REMOVE_FOOD',
      id: '-1'
    };

    const state = foodsReducer(mockState, action);
    expect(state.items).toEqual(foods);
});

test('should remove food from localStorage', () => {
    const action = {
      type: 'REMOVE_FOOD',
      id: foods[1].id
    };

    const state = foodsReducer(mockState, action);
    const storage = JSON.parse(localStorage.getItem('foods'));
    expect(storage).toEqual([ foods[0], foods[2] ]);
});

test('should assign appropriate notification for result from remove food', () => {
    const action = {
      type: 'REMOVE_FOOD',
      id: foods[1].id
    };

    const state = foodsReducer(mockState, action);
    expect(state.notification).toBe('Removed food item.');
});
