import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import { Forgot } from './Forgot'

describe('Forgot component', () => {
  let wrapper;
  let mockForgot;

  beforeEach(() => {
    mockForgot = jest.fn();

    const mockProps = {
     
      forgot: mockForgot
    };

    wrapper = shallow(<Forgot {...mockProps} />);
  });

  it('should render Forgot component', () => {
    expect(toJson(wrapper))
    .toMatchSnapshot();
  })
  
})