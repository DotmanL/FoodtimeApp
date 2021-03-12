import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  searchProducts,
  addProduct,
} from '../../Redux/Products/products.actions';
import {
  Card,
  ProductImage,
  ProductNameContainer,
  ProductName,
  RestaurantName,
  Price,
  Add,
  PrContainer,
} from '../Menu/MenuItem.styles';
import { Tray } from '../Menu/MenuList.styles';
import { Items } from '../Menu/Menu.styles';
import Spinner from '../Spinner/Spinner';

const SearchResult = ({
  addProduct,
  searchProducts,
  location,
  product: { searchResults, loading },
}) => {
  const query = location.search;
  const querySearch = query.slice(3);

  useEffect(() => {
    searchProducts(querySearch);
  }, [querySearch, searchProducts]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <div style={{ marginTop: '120px' }}>
          {searchResults.length > 0 ? (
            <Items>
              {searchResults.map((data, i) => (
                <Card>
                  <PrContainer>
                    <Link to={`/products/${data._id}`}>
                      <ProductImage src={data.productImage[0]} />
                    </Link>
                  </PrContainer>
                  <ProductNameContainer>
                    <ProductName>{data.productName}</ProductName>
                  </ProductNameContainer>

                  <RestaurantName> From {data.restaurant}</RestaurantName>
                  <Price>₦ {data.price.toLocaleString()}</Price>
                  <Add onClick={() => addProduct(data)}>
                    <Tray /> Add to Tray
                  </Add>
                </Card>
              ))}
            </Items>
          ) : (
            <div style={{ minHeight: '100vh' }}>
              <h1>Product Does not exist</h1>
            </div>
          )}
        </div>
      )}
    </Fragment>
  );
};

SearchResult.propTypes = {
  product: PropTypes.object.isRequired,
  searchProducts: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { searchProducts, addProduct })(
  SearchResult
);
