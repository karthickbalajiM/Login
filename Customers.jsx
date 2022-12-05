import React, { Component } from 'react'
import { useState } from 'react';
// import 'bootstrap/dist/js/bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

class Customers extends Component {
  state = { appTitle: 'Upshot Tech', Count : 22 }
  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1  bg-dark text-white">
          {this.state.appTitle}
          <span className="badge badge-secondary m-2 highlight bg-danger">
            {this.state.Count}
          </span>
          <button className='btn btn-info text-white' onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>
      </div>
    )
  }
  onRefreshClick =() => {
    this.setState({
        Count:70,
    });
    }; 
}

export default Customers
