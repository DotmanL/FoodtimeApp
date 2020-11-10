import React from 'react';
import {
  addProduct,
  reduceProduct,
  clearCartProduct,
} from '../../Redux/Products/products.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Main,
  Container,
  Name,
  Price,
  SubT,
  Image,
  ImageDiv,
  RemoveDiv,
  Remove,
  ImageContainer,
  RestaurantName,
  RestaurantImage,
  Desc,
  DescContainer,
  Qdiv,
  Quantity,
  NPContainer,
  MobileContainer,
  MobileName,
  MobilePrice,
  MobileImage,
  MobileImageContainer,
  MobileDesc,
  MobileDescContainer,
  MobileQuantity,
  MobileNPContainer,
  MobileImageDiv,
  MobileRestaurantName,
  MobileRestaurantImage,
  MobileQdiv,
  MobileMinus,
  MobilePlus,
  MobileRemove,
  MobileRemoveDiv,
  Minus,
  MobileMinusDisabled,
  MinusDisabled,
  Plus,
} from './CheckoutItem.styles';

const CheckoutItem = ({
  product,
  addProduct,
  reduceProduct,
  clearCartProduct,
  sub,
}) => {
  const {
    productName,
    productImage,
    description,
    quantity,
    restaurant,
    price,
  } = product;

  return (
    <Main>
      <Container>
        <ImageContainer>
          <ImageDiv>
            <Image src={productImage[0]} alt="product-image" />
            <RestaurantName>
              <RestaurantImage />
              <h4 style={{ margin: '0px', padding: '2px 0px' }}>
                From {restaurant}
              </h4>
            </RestaurantName>
          </ImageDiv>

          <DescContainer>
            <Name>{productName}</Name>
            <Desc>{description}</Desc>
            <RemoveDiv onClick={() => clearCartProduct(product)}>
              <Remove />
              <h3 style={{ cursor: 'pointer' }}>Remove</h3>
            </RemoveDiv>
          </DescContainer>
        </ImageContainer>

        <NPContainer>
          <Quantity>
            <Qdiv>
              {product.quantity === 1 ? (
                <MinusDisabled />
              ) : (
                <Minus onClick={() => reduceProduct(product)} />
              )}
              {quantity} <Plus onClick={() => addProduct(product)} />
            </Qdiv>
          </Quantity>
          <Price>₦ {price.toLocaleString()}</Price>
          <SubT>
            <h2> ₦ {sub.toLocaleString()}</h2>
          </SubT>
        </NPContainer>
      </Container>

      <MobileContainer>
        <MobileImageContainer>
          <MobileImageDiv>
            <MobileImage src={productImage[0]} alt="product-image" />
            <MobileRestaurantName>
              <MobileRestaurantImage />
              <h4
                style={{
                  margin: '0px',
                  padding: '0px 1px',
                  textAlign: 'center',
                  fontSize: '10px',
                }}
              >
                From {restaurant}
              </h4>
            </MobileRestaurantName>
          </MobileImageDiv>

          <MobileDescContainer>
            <MobileName>{productName}</MobileName>
            <MobileDesc>{description}</MobileDesc>
            <MobilePrice>₦ {sub.toLocaleString()}</MobilePrice>
          </MobileDescContainer>
        </MobileImageContainer>
        <MobileNPContainer>
          <MobileQuantity>
            <MobileQdiv>
              {product.quantity === 1 ? (
                <MobileMinusDisabled />
              ) : (
                <MobileMinus onClick={() => reduceProduct(product)} />
              )}
              {quantity}
              <MobilePlus onClick={() => addProduct(product)} />
            </MobileQdiv>
            <MobileRemoveDiv onClick={() => clearCartProduct(product)}>
              <MobileRemove />
              <h3
                style={{
                  cursor: 'pointer',
                  color: 'red',
                  fontSize: '20px',
                }}
              >
                Remove
              </h3>
            </MobileRemoveDiv>
          </MobileQuantity>
        </MobileNPContainer>
      </MobileContainer>
    </Main>
  );
};

CheckoutItem.propTypes = {
  addProduct: PropTypes.func.isRequired,
  reduceProduct: PropTypes.func.isRequired,
  clearCartProduct: PropTypes.func.isRequired,
};
export default connect(null, { addProduct, reduceProduct, clearCartProduct })(
  CheckoutItem
);
