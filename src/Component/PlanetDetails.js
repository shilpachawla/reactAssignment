import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
 class PlanetDetails extends Component
 {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }
    handleLogout() {
        localStorage.removeItem('loggedIn');
        localStorage.setItem('location', "/");
        this.props.history.push("/");
    }
    handleBack() {
        this.props.history.push("search");
        localStorage.setItem('location', "search");
      }
    render()
    {
     if (localStorage.getItem('loggedIn') == "false" || localStorage.getItem('loggedIn') == null)
     this.props.history.push("/");


        var {planetDetails} = this.props.location.state;
        
        return(
          <div>
               <table align="center">
                   <tr>
                       <th>Planet Info Type</th>
                       <th>Planet Details</th>
                   </tr>
                   <tr>
                       <td> PLanet Name </td>
                       <td>{planetDetails.name}</td>
                   </tr>
                   <tr>
                       <td> PLanet climate </td>
                       <td>{planetDetails.climate}</td>
                   </tr>
                   <tr>
                       <td> PLanet population </td>
                       <td>{planetDetails.population}</td>
                   </tr>
                   <tr>
                       <td> PLanet gravity </td>
                       <td>{planetDetails.gravity}</td>
                   </tr>
                   <tr>
                       <td> PLanet created Date </td>
                       <td>{planetDetails.created}</td>
                   </tr>
                   <tr>
                       <td> PLanet Orbital Period </td>
                       <td>{planetDetails.orbital_period}</td>
                   </tr>
                   <tr>
                       <td> PLanet terrain </td>
                       <td>{planetDetails.terrain}</td>
                   </tr>
               </table>
                <div className="col-md-6">
                <button className="btn btn-primary" onClick = {this.handleLogout}>Logout</button>
                </div>
                <div className="col-md-6">
                <button className="btn btn-primary" onClick = {this.handleBack}>back</button>
                </div>
          </div>

        )
    }
 }
 export default withRouter(PlanetDetails)