import React from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../login.css'
import Register from './Register'
import { RiLoginCircleFill } from 'react-icons/ri'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: '',
    }
  }
  render() {
    return (
      <div className="Login">
        {/* <img src="image.png" alt='back.jpeg' /> */}
        <h1>
          <RiLoginCircleFill />
          Login
        </h1>
        <div className="Login-form">
          <label>
            email :
            <input
              placeholder="enter your email"
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={(e) => {
                this.setState({ email: e.target.value })
              }}
            />
          </label>
        </div>
        <br />
        <div className="Login-form">
          <label>
            Password :
            <input
              placeholder="password"
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value })
              }}
            />
          </label>
          <br />
        </div>
        <div className="text-right">{this.state.message}</div>
        <button className="btn btn-primary" onClick={this.onLoginClick}>
          Login
        </button>
        Or
        <nav>
          <button className="btn btn-primary">
            <NavLink to="Register">Sing up</NavLink>
          </button>
        </nav>
      </div>
    )
  }
  onLoginClick = async () => {
    console.log(this.state)
    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: 'GET' },
    )
    var body = await response.json()
    console.log(body)
    if (body.length > 0) {
      this.setState({
        message: (
          <span className="text-success">
            Successfully Logedd in
            {/* <NavLink to='/Dashboard'></NavLink> */}
          </span>
        ),
      })
    } else {
      this.setState({
        message: (
          <span className="text-danger">Invalid Login,Please Try Again</span>
        ),
      })
    }
  }
}

export default Login
