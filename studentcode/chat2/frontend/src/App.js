import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameInputValue: "",
      password: "",
      passwordInputValue: "",
      inputValue: "",
      rUsernameInputValue: "",
      rPasswordInputValue: "",
      message: [],
      sessionId: [],
      signUpNeeded: true,
      activeUsers: []
    }
  }

  componentDidMount = () => {
    setInterval(this.getMessages, 200);
    setInterval(this.getActiveList, 200);
  }
  getActiveList = () => {
    fetch('/activeUsers')
      .then(e => e.text())
      .then((e) => this.setState({ activeUsers: JSON.parse(e) }))
  }

  getMessages = () => {
    fetch('/refreshMsg', {
      method: 'POST'
    })
      .then(e => e.json())
      .then(e => this.setState({ message: e }))
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({
      sessionId: this.state.sessionId,
      content: this.state.inputValue
    });
    this.setState({ inputValue: "" })
    fetch('/sendMsg', {
      method: 'POST',
      body: body
    })
  }

  handleUsernameChange = (event) => {
    this.setState({ usernameInputValue: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ passwordInputValue: event.target.value });
  }

  usernameSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({
      username: this.state.usernameInputValue,
      password: this.state.passwordInputValue
    })
    let username = this.state.usernameInputValue;
    let password = this.state.passwordInputValue;
    this.setState({
      usernameInputValue: "",
      passwordInputValue: ""
    })

    fetch('/verifyLogin', {
      method: 'POST',
      body: body
    })
      .then(e => e.text())
      .then(e => {
        if (e === 'fail') {
          return this.setState({ signUpNeeded: true })
        }
        this.setState({
          username: username,
          password: password,
          sessionId: e,
          usernameInputValue: "",
          passwordInputValue: ""
        });
      })
  }
  handleRegUsernameChange = (event) => {
    this.setState({ rUsernameInputValue: event.target.value });
  }

  handleRegPasswordChange = (event) => {
    this.setState({ rPasswordInputValue: event.target.value });
  }

  registrationSubmit = (event) => {
    event.preventDefault();
    let body = JSON.stringify({
      username: this.state.rUsernameInputValue,
      password: this.state.rPasswordInputValue
    })
    fetch('/register', {
      method: 'POST',
      body: body
    })
      .then(this.setState({ signUpNeeded: false, usernameInputValue: "", passwordInputValue: "" }))
  }

  checkNameStatus = () => {
    if (this.state.signUpNeeded) {
      return (
        <div className="container-login">
          <div className="login-box">
            <img src="avatar.png" className="user" />
            <h2>Login</h2>
            <form onSubmit={this.usernameSubmit}>
              <p>Username</p>
              <input
                type="text"
                placeholder="Enter username"
                value={this.state.usernameInputValue}
                onChange={this.handleUsernameChange}>
              </input>
              <p>Passwrod</p>
              <input
                type="password"
                placeholder="******"
                value={this.state.passwordInputValue}
                onChange={this.handlePasswordChange}>
              </input>
              <input type="submit" value="Sign in"></input>
            </form>
          </div>
          <div className="registration-box">
            <img src="avatar.png" className="user2" />
            <h2>Register</h2>
            <form onSubmit={this.registrationSubmit}>
              <p>Username</p>
              <input
                type="text"
                placeholder="Enter username"
                value={this.state.rUsernameInputValue}
                onChange={this.handleRegUsernameChange}>
              </input>
              <p>Passwrod</p>
              <input
                type="password"
                placeholder="******"
                value={this.state.rPasswordInputValue}
                onChange={this.handleRegPasswordChange}>
              </input>
              <input type="submit" value="Register"></input>
            </form>
          </div>
        </div>
      )
    }
    return (
      <div className="login-box2">
        <img src="avatar.png" className="user3" />
        <h2>Login</h2>
        <form onSubmit={this.usernameSubmit}>
          <p>Username</p>
          <input
            type="text"
            placeholder="Enter username"
            value={this.state.usernameInputValue}
            onChange={this.handleUsernameChange}>
          </input>
          <p>Passwrod</p>
          <input
            type="password"
            placeholder="******"
            value={this.state.passwordInputValue}
            onChange={this.handlePasswordChange}>
          </input>
          <input type="submit" value="Sign in"></input>
        </form>
      </div>
    )
  }

  render() {
    if (!this.state.username) {
      return this.checkNameStatus();
    }
    return (
      <div>
        <div className="container">
          <div className="topcontainer">
            <ul className="chatLines">
              {this.state.message.map(line =>
                <div>
                  <li>
                    {line.username}: {line.content}
                  </li>
                  <hr />
                </div>)}
            </ul>
          </div>
          <div className="botcontainer">
            <form onSubmit={this.handleSubmit}>
              <div className="chat">
                <input
                  type="text"
                  placeholder="  type your message"
                  value={this.state.inputValue}
                  onChange={this.handleChange}>
                </input>
                <input type="submit" value="send"></input>
              </div>
            </form>
          </div>
        </div>
        <div className="online">
          <h3>Currently online</h3>
          <ul className="online-user-list">
            {this.state.activeUsers.map(e => <div class="abc"><li>{e.username}</li><hr/></div>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
