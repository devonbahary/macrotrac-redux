import { fetchUser, updateUser } from '../../actions/user';

test('should generate fetch user action object', () => {
    const action = fetchUser();
    expect(action).toEqual({
      type: 'FETCH_USER'
    });
});

test('should generate update user action object', () => {
    const user= {
      calorieGoal: 2500
    };
    const action = updateUser(user);
    expect(action).toEqual({
      type: 'UPDATE_USER',
      user
    });
});
