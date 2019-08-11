import React, { Component } from 'react';
import './Checkbox.css'

class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    }
  }

  onChange = (e) => {
    this.setState({ isChecked: !this.state.isChecked }, function() {
      this.props.onValueChanged(this.state.isChecked);
    });
  }

  render() {
    return (
      <div className="Checkbox">
          <input type="checkbox" onChange={this.onChange} />
          <span>Some text</span>
      </div>
    );
  }
}

export default Checkbox;