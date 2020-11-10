import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({
  component: Component,
  user: { isAuthenticated, loading, user  },
  ...rest
}) => (
  
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Spinner />
      ) : isAuthenticated  ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )     
    }
  />
);
PrivateRoute.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(PrivateRoute)
