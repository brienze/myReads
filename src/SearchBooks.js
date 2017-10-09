import React from 'react'
import PropTypes from 'prop-types';
import './App.css'
import {Link} from 'react-router-dom'
import SearchResultApp from './SearchResult.js'
import * as BooksAPI from './BooksAPI'

//componente que renderiza um spinner enquanto a busca está ocorrendo
//Ref: https://github.com/CognizantStudio/react-loader
import Loader from 'react-loader'

class SearchBooksApp extends React.Component {
  static propTypes = {
    addBook: PropTypes.func.isRequired,
    myBooks: PropTypes.array.isRequired,
  }

  constructor(props){
    super(props)
    this.state = {
      searchValue: '',
      searchedBooks:[],
      loaded: false,
    }
  }

  /*
  Verifica se o livro contido no resultado da busca está na minha estante, caso esteja
  é obtida a shelf para que seja definido no livro.
    */
    definirShelf = (aBookId) =>{
      const { myBooks } = this.props;
      var bookFound = myBooks.find((myBook) =>{
           return myBook.id === aBookId;
       });

       return bookFound ? bookFound.shelf : "none";
    }

  onSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchValue: value,
      loaded: false,
    });

    if (value === '') {
      this.setState({
        searchedBooks: [],
        loaded: true
      });
    } else {
      BooksAPI.search(value,50).then((books) => {

        this.setState({
          searchedBooks:books,
          loaded: true})
      })
    }
  };

  render(){
    const {addBook, myBooks} = this.props;
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
        {this.state.searchedBooks.length > 0 &&
            <Loader loaded={this.state.loaded}>
                <SearchResultApp addBook={addBook} definirShelf={this.definirShelf} foundBooks={this.state.searchedBooks}/>
            </Loader>
      }
      </div>
    )
  }
}

export default SearchBooksApp
