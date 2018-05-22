import React from 'react';
import { shallow } from 'enzyme';
import user from '../../fixtures/user';
import UserForm from '../../../components/user/UserForm';

test('should render UserForm correctly', () => {
    const wrapper = shallow(<UserForm user={user} />);
    expect(wrapper).toMatchSnapshot();
});

// STATE (calorieGoal)
describe('UserForm calorieGoal state', () => {
    test('should set calorieGoal and hasChanged state on input change', () => {
        const value = 2100;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(0).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('calorieGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set calorieGoal or hasChanged state on invalid input change (<= 0)', () => {
        const value = 0;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('calorieGoal')).toBe(user.calorieGoal);
        wrapper.find('InputField').at(0).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('calorieGoal')).toBe(user.calorieGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should set calorieGoal (+100) and hasChanged state onIncrement', () => {
        const value = user.calorieGoal + 100;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(0).prop('onIncrement')();
        expect(wrapper.state('calorieGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should set calorieGoal (-100) and hasChanged state onDecrement', () => {
        const value = user.calorieGoal - 100;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(0).prop('onDecrement')();
        expect(wrapper.state('calorieGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set calorieGoal (-100) and hasChanged state onDecrement when calorieGoal <= 100', () => {
        const calorieGoal = 100;
        const wrapper = shallow(<UserForm user={{ ...user, calorieGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(0).prop('onDecrement')();
        expect(wrapper.state('calorieGoal')).toBe(calorieGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });
});

// STATE (carbsRatioGoal)
describe('UserForm carbsRatioGoal state', () => {
    test('should set carbsRatioGoal and hasChanged state on input change', () => {
        const value = 50;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('carbsRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set carbsRatioGoal or hasChanged state on invalid input change (< 0)', () => {
        const value = -1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('calorieGoal')).toBe(user.calorieGoal);
        wrapper.find('InputField').at(1).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('calorieGoal')).toBe(user.calorieGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set carbsRatioGoal or hasChanged state on invalid input change (> 100)', () => {
        const value = 101;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('carbsRatioGoal')).toBe(user.carbsRatioGoal);
        wrapper.find('InputField').at(1).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('carbsRatioGoal')).toBe(user.carbsRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should set carbsRatioGoal (+1) and hasChanged state onIncrement', () => {
        const value = user.carbsRatioGoal + 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onIncrement')();
        expect(wrapper.state('carbsRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should set carbsRatioGoal (-1) and hasChanged state onDecrement', () => {
        const value = user.carbsRatioGoal - 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onDecrement')();
        expect(wrapper.state('carbsRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set carbsRatioGoal (+1) and hasChanged state onIncrement when carbsRatioGoal === 100', () => {
        const carbsRatioGoal = 100;
        const wrapper = shallow(<UserForm user={{ ...user, carbsRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onIncrement')();
        expect(wrapper.state('carbsRatioGoal')).toBe(carbsRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set carbsRatioGoal (-1) and hasChanged state onDecrement when carbsRatioGoal === 0', () => {
        const carbsRatioGoal = 0;
        const wrapper = shallow(<UserForm user={{ ...user, carbsRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onDecrement')();
        expect(wrapper.state('carbsRatioGoal')).toBe(carbsRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });
});

// STATE (protRatioGoal)
describe('UserForm protRatioGoal state', () => {
    test('should set protRatioGoal and hasChanged state on input change', () => {
        const value = 50;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(2).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('protRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set protRatioGoal or hasChanged state on invalid input change (< 0)', () => {
        const value = -1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('protRatioGoal')).toBe(user.protRatioGoal);
        wrapper.find('InputField').at(2).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('protRatioGoal')).toBe(user.protRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set protRatioGoal or hasChanged state on invalid input change (> 100)', () => {
        const value = 101;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('protRatioGoal')).toBe(user.protRatioGoal);
        wrapper.find('InputField').at(2).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('protRatioGoal')).toBe(user.protRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should set protRatioGoal (+1) and hasChanged state onIncrement', () => {
        const value = user.protRatioGoal + 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(2).prop('onIncrement')();
        expect(wrapper.state('protRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should set protRatioGoal (-1) and hasChanged state onDecrement', () => {
        const value = user.protRatioGoal - 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(2).prop('onDecrement')();
        expect(wrapper.state('protRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set protRatioGoal (+1) and hasChanged state onIncrement when protRatioGoal === 100', () => {
        const protRatioGoal = 100;
        const wrapper = shallow(<UserForm user={{ ...user, protRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(2).prop('onIncrement')();
        expect(wrapper.state('protRatioGoal')).toBe(protRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set protRatioGoal (-1) and hasChanged state onDecrement when protRatioGoal === 0', () => {
        const protRatioGoal = 0;
        const wrapper = shallow(<UserForm user={{ ...user, protRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(2).prop('onDecrement')();
        expect(wrapper.state('protRatioGoal')).toBe(protRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });
});

// STATE (fatRatioGoal)
describe('UserForm fatRatioGoal state', () => {
    test('should set fatRatioGoal and hasChanged state on input change', () => {
        const value = 50;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('fatRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set fatRatioGoal or hasChanged state on invalid input change (< 0)', () => {
        const value = -1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('fatRatioGoal')).toBe(user.fatRatioGoal);
        wrapper.find('InputField').at(3).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('fatRatioGoal')).toBe(user.fatRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set fatRatioGoal or hasChanged state on invalid input change (> 100)', () => {
        const value = 101;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(wrapper.state('fatRatioGoal')).toBe(user.fatRatioGoal);
        wrapper.find('InputField').at(3).prop('onChange')({
          target: { value }
        })
        expect(wrapper.state('fatRatioGoal')).toBe(user.fatRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should set fatRatioGoal (+1) and hasChanged state onIncrement', () => {
        const value = user.fatRatioGoal + 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onIncrement')();
        expect(wrapper.state('fatRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should set fatRatioGoal (-1) and hasChanged state onDecrement', () => {
        const value = user.fatRatioGoal - 1;
        const wrapper = shallow(<UserForm user={user} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onDecrement')();
        expect(wrapper.state('fatRatioGoal')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set fatRatioGoal (+1) and hasChanged state onIncrement when fatRatioGoal === 100', () => {
        const fatRatioGoal = 100;
        const wrapper = shallow(<UserForm user={{ ...user, fatRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onIncrement')();
        expect(wrapper.state('fatRatioGoal')).toBe(fatRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should NOT set fatRatioGoal (-1) and hasChanged state onDecrement when fatRatioGoal === 0', () => {
        const fatRatioGoal = 0;
        const wrapper = shallow(<UserForm user={{ ...user, fatRatioGoal }} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onDecrement')();
        expect(wrapper.state('fatRatioGoal')).toBe(fatRatioGoal);
        expect(wrapper.state('hasChanged')).toBe(false);
    });
});

describe('UserForm submission', () => {
    test('should NOT submit when hasChanged state is false', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<UserForm user={user} onSubmit={onSubmitSpy} />);
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        });
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(onSubmitSpy).not.toHaveBeenCalled();
    });

    test('should call onError prop when carbsRatioGoal + protRatioGoal + fatRatioGoal !== 100', () => {
        const onErrorSpy = jest.fn();
        const wrapper = shallow(<UserForm user={{ ...user, fatRatioGoal: 19 }} onError={onErrorSpy} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onIncrement')();
        wrapper.find('InputField').at(3).prop('onDecrement')();
        expect(wrapper.state('hasChanged')).toBe(true);
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        });
        expect(onErrorSpy).toHaveBeenCalled();
    });

    test('should set hasChanged state to false and call onSubmit prop with state on successful submit', () => {
        const onSubmitSpy = jest.fn();
        const wrapper = shallow(<UserForm user={user} onSubmit={onSubmitSpy} />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onIncrement')();
        wrapper.find('InputField').at(3).prop('onDecrement')();
        expect(wrapper.state('hasChanged')).toBe(true);
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        });
        expect(wrapper.state('hasChanged')).toBe(false);
        expect(onSubmitSpy).toHaveBeenCalledWith(user);
    });
});
