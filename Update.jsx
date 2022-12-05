import React, { Component } from 'react'
import { FaRegistered } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      city: '',
      email: '',
      Password: '',
    }
  }
  render() {
    return (
      <div className="Login">
        <h1>
          <FaRegistered />
          Register
        </h1>
        <div>
            <form className='p-2 border-bottom'>Edit Users</form>
        </div>
        <div className="Login-form">
          <label>
            name
            <input
              type="text"
              value={this.state.name}
              placeholder="enter your name"
              className="form-control"
              onChange={(e) => {
                this.setState({ name: e.target.value })
              }}
            />
          </label>
        </div>
        <div className="Login-form">
          <label>
            phone
            <input
              type="text"
              value={this.state.phone}
              placeholder="enter your phone"
              className="form-control"
              onChange={(e) => {
                this.setState({ phone: e.target.value })
              }}
            />
          </label>
        </div>
        <div className="Login-form">
          <label>
            city
            <input
              type="text"
              value={this.state.city}
              placeholder="enter your city"
              className="form-control"
              onChange={(e) => {
                this.setState({ city: e.target.value })
              }}
            />
          </label>
        </div>
        <div className="Login-form">
          <label>
            email
            <input
              type="email"
              value={this.state.email}
              placeholder="enter your email"
              className="form-control"
              onChange={(e) => {
                this.setState({ email: e.target.value })
              }}
            />
          </label>
        </div>
        <div className="Login-form">
          <label>
            Password :
            <input
              placeholder="password"
              type="text"
              className="form-control"
              value={this.state.Password}
              onChange={(e) => {
                this.setState({ Password: e.target.value })
              }}
            />
          </label>
        </div>

        <br />
        <div>
          <button className="btn btn-primary" onClick={this.onSubmit}>
            submit
          </button>
          <button className="btn btn-primary">
            <NavLink to="/Login">Back</NavLink>
          </button>
          <button className='btn btn-primary' onClick={this.onUpdateClick}>Save</button>
        </div>
      </div>
    )
  }
  componentDidMount = async (e) => {
    let id = this.props.match.params.id
    console.log(id)
    let response = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'GET',
    })

    let body = await response.json()
    this.setState({
      name: body.name,
      city: body.address.city,
      phone: body.phone,
      email: body.email,
    })
  }

  onUpdateClick = async (event) => {
    event.preventDefault()
    let id = this.props.match.params.id
    var users1 = {
      name: this.state.name,
      address: { city: this.state.city },
      phone: this.state.phone,
      email: this.state.email,
    }
    //make post request
    var response = await fetch(`http://localhost:5000/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(users1),
      headers: {
        'Content-type': 'application/json',
      },
    })
    var body = await response.json()
    console.log(body)
    //after receiving response body, redirect to /Students
    if (body) {
      this.props.history.replace('/users')
    }
  }
}

export default Register
