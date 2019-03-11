import React, { Component } from 'react';
import Axios from 'axios';

class randomCountry extends Component {
    state = {
      country:{}
    }

    componentDidMount(){
      Axios.get('http://localhost:5000/api/random')
        .then(res=>{
          this.setState({country:res.data.countriesFromDb})
        })
    }

    deleteCountry = () => {
      Axios.delete(`http://localhost:5000/api/random/${this.state.country._id}`)
        .then(res=>{
          console.log(this)
          console.log(res)
          this.props.history.push('/')
        })
    }

    render(){
      return(
        <div>
          {this.state.country.name}
          {this.state.country._id}

          <button onClick={this.deleteCountry}>Delete</button>
        </div>
      )
    }

 }
export default randomCountry