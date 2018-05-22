import React from 'react';
import { shallow } from 'enzyme';
import InputField from '../../components/InputField';

test('should render InputField correctly for prop type \'text\'', () => {
    const wrapper = shallow(<InputField type="text" />);
    expect(wrapper).toMatchSnapshot();
});

test('should render InputField correctly for prop type \'number\'', () => {
    const wrapper = shallow(<InputField type="number" />);
    expect(wrapper).toMatchSnapshot();
});

test('should render InputField correctly for prop type \'select\'', () => {
    const selectOptions = [ 'option1', 'option2' ];
    const wrapper = shallow(<InputField type="select" selectOptions={selectOptions} />);
    expect(wrapper).toMatchSnapshot();
});

describe('should append prop addClass to InputField className when prop type !== text', () => {
    const addClass = 'additionalClassName';

    test('should NOT for prop type \'text\'', () => {
        const wrapper = shallow(<InputField type="text" addClass={addClass} />);
        expect(wrapper.hasClass(`${'InputField' + addClass}`)).toBe(false);
    });

    test('should for prop type \'number\'', () => {
        const wrapper = shallow(<InputField type="number" addClass={addClass} />);
        expect(wrapper.hasClass(`${'InputField' + addClass}`)).toBe(true);
    });

    test('should for prop type \'select\'', () => {
        const selectOptions = [ 'option1', 'option2' ];
        const wrapper = shallow(<InputField type="select" addClass={addClass} selectOptions={selectOptions} />);
        expect(wrapper.hasClass(`${'InputField' + addClass}`)).toBe(true);
    });
});


describe('should include a label to InputField when prop type !== text', () => {
    test('should NOT for prop type \'text\'', () => {
        const label = 'name';
        const wrapper = shallow(<InputField type="text" label={label} />);
        expect(wrapper.find('label').length).toBe(0);
    });

    test('should for prop type \'number\'', () => {
        const label = 'servingSize';
        const wrapper = shallow(<InputField type="number" label={label} />);
        expect(wrapper.find('label').html()).toContain(`${label}`);
    });

    test('should for prop type \'select\'', () => {
        const label = 'servingUnit';
        const selectOptions = [ 'option1', 'option2' ];
        const wrapper = shallow(<InputField type="select" label={label} selectOptions={selectOptions} />);
        expect(wrapper.find('label').html()).toContain(`${label}`);
    });
});

describe('should set value to input from value prop for each input type', () => {
    test('should for type \'text\'', () => {
        const value = 'hello';
        const wrapper = shallow(<InputField type="text" value={value} onChange={() => {}} />);
        expect(wrapper.find('input').html()).toContain(`value=\"${value}\"`);
    });

    test('should for type \'number\'', () => {
        const value = 4;
        const wrapper = shallow(<InputField type="number" value={value} onChange={() => {}} />);
        expect(wrapper.find('InputNumber').prop('value')).toBe(value);
    });

    test('should for type \'select\'', () => {
        const selectOptions = [ 'option1', 'option2' ];
        const value = 0;
        const wrapper = shallow(<InputField type="select" value={value} onChange={() => {}} selectOptions={selectOptions} />);
        expect(wrapper.find('select').html()).toContain(`value=\"${value}\"`);
    });
});

describe('should call onChange prop on input change', () => {
    test('should for type \'text\'', () => {
        const onChangeSpy = jest.fn();
        const event = { target: { value: 'hello' } };
        const wrapper = shallow(<InputField type="text" value='' onChange={onChangeSpy} />);
        wrapper.find('input').simulate('change', event);
        expect(onChangeSpy).toHaveBeenCalledWith(event);
    });

    test('should for type \'number\'', () => {
        const onChangeSpy = jest.fn();
        const event = { target: { value: 4 } };
        const wrapper = shallow(<InputField type="number" value={0} onChange={onChangeSpy} />);
        wrapper.find('InputNumber').prop('onChange')(event);
        expect(onChangeSpy).toHaveBeenCalledWith(event);
    });

    test('should for type \'select\'', () => {
        const onChangeSpy = jest.fn();
        const event = { target: { value: 1 } };
        const selectOptions = [ 'option1', 'option2' ];
        const wrapper = shallow(<InputField type="select" value={0} onChange={onChangeSpy} selectOptions={selectOptions} />);
        wrapper.find('select').simulate('change', event);
        expect(onChangeSpy).toHaveBeenCalledWith(event);
    });
})
