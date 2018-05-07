import React, { Component } from 'react';
import './App.css';

let josie = ["Hey guys", "Sorry I'm busy", "Sounds good"];
let frederick = ["Not now", "Gucci", "Let's talk later", "Going to bed"];

export class App1 extends React.Component {
  constructor() {
    super();
    this.state = {inputValue: "", msg: [], userName: "", chatroom: false}
  }
  humanizeJosie = () => {
    let rand = Math.floor(Math.random()*josie.length);
    let josieMsg = this.state.msg.concat("Josie " + josie[rand]);
    this.setState({msg: josieMsg});
  }
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
  handleSubmit = (event) => {
    let content = this.state.inputValue;
    let newMsg = this.state.msg.concat(this.state.userName + ": " + content);
    newMsg = newMsg.concat("Bob: cool");
    this.setState({inputValue: "", msg: newMsg});
    setTimeout(this.humanizeJosie, 1000);
    event.preventDefault();
  }
  handleLogin = (event) => {
    if(this.state.userName !== ""){
      this.setState({chatroom: true});
      event.preventDefault();
    }

  }
  userName = (event) => {
    this.setState({userName: event.target.value});
  }
  render(){
    return (
      <div>
        <ul style={{"list-style-type": "none"}}>
        {this.state.msg.map((elem) => <li>{elem}</li>)}
        </ul>
        {this.state.chatroom === false ? <form onSubmit={this.handleLogin}>
          <input type="text" onChange = {this.userName}/>
          <input type="submit"/>  
        </form> :
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
          <input type="submit" onClick={this.handleClick}/>
        </form>}
      </div>
    );
  }
}


export class App2 extends React.Component {
  constructor() {
    super();
    this.state = {inputValue: "", msg: [], userName: "", chatroom: false}
  }
  humanizeJosie = () => {
    let rand = Math.floor(Math.random()*frederick.length);
    let josieMsg = this.state.msg.concat("Frederic " + frederick[rand]);
    this.setState({msg: josieMsg});
  }
  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }
  handleSubmit = (event) => {
    let content = this.state.inputValue;
    let newMsg = this.state.msg.concat(this.state.userName + ": " + content);
    newMsg = newMsg.concat("Bob: cool");
    this.setState({inputValue: "", msg: newMsg});
    setTimeout(this.humanizeJosie, 1000);
    event.preventDefault();
  }
  handleLogin = (event) => {
    if(this.state.userName !== ""){
      this.setState({chatroom: true});
      event.preventDefault();
    }

  }
  userName = (event) => {
    this.setState({userName: event.target.value});
  }
  render(){
    return (
      <div>
        <ul style={{liststyletype: "none"}}>
        {this.state.msg.map((elem) => <li>{elem}</li>)}
        </ul>
        {this.state.chatroom === false ? <form onSubmit={this.handleLogin}>
          <input type="text" onChange = {this.userName}/>
          <input type="submit"/>  
        </form> :
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
          <input type="submit" onClick={this.handleClick}/>
        </form>}
      </div>
    );
  }
}
