import styled from 'styled-components';
import mheader from './assets/menuheader-min.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0px 30px 0px 30px;
  align-items: center;
  justify-self: center;
  margin-top: 0px;
  width: 80%;
  height: 40px;
  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 25px;
  color: #eb392e;
  font-weight: 700;
  background-color: white;
  padding: 3px 10px;
  border-radius: 8px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
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
