import React, {Component} from 'react'
import Book from './Book'
import sortBy from  'sort-by'
import PropTypes from 'prop-types'

class BookShelf extends Component{

    static propTypes = {
        updateBook: PropTypes.func.isRequired(),
        listType: PropTypes.string.isRequired(),
        books: PropTypes.array.isRequired(),
        shelfTitle: PropTypes.string.isRequired()
    };

    state = {
      books: []
    };

    componentWillReceiveProps(props){
        let filtered = props.listType !== 'search' ?
            props.books.filter(item => item.shelf === props.listType): props.books;

        this.setState({
            books: filtered.sort(sortBy('title'))
        });
    }

    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.map((item,i) => (
                            <li key={i}>
                                <Book bookItem={item} updateBook={(id,status)=>(this.updateBook(id,status))} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )

    }
}

export default BookShelf;