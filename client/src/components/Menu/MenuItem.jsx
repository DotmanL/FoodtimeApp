import React, { Fragment } from 'react';

import {
  Card,
  ProductImage,
  ProductNameContainer,
  ProductName,
  RestaurantName,
  Price,
  Add,
  PrContainer,
} from './MenuItem.styles';
import { addProduct } from '../../Redux/Products/products.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tray } from './MenuList.styles';
import { Link } from 'react-router-dom';

const MenuItem = ({ product, addProduct }) => {
  const { _id, productName, productImage, restaurant, price } = product;
  return (
    <Fragment>
      <Card>
        <PrContainer>
          <Link to={`/products/${_id}`}>
            <ProductImage src={productImage[0]} />
          </Link>
        </PrContainer>
        <ProductNameContainer>
          <ProductName>{productName}</ProductName>
        </ProductNameContainer>

        <RestaurantName> From {restaurant}</RestaurantName>
        <Price>₦ {price.toLocaleString()}</Price>
        <Add onClick={() => addProduct(product)}>
          <Tray /> Add to Tray
        </Add>
      </Card>
    </Fragment>
  );
};

MenuItem.propType = {
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, { addProduct })(MenuItem);
