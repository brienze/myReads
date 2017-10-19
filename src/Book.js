import React from 'react'
import PropTypes from 'prop-types';
import './App.css'
import If from './If.js'

//Component from https://github.com/NdYAG/react-rater
import Rater from 'react-rater'

import 'react-rater/lib/react-rater.css'

const BookApp = (props) => {
  const {book, addOrMoveBook, shelf, fromSearch} = props
  const thumbnailImage = book.imageLinks
    ? book.imageLinks.smallThumbnail
    : 'http://books.google.com/googlebooks/images/no_cover_thumb.gif';
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnailImage})`
              }}>
          </div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={e => addOrMoveBook(e.target, book)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <If test={fromSearch === false}>
                <option value="none">None</option>
              </If>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
        <Rater
          interactive={false}
          total={5}
          rating={book.averageRating}/>
      </div>
    </li>
  )
}

BookApp.propTypes = {
  shelf: PropTypes.string.isRequired,
  addOrMoveBook: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  fromSearch: PropTypes.bool.isRequired
}

export default BookApp;
