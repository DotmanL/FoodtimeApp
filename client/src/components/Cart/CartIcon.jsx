import React from 'react';
import { Container, Cart, CartItemCount } from './CartIcon.styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../Redux/Products/products.selectors';
import { toggleCart } from '../../Redux/Products/products.actions';

const CartIcon = ({ itemCount, toggleCart }) => {
  return (
    <Container onClick={toggleCart}>
      <CartItemCount>
        <h5 style={{ color: 'red' }}>{itemCount}</h5>
      </CartItemCount>
      <Cart />
    </Container>
  );
};

CartIcon.propTypes = {
  toggleCart: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
