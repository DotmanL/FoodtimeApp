import React from 'react';
import {
  Container,
  Main,
  Name,
  Price,
  Image,
  NPContainer,
} from './CartItem.styles';

const CartItem = ({ item: { productName, productImage, price, quantity } }) => {
  return (
    <Container>
      <Main>
        <Image src={productImage[0]} alt="product-image" />
        <NPContainer>
          <Name>{productName}</Name>
          <Price>
            {quantity} pcs x ₦ {price.toLocaleString()}
          </Price>
        </NPContainer>
      </Main>
    </Container>
  );
};

export default CartItem;
