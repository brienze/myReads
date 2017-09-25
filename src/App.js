import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListShelvesApp from './ListShelves.js'
import SearchBooksApp from './SearchBooks.js'
import {Route} from 'react-router-dom'

import './App.css'

class MyReadsApp extends React.Component {
  state = {
      books : [],
    }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  handleMoveBook = (to,bookToMove) =>{
    this.moveBook(bookToMove,to.value);
  }

  handleAddBook = (to,bookToAdd) =>{
    this.addBook(bookToAdd,to.value);
  }

  moveBook = (bookToMove,to) =>{
    BooksAPI.update(bookToMove, to);

    this.setState({
      books : this.state.books.map((book) =>{
        if(book.id === bookToMove.id){
          return Object.assign({},book,{shelf:to});
        }else{
          return book;
        }
      })
    });
  };

  addBook = (bookToAdd,to) =>{
    BooksAPI.update(bookToAdd, to).then((updatedBooks) => {
    });

    this.setState(prev => {
      const {books=[]} = prev;
      books.push(bookToAdd);
      return {books:books}
    });
  };

  render() {
    return (
      <div className="app">

        <Route path='/' exact render={
          ()=>(
            <ListShelvesApp
              myBooks={this.state.books}
              onMoveBook={this.handleMoveBook}
            />
          )
        }/>

        <Route path='/search' render={
          ()=>(
            <SearchBooksApp
              myBooks={this.state.books}
              addBook={this.handleAddBook}
            />
          )
        }/>

      </div>
    )
  }
}

export default MyReadsApp
