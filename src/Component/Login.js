import React, { Component } from "react";
import axios from 'axios';

class Login extends Component
{
    constructor(props)
    {
      super(props)
      this.state = 
      {
          username : '',
          password : '',
          showError : '',
          isLoggedIn: false
      }
    }
    // componentDidMount() {
    //     let userData = sessionStorage.getItem('UserData')
    //     if (userData) {
    //         localStorage.setItem('loggedIn', true);
    //         localStorage.setItem('location', "search");
    //     }
    //   }
    handleUserNameChange = (event) =>
    {
     this.setState(
         {
             username : event.target.value
         }
     )
    }
    handlePasswordChange = (event) =>
    {
     this.setState(
         {
             password : event.target.value
         }
     )
    }
    FormSubmit = (event) =>
    {      
        event.preventDefault();
        let apiURL = "https://swapi.co/api/people/?search=" + this.state.username;
        axios.get(apiURL).then(response => {
        let result = response.data.results.filter(checkname => checkname.name === this.state.username);
        if (result.length > 0)
        {
            localStorage.setItem('loggedIn', true);
            localStorage.setItem('userName', this.state.username);
            localStorage.setItem('location', "search");
            this.props.history.push('/Search')
        }
        }).catch(error => {
            alert('Please enter valid username or password');
        }) 
    }
    render()
    {
        if (localStorage.getItem('location') == "search" || localStorage.getItem('location') == "planetDetails") {
            localStorage.setItem('loggedIn', true);
            this.props.history.push("search");
          }
          else {
            localStorage.removeItem('loggedIn');
          }

          
        return(
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                <div>
                    <label>username</label>
                    <input type = "text" placeholder="username" value = {this.state.username} onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>password</label>
                    <input type = "password" placeholder="password" value = {this.state.password} onChange={this.handlePasswordChange}/>
                </div>
                <button  onClick = {this.FormSubmit}>
                login
                </button>
            </form>
                </div>
            </div>
        )
    }
}           
export default Login