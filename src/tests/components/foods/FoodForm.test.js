import React from 'react';
import { shallow } from 'enzyme';
import foods from '../../fixtures/foods';
import FoodForm from '../../../components/foods/FoodForm';

// RENDER
describe('FoodForm', () => {
    test('should render FoodForm correctly', () => {
      const wrapper = shallow(<FoodForm />);
      expect(wrapper).toMatchSnapshot();
    });

    test('should render FoodForm correctly w/food', () => {
      const wrapper = shallow(<FoodForm food={foods[0]} />);
      expect(wrapper).toMatchSnapshot();
    });

    test('should render error for invalid form submission', () => {
      const wrapper = shallow(<FoodForm />);
      wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
      });
      expect(wrapper.state('err').length).toBeGreaterThan(0);
      expect(wrapper).toMatchSnapshot();
    });
});

// NOTIFICATION
describe('Notification', () => {
    test('should set appropriate Notification for add food', () => {
      const wrapper = shallow(<FoodForm />);
      expect(wrapper.find('Notification').prop('notification')).toBe('Add a new food item.');
    });

    test('should set appropriate Notification for edit food', () => {
      const onRemove = () => {};
      const wrapper = shallow(<FoodForm onRemove={onRemove} />);
      expect(wrapper.find('Notification').prop('notification')).toBe('Make changes to your food item.');
    });
});

// STATE (name)
describe('FoodForm name state', () => {
    test('should set name and hasChanged on input change', () => {
        const value = 'hello';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(0).prop('onChange')({ target: { value } });
        expect(wrapper.state('name')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should add name to servingUnits on name input change', () => {
        const value = 'hello';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('servingUnits').length).toBe(9);
        wrapper.find('InputField').at(0).prop('onChange')({ target: { value } });
        expect(wrapper.state('servingUnits')).toContain(value);
    });

    test('should remove name from servingUnits on name input change to 0-length string', () => {
        const wrapper = shallow(<FoodForm food={{ name: 'hello' }} />);
        const value = '';
        expect(wrapper.state('servingUnits').length).toBe(10);
        wrapper.find('InputField').at(0).prop('onChange')({ target: { value } });
        expect(wrapper.state('servingUnits').length).toBe(9);
        expect(wrapper.state('servingUnits')).not.toContain(value);
    });
});

