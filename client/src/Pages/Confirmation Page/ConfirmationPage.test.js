import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import { ConfirmationPage } from './ConfirmationPage'

describe('Confirmation component', () => {
  let wrapper;
  let mockActivate;

  beforeEach(() => {
    mockActivate = jest.fn();

    const match = { params: {
      id: 12434,
    },
  }
    const mockProps = {
      activate: mockActivate
    };

    wrapper = shallow(<ConfirmationPage {...mockProps} match={match} />);
  });

  it('should render Confirmation Page component', () => {
    expect(toJson(wrapper))
    .toMatchSnapshot();
  })
  
})