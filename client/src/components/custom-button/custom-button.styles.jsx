import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #eb392e;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  @media screen and (max-width: 800px) {
    margin-left: 0vw;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: darkblue;
  color: white;
  font-size: 10px;
  margin-left: 15px;

  @media screen and (max-width: 800px) {
    margin-top: 15px;
    margin-left: 25px;
    font-size: 15px;
  }

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 135px;
  width: auto;
  height: 50px;
  font-size: 15px;
  background-color: black;
  color: white;
  outline: none;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;

  ${getButtonStyles}
  @media screen and (max-width: 800px) {
    height: 40px;
    min-width: 105px;
    width: auto;
  }
`;
