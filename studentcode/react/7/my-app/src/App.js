import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {inputValue: null}
  }
  handleChange = (event) => {
    this.setState({inputValue: Number(event.target.value)});
  }
  disp = () => {
    if(this.state.inputValue - 1 === 0){
      clearInterval(this.abc);
    }
      this.setState({inputValue: this.state.inputValue - 1})
    
  }
  handleClick = () => {
    this.abc = setInterval(this.disp, 1000)
  }
  render() {
    return (
      <div>{this.state.inputValue}<input onChange={this.handleChange}/><button onClick={this.handleClick}>click here</button></div>
    );
  }
}

export default App;
