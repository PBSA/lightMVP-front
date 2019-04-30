import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap';
import twitch from '../../img/twitch.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

  }

  validateForm = () => {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className='Login'>
        <Form onSubmit={ this.handleSubmit } >
          <Form.Group className='Username' controlId='username'>
            <Form.Label >Username</Form.Label>
            <Form.Control
              autoFocus
              type='text'
              value={ this.state.username }
              onChange={ this.handleChange }
              placeholder='Username'
              autoComplete='username'
            />
          </Form.Group>
          <Form.Group className='Password' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={ this.state.password }
              onChange={ this.handleChange}
              type='password'
              placeholder='Password'
              autoComplete='current-password'
            />
          </Form.Group>
          <Button
            block
            disabled={ !this.validateForm()}
            type='submit'
          >
            Login
          </Button>
        </Form>
        <div className='OR'>OR</div>
        <div className='TxtLogin'>Login with your Twitch Account</div>
        <img src={ twitch } alt='twitch'></img>
      </div>
    );
  }
}
