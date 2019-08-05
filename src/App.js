import React, { Component } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Checkbox from './Components/Checkbox/Checkbox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alesha',
    }
  }

  render() {
    return (
      <div className="App">
        <span>{this.state.name}</span>

        <Dropdown text="click me!">
          <span>hi!</span>
        </Dropdown>
        <Checkbox text="choose me!"></Checkbox>
        <span>some content</span>
      </div>
    );
  }
}

export default App;

