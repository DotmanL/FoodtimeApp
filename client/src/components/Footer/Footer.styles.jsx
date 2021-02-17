import styled from 'styled-components';
import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Email } from '@styled-icons/material/Email';
import { Telephone } from '@styled-icons/foundation/Telephone';

export const FooterContainer = styled.div`
  background-color: black;
  padding: 60px 0px 10px 0px;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding: 5px 0px 10px 0px;
  }
`;

export const FooterMain = styled.div`
  width: 100vw;
  bottom: 0;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Lheader = styled.h3`
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: whitesmoke;
  justify-self: flex-start;
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
    background: #eb392e;
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
  }
`;

export const Ldiv = styled.div`
  background-color: gray;
  height: 0.5px;
  width: 75px;
  margin-top: -9px;

  @media screen and (max-width: 800px) {
    width: 90vw;
    opacity: 0.5;
    margin-left: 0px;
  }
`;

export const Fcontent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 10px 0px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Fdiv = styled.div`
  background-color: gray;
  height: 0.5px;
  width: 90vw;
  margin-top: 5px;

  @media screen and (max-width: 800px) {
    width: 85vw;
    opacity: 0.5;
  }
`;

export const Ftext = styled.div`
  color: white;
  font-size: 16px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-left: 20px;
    font-size: 14px;
  }
`;

export const Fli = styled.h3`
  color: white;
  cursor: pointer;
  font-weight: 400;
  :hover {
    color: #eb392e;
    transform: translateX(3px);
    transform: translateY(2px);
  }
`;
export const Flic = styled.div`
  color: white;
  cursor: pointer;
  margin-top: 10px;

  :hover {
    color: #eb392e;
  }
`;

export const Twit = styled(Twitter)`
  color: white;
  width: 30px;

  &:hover {
    color: cyan;
  }
`;

export const Tel = styled(Telephone)`
  color: white;
  width: 30px;

  :hover {
    color: #eb392e;
  }
`;

export const Em = styled(Email)`
  color: white;
  width: 30px;

  :hover {
    color: #eb392e;
  }
`;

export const Git = styled(Github)`
  color: white;
  width: 30px;
  &:hover {
    color: cyan;
  }
`;

export const Ctext = styled.h3`
  color: white;
  align-self: center;
  width: 90%;
  font-size: 23px;
  :hover {
    color: #eb392e;
  }
  @media screen and (max-width: 800px) {
    font-size: 17px;
  }
`;
