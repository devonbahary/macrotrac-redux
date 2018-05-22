import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly for root dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly for /meals dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/meals' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly for /meals/create dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/meals/create' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly for /foods dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/foods' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly for /foods/create dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/foods/create' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly for /foods/edit/??? dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/foods/edit/1234125' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot('foods-edit');
});

test('should render Header correctly for a different param:id /foods/edit/??? dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/foods/edit/5214321' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot('foods-edit');
});

test('should render Header correctly for /user dir', () => {
    const wrapper = shallow(
      <BrowserRouter>
          <Header location={{ pathname: '/user' }} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
});
