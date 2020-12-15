import styled from 'styled-components';
import { UserCircle } from '@styled-icons/boxicons-solid/UserCircle';
import { LogInCircle } from '@styled-icons/boxicons-solid/LogInCircle';
import { UserAdd } from '@styled-icons/heroicons-solid/UserAdd';
import Ftlogo from './assets/ftlogo.png';
import { Link } from 'react-router-dom';

export const Navigation = styled.nav`
  height: 100px;
  width: 100vw;
  display: flex;
  position: fixed;
  top: 0;
  text-transform: uppercase;
  padding: 0 2vw;
  z-index: 999;
  margin: 0 auto;
  margin-bottom: -5px;
  justify-content: space-between;
  align-self: center;
  @media (max-width: 800px) {
    position: sticky;
    display: flex;
    margin-top: -4px;
    height: 50px;
    top: 0;
  }
`;

export const Toggle = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  @media (max-width: 800px) {
    display: flex;
    padding: 0 3vw;
    height: 5%;
    margin-top: 25px;
    z-index: 50;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 3px;
  @media (max-width: 800px) {
    margin-top: 1px;
    margin-bottom: 5px;
  }
`;

export const Logo = styled.div`
  background-image: url(${Ftlogo});
  width: 82px;
  height: 82px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled(Link)`
  font-size: 30px;
  margin-top: 10px;
  font-weight: bolder;
  color: #eb392e;
  :hover {
    color: #eb392e;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const Navbox = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background-color: white;
    border-top: 1.5px solid #eb392e;
    transition: all 0.1s ease-in;
    top: 0px;
    left: ${(props) => (props.open ? '-100%' : '0')};
  }
`;

export const Hamburger = styled.div`
  background-color: #f1faee;
  width: 30px;
  height: 3px;
  transition: all 0.2s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #eb392e;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${(props) =>
      props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)'};
    top: -10px;
  }
  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
  @media screen and (max-width: 800px) {
    background-color: #eb392e;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 45px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    height: 45px;
  }
`;

export const SvgLink = styled(Link)`
  margin: 5px;
`;

export const Dash = styled(UserCircle)`
  display: none;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
    color: #eb392e;
    display: flex;
    margin-top: 8px;
  }
`;

export const Si = styled(LogInCircle)`
  display: none;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
    color: #eb392e;
    display: flex;
    margin-top: 8px;
  }
`;

export const Su = styled(UserAdd)`
  display: none;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
    color: #eb392e;
    display: flex;
    margin-top: 8px;
  }
`;

export const Cart = styled(Link)`
  display: none;
  @media screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
    color: #eb392e;
    display: flex;
    margin-top: 12px;
    margin-right: 5px;
  }
`;
