import React from 'react';
import {shallow} from 'enzyme';
import SearchBooksApp from './SearchBooks.js';

const addBook = jest.fn();

it('renderiza corretamente', () => {
  expect(shallow(<SearchBooksApp addBook={addBook}/>)).toMatchSnapshot();
})
