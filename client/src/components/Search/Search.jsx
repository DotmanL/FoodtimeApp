import React, { Fragment} from 'react'
import { FormContainer, FormInput, SearchButton } from './Search.styles'


const Search = () => {
  return (
    <Fragment>
        <FormContainer>
        <FormInput
            type='search'
            name=''
            //value={name} 
            //onChange ={handleChange}
            placeholder='Search meals'
             required
          />

          <SearchButton> Search </SearchButton>
        </FormContainer>
    </Fragment>
  )
}

export default Search
