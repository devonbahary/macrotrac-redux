import {
  fetchFoods,
  addFood,
  editFood,
  removeFood
} from '../../actions/foods';

test('should generate fetch foods action object', () => {
    const action = fetchFoods();
    expect(action).toEqual({
      type: 'FETCH_FOODS'
    });
});

test('should generate add food action object', () => {
    const food = {
      name: 'banana',
      carbs: 4,
      prot: 3,
      fat: 2
    };

    const action = addFood(food);
    expect(action).toEqual({
      type: 'ADD_FOOD',
      food: {
        ...food,
        id: expect.any(String)
      }
    });
});

test('should generate edit food action object', () => {
    const updates = {
      carbs: 8
    };

    const action = editFood('123abc', updates);
    expect(action).toEqual({
      type: 'EDIT_FOOD',
      id: '123abc',
      updates
    });
});

test('should generate remove food action object', () => {
    const action = removeFood({ id: '123abc' });
    expect(action).toEqual({
      type: 'REMOVE_FOOD',
      id: '123abc'
    });
});
