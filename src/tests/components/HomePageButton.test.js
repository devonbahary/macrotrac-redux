import React from 'react';
import { shallow } from 'enzyme';
import HomePageButton from '../../components/HomePageButton';

test('should render HomePageButton correctly', () => {
    const wrapper = shallow(<HomePageButton />);
    expect(wrapper).toMatchSnapshot();
});

test('should call onClick prop when clicked', () => {
    const onClickSpy = jest.fn();
    const wrapper = shallow(<HomePageButton onClick={onClickSpy} />);
    wrapper.find('.HomePageButton').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
});

test('should render buttonText correctly', () => {
    const buttonText = 'hello';
    const wrapper = shallow(<HomePageButton buttonText={buttonText} />);
    expect(wrapper.find('.HomePageButton').html()).toContain(buttonText);
});
