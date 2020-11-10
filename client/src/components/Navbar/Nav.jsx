import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import NavbarLinks from './NavLinks';
import NavMobile from './NavMobile';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
//import onClickOutside from "react-onclickoutside";
import {
  Navigation,
  Toggle,
  Logo,
  LogoText,
  Navbox,
  Hamburger,
  SvgLink,
  Si,
  Su,
  Dash,
  Cart,
  NavContainer,
} from './Nav.styles';
import './Nav.css';

const Nav = ({
  user: { isAuthenticated, loading, user },
  product: { hidden },
}) => {
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      const scrolledDownEnough = bodyScrollTop > 30 ? true : false;
      setScrolledDownEnough(scrolledDownEnough);
    };

    // Nav.handleOnClickOutside = () =>  setNavbarOpen(false)
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDownEnough]);

  const newNav = scrolledDownEnough ? 'nav-background' : '';
  return (
    <Navigation className={newNav}>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>

      <Logo>
        <LogoText to="/">Foodtime</LogoText>
      </Logo>

      <NavContainer onClick={() => setNavbarOpen(false)}>
        {!loading && isAuthenticated ? (
          <>
            <Link to={`/profile/${user && user._id}`}>
              <Dash />
            </Link>
            <Cart>
              <CartIcon />
              {!hidden ? null : <CartDropDown />}
            </Cart>
          </>
        ) : (
          <Fragment>
            <SvgLink to="/signup/customer/">
              <Su />
            </SvgLink>
            <SvgLink to="/signin">
              <Si />
            </SvgLink>
            <Cart>
              <CartIcon />
              {!hidden ? null : <CartDropDown />}
            </Cart>
          </Fragment>
        )}
      </NavContainer>

      {navbarOpen ? (
        <Navbox
          onClick={() => setNavbarOpen(false)}
          onMouseLeave={() => setNavbarOpen(false)}
        >
          <NavMobile />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  );
};
// const clickOutsideConfig = {
//   handleClickOutside: () => Nav.handleClickOutside
// };

Nav.propTypes = {
  signout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  product: state.product,
});

export default connect(mapStateToProps, { signout })(Nav);
