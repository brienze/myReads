import React from 'react';
import {shallow} from 'enzyme';
import BookApp from './Book.js';
import {getBook, generateBookList} from './util/testData';

const myBooks = generateBookList(),
  addOrMoveBook = jest.fn(),
  book = getBook();

it('renderiza corretamente', () => {
  expect(shallow(<BookApp shelf={book.shelf} addOrMoveBook={addOrMoveBook} book={book}/>)).toMatchSnapshot();
})
