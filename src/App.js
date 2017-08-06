import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import BookShelf from './BookShelfs'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  // fetches books from BookAPI
  componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
  }

  // whenever there's a change to the state will fecth books from BookAPI
  componentWillReceiveProps(){
        BooksAPI.getAll().then((books) => {
            this.setState({books})
        })
  }

  // Updates the book category
  updateBookCategory(id,status){

      this.setState((state) => ({
          books: state.books.map( item => {
              let book;

              if(item.id === id){
                  item.shelf = status
                  book = item
              }
              else {
                  book = item
              }

              return book
             })
          })
      );

      let thisBook = this.state.books.filter(item=>item.id === id);

      BooksAPI.update(thisBook[0],status).then((result) => console.log('Book was updated successfully!!!!', result))
  }

  render() {
    return (
        <div className="app">
            <Route path="/search" render={({history}) => (
                    <SearchResults
                        booklist={this.state.books}
                        updateBook={(id,status)=>{this.updateBookCategory(id,status)}}
                    />
                )}
            />

            <Route exact path='/' render={() => (
                <div className="list-books">
                    <div className="list-books-title">
                        <div>
                            //Various book option status
                            <BookShelf
                                updateBook={(id,status) =>{this.updateBookCategory(id,status)}}
                                listType='currentlyReading'
                                books={this.state.books}
                                shelfTitle='Currently Reading'
                            />
                            <BookShelf
                                updateBook={(id,status) =>{this.updateBookCategory(id,status)}}
                                listType='wantToRead'
                                books={this.state.books}
                                shelfTitle='Want to Read'
                            />
                            <BookShelf
                                updateBook={(id,status) =>{this.updateBookCategory(id,status)}}
                                listType='read'
                                books={this.state.books}
                                shelfTitle='Read'
                            />
                        </div>
                    </div>
                    <div className="open-search">
                        <Link to='/search'>
                            Add a book
                        </Link>
                    </div>
                </div>
            )}
            />
        </div>
    )
  }
}

export default BooksApp
