import uuid from 'uuid';


const initialFoodsState = {
  items: [],
  notification: ''
};

export default (prevState = initialFoodsState, action) => {
    let items;
    switch (action.type) {
        case 'FETCH_FOODS':
            items = localStorage.getItem('foods');
            return {
              items: items ? JSON.parse(items) : prevState.items,
              notification: items ? `Found ${JSON.parse(items).length} foods.` : 'No food items found.'
            };
        case 'ADD_FOOD':
            items = [ ...prevState.items, { ...action.food, id: uuid() } ];
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items,
              notification: 'Added new food item.'
            };
        case 'EDIT_FOOD':
            items = prevState.items.map(food => food.id === action.id ? { ...food, ...action.updates } : food);
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items,
              notification: 'Updated food item.'
            };
        case 'REMOVE_FOOD':
            items = prevState.items.filter(food => food.id !== action.id);
            localStorage.setItem('foods', JSON.stringify(items));
            return {
              items,
              notification: 'Removed food item.'
            };
        default:
            return prevState;
    }
};
