import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SignOut } from '@styled-icons/octicons/SignOut';
import { CaretDown } from '@styled-icons/boxicons-regular/CaretDown';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { FoodMenu } from '@styled-icons/boxicons-regular/FoodMenu';

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  color: #eb392e;
  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  margin: 15px 10px;
  padding-top: 1vh;
  transition: all 200ms ease-in;
  cursor: pointer;
  position: relative;
  /* :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: white;
    height: 1px;
    transition: all 0.4s ease-in;
  } */
  :hover {
    color: #eb392e;
    ::after {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const DashBoardDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 7px;
  margin-top: 0px;
  align-items: center;
  width: auto;
  height: auto;
  padding: 5px 8px;
`;

export const DashBoardDrop = styled.div`
  background-color: white;
  border: 1px solid #eb392e;
  position: absolute;
  margin-top: 55px;
  margin-left: -40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  height: 190px;
  padding: 5px 10px 0px 10px;
`;

export const DashBoardDropItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const DashBoardDropLink = styled(Link)`
  font-size: 18px;
  text-transform: initial;
  color: #eb392e;
`;

export const DashBoardIcon = styled(UserCircle)`
  width: 40px;
  height: 40px;
  color: #eb392e;
`;

export const AccountIcon = styled(UserCircle)`
  width: 30px;
  height: 30px;
  color: #eb392e;
`;

export const Welcome = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  color: #eb392e;
  margin-top: 0px;
  margin-left: 15px;
`;

export const Caret = styled(CaretDown)`
  color: #eb392e;
  width: 25px;
  height: 25px;
`;

export const FoodMenuIcon = styled(FoodMenu)`
  width: 40px;
  height: 40px;
  color: #eb392e;
`;

export const Sos = styled(SignOut)`
  display: flex;
  color: #eb392e;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
    color: blue;
    margin-left: 5px;
    margin-top: 3px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const DropdownSignUp = styled.div`
  background: white;
  color: black;
  width: auto;
  border: 1px solid #eb392e;
  display: flex;
  font-size: 8px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: auto;
  padding: 5px 5px;
  cursor: pointer;
  margin-top: 50px;
`;

export const Opt = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: black;
  white-space: nowrap;
  font-weight: 700;
  font-size: 13px;
  margin-top: 10px;
  font-family: 'Raleway', sans-serif;
  padding-top: 1vh;
  transition: all 200ms ease-in;
  cursor: pointer;

  :hover {
    color: #eb392e;
    ::after {
      width: 100%;
    }
  }
`;

export const SignUpItem = styled.h4`
  text-decoration: none;
  display: inline-block;
  color: #eb392e;
  white-space: nowrap;
  font-weight: 700;
  font-size: 18px;
  margin: 10px 10px;
  padding-top: 1vh;
  transition: all 200ms ease-in;
  cursor: pointer;
  position: relative;
  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    background: white;
    height: 1px;
    transition: all 0.4s ease-in;
  }
  :hover {
    color: #eb392e;
    ::after {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavLink = styled.div`
  margin-left: -10vw;
  font-size: 15px;
  color: black;
  font-family: 'Raleway', sans-serif;
  margin-top: 15px;
`;
