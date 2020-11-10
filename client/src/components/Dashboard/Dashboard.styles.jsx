import styled from 'styled-components';
import pheader from './profileHeader.jpg';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  width: 100vw;
  background-color: white;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-top: 10px;
  }
`;

export const Top = styled.div`
  position: relative;
  box-shadow: inset 0 0 0 2000px rgba(140, 0, 0, 0.5);
  background-image: url(${pheader});
  background-size: cover;
  background-repeat: no-repeat;
  width: 95%;
  border-radius: 7px;
  margin-left: 10px;
  margin-top: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -5;
  @media screen and (max-width: 800px) {
    margin-top: 15px;
    margin-left: 0px;
  }
`;

export const TopText = styled.h4`
  color: white;
  font-size: 45px;
  align-self: center;
  @media screen and (max-width: 800px) {
    font-size: 35px;
  }
`;

export const Welcome = styled.h4`
  color: white;
  font-size: 20px;
  margin-top: 50px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ImageContainer = styled.img`
  background-color: black;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 5px 5px 15px 3px #888888;
  width: 150px;
  height: 150px;
  margin-top: -50px;
  outline: none;
  margin-left: 9vw;
  align-self: flex-start;
  display: inline-block;
  @media screen and (max-width: 800px) {
    margin-top: -30px;
    margin-right: auto;
    margin-left: auto;
    width: 160px;
    height: 160px;
  }
`;

export const ImageDiv = styled.div`
  background-color: black;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 5px 5px 15px 3px #888888;
  width: 150px;
  height: 150px;
  margin-top: -50px;
  outline: none;
  margin-left: 9vw;
  align-self: flex-start;
  align-items: center;
  display: inline-block;
  text-align: center;
  @media screen and (max-width: 800px) {
    margin-top: -30px;
    margin-right: auto;
    margin-left: auto;
    width: 160px;
    height: 160px;
  }
`;

export const ImgText = styled.h4`
  font-size: 45px;
  color: white;
  font-style: bold;
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 30%;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: auto;
  padding-bottom: 20px;
  flex-direction: row;
  z-index: -5;
  justify-content: space-between;
  margin-top: -100px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  height: auto;
  padding: 5px 5px 5px 5px;
  border-radius: 3px;
  width: 25vw;
  margin-top: 110px;
  @media screen and (max-width: 800px) {
    width: 85vw;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const MenuLinks = styled.div`
  background: #eb392e;
  color: white;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  border-bottom: 1px solid white;

  :hover {
    opacity: 0.7;
    width: 100%;
    height: 60px;
  }
  @media screen and (max-width: 800px) {
    height: 55px;
    :hover {
      opacity: 0.7;
      width: 100%;
      height: 55px;
    }
  }
`;

export const Links = styled.h5`
  color: white;
  font-size: 20px;
  margin-left: 20px;
`;

export const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  color: black;
  width: 66vw;
  margin-top: 95px;
  margin-right: 40px;

  @media screen and (max-width: 800px) {
    width: 85vw;
    background: none;
    margin-right: 0px;
    margin-left: -10px;
    margin-top: 1vh;
  }
`;
