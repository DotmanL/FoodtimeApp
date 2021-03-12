import React, { Fragment, useState } from 'react';
// import PropTypes from 'prop-types';
import { FormContainer, FormInput, SearchButton } from './Search.styles';
import { useHistory } from 'react-router-dom';
//import SearchResult from '../SearchResult/SearchResult';

const Search = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (query.trim()) {
      history.push(`/search?q=${query}`);
    }
    setQuery('');
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
        <SearchButton onClick={handleSubmit}> Search </SearchButton>
      </FormContainer>
    </Fragment>
  );
};

export default Search;
