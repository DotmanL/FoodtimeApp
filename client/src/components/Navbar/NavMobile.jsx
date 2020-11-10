import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { signout } from '../../Redux/User/user.actions';
import { connect } from 'react-redux';

import { NavItem, Sos, NavLink, Dash, Food, Welcome } from './NavMobile.styles';

const NavMobile = ({ user: { isAuthenticated, loading, user }, signout }) => {
  const userLinks = (
    <Fragment>
      <Welcome> Hi, {user && user.firstName.toLowerCase()}</Welcome>

      {isAuthenticated && user && user.role === 'admin' && (
        <NavItem>
          <NavLink to="/admin">
            <Dash /> Admin
          </NavLink>
        </NavItem>
      )}

      <NavItem>
        <NavLink to={`/profile/${user && user._id}`}>
          <Dash /> Dashboard
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/menu">
          <Food /> Menu
        </NavLink>
      </NavItem>

      <NavItem>
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
      </NavItem>

      {/* <NavItem>
				<NavLink to="/signin">
		
					<Si /> SignIn
				</NavLink>
			</NavItem> */}
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
