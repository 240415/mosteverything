import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {value: "", randomNum: ""}
  }
  handleChange = (event) => {
    this.setState({value: event.target.value, randomNum: Math.floor(Math.random()*10)})
  }
  handleClick = () => {
    if(Number(this.state.value) ===  this.state.randomNum){
      alert("Your guessed correctly");
    } else if(Number(this.state.value) <  this.state.randomNum){
      alert("Your guess is too Low");
    } else {
      alert("Your number is too Hight");
    }
  } 

  render() {
    return (<div><input onChange={this.handleChange}/><button onClick={this.handleClick}>Check your answer</button></div>);
  }
}

export default App;
