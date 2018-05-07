import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let a = React.createElement("div", null, React.createElement("h1", null, "Hello"));

ReactDOM.render(a, document.querySelector("#abc"));