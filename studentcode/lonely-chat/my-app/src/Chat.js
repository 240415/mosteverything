import React, { Component } from 'react';
import {App1 , App2} from "./App.js"

class Chat extends React.Component {
    constructor(){
        super();

    }
    render = () => {
    return (<div style={{display: "flex"}}><App1/> <App2/></div>);
    }
}

export default Chat; 