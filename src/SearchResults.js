import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelfs'
import * as BooksAPI from './BooksAPI'

class SearchResults extends Component{

    static propTypes = {
        booklist: PropTypes.array.isRequired(),
        UpdateBook: PropTypes.func.isRequired()
    };

    state={
        books: [],
        query: '',
        booklist: [],
        booklistIDs: []
    };

    updateQuery = (query) => {
        this.setState({query: query.trim()});
        BooksAPI.search(query.trim(),20).then((result) => {

            if(result !== undefined && result.constructor === Array){

                let setStateList = result.map(item => {
                    if(this.state.booklistIDs.indexOf(item.id) > -1){
                        let foundItem = this.state.booklist.filter(book=>book.id === item.id);
                        item.shelf = foundItem[0].shelf;
                    }
                    return item;
                });

                this.setState({books :setStateList});
            }
            else{
                this.setState({books: []});
            }

        });

    };


    UpdateBooks(id,status){
        this.props.UpdateBook(id,status);

        let UpdateBooks = this.state.books.map(book => {
                if(book.id === id){
                    book.shelf = status
                }
                return book
            }
        );

        this.setState({books: UpdateBooks})
    }

    componentWillMount(){
        this.setState({
            booklist: this.props.booklist,
            booklistIDs: this.props.booklist.map(item => item.d)
        })
    }

    componentWillReceiveProps(){
        //Calling of the API despite the search page has found books. So that it will
        // setState for both booklist and booklistIDs
        if (this.props.booklist.length < 1){
            BooksAPI.getAll().then((books) => {
                this.setState({
                    booklist: books,
                    booklistIDs: books.map(item => item.id)
                })
            })
        }
        else{
            this.setState({
                booklist: this.props.booklist,
                booklistIDs: this.props.booklist.map(item => item.id)
            })
        }
    }

    render(){
        const {query} = this.state;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/'
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                {this.state.books.length > 0 ? (

                    <div>
                        <BookShelf
                            UpdateBook={(id,status)=>{
                                this.UpdateBooks(id,status)
                            }}
                            listType='search'
                            books={this.state.books}
                            shelfTitle='Search Result'
                        />
                    </div>

                ): '' }

            </div>
        )
    }

}

export default SearchResults