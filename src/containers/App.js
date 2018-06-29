import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Redirect, withRouter } from 'react-router-dom';

import Login from './Login';
import QRoute from './QRoute';
import TrackTable from './TrackTable';

import './App.css';
export class App extends Component {
  redirectToMain = (props, Component, user) => {
    if (user) {
      return <TrackTable {...props} />;
    } else {
      sessionStorage.setItem('redirectUrl', props.location.pathname);
      return <Redirect to="/login" />;
    }
  };

  redirectToLanding = (props, Component, user) => {
    if (sessionStorage.getItem('jwt')) {
      return user && user.role ? (
        <Redirect to="/main" />
      ) : (
        <Component {...props} />
      );
    }
    return <Component {...props} />;
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <QRoute
            exact
            path="/"
            component={Login}
            validation={this.redirectToLanding}
          />
          <QRoute
            exact
            path="/login"
            component={Login}
            validation={this.redirectToLanding}
          />
          <QRoute
            exact
            path="/main"
            auth
            component={TrackTable}
            validation={this.redirectToMain}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
});

export default withRouter(connect(mapStateToProps)(App));
