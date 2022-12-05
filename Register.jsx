import React, { Component } from 'react'
import { FaRegistered } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      phone: '',
      city: '',
      email: '',
      Password: '',
      confirmPassword: '',
    }
  }
  render() {
    return (
      <div className="Login">
        <h1>
          <FaRegistered />
          Register
        </h1>
        <div className="Login-form">
          <label>
            id
            <input
              type="text"
              value={this.state.id}
              placeholder="enter your id"
              className="form-control"
              onChange={(e) => {
                this.setState({ id: e.target.value })
              }}
            />
          </label>
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
        <div className="Login-form">
          <label>
            confirmPassword :
            <input
              placeholder="confirmpassword"
              type="password"
              className="form-control"
              value={this.state.confirmPassword}
              onChange={(e) => {
                this.setState({ confirmPassword: e.target.value })
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
        </div>
      </div>
    )
  }

  onSubmit = async (e) => {
    e.preventDefault()

    var users = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      address: { city: this.state.city },
      phone: this.state.phone,
      Password: this.state.Password,
      confirmPassword: this.state.confirmPassword,
    }

    var response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(users),
      headers: {
        'content-type': 'application/json',
      },
    })
    var body = await response.json()
    console.log(body)

    if (body) {
      this.props.history.replace('/users')
      this.setState({
        message: <span className="text-success">Registered Successfully</span>,
      })
    } else {
      this.setState({
        message: <span className="text-danger">Please Enter All Details</span>,
      })
    }
  }


}

export default Register
