import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
 class Search extends Component
{
    constructor(props)
    {
      super(props)
      this.state = 
      {
          planetName : '',
          planetdata : [],
      }
      this.handleLogout = this.handleLogout.bind(this);
    }
    handleplanetChange = (event) => {
        event.preventDefault();
        this.setState({ planetName: event.target.value });
        return this.SearchPlanet(event.target.value)
    }
    handlePlanetData = (event) =>
    {
        this.setState(
            {
                planetdata : event.target.value
            }
        )
    }
    SearchPlanet = (value) =>
    {
        let apiURL = "https://swapi.co/api/planets/?search=";
        const resp =  axios.get(apiURL + value).then(response => {
        this.setState({planetdata : response.data.results});
 
        }).catch(error => {
            alert('there is error');
        });
    }
    DisplayPlanetDetails = (e,planetresult) =>
    {      
        e.preventDefault();
        this.props.history.push({
            pathname : '/PlanetDetails',
            state: { planetDetails : planetresult}
        });
    }
    renderClass(population)
    {
        let classcolor = "Initial"

        if(population < "100000000")
        {
            classcolor = "Initial"
        }
        else if(population > "100000000" && population < "1000000000")
        {
            classcolor = "Normal"
        }
        else if(population > "1000000000" && population < "10000000000")
        {
            classcolor = "More"
        }
        else if(population > "10000000000" && population < "100000000000")
        {
            classcolor = "warning"
        }
        else if(population > "100000000000")
        { 
            classcolor = "danger"
        }
        return classcolor;
    }
    handleLogout() {
        localStorage.removeItem('loggedIn');
        localStorage.setItem('location', "/");
        this.props.history.push("/");
    }
    render()
    {
        if (localStorage.getItem('loggedIn') == "false" || localStorage.getItem('loggedIn') == null)
        this.props.history.push("/");
        let population = this.state.planetdata.map((test) => test.population);
        let barColor = this.renderClass(population);
        return(
            <div>
              <h2>Type for Getting Planet Details.</h2>
            <form>
                <input className = "search-textbox" type="text" placeholder="Planet Name" value={this.state.planetName} onChange={this.handleplanetChange}/>
            </form>
            <center>
                 <div>
                   <h5> 
                   <div type="text" placeholder="Planet Data" value={this.state.planetdata} onChange={this.handlePlanetData}/>
                      {this.state.planetdata.map((planetresult, index) =>
                        <li key = {index}>
                            <a href = '#' onClick={(e) => this.DisplayPlanetDetails(e,planetresult)}> {planetresult.name} </a>
                            <button id = "population" className = {barColor}>{planetresult.population}</button>
                        </li>
                        )}
                   </h5>
                 </div>
            </center>
            <div className="col-md-6">
                <button className="btn btn-primary" onClick = {this.handleLogout}>Logout</button>
                </div>
            </div>

        )
    }
}
export default withRouter(Search)
