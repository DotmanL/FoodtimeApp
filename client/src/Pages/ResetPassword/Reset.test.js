import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import { Reset } from './Reset'

describe('Confirmation component', () => {
  let wrapper;
  let mockReset;
  let mockSubmit;

  beforeEach(() => {
    mockReset = jest.fn();
    mockSubmit = jest.fn();
    const match = { params: {
      id: 1243466,
    },
  }
    const mockProps = {
      reset: mockReset,
      handleSubmit: mockSubmit
    };

    wrapper = shallow(<Reset {...mockProps} match={match} />);
  });

  it('should render Confirmation Page component', () => {
    expect(toJson(wrapper))
    .toMatchSnapshot();
  })
  
  it('should simulate custom button click', () => {
    wrapper.find('CustomButton').simulate('click')
    expect(mockReset).toHaveBeenCalledTimes(0);
  
  })
  
  it('should simulate handlesubmit on button click', () => {
    wrapper.find('CustomButton').simulate('submit', { preventDefault () {} });
  
  })     

})