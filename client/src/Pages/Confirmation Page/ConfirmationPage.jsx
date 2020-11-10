import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { activate } from '../../Redux/User/user.actions';
import Nav  from '../../components/Navbar/Nav';

import { Redirect } from 'react-router-dom';
import {
  Container,
  Details,
}
from './ConfirmationPage.styles'


export const ConfirmationPage = ({activate, match, isAuthenticated}) => {
  
  useEffect(() => {
    activate(match.params.token);
  }, [activate, match.params.token]);
  
 // console.log(match.params.token, 'activate details')

    if(!isAuthenticated) {
      return <Redirect to = "/signin" />
      }

    
  return (
  
   <Container>
       <Nav/>
<Details>
Chill, your account is being verified
</Details>
   </Container>
  )
}


ConfirmationPage.propTypes = {
  activate: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
  })

export default connect(mapStateToProps, {activate}) (ConfirmationPage)
