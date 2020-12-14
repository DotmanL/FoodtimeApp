import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';

import {
  NavItem,
  Sos,
  Dropdown,
  Opt,
  SignUpItem,
  Welcome,
  NavContainer,
  NavItems,
} from './NavLinks.styles';

const NavLinks = ({
  user: { isAuthenticated, loading, user },
  product: { hidden },
  signout,
}) => {
  const [toggle, setToggle] = useState(false);

  const userLinks = (
    <Fragment>
      <NavContainer>
        <NavItems>
          <Welcome> Hi, {user && user.firstName.toLowerCase()}</Welcome>
          <NavItem to={`/profile/${user && user._id}`}> Dashboard </NavItem>

          {isAuthenticated && user && user.role === 'admin' && (
            <NavItem to="/admin"> Admin</NavItem>
          )}
          <NavItem to="/menu">Menu</NavItem>

          <NavItem to="/" onClick={signout}>
            SIGN OUT <Sos to="/" title="Sign Out" onClick={signout} />
          </NavItem>
          <div style={{ marginLeft: '50px', marginTop: '12px' }}>
            <CartIcon />
          </div>
        </NavItems>
        {!hidden ? null : <CartDropDown />}
      </NavContainer>
    </Fragment>
  );

  const guestLinks = (
    <>
      <NavContainer>
        <NavItems>
          <NavItem to="/menu">Menu</NavItem>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <SignUpItem onClick={() => setToggle(!toggle)}>Sign Up</SignUpItem>

            {toggle && (
              <Dropdown>
                <Opt to="/signup/customer" onClick={() => setToggle(false)}>
                  Sign up as Customer
                </Opt>
                <Opt to="/signup/restaurant" onClick={() => setToggle(false)}>
                  Sign up as Restaurant
                </Opt>
              </Dropdown>
            )}
          </div>
          <NavItem to="/signin">SignIn</NavItem>
          <div style={{ marginLeft: '60px', marginTop: '12px' }}>
            <CartIcon />
          </div>
        </NavItems>
        {!hidden ? null : <CartDropDown />}
      </NavContainer>
    </>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

NavLinks.propTypes = {
  signout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  product: state.product,
});

export default connect(mapStateToProps, { signout })(NavLinks);
