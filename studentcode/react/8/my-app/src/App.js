import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       btn: ["Button"],
//       clicked: []
//     }
//   }
//   click = () => {
    
//   }
//   addButton = () => {
//     let tempBtn = this.state.btn;
//     tempBtn.push("Button");
//     this.setState({ btn: tempBtn })
//   }
//   render() {
//     let abc = this.state.btn.map((elem, index) => {console.log(this.state.btn); return (<button name={index} onClick={this.addButton}>{elem}</button>)})
//     return (
//       <div>
//         {abc}
//       </div>);
//   }
// }
// export default App;























class App extends Component {
  constructor(){
    super();
    this.state = {
      btn : ["button"],
      clicked: [false]
    }
  }
  addButton = () => {
    var newTempBtn = this.state.btn
    var tempLength = newTempBtn.length
    newTempBtn.push("button")
    var tempClick = []
    newTempBtn.forEach((el,id)=>{
      tempClick.push(false)
    })
    console.log(newTempBtn)
    console.log(tempClick)
    this.setState({btn : newTempBtn, clicked:tempClick})
  }
  click = (e) => {
    var tempBtn2 = this.state.clicked
    tempBtn2[Number(e.target.name)] = true
    var tempFinished = tempBtn2.every( (el,id) => {
      return  el === true
    })

    if( tempFinished === true ){
      this.addButton()
    }
  }
  render() {
     var btnJSX = this.state.btn.map((element,index)=>{return(
     <button name={index} onClick={this.click}>{element}</button>
  )})
  return (
    <div>
      {btnJSX}
    </div>);
  }
}

export default App;
