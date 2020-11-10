import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import {
  selectCartItems,
  selectCartTotal,
  selectCartSubTotal,
} from '../../Redux/Products/products.selectors';
import {
  Container,
  Content,
  Top,
  Headers,
  Text,
  CartContainer,
  TotalContainer,
  Total,
  TotalDiv,
  Del,
} from './CartDetails.styles';
import CheckoutItem from './CheckoutItem';

const CartDetails = ({ cartItems, total, subTotal }) => {
  return (
    <Container>
      <Top>
        <Headers>
          <Text>Meals</Text>
          <Text>Quantity</Text>
          <Text>Unit Price</Text>
          <Text>SubTotal</Text>
        </Headers>
      </Top>
      <Content>
        <CartContainer>
          {cartItems.map((cartItem, i) => (
            <CheckoutItem
              key={cartItem._id}
              product={cartItem}
              sub={subTotal[i]}
            />
          ))}
        </CartContainer>
      </Content>
      <TotalContainer>
        <TotalDiv>
          <Total>Total:</Total>
          <Total>₦ {total.toLocaleString()}</Total>
        </TotalDiv>
        <Del>
          <h3>Delivery Fee not included</h3>
        </Del>
      </TotalContainer>
    </Container>
  );
};

CartDetails.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.array.isRequired,
  subTotal: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  subTotal: selectCartSubTotal,
});

export default connect(mapStateToProps)(CartDetails);
