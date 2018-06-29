import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export class QRoute extends Component {
  authenticate = (props, Component, user, validation) => {
    if (sessionStorage.getItem('jwt')) {
      return validation ? (
        validation(props, Component, user)
      ) : (
        <Component {...props} />
      );
    } else {
      sessionStorage.setItem('redirectUrl', props.location.pathname);
      return <Redirect to="/login" />;
    }
  };

  render() {
    const {
      path,
      component: Component,
      auth,
      validation,
      user,
      ...attrs
    } = this.props;
    return (
      <Route
        path={path}
        {...attrs}
        render={props =>
          auth ? (
            this.authenticate(props, Component, user, validation)
          ) : validation ? (
            validation(props, Component, user)
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

QRoute.propTypes = {
  component: PropTypes.any,
  auth: PropTypes.bool,
  validation: PropTypes.func,
  path: PropTypes.string.isRequired,
  location: PropTypes.object,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.auth.currentUser,
});

export default connect(mapStateToProps)(QRoute);
