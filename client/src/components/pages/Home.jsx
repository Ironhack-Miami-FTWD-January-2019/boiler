import React, { Component } from 'react';
import Axios from 'axios';
import api from '../../api'

export default class Home extends Component {

  
  componentDidMount(){

    // console.log(api.isLoggedIn())
    // console.log(api.getLocalStorageUser())

    Axios.get('http://localhost:5000/api/whatever').then(res=>{
      // console.log(res)
    })

  }


  render() {                
    return (
      <div className="Home">
        <h2>Home</h2>
        <p>This is a sample project with the MERN stack</p>
      </div>
    );
  }
}
