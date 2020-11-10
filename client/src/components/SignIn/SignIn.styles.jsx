import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg from '../SignUp/dh.jpeg';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-image: url(${bg});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    margin-top: -50px;
		background-image: none;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
  margin-top: 2vh;
  @media screen and (max-width: 800px) {
  }
`;

export const Fcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
  margin-top: 10px;
`;

export const SignInFooter = styled(Link)`
  width: 40vw;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  :hover {
    color: #eb392e;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-top: 2px;
    width: 80vw;
  }
`;

export const Password = styled(Link)`
  font-size: 15px;
  color: black;
  cursor: pointer;
  :hover {
    color: #eb392e;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-top: 5px;
  }
`;

export const FormInput = styled.input`
  background: none;
  color: black;
  font-size: 13px;
  padding: 5px 10px 10px 5px;
  display: block;
  height: auto;
  width: 70%;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 6.7vw;
  align-items: center;

  outline: none;
  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  border-radius: 6px;
  width: auto;
  box-shadow: 5px 5px #888888;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 5px 5px 5px;
  @media screen and (max-width: 800px) {
    width: 85vw;
    padding: 10px 10px 10px 10px;
  }
`;
