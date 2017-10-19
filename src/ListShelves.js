import React from 'react'
import PropTypes from 'prop-types';
import ShelfApp from './Shelf.js'
import {Link} from 'react-router-dom'
import './App.css'

const ListShelvesApp = (props) => {

  const {myBooks, onMoveBook} = props

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <ShelfApp
            bookShelfName='Currently Reading'
            books={myBooks.filter((_) => _.shelf === 'currentlyReading')}
            onMoveBook={onMoveBook}/>
          <ShelfApp
            bookShelfName='Want to Read'
            books={myBooks.filter((_) => _.shelf === 'wantToRead')}
            onMoveBook={onMoveBook}/>
          <ShelfApp
            bookShelfName='Read' books={myBooks.filter((_) => _.shelf === 'read')}
            onMoveBook={onMoveBook}/>
        </div>
      </div>
      <div className="open-search">
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

ListShelvesApp.propTypes = {
  myBooks: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired
}

export default ListShelvesApp
