import styled, { keyframes } from 'styled-components';
import header from './assets/header.jpg';
import header2 from './assets/header2.jpg';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { ReactComponent as pickup } from './assets/delivery-man.svg';
import { ReactComponent as fullb } from './assets/meal.svg';
import { ReactComponent as menub } from './assets/store-24px.svg';
import { slideInRight } from 'react-animations';

const wobAnimation = keyframes`${slideInRight}`;

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e5e5e5;
  padding-bottom: 5px;
`;

export const Header = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  /* position: relative; */
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  font-family: 'PT Serif', serif;
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    height: 700px;
    margin-top: -120px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  padding: 10px 30px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
    margin-top: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-top: 0px;
    align-items: center;
  }
`;
export const Title = styled.h1`
  font-size: 60px;
  color: white;
  font-weight: 300;
  width: 50vw;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    width: 90vw;
    text-align: center;
    margin-left: 0px;
  }
`;
export const SubTitle = styled.p`
  font-size: 40px;
  color: white;
  margin-top: -30px;
  margin-left: 30px;
  font-weight: 300;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 0px;
    margin-left: 0px;
  }
`;

export const SubContent = styled.div`
  height: 80px;
  width: auto;
  padding: 10px 10px;
  color: white;
  background-color: #eb392e;
  border: 2px solid #eb392e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    width: 100%;
    margin-top: 40px;
    height: 50px;
  }
`;

export const Content = styled.div`
  width: 100vw;
  position: relative;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

export const Cheader = styled.h1`
  font-size: 30px;
  font-weight: bold;
  /*   color: black; */
  color: black;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    width: 70vw;
  }
`;
export const Ctext = styled.p`
  font-size: 30px;
  text-align: justify;
  margin-top: -9px;
  font-style: italic;
  padding-bottom: 30px;
  padding-top: 10px;
  width: 70vw;
  color: black;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 80vw;
  }
`;

export const Citems = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 800px) {
  }
`;

export const Ocontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
  }
`;

export const Oitems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* align-items: flex-start; */
  width: 100vw;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Oheader = styled.h2`
  font-size: 30px;
  margin-top: -15px;
  color: black;

  @media screen and (max-width: 800px) {
    font-size: 25px;
  }
`;

export const Ccontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px) {
  }
`;

export const Clabels = styled.h3`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: black;
  margin-top: 20px;
  @media screen and (max-width: 800px) {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const ViewMenu = styled.div`
  width: 100vw;
  height: 50vh;
  background-image: url(${header2});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(50, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MenuT = styled.h4`
  color: white;
  font-size: 30px;
  font-weight: 700;
  font-family: 'PT Serif', serif;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const Fooddrop = styled(pickup)`
  width: 190px;
  height: 170px;
  animation: 1s ${wobAnimation};
`;

export const Basket = styled(fullb)`
  width: 190px;
  height: 170px;
  animation: 1s ${wobAnimation};
`;

export const Menu = styled(menub)`
  width: 190px;
  height: 170px;
  animation: 1s ${wobAnimation};
`;

export const Rest = styled(Menu)`
  @media screen and (max-width: 800px) {
    width: 80px;
    height: 90px;
    align-self: center;
  }
`;

export const Dash = styled(UserCircle)`
  width: 190px;
  height: 170px;
  @media screen and (max-width: 800px) {
    width: 80px;
    height: 90px;
  }
`;

export const MenuButton = styled.button`
  width: auto;
  height: auto;
  border: none;
  outline: none;
  padding: 20px 30px;
  color: #fff;
  background-color: #eb392e;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  font-size: 20px;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    color: #000;
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #eb392e;
    left: 0;
    top: 0;
    border: 1px solid white;
    border-radius: 10px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  @media screen and (max-width: 800px) {
    font-size: 15px;
    padding: 15px 25px;
  }
`;
