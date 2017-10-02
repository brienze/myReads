import React from 'react'
import PropTypes from 'prop-types';
import BookApp from './Book.js'
import './App.css'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooksApp extends React.Component {

  state = {
    searchValue: '',
    searchedBooks:[],
  }

  onSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
    });

    if (value === '') {
      this.setState({
        searchedBooks: [],
      });
    } else {
      BooksAPI.search(value,50).then((books) => {
        this.setState({searchedBooks:books})
      })
    }
  };

/*
Verifica se o livro contido no resultado da busca está na minha estante, caso esteja
é obtida a shelf para que seja definido no 'estado' do livro.
  */

definirShelf(aBookId){
  var bookFound = this.props.myBooks.find((myBook) =>{
       return myBook.id === aBookId;
   });
   return bookFound ? bookFound.shelf : "none";
}

  render(){
    const {addBook} = this.props;
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.searchValue} onChange={this.onSearchChange}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.searchedBooks.length > 0 &&
            this.state.searchedBooks.map(
                (_)=>(
                    <BookApp key={_.id} book = {_} addOrMoveBook ={addBook} shelf={this.definirShelf(_.id)} />
                  )
              )
          }
          </ol>
        </div>
      </div>
    )
  }
}

SearchBooksApp.propTypes={
  addBook: PropTypes.func.isRequired
}

export default SearchBooksApp
