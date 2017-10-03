
import React from 'react';
import { shallow } from 'enzyme';
import MyReadsApp from './App';


it('should render without any errors', () => {
  expect(shallow(<MyReadsApp/>)).toMatchSnapshot();
});
