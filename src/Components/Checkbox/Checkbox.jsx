import React, { Component } from 'react';
import './Checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  changeValue = () => {
    if(!this.state.isChecked) {
      this.setState({isChecked: true})
    } else {
      this.setState({isChecked: false})
    }
  }

  render() {
    return (
      <div className='Checkbox' onClick={this.props.onValueChanged(this.state.isChecked)}>
        <input type='checkbox' onChange={this.changeValue}  className={`Checkbox_input ${
          (this.props.className) ? this.props.className : ''
        }`} />
      </div>
    )
  }
}

export default Checkbox;