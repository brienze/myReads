import React from 'react'
import ShelfApp from './Shelf.js'
import * as BooksAPI from './BooksAPI'
import './App.css'

class ShelvesApp extends React.Component {
	state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      showSearchPage: false,
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

definirShelf(bookId){
  var shelfFound = this.props.books.find((book) =>{
     if(book.id === bookId){
       return book;
     }

   });
   console.log(shelfFound);
   return shelfFound ? shelfFound.shelf : "none";
}


	render() {
    const {books,onMoveBook, onAddBook} = this.props

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
              {this.state.searchedBooks.length > 0 &&
              <ol className="books-grid">

                {

                    this.state.searchedBooks.map(
                      (_)=>(
                        <li key={_.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${_.imageLinks['smallThumbnail']})` }}></div>
                            <div className="book-shelf-changer">


                              <select value={this.definirShelf(_.id)

                              } onChange={e=>onAddBook(e.target, _)}>
                                <option value="none" disabled>Move to...</option>

                                <option value="currentlyReading" >Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{_.title}</div>
                          <div className="book-authors">{_.authors}</div>
                        </div>
                        </li>
                      )
                    )

                }

              </ol>
            }
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <ShelfApp bookShelfName='Currently Reading' books={books.filter((_)=>_.shelf==='currentlyReading')} onMoveBook={onMoveBook}/>
                  <ShelfApp bookShelfName='Want to Read' books={books.filter((_)=>_.shelf==='wantToRead')} onMoveBook={onMoveBook}/>
                  <ShelfApp bookShelfName='Read' books={books.filter((_)=>_.shelf==='read')} onMoveBook={onMoveBook}/>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ShelvesApp
