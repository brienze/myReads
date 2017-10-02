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

          console.log(Object.assign({},book,{shelf:to}));

          return Object.assign({},book,{shelf:to});
        }else{
          return book;
        }
      })
    });
    console.log(this.state.books)
  };

  addBook(bookToAdd,to) {
    BooksAPI.update(bookToAdd, to).then(() => {
      this.setState(state => ({
        books: state.books.concat([ Object.assign({},bookToAdd,{shelf:to}) ])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/' exact render={
          ()=>(
            <ListShelvesApp
              myBooks={this.state.books}
              onMoveBook={(to,bookToMove)=>{
                this.handleMoveBook(to,bookToMove)
              }
              }
            />
          )
        }/>

        <Route path='/search' render={
          ()=>(
            <SearchBooksApp
              myBooks={this.state.books}
              addBook={(bookToAdd,to)=>{
                this.handleAddBook(bookToAdd,to)
              }
            }
            />
          )
        }/>

      </div>
    )
  }
}

export default MyReadsApp
