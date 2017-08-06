import React, {Component} from 'react'
import PropTypes from 'prop-types'
import SelectList from './SelectList'

class BookDetails extends Component {

    static propTypes = {
        BookItem: PropTypes.object.isRequired,
        UpdateShelfStatus: PropTypes.func.isRequired,
        ShowDetails: PropTypes.func.isRequired
    };

    ShowDetails= (val) =>{
        this.props.ShowDetails(val);
    }

    UpdateShelfStatus(status){
        this.props.UpdateShelfStatus(status);
        this.ShowDetails(false);
    }

    render(){
        return(

            <div id="generic-overlay">

                <span id="close-btn" onClick={()=>{this.ShowDetails(false)}}>x</span>

                <div className='overlay-content' >
                    <div className='nav-holder'>
                        <img alt="book cover"
                             src={
                                 this.props.BookItem.imageLinks.thumbnail !== '' ?
                                     this.props.BookItem.imageLinks.thumbnail
                                     :'https://books.google.com/googlebooks/images/no_cover_thumb.gif'
                             }/>

                        <SelectList status={this.props.BookItem.shelf}
                                    UpdateShelfStatus={(status)=>{
                                        this.UpdateShelfStatus(status)
                                    }} />
                    </div>
                    <div className='item-details'>
                        <h2>{this.props.BookItem.title}</h2>
                        <h3>Description:</h3>
                        <p>
                            {this.props.BookItem.description}
                        </p>

                    </div>

                </div>

            </div>

        )
    }
}

export default BookDetails;
