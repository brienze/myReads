import React from 'react'
import BookApp from './BookApp.js'
import './App.css'

class ShelfApp extends React.Component {

	  render() {
        const {bookShelfName,books,onMoveBook } = this.props
        return (
              <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {
                        books.map(
                          (_)=>(
                              <BookApp key={_.id} book = {_} addOrMoveBook ={onMoveBook} shelf={_.shelf}/>
                          )
                        )
                      }
                  </ol>
                </div>
              </div>
          )
      }
  }
export default ShelfApp
