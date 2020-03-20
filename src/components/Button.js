import React, { Component } from 'react'
import './../styles/Button.css'

export default class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showing: false
        }
    }
    render() {
        return (
            <button 
                className='Button btn btn-info btn-lg text-nowrap m-3 px-4' 
                type='button'
                id={this.props.id}
                onClick={() => this.props.handleClick(this.props.id, this.state)}>
                {this.props.name}
            </button>
        )
    }
}

