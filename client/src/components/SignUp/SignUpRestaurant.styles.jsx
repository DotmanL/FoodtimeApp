import styled from 'styled-components';

import header from './restaurantheader-min.png';
import bg from './dh.jpeg';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #e5e5e5;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 800px) {
    height: auto;
    min-height: auto;
    margin-top: -50px;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  position: relative;
  align-items: center;
  background-image: url(${bg});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 40px;
  @media screen and (max-width: 800px) {
    margin-top: 50px;
    padding-top: 10px;
    width: 85vw;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    background: white;
    box-shadow: 5px 5px 4px 5px #888888;
  }
`;

export const Header = styled.div`
  width: 100vw;
  height: 150px;
  color: white;
  position: relative;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-bottom: 2px solid red;
  font-family: 'PT Serif', serif;
  @media screen and (max-width: 800px) {
    height: auto;
    border-bottom: 1px solid red;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 100;
  width: 90vw;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 90vw;
    margin-top: 50px;
  }
`;

export const AccText = styled.h3`
  font-size: 15px;
  color: black;
  font-weight: 100;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-left: 0vw;
  }
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  margin-top: 0vh;
  border-radius: 5px;
  width: 100px;
  text-align: center;
  outline: none;
  border: 0px solid #03071e;
  cursor: pointer;
  height: 45px;

  :hover {
    background: green;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 800px) {
    width: 100px;
    height: auto;
    margin-top: 80px;
    margin-right: 2px;
    font-size: 12px;
  }
`;

export const HeaderTitle = styled.a`
  margin-top: -45px;
  margin-left: 65vw;
  @media screen and (max-width: 800px) {
    margin-top: -95px;
    margin-left: 65vw;
  }
`;
