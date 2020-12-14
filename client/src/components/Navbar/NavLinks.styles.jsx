import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SignOut } from '@styled-icons/octicons/SignOut';
import { Profile } from '@styled-icons/remix-fill/Profile';

export const NavItem = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: #eb392e;
  white-space: nowrap;
  font-weight: 700;
  font-size: 20px;
  margin: 10px 30px;
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
    background: #eb392e;
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

export const So = styled(SignOut)`
  color: white;
  width: 25px;
  height: 25px;
  margin-left: 10px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
    display: none;
  }
`;

export const Sos = styled(SignOut)`
  color: white;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
    color: blue;
    display: inline-block;
    margin-left: 5px;
    margin-top: 3px;
  }
`;

export const Dash = styled(Profile)`
  color: white;
  width: 30px;
  height: 30px;
  margin-left: 30px;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 800px) {
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-left: 5px;
    color: blue;
  }
`;

export const DashB = styled(Profile)`
  color: white;
  width: 25px;
  height: 25px;
  margin-left: -5px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dropdown = styled.div`
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
  font-size: 20px;
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
    background: #eb392e;
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

export const Welcome = styled.h3`
  font-size: 15px;
  display: flex;
  color: white;
  margin: 22px 7px;
`;

export const NavLink = styled.div`
  margin-left: -10vw;
  font-size: 15px;
  color: black;
  font-family: 'Raleway', sans-serif;
  margin-top: 15px;
`;
