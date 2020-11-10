import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  margin-top: 40px;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: center;
  background: #eb392e;
  width: 80vw;
  height: 35px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Headers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 70px;
`;

export const Text = styled.h4`
  font-size: 18px;
  color: black;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border: 2px solid #eb392e;
  width: 80vw;
  padding: 0px;
  @media screen and (max-width: 800px) {
    width: 95vw;
    background: none;
    border: 0px solid #eb392e;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* background: blue; */
`;

export const SubTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background: red; */
  width: 20%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SubTotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 4px solid #eb392e;
  margin-top: 35px;
  margin-bottom: 65px;
`;

export const SubTotal = styled.h3`
  font-size: 22px;
  margin-left: 60px;
`;

export const TotalContainer = styled.div`
  /* background: yellow; */
  display: flex;
  background: white;
  flex-direction: column;
  width: 80vw;
  border-radius: 4px;
  border: 2px solid #eb392e;
  @media screen and (max-width: 800px) {
    width: 93vw;
    margin-right: 3px;
    border: 1px solid #eb392e;
  }
`;

export const Total = styled.h2`
  font-size: 23px;
`;

export const TotalDiv = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 20px 0px 80%;
  @media screen and (max-width: 800px) {
    padding: 0px 20px 0px 8%;
  }
`;

export const Del = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0px 20px;
  margin-top: -20px;
`;
