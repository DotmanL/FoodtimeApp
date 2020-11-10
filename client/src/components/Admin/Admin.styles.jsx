import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Top = styled.div`
  position: relative;
  width: 13vw;
  margin-top: 0px;
  height: auto;
  background-color: #03071e;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    flex-direction: row;
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
    position: fixed;
    z-index: 444;
    width: 100vw;
    border-bottom: 1px solid #eb392e;
    border-right: 0px solid #eb392e;
  }
`;

export const Main = styled.div`
  position: relative;
  width: 87vw;
  background-color: #03071e;
  display: flex;
  margin-top: 0px;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  border-left: 0.5px solid #eb392e;
  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100%;
    border-left: 0px solid #eb392e;
    margin-top: -50px;
  }
`;

export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  width: auto;

  background-color: #03071e;
  /* background-color: #457b9d; */
  margin-top: 5vh;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    margin-top: 0vh;
    height: auto;
    align-items: center;
    width: 100vw;
    justify-content: center;
  }
`;

export const MenuLinks = styled.div`
  background-color: black;
  color: white;
  font-size: 15px;
  cursor: pointer;
  border-radius: 10px;
  z-index: 10;
  padding: 7px 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  padding: 10px 20px 10px 20px;
  width: auto;
  text-align: center;
  margin-top: 30px;
  border-bottom: 1px solid #eb392e;

  :hover {
    background-color: #eb392e;
    width: 100%;
    height: 70px;
  }
  @media screen and (max-width: 800px) {
    background: white;
    color: black;
    height: 40px;
    font-size: 10px;
    padding: 10px 10px 10px 10px;
    border-radius: 10px;
    margin-left: 10px;
    border-bottom: 0.5px solid #eb392e;

    :hover {
      background-color: #eb392e;
      height: 40px;
    }
  }
`;

export const Links = styled.h5`
  color: white;
  font-size: 15px;
  @media screen and (max-width: 800px) {
    font-size: 13px;
    color: black;
  }
`;
