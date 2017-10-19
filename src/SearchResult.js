import React from 'react'
import PropTypes from 'prop-types';
import BookApp from './Book.js'
import './App.css'

const SearchResultApp = ({foundBooks, addBook, definirShelf}) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {  foundBooks.length > 0 &&
           foundBooks.map((book) => (
             <BookApp
               key={book.id}
               book={book}
               addOrMoveBook ={addBook}
               shelf={definirShelf(book.id)}
               fromSearch={true}
             />
           ))
         }
      </ol>
    </div>
  )
}

SearchResultApp.propTypes = {
  addBook: PropTypes.func.isRequired,
  foundBooks: PropTypes.array.isRequired,
  definirShelf: PropTypes.func.isRequired
}

export default SearchResultApp
