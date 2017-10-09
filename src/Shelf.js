import React from 'react'
import PropTypes from 'prop-types';
import BookApp from './Book.js'
import './App.css'

const ShelfApp = (props) => {
    const {bookShelfName,books,onMoveBook } = props
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfName}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  {
                    books.map(
                      (_)=>(
                          <BookApp key={_.id} book = {_} addOrMoveBook ={onMoveBook} shelf={_.shelf} fromSearch={false}/>
                      )
                    )
                  }
              </ol>
            </div>
          </div>
      )
  }

ShelfApp.propTypes = {
  bookShelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired
}
export default ShelfApp
