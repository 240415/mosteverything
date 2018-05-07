import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {visibility: true}
  }
  toggle = () => {
    this.setState({visibility: !this.state.visibility})
  }

  render() {
    return (
      <div> 
          {this.state.visibility?(<button onClick={this.toggle}>Button1</button>):(<button onClick={this.toggle}>button2</button>)}
        </div>
      );
  }
}

export default App;
