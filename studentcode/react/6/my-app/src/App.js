import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {inputValue: "", items: []}
  };
  
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  };
  makeList = () => {
    this.setState({ items: this.state.items.concat(this.state.inputValue)}); 
  }
  disp = () => {
    return this.state.items.map(item => (<li>{item}</li>))
  }
  render() {
    return (
      <div><input onChange={this.handleChange}/><button onClick={this.makeList}>submit</button><ul>{this.disp()}</ul></div>
    );
  }
}

export default App;
