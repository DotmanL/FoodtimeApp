import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Products/products.selectors';
import { toggleCart } from '../../Redux/Products/products.actions';
import { withRouter } from 'react-router-dom';
import {
  Container,
  CartItemContainer,
  Empty,
  Checkout,
  CloseContainer,
  Close,
  CheckoutButton,
  OptText,
} from './CartDropDown.styles';

const CartDropDown = ({ cartItems, toggleCart, history }) => {
  return (
    <>
      <Container>
        <CloseContainer>
          <h3>Cart</h3>
          <Close onClick={toggleCart} />
        </CloseContainer>
        <CartItemContainer>
          {cartItems.length ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          ) : (
            <Empty>Cart is currently Empty</Empty>
          )}
        </CartItemContainer>

        {cartItems.length ? (
          <Checkout>
            <CheckoutButton
              onClick={() => {
                history.push('/checkout');
                toggleCart();
              }}
            >
              Proceed to Check Out
            </CheckoutButton>
          </Checkout>
        ) : (
          <Checkout>
            <OptText>
              Fill your Cart before you can proceed to Checkout Page
            </OptText>
          </Checkout>
        )}
      </Container>
    </>
  );
};

CartDropDown.propTypes = {
  cartItems: PropTypes.array.isRequired,
  toggleCart: PropTypes.func.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCart })(CartDropDown)
);