// STATE (servingSize)
describe('FoodForm servingSize state', () => {
    test('should set servingSize and hasChanged on input change', () => {
        const value = '4.2';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onChange')({ target: { value }});
        expect(wrapper.state('servingSize')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set servingSize or hasChanged on input change value < 0', () => {
        const value = '-1';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onChange')({ target: { value }});
        expect(wrapper.state('servingSize')).toBe(1);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should increment servingSize and set hasChanged on InputField onIncrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevServingSize = wrapper.state('servingSize');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onIncrement')();
        expect(wrapper.state('servingSize')).toBe(prevServingSize + 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement servingSize and set hasChanged on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevServingSize = wrapper.state('servingSize');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onDecrement')();
        expect(wrapper.state('servingSize')).toBe(prevServingSize - 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT decrement servingSize below 0 on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevServingSize = wrapper.state('servingSize');
        const onDecrement = wrapper.find('InputField').at(1).prop('onDecrement');
        onDecrement();
        onDecrement();
        expect(wrapper.state('servingSize')).toBe(0);
    });

    test('should increment servingSize by passed prop food.servingSize and set hasChanged on InputField onIncrement when food prop passed', () => {
        const foodServingSize = foods[0].servingSize;
        const wrapper = shallow(<FoodForm food={foods[0]} />);
        const prevServingSize = wrapper.state('servingSize');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onIncrement')();
        expect(wrapper.state('servingSize')).toBe(prevServingSize + foodServingSize);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement servingSize by passed prop food.servingSize and set hasChanged on InputField onIncrement when food prop passed', () => {
        const foodServingSize = foods[0].servingSize;
        const wrapper = shallow(<FoodForm food={foods[0]} />);
        const prevServingSize = wrapper.state('servingSize');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onDecrement')();
        expect(wrapper.state('servingSize')).toBe(prevServingSize - foodServingSize);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement servingSize by passed prop food.servingSize to a value no less than 0 and set hasChanged on InputField onIncrement when food prop passed', () => {
        const foodServingSize = foods[0].servingSize;
        const wrapper = shallow(<FoodForm food={foods[0]} />);
        const prevServingSize = wrapper.state('servingSize');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(1).prop('onDecrement')();
        wrapper.find('InputField').at(1).prop('onDecrement')();
        expect(wrapper.state('servingSize')).toBe(0);
        expect(wrapper.state('hasChanged')).toBe(true);
    });
});

// STATE (servingUnit)
describe('FoodForm servingUnit state', () => {
    test('should set servingUnit and hasChanged on input change', () => {
      const value = 'ounce (oz)';
      const wrapper = shallow(<FoodForm />);
      expect(wrapper.state('hasChanged')).toBe(false);
      wrapper.find('InputField').at(2).prop('onChange')({ target: { value }});
      expect(wrapper.state('servingUnit')).toBe(value);
      expect(wrapper.state('hasChanged')).toBe(true);
    });
});

// STATE (carbs)
describe('FoodForm carbs state', () => {
    test('should set carbs and hasChanged on input change', () => {
        const value = '4.2';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onChange')({ target: { value }});
        expect(wrapper.state('carbs')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set carbs or hasChanged on input change value < 0', () => {
        const value = '-1';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onChange')({ target: { value }});
        expect(wrapper.state('carbs')).toBe(0);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should increment carbs and set hasChanged on InputField onIncrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevCarbs = wrapper.state('carbs');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onIncrement')();
        expect(wrapper.state('carbs')).toBe(prevCarbs + 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement carbs and set hasChanged on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm food={{ carbs: 1 }}/>);
        const prevCarbs = wrapper.state('carbs');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(3).prop('onDecrement')();
        expect(wrapper.state('carbs')).toBe(prevCarbs - 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT decrement carbs below 0 on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevCarbs = wrapper.state('carbs');
        const onDecrement = wrapper.find('InputField').at(3).prop('onDecrement');
        onDecrement();
        onDecrement();
        expect(wrapper.state('carbs')).toBe(0);
    });
});

// STATE (prot)
describe('FoodForm prot state', () => {
    test('should set prot and hasChanged on input change', () => {
        const value = '4.2';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(4).prop('onChange')({ target: { value }});
        expect(wrapper.state('prot')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set prot or hasChanged on input change value < 0', () => {
        const value = '-1';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(4).prop('onChange')({ target: { value }});
        expect(wrapper.state('prot')).toBe(0);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should increment prot and set hasChanged on InputField onIncrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevProt = wrapper.state('prot');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(4).prop('onIncrement')();
        expect(wrapper.state('prot')).toBe(prevProt + 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement prot and set hasChanged on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm food={{ prot: 1 }}/>);
        const prevProt = wrapper.state('prot');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(4).prop('onDecrement')();
        expect(wrapper.state('prot')).toBe(prevProt - 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT decrement prot below 0 on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevProt = wrapper.state('prot');
        const onDecrement = wrapper.find('InputField').at(4).prop('onDecrement');
        onDecrement();
        onDecrement();
        expect(wrapper.state('prot')).toBe(0);
    });
});

// STATE (fat)
describe('FoodForm fat state', () => {
    test('should set fat and hasChanged on input change', () => {
        const value = '5.2';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(5).prop('onChange')({ target: { value }});
        expect(wrapper.state('fat')).toBe(value);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT set fat or hasChanged on input change value < 0', () => {
        const value = '-1';
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(5).prop('onChange')({ target: { value }});
        expect(wrapper.state('fat')).toBe(0);
        expect(wrapper.state('hasChanged')).toBe(false);
    });

    test('should increment fat and set hasChanged on InputField onIncrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevFat = wrapper.state('fat');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(5).prop('onIncrement')();
        expect(wrapper.state('fat')).toBe(prevFat + 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should decrement fat and set hasChanged on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm food={{ fat: 1 }}/>);
        const prevFat = wrapper.state('fat');
        expect(wrapper.state('hasChanged')).toBe(false);
        wrapper.find('InputField').at(5).prop('onDecrement')();
        expect(wrapper.state('fat')).toBe(prevFat - 1);
        expect(wrapper.state('hasChanged')).toBe(true);
    });

    test('should NOT decrement fat below 0 on InputField onDecrement', () => {
        const wrapper = shallow(<FoodForm />);
        const prevFat = wrapper.state('fat');
        const onDecrement = wrapper.find('InputField').at(5).prop('onDecrement');
        onDecrement();
        onDecrement();
        expect(wrapper.state('fat')).toBe(0);
    });
});

// SUBMISSION
describe('FoodForm submission', () => {
    test('should set appropriate submission error message when servingSize === 0', () => {
        const wrapper = shallow(<FoodForm food={ { ...foods[0], servingSize: 0 }} />);
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        });
        expect(wrapper.state('err')).toBe('Can\'t have a serving size of 0.');
    });

    test('should set appropriate submission error message when carbs + prot + fat === 0', () => {
        const wrapper = shallow(<FoodForm food={{ ...foods[0], carbs: 0, prot: 0, fat: 0 }} />);
        wrapper.find('form').simulate('submit', {
          preventDefault: () => {}
        });
        expect(wrapper.state('err')).toBe('Can\'t add an empty-calorie food.');
    });
});

// LARGEBUTTON
describe('LargeButton', () => {
    test('should have appropriate text when FoodForm is passed a food prop', () => {
        const wrapper = shallow(<FoodForm food={foods[0]} />);
        expect(wrapper.find('LargeButton').prop('buttonText')).toBe('Edit Food');
    });

    test('should have appropriate text when FoodForm is NOT passed a food prop', () => {
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.find('LargeButton').prop('buttonText')).toBe('Add Food');
    });

    test('should have only one large button when FoodForm is NOT passed an onRemove prop', () => {
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.find('LargeButton').length).toBe(1);
    });

    test('should disable submit LargeButton when state hasChanged is false', () => {
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.find('LargeButton').html()).toContain('disabled=""');
    });

    test('should NOT disable submit LargeButton when state hasChanged is true', () => {
        const wrapper = shallow(<FoodForm />);
        expect(wrapper.find('LargeButton').html()).toContain('disabled=""');
        wrapper.find('InputField').at(0).prop('onChange')({ target: { value: 'hello' } });
        wrapper.update();
        expect(wrapper.find('LargeButton').html()).not.toContain('disabled=""');
    });

    test('should have two large buttons when FoodForm is passed an onRemove prop', () => {
        const onRemove = () => {};
        const wrapper = shallow(<FoodForm onRemove={onRemove} />);
        expect(wrapper.find('LargeButton').length).toBe(2);
    });

    test('should call onRemove prop when FoodForm is passed an onRemove prop and second LargeButton is clicked', () => {
        const onRemove = jest.fn();
        const wrapper = shallow(<FoodForm onRemove={onRemove} />);
        wrapper.find('LargeButton').at(1).simulate('click');
        expect(onRemove).toHaveBeenCalled();
    });
});
