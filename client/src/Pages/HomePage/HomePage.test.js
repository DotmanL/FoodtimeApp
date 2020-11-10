import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import HomePage from './Homepage'


it(' expect to return HomePage Component', () => {

  const wrapper = shallow(<HomePage />)
  expect(
    toJson(wrapper)
  ).toMatchSnapshot()
})

