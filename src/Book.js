import React, {Component} from 'react'
import SelectList from './SelectList'
import BookDetails from './BookDetails'
import PropTypes from 'prop-types'

class Book extends Component{

    static propTypes = {
        BookItem: PropTypes.object.isRequired,
        UpdateBook: PropTypes.func.isRequired
    };

    state = {
        ShowDetails : false,

    };

    //Updating of state of each books
    UpdateShelfStatus(status){
        this.props.UpdateBook(this.props.BookItem.id,status);
    }

    ShowDetails(showHide){
        this.setState({
            ShowDetails: showHide
        })
    }

    render(){

        const {title, authors} = this.props.BookItem;
        const backgroundImage = this.props.bookItem.imageLinks.thumbnail !== '' ? this.props.bookItem.imageLinks.thumbnail :'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        const overlay = this.state.ShowDetails ? <BookDetails BookItem={this.props.BookItem} UpdateShelfStatus={(status)=>{this.UpdateShelfStatus(status)}} ShowDetails={(showHide)=>{this.ShowDetails(showHide)}}  /> : null;

        return (

            <div className="book">
                {overlay}
                <div className="book-top">
                    <div className="book-cover" style={{backgroundImage:`url("${backgroundImage}")`}} onClick={()=>{this.ShowDetails(true)}}></div>
                    <SelectList status={this.props.BookItem.shelf} UpdateShelfStatus={(status)=>{this.UpdateShelfStatus(status)}} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors ? authors.join(', '): 'unknown'}</div>
            </div>

        )
    }
}

export default Book;