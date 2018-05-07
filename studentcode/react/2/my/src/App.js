import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {buttonText: ""}
  }
  click = () => { 
    return this.setState({buttonText: (Math.floor(Math.random() * 100) + 1)})
  } 
  render() {
    return (
     <button onClick = {this.click}>{this.state.ran}</button>
    );
  }
}

export default App;
