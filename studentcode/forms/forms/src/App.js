import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      lastNameValue: ''
    };
  }
 
  handleChangeName = (event) => {
    this.setState({nameValue: event.target.value});
  }
  handleChangeLastName = (event) => {
    this.setState({lastNameValue: event.target.value})
  }
 
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.nameValue + " " + this.state.lastNameValue);
    event.preventDefault();
  }
 
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
          Lastname:
          <input type="text" value={this.state.lastNameValue} onChange={this.handleChangeLastName}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
 }

export default App;
