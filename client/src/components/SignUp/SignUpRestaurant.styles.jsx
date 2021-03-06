import styled from 'styled-components';

import header from './assets/restaurantheader-min.png';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: #e5e5e5;
  min-height: 100%;
  position: relative;

  @media screen and (max-width: 800px) {
    height: auto;
    min-height: auto;
    margin-top: -50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: auto;
  width: 100vw;
  min-height: 100%;
  position: relative;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Form = styled.form`
  margin-top: -40px;
  @media screen and (max-width: 800px) {
    margin-top: -20px;
  }
`;

export const BgDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 45vw;
  background-color: wheat;
  border-right: 2px solid #eb392e;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Bg = styled.img`
  height: auto;
  width: 40vw;
  margin-top: 50px;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 55vw;
  background-color: white;
  padding-top: 35px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100%;
    margin-top: 0px;
    padding-top: 60px;
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
    height: 160px;
    margin-top: -120px;
    border-bottom: 1px solid red;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: #eb392e;
  width: auto;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
    margin-top: 7px;
  }
`;

export const AccText = styled.h3`
  font-size: 20px;
  color: black;
  font-weight: 700;
  margin-top: 3px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-left: 0vw;
  }
`;

export const Button = styled.button`
  background-color: white;
  color: #eb392e;
  margin-top: 0vh;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  outline: none;
  border: 0px solid #03071e;
  box-shadow: 5px 3px 4px 3px #888888;
  cursor: pointer;
  height: 45px;
  font-size: 16px;
  font-weight: 700;

  :hover {
    background: #eb392e;
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 800px) {
    width: 100px;
    height: auto;
    padding: 8px 6px;
    margin-top: 0px;
    margin-right: 2px;
    font-size: 12px;
    z-index: 1239;
  }
`;

export const ButtonSwitch = styled.a`
  align-self: flex-end;
  margin-right: 50px;
  margin-top: -10px;
  margin-bottom: 10px;
  @media screen and (max-width: 800px) {
    margin-top: -40px;
    margin-bottom: 5px;
  }
`;
