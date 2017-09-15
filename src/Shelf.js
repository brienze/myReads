import React from 'react'
import './App.css'

class ShelfApp extends React.Component {
	state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
      showSearchPage: false

    }
	   render() {
        const {bookShelfName,books } = this.props
        return (
              <div className="bookshelf">
                <h2 className="bookshelf-title">{bookShelfName}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                      {
                        books.map(
                          (_)=>(
                            <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
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
                </div>
              </div>
          )
      }
  }
export default ShelfApp