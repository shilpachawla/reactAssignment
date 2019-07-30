import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'

 class Test extends Component
 {
 constructor(props) {
  super(props);
  this.callOnClick = this.callOnClick.bind(this);
 }
 callOnClick() {
  console.log("Button is clicked");
  //hashHistory.push('./PlanetDetails/');
  this.props.history.push("./PlanetDetails/");
 }
 render() {
  return <button onClick={this.callOnClick}> Click me!</button>
 }
}
export default withRouter(Test)