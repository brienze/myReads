import React from 'react';
import {shallow} from 'enzyme';
import ListShelvesApp from './ListShelves.js';
import {generateBookList} from './util/testData';

const myBooks = generateBookList(),
  onMoveBook = jest.fn();

it('renderiza corretamente', () => {
  expect(shallow(<ListShelvesApp onMoveBook={onMoveBook} myBooks={myBooks}/>)).toMatchSnapshot();
})
