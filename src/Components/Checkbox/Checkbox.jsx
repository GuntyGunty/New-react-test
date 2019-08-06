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
    if(!this.state.isChecked) {
      this.setState({isChecked: true})
    } else {
      this.setState({isChecked: false})
    }
  }

  render() {
    return (
      <div className='Checkbox' onClick={this.props.onClick(this.state.isChecked)}>
        <input type='checkbox' onChange={this.onValueChanged}  className={`Checkbox_input ${
          (this.props.className) ? this.props.className : ''
        }`} />
      </div>
    )
  }
}

export default Checkbox;