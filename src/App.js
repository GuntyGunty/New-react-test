import React, { Component } from 'react';
import './App.css';
import Dropdown from './Components/Dropdown/Dropdown'
import Checkbox from './Components/Checkbox/Checkbox'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alesha',
      isDropdownOpen: false
    }
  }

  render() {
    return (
      <div className='App'>
        {/* <span>{this.state.name}</span> */}
        <Dropdown text='click me!'>
            <span>Hello!</span>
        </Dropdown>
        <Dropdown text='click me!'>
            <span>Hi</span>
        </Dropdown>
        <Checkbox text='choose me!' onValueChanged={(value) => {
          // return (e) => console.log(element);
          console.log(value);
        }}></Checkbox>
        <span>some content</span>
      </div>
    );
  }
}



export default App;

