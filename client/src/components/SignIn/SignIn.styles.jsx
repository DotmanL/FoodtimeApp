import styled from 'styled-components';
import { Link } from 'react-router-dom';

import header from '../SignUp/assets/restaurantheader-min.png';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: gray;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    background-image: none;
    display: flex;
    flex-direction: column;
  }
`;
export const Header = styled.div`
  width: 100vw;
  height: 120px;
  color: white;
  position: relative;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 800px) {
    height: 100px;
    margin-top: -100px;
    border-bottom: 1px solid red;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  display: flex;
  height: 100vh;
  width: 50vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
    padding: 10px 10px 10px 10px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  background: none;
  color: black;
  font-size: 13px;
  padding: 10px 10px 10px 10px;
  height: 50px;
  width: 60%;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  @media screen and (max-width: 800px) {
    width: 85%;
  }
`;

export const SignInTitle = styled.h1`
  font-weight: bold;
  font-size: 30px;
  color: #eb392e;
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
  font-size: 20px;
  font-weight: 600;
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
  font-size: 20px;
  font-weight: 600;
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

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 50vw;
  background-color: wheat;
  border-left: 2px solid #eb392e;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Bckg = styled.img`
  height: auto;
  width: 40vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
