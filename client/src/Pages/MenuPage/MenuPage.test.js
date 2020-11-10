import React from 'react';
import { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import MenuPage from './Menupage'


it(' expect to return MenuPage Component', () => {

  const wrapper = shallow(<MenuPage />)
  expect(
    toJson(wrapper)
  ).toMatchSnapshot()
})

