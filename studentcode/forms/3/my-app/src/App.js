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

  clear = () => {
    this.setState({nameValue: "", lastNameValue: ""});
  }
  toggle =() => {
    if(this.state.nameValue !== "" && this.state.lastNameValue !== "") {
      return <input type="submit" value="Submit" />
    }
  }

  render = () => {
    return (
      <div><form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
          Lastname:
          <input type="text" value={this.state.lastNameValue} onChange={this.handleChangeLastName}/>
          {this.toggle()}
      </form>
      <button onClick={this.clear}>clear</button>
      </div>
    );
  }
 }


export default App;
