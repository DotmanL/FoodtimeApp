import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

const AdminRoute = ({
  component: Component,
  user: { isAuthenticated, loading, user },
  ...rest
}) => (
  
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Spinner />
      ) : isAuthenticated && user && user.role === "admin" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/accessdenied" />
      )
    }
  />
);
AdminRoute.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(AdminRoute)
