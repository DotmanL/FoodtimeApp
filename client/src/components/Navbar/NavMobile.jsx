import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { signout } from '../../Redux/User/user.actions';
import { connect } from 'react-redux';

import {
  NavItem,
  Sos,
  Si,
  Su,
  NavLink,
  Dash,
  Food,
  Welcome,
} from './NavMobile.styles';

const NavMobile = ({ user: { isAuthenticated, loading, user }, signout }) => {
  const userLinks = (
    <Fragment>
      <Welcome> Hi, {user && user.firstName.toLowerCase()}</Welcome>
      <NavItem>
        {isAuthenticated && user && user.role === 'admin' && (
          <NavLink to="/admin">
            <Dash /> Admin
          </NavLink>
        )}

        <NavLink to={`/profile/${user && user._id}`}>
          <Dash /> Dashboard
        </NavLink>

        <NavLink to="/menu">
          <Food /> Menu
        </NavLink>

        <NavLink to="/" onClick={signout}>
          <Sos to="/" title="Sign Out" onClick={signout} /> SIGN OUT
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink to="/menu">
          <Food /> Menu
        </NavLink>
        <NavLink to="/signin">
          <Si /> Sign In
        </NavLink>
        <NavLink to="/signup/customer">
          <Su /> Sign Up
        </NavLink>
      </NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

NavMobile.propTypes = {
  signout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { signout })(NavMobile);
