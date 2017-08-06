import React, {Component} from 'react'
import PropTypes from 'prop-types'


class SelectList extends Component{

    static propTypes = {
        Status: PropTypes.string.isRequired,
        UpdateShelfStatus: PropTypes.func.isRequired
    }

    selectItems = [
        { value: 'none', text: 'Move to...', selected: false, disabled: true},
        { value: 'currentlyReading', text: 'Currently Reading', selected: false, disabled: false},
        { value: 'wantToRead', text: 'Want to Read', selected: false, disabled: false},
        { value: 'read', text: 'Read', selected: false, disabled: false},
        { value: 'none', text: 'None', selected: false, disabled: false}
    ];

    updateSelection = (value) => {

        this.props.UpdateShelfStatus(value.trim());

    }


    render(){

        return (

            <div className='book-shelf-changer'>
                <select value={this.props.Status} onChange={(event) => this.updateSelection(event.target.value)}>
                    {this.selectItems.map((item,i) => (
                        <option key={i} value={item.value} disabled={item.disabled} >{item.text}</option>
                    ))}
                </select>
            </div>

        )
    }
}

export default SelectList