import React, { Component } from 'react';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    if(this.state.isOpen) {
      this.setState({isOpen: false})
    } else {
      this.setState({isOpen: true})
    }
  }

  render() {
    return (
      <div className='Dropdown'>
        <button className='Dropdown_button' onClick={this.handleClick}>{this.props.text}</button>
        <div className={`Dropdown_wrapper ${this.state.isOpen ? '-open' : ''}`} >
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dropdown;