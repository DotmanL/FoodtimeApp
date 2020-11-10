import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  margin-top: 5px;
  /* background: blue; */
  border-bottom: 1px solid #eb392e;
`;

export const Main = styled.div`
  display: flex;
  padding: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-left: 30px;
  color: #eb392e;

  text-align: center;
`;

export const Image = styled.img`
  width: 100px;
  height: 80px;
`;

export const Price = styled.h4`
  font-size: 15px;
  margin-left: 30px;
  margin-top: -20px;
  text-transform: capitalize;
  text-align: center;
  color: #55a630;
`;

export const NPContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`;
