import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../Redux/User/user.actions';
import NavbarLinks from './NavBarLinks';
import NavMobile from './NavMobile';
import PropTypes from 'prop-types';
import CartIcon from '../Cart/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import Search from '../Search/Search';

import {
  Navigation,
  Toggle,
  LogoContainer,
  Logo,
  LogoText,
  SearchContainer,
  Navbox,
  Hamburger,
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

      <LogoContainer>
        <Logo />
        <LogoText to="/">Foodtime</LogoText>
      </LogoContainer>

      <SearchContainer>
        <Search />
      </SearchContainer>

      <NavContainer onClick={() => setNavbarOpen(false)}>
        {!loading && isAuthenticated ? (
          <>
            <Cart>
              <CartIcon />
              {!hidden ? null : <CartDropDown />}
            </Cart>
          </>
        ) : (
          <Fragment>
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
