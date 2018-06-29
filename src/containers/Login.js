import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  Button,
  Form,
  FormGroup,
  TextInput,
  Tile,
} from 'bonsai-components-react';
import { login } from '../store/auth/actions';

import './Login.css';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();

    const { email, password } = this.state;
    return this.props.dispatch(login(email, password));
  }

  onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <Tile id="login-wrapper">
        <Form>
          <FormGroup className="login-form" legendText="Login">
            <TextInput
              className="login-input"
              id="input-one"
              placeholder="Email"
              onChange={this.onChange}
              value={this.state.email}
              name="email"
            />
            <TextInput
              className="login-input"
              id="input-two"
              type="password"
              placeholder="Password"
              onChange={this.onChange}
              value={this.state.password}
              name="password"
              required
            />
            <Button
              type="submit"
              className="submit-btn"
              onClick={e => this.handleLogin(e)}
            >
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Tile>
    );
  }
}

export default connect()(Login);
