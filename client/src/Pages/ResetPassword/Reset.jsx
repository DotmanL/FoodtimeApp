import React, { useState, useEffect, Fragment } from 'react';
import {
  Container,
  FormInput,
  Title,
  FormContainer,
  ButtonContainer,
} from './Reset.styles';
import { reset } from '../../Redux/User/user.actions';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import CustomButton from '../../components/custom-button/custom-button';

export const Reset = ({ match, reset }) => {
  const [inputs, setInputs] = useState({
    firstName: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    let token = match.params.token;
    let { firstName } = jwt.decode(token);
    if (token) {
      setInputs({ firstName });
    }
  }, [match.params.token]);

  const { newPassword, firstName, confirmPassword } = inputs;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputs({ newPassword: '', confirmPassword: '' });
    if (newPassword !== confirmPassword) {
      toast.error("Passwords don't match");
    } else {
      reset(match.params.token, newPassword);
    }
  };

  return (
    <Fragment>
      <Container>
        <FormContainer>
          <Title>Hey, {firstName} type in your new password </Title>

          <form onSubmit={handleSubmit}>
            <FormInput
              name="newPassword"
              type="password"
              value={newPassword}
              onChange={handleChange}
              placeholder="New Password"
              minLength="6"
              required
            />

            <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter New Password"
              minLength="6"
              required
            />
            <ButtonContainer>
              <CustomButton type="submit"> Submit </CustomButton>
            </ButtonContainer>
          </form>
        </FormContainer>
      </Container>
    </Fragment>
  );
};

Reset.propType = {
  reset: PropTypes.func.isRequired,
};

export default connect(null, { reset })(Reset);
