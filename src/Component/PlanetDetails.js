import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom'
 class PlanetDetails extends Component
 {
    constructor(props) {
        super(props);
        this.state = {
            planetDetails: null
        }
    }
    render()
    {
        console.log('props ==>',this.props);
        console.log('state ==>', this.props.location.state);
        return(
          <div>
              hello
          </div>
        )
    }
 }
 export default withRouter(PlanetDetails)