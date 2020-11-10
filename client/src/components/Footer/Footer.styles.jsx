import styled from 'styled-components';
import { Twitter } from '@styled-icons/entypo-social/Twitter';
import { Github } from '@styled-icons/boxicons-logos/Github';

import { Email } from '@styled-icons/material/Email';
import { Telephone } from '@styled-icons/foundation/Telephone';

export const FooterContainer = styled.div`
  background-color: black;
  padding: 40px 0px 40px 0px;
  width: 100vw;
  height: auto;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterMain = styled.div`
  background-color: black;
  width: 100vw;
  bottom: 0;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 20px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Fcontent = styled.div`
  height: auto;
  display: flex;
  color: white;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700px;

  @media screen and (max-width: 800px) {
    padding-left: 20px;
    font-size: 15px;
  }
`;

export const Lheader = styled.h4`
  color: whitesmoke;
  font-size: 18px;
  margin-left: -3.5vw;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`;

export const Ldiv = styled.div`
  background-color: gray;
  height: 0.5px;
  width: 5vw;
  margin-top: -23px;
  margin-left: -3.5vw;
  @media screen and (max-width: 800px) {
    width: 90vw;
    opacity: 0.5;
    margin-left: 0px;
  }
`;

export const Fdiv = styled.div`
  background-color: gray;
  height: 0.5px;
  width: 85vw;
  margin-right: auto;
  margin-left: auto;
  margin-top: -6px;

  @media screen and (max-width: 800px) {
    width: 85vw;
    opacity: 0.5;
  }
`;

export const Ftext = styled.ul`
  color: white;
  list-style: none;
  font-size: 15px;
  margin-left: -48px;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
`;

export const Fli = styled.li`
  color: white;
  list-style: none;
  margin-left: -40px;
  font-size: 13px;
  cursor: pointer;

  :hover {
    color: #eb392e;
    transform: translateX(3px);
    transform: translateY(2px);
  }
`;
export const Flic = styled.li`
  color: white;
  display: inline;
  list-style: none;
  margin-left: -40px;
  cursor: pointer;

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
  font-size: 10px;
  margin-left: 8vw;
  :hover {
    color: #eb392e;
  }
`;
