import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchProducts } from '../../Redux/Products/products.actions';
import { FormContainer, FormInput, SearchButton } from './Search.styles';
// import { useHistory } from 'react-router-dom';
//import SearchResult from '../SearchResult/SearchResult';

const Search = ({ searchProducts, product: { searchResults } }) => {
  const [query, setQuery] = useState('');

  // const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    searchProducts(query);
    // history.push('/searchresults');
    console.log('Button Pressed');
  };

  return (
    <Fragment>
      <FormContainer>
        <FormInput
          type="search"
          name="query"
          value={query}
          onChange={handleChange}
          placeholder="Search meals"
          required
        />
        {/* {searchResults.length > 0 ? (
          <SearchResult searchResults={searchResults} />
        ) : (
          <h1>NOTHING FOUND</h1>
        )} */}

        <SearchButton onClick={handleSubmit}> Search </SearchButton>
        {/* <SearchResult search={searchResults} /> */}
      </FormContainer>
    </Fragment>
  );
};

Search.propTypes = {
  product: PropTypes.object.isRequired,
  searchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { searchProducts })(Search);

//  // products.map((product) => ( //{' '}
//  <div key={product._id} product={product}></div>
//  // )) // ) : ( // <h1> SPINNNN </h1>
//  // )}
