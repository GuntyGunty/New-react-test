import React, { Component } from 'react';
import './Checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onValueChanged = () => {
    if(this.state.isChecked) {
      this.setState({isChecked: false})
    } else {
      this.setState({isChecked: true})
    }
    console.log(this.state.isChecked);
  }

  render() {
    return (
      <label className='Checkbox' onClick={this.onValueChanged}>
        <input type='checkbox' className='Checkbox_input' />
        <span className='Checkbox_indicator'>{this.props.text}</span>
      </label>
    )
  }
}

export default Checkbox;