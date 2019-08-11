import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Dropdown.css'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      isOpen: false,
      bodyRect: document.body.getBoundingClientRect(),
      elementRect: 0,
      elementHeight: 0
    }
  }

 

  handleClick = (e) => {
    this.setState({ 
      isOpen: !this.state.isOpen,
      elementRect: e.target.getBoundingClientRect(),
      elementHeight: e.target.clientHeight
    })
  }


  render() {
    let elementOffset = this.state.elementRect.top - this.state.bodyRect.top;
    let elementStylesheet = {
        top: elementOffset + this.state.elementHeight + 15 + 'px',
        left: '1em',
        position: 'absolute'
      }


    console.log(elementOffset, elementStylesheet)
    return (
      <div className={`Dropdown ${this.state.isOpen ? '-open' : ''}`}  ref={this.ref}>
        <button className='Dropdown_button' onClick={this.handleClick}>{this.props.text}</button>
        {

          this.state.isOpen &&
          
            ReactDOM.createPortal(
              <div style={elementStylesheet} className="Dropdown_wrapper" ref={this.ref}>
                {this.props.children}
              </div>,
              document.getElementById('dropdown')
            )
        }
      </div>  
        
    )
  }
}

// ReactDOM.render(<Dropdown />, Dropdown-root);

export default Dropdown;

