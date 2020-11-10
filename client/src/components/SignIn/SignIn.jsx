import React, { useState, Fragment } from 'react'

import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { signin } from '../../Redux/User/user.actions';

import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';
import ButtonSpin from '../ButtonSpin/ButtonSpin';


import { SignInContainer, SignInTitle, SignInFooter, FormContainer, FormInput, Password, Fcontainer } from './SignIn.styles';


const SignIn = ({ signin, isAuthenticated, user: { loading, user } }) => {

  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',

  })

  const { email, password, } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    signin(email, password);

    setUserCredentials({ email: "", password: "" });

  }

  const handleChange = event => {
    const { name, value } = event.target
    setUserCredentials({ ...userCredentials, [name]: value });

  };



  //redirect when signed in

  if (isAuthenticated && user && user.suspended === "true") {
    return <Redirect to="/accessdenied" />
  }

  if (isAuthenticated && user && user.role === "admin") {
    return <Redirect to="/admin" />
  }

  if (isAuthenticated && user && user.role !== "admin") {
    return <Redirect to="/menu" />
  }

  return (
    <Fragment>
      <SignInContainer>

        <FormContainer>

          <SignInTitle>SIGN IN</SignInTitle>
          <form onSubmit={handleSubmit} autoComplete="on" >
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='Email'
              placeholder="Email Address"
              required
            />
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              label='Password'
              minLength="6"
              placeholder="Password"
              required
            />

            <CustomButton type='submit'>

              {!loading && <span>Sign In</span>}
              {loading && (<ButtonSpin />)}
            </CustomButton>


            <Fcontainer>
              <Password to='/forgotpassword'>Forgot your Password? </Password>
              <SignInFooter to="/signup/customer">I don't have an account </SignInFooter>
            </Fcontainer>
          </form>
        </FormContainer>

      </SignInContainer>
    </Fragment>
  )
}

SignIn.propType = {
  signin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  user: state.user
})

export default connect(mapStateToProps, { signin })(SignIn);