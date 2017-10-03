import React from 'react'
import PropTypes from 'prop-types';
import './App.css'

//Component from https://github.com/NdYAG/react-rater
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

class BookApp extends React.Component{
  state = {
    selectedOption: '1'

  }

handleOptionChange = (e)=> {
  this.setState({
    selectedOption: e.target.value
  });
}

  render(){
    const {book, addOrMoveBook, shelf } = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks['smallThumbnail']})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf} onChange={e=>addOrMoveBook(e.target, book)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
            {
              //interactive = false -> read only
            }
              <Rater interactive={false} total={5} rating={book.averageRating}  />
          </div>
      </li>
    )
  }
}

BookApp.propTypes={
  shelf: PropTypes.string.isRequired,
  addOrMoveBook: PropTypes.func.isRequired,
  book:PropTypes.object.isRequired
}

export default BookApp;
