import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { signup } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import ButtonSpin from '../ButtonSpin/ButtonSpin';
import bckg from './assets/online_g.svg';
import {
  FormContainer,
  Header,
  Container,
  Title,
  AccText,
  Button,
  ButtonSwitch,
  BgDiv,
  Bg,
  FormDiv,
} from './SignUpRestaurant.styles';

const SignUpRestaurant = ({ signup, user: { loading } }) => {
  const [userCredentials, setUserCredentials] = useState({
    lastName: '',
    firstName: '',
    restaurant: '',
    city: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'vendor',
  });

  const {
    lastName,
    firstName,
    restaurant,
    city,
    phoneNumber,
    role,
    email,
    password,
    confirmPassword,
  } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserCredentials({
      lastName: '',
      role: '',
      firstName: '',
      city: '',
      restaurant: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    if (password !== confirmPassword) {
      toast.error("passwords don't match", 'danger');
    } else {
      signup({
        lastName,
        firstName,
        restaurant,
        phoneNumber,
        role,
        city,
        email,
        password,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <Fragment>
      <FormContainer>
        <Header>
          <Title>SIGN UP AS A RESTAURANT</Title>
        </Header>

        <Container>
          <FormDiv>
            <ButtonSwitch href="/signup/customer">
              <Button>Sign Up As a Customer </Button>
            </ButtonSwitch>
            <form onSubmit={handleSubmit}>
              <FormInput
                type="text"
                name="restaurant"
                value={restaurant}
                onChange={handleChange}
                label="Restaurant Name"
                required
              />
              <FormInput
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                label="Last Name"
                required
              />
              <FormInput
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                label="First Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
              />

              <FormInput
                type="text"
                name="city"
                value={city}
                onChange={handleChange}
                label="City"
                required
              />
              <FormInput
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                label="Phone Number"
                required
              />

              <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                minLength="6"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                minLength="6"
                required
              />
              <FormInput
                type="hidden"
                name="role"
                value="vendor"
                onChange={handleChange}
                required
              />

              <CustomButton type="submit">
                {!loading && <span>Sign Up</span>}
                {loading && <ButtonSpin />}
              </CustomButton>

              <AccText>
                Already have an account?{' '}
                <a style={{ color: '#EB392E' }} href="/signin">
                  Sign In
                </a>
              </AccText>
            </form>
          </FormDiv>
          <BgDiv>
            <Bg src={bckg} />
          </BgDiv>
        </Container>
      </FormContainer>
    </Fragment>
  );
};

SignUpRestaurant.propTypes = {
  signup: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { signup })(SignUpRestaurant);
