import styled from 'styled-components';
import mheader from './assets/menuheader-min.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Items = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    height: auto;
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

export const Header = styled.div`
  width: 100vw;
  height: 120px;
  color: white;
  position: relative;
  background-image: url(${mheader});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'PT Serif', serif;
  border-bottom: 2px solid red;
  @media screen and (max-width: 800px) {
    height: 80px;
    margin-top: -50px;
    border-bottom: 1px solid red;
  }
`;
