import userReducer from '../../reducers/user';
import user from '../fixtures/user';

beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify(user));
});


// @@INIT
test('should set up default state', () => {
    const state = userReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
      calorieGoal: 2000,
      carbsRatioGoal: 40,
      protRatioGoal: 20,
      fatRatioGoal: 40
    });
});

// FETCH_USER
test('should fetch user from localStorage', () => {
    const state = userReducer(undefined, { type: 'FETCH_USER' });
    expect(state).toEqual(user);
});

// UPDATE_USER
test('should update user', () => {
    const user = {
      calorieGoal: 2500,
      carbsRatioGoal: 20,
      protRatioGoal: 30,
      fatRatioGoal: 50
    };
    const action = {
      type: 'UPDATE_USER',
      user
    };

    const state = userReducer(undefined, action);
    expect(state).toEqual(user);
})

test('should save user to localStorage', () => {
    const user = {
      calorieGoal: 2500,
      carbsRatioGoal: 20,
      protRatioGoal: 30,
      fatRatioGoal: 50
    };
    const action = {
      type: 'UPDATE_USER',
      user
    };

    const state = userReducer(undefined, action);
    const storage = JSON.parse(localStorage.getItem('user'));
    expect(storage).toEqual(user);
});
