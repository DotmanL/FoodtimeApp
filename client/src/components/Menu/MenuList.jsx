import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
import { connect } from 'react-redux';
import {
  getProductsById,
  addProduct,
} from '../../Redux/Products/products.actions';

import AS from './as.css';

import {
  Container,
  Main,
  Back,
  Title,
  ItemContainer,
  Item,
  ItemDescription,
  ProductImageContainer,
  ProductImage,
  SliderDiv,
  ProductName,
  ProductsName,
  ProductDescription,
  ProductRestaurant,
  ProductPrice,
  Tray,
  Button,
  Related,
  RelatedHeader,
} from './MenuList.styles';
import { Header } from './Menu.styles';
import Spinner from '../Spinner/Spinner';
import { Link, useParams } from 'react-router-dom';

const MenuList = ({
  getProductsById,
  addProduct,
  product: { product, loading },
}) => {
  let { id } = useParams();

  useEffect(() => {
    getProductsById(id);
  }, [getProductsById, id]);

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Container>
          <Header>
            <Title> {product && product.productName}</Title>
          </Header>
          <Main>
            <ItemContainer>
              <ItemDescription>
                <ProductRestaurant>
                  Offered by {product && product.restaurant}
                </ProductRestaurant>
                <ProductDescription>
                  {product && product.description}
                </ProductDescription>

                <ProductPrice> ₦{product && product.price}</ProductPrice>
                <Button onClick={() => addProduct(product)}>
                  <Tray /> Add To Tray
                </Button>
              </ItemDescription>
              <Item>
                <Link
                  style={{
                    color: 'black',
                    alignSelf: 'flex-start',
                    marginLeft: '10px',
                    marginTop: '5px',
                  }}
                  to="/menu"
                >
                  <Back /> Menu
                </Link>

                {product && product.productImage.length > 1 ? (
                  <>
                    <SliderDiv>
                      <AutoplaySlider
                        animation="foldOutAnimation"
                        play={true}
                        cancelOnInteraction={false} // should stop playing on user interaction
                        interval={6000}
                        cssModule={AS}
                      >
                        {product &&
                          product.productImage.map((images, i) => (
                            <ProductImageContainer>
                              <ProductImage key={i} src={images} />
                            </ProductImageContainer>
                          ))}
                      </AutoplaySlider>
                    </SliderDiv>
                    <ProductsName>
                      {product && product.productName}
                    </ProductsName>
                  </>
                ) : (
                  <>
                    {product &&
                      product.productImage.map((images, i) => (
                        <ProductImageContainer>
                          <ProductImage key={i} src={images} />
                        </ProductImageContainer>
                      ))}
                    <ProductName>{product && product.productName}</ProductName>
                  </>
                )}
              </Item>
            </ItemContainer>
            <Related>
              <RelatedHeader> List Related Items</RelatedHeader>
            </Related>
          </Main>
        </Container>
      )}
    </Fragment>
  );
};

MenuList.propTypes = {
  getProductsById: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getProductsById, addProduct })(
  MenuList
);
