import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "../stylesheets/Login.css";
import twitch from "../img/twitch.png";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (<div>
        <div><img src="https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/></div>
        <div className="Login">
            <h3 className="Heading">Sign In</h3>
            <Form onSubmit={this.handleSubmit} >
            <Form.Group className="Username" controlId="username">
                <Form.Label >Username</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={this.state.username}
                onChange={this.handleChange.bind(this)}
                placeholder="Username"
                />
            </Form.Group>
            <Form.Group className="Password" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                type="password"
                placeholder="Password"
                />
            </Form.Group>
            <Button
                block
                disabled={!this.validateForm()}
                type="submit"
            >
                Login
            </Button>
            </Form>
            <div className="TwitchSection">
                <div className="OR">OR</div>
                <div className="TxtLogin">Login with your Twitch Account</div>
                <Button className="BtnTwitch" type="submit"><img height='60px' src="https://drops-register.ubi.com/img/logo_twitch_general.png"></img></Button>
            </div>
        </div>
    </div>);
  }
}
