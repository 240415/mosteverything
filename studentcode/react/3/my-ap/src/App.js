import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {value: ""}
  }
  handleChange = (event) => {
    this.setState({value: event.target.value})
  }
  handleClick = () => {
    if(Number(this.state.value) === 42){
      alert("You guessed correctly");
    } else {
      alert("Wrong guess. Try again");
    }
  } 
  
  render() {
    return (<div><input onChange={this.handleChange} value={this.state.value}/> <button onClick={this.handleClick}>Button</button></div>);
  };
}

export default App;
