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
    console.log(this.state.isChecked);
    this.props.onClick();
  }

  render() {
    return (
      <div className='Checkbox' onChange={this.onValueChanged}>
        <input type='checkbox' className={`Checkbox_input ${
          (this.props.className) ? this.props.className : ''
        }`} />
      </div>
    )
  }
}

export default Checkbox;