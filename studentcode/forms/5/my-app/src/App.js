import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      lastNameValue: '',
      feedBackStr: ''
    };
  }

  handleChangeName = (event) => {
    this.setState({ nameValue: event.target.value });
  }
  handleChangeLastName = (event) => {
    this.setState({ lastNameValue: event.target.value })
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.nameValue + " " + this.state.lastNameValue);
    event.preventDefault();
  }

  clear = () => {
    this.setState({ nameValue: "", lastNameValue: "" });
  }
  toggle = () => {
    if (this.state.nameValue !== "" && this.state.lastNameValue !== "") {
      return <input type="submit" value="Submit" />
    }
  }
  swap = () => {
    let tempName = this.state.nameValue;
    this.setState({ nameValue: this.state.lastNameValue, lastNameValue: tempName })
  }
  handleFeedBack = (event) => {
    this.setState({feedBackStr: event.target.value})
  }
  strCount = (event) => {
    let srtlength = this.state.feedBackStr;
    alert("you've submitted " + srtlength.length + " characters of feedback");
    this.setState({feedBackStr: ""})
    event.preventDefault();
  }
  render = () => {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            Name:
          <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
            Lastname:
          <input type="text" value={this.state.lastNameValue} onChange={this.handleChangeLastName} />
            {this.toggle()}
          </form>
          <button onClick={this.clear}>clear</button>
          <button onClick={this.swap}>swap</button>
        </div>
        <div>
        Give us feedback on this page
          <form onSubmit={this.strCount}>
            <input type="text" onChange={this.handleFeedBack} value={this.state.feedBackStr}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
