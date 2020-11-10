import styled from 'styled-components';

import header from './assets/checkheader-min.png';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e5e5e5;
  padding-bottom: 5px;
  width: 100vw;
  @media screen and (max-width: 800px) {
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 100vw;
  /* background: purple; */
`;

export const Header = styled.div`
  width: 100vw;
  height: 120px;
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
    height: 80px;
    margin-top: -50px;
    border-bottom: 1px solid red;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 100;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 55px;
  }
`;
