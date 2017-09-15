import React from 'react'
import * as BooksAPI from './BooksAPI'
import ShelvesApp from './Shelves.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      //showSearchPage: false
      books : []
    }


  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      /**
      <ShelfApp name="Currently Reading" books={this.state.books.filter(f=>f.shelf=== 'currentlyReading')}/>
      **/
      <ShelvesApp name="Currently Reading" books={this.state.books}/>
    )
  }
}

export default BooksApp
