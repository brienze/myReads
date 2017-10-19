import React from 'react';
import {shallow} from 'enzyme';
import ShelfApp from './Shelf.js';
import {generateBookList} from './util/testData';

const myBooks = generateBookList(),
  onMoveBook = jest.fn();

it('renderiza corretamente', () => {
  expect(shallow(<ShelfApp bookShelfName='read' onMoveBook={onMoveBook} books={myBooks}/>)).toMatchSnapshot();
})
