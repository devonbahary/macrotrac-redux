import uuid from 'uuid';

// FETCH_FOODS
export const fetchFoods = () => ({
  type: 'FETCH_FOODS'
});

// ADD_FOOD
export const addFood = (food) => ({
  type: 'ADD_FOOD',
  food: {
    ...food,
    id: uuid()
  }
});

// EDIT_FOOD
export const editFood = (id, updates) => ({
  type: 'EDIT_FOOD',
  id,
  updates
});

// REMOVE_FOOD
export const removeFood = ({ id }) => ({
  type: 'REMOVE_FOOD',
  id
});
