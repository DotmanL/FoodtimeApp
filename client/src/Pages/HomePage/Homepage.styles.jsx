import styled from 'styled-components';
import header from './assets/header.jpg';
import header2 from './assets/header2.jpg';
import { ReactComponent as pickup } from './assets/delivery-man.svg';
import { ReactComponent as order } from './assets/order.svg';
import { ReactComponent as fullb } from './assets/meal.svg';
import { ReactComponent as menub } from './assets/store-24px.svg';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e5e5e5;
  padding-bottom: 5px;
`;

export const Header = styled.div`
  width: 100vw;
  height: 75vh;
  color: white;
  position: relative;
  background-image: url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: 'PT Serif', serif;

  @media screen and (max-width: 800px) {
    height: 60vh;
    margin-top: -50px;
  }
`;
export const Title = styled.h1`
  font-size: 50px;
  color: white;
  font-weight: 100;
  width: 90vw;
  margin-top: 0px;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin-top: 0px;
    width: 90vw;
    margin-top: 50px;
  }
`;
export const SubTitle = styled.p`
  font-size: 20px;
  color: white;
  width: 80vw;
  margin-top: -30px;
  font-weight: 100;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 0px;
  }
`;

export const SubHeader = styled.div`
  width: 100vw;
  height: 9vh;
  background-color: #eb392e;
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-bottom: 2px solid white;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 800px) {
  }
`;
export const SubContent = styled.div`
  width: 100vw;
  height: 15vh;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
    font-size: 15px;
    padding: 5px 5px 5px 5px;
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
  font-size: 20px;

  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`;
export const Ctext = styled.p`
  font-size: 20px;
  width: 70vw;
  margin-top: -9px;
  padding-bottom: 30px;
  padding-top: 10px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
    width: 80vw;
  }
`;

export const Citems = styled.div`
  width: 100vw;
  height: auto;
  padding: 40px 20px 40px 20px;
  display: flex;
  color: white;
  background-color: #eb392e;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Ocontainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`;

export const Oitems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: -3vw;
  width: 100%;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Oheader = styled.h2`
  font-size: 20px;
  margin-top: -15px;

  @media screen and (max-width: 800px) {
    font-size: 15px;
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

export const Clabels = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Ccontainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;

  text-align: center;
  align-items: center;
`;

export const Delivery = styled(order)`
  width: 90px;
  height: 70px;
`;

export const Fooddrop = styled(pickup)`
  width: 90px;
  height: 70px;
`;

export const Basket = styled(fullb)`
  width: 90px;
  height: 70px;
`;

export const Menu = styled(menub)`
  width: 90px;
  height: 70px;
`;

export const MenuButton = styled.button`
  width: auto;
  height: 45px;
  border: none;
  outline: none;
  padding: 10px 10px;
  color: #fff;
  background-color: #eb392e;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;

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
    background: black;
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
`;
