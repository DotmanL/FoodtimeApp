import React from 'react';
import { Container, Main, Header } from './CheckoutPage.styles';
import CartDetails from '../../components/Checkout/CartDetails';

const CheckoutPage = () => {
  return (
    <Container>
      <Header>{/* <Title>CHECKOUT</Title> */}</Header>
      <Main>
        <CartDetails />
      </Main>
    </Container>
  );
};

export default CheckoutPage;
