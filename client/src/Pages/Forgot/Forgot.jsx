import React, { useState, Fragment } from 'react';
import {
  Container,
  FormInput,
  FormContainer,
  Title,
  ButtonContainer,
} from './Forgot.styles';
import { connect } from 'react-redux';
import { forgot } from '../../Redux/User/user.actions';
import PropTypes from 'prop-types';

import CustomButton from '../../components/custom-button/custom-button';

export const Forgot = ({ forgot }) => {
  const [inputs, setInputs] = useState({
    email: '',
  });

  const { email } = inputs;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputs({ email: '' });
    forgot(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <Fragment>
      <Container>
        <FormContainer>
          <Title>
            Forgot your password, type in your email to reset your password
          </Title>
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Type in your email address"
              required
            />
            <ButtonContainer>
              <CustomButton type="submit"> Submit</CustomButton>
            </ButtonContainer>
          </form>
        </FormContainer>
      </Container>
    </Fragment>
  );
};

Forgot.propTypes = {
  forgot: PropTypes.func.isRequired,
};

export default connect(null, { forgot })(Forgot);
