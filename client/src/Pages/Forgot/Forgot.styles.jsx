import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 5px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 5px 5px 8px 8px #888888;
  background: white;
  border: 2px solid #eb392e;
  padding: 50px 50px;
  margin-top: 140px;
  margin-left: auto;
  margin-right: auto;
  width: 60vw;
  height: auto;
  border-radius: 10px;
  @media screen and (max-width: 800px) {
    width: 85vw;
    box-shadow: 2px 3px 4px 4px #888888;
  }
`;

export const Title = styled.h2`
  color: black;
  font-size: 20px;
  text-align: center;
  width: 40vw;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    width: 70vw;
  }
`;

export const FormInput = styled.input`
  background: white;
  font-size: 15px;
  padding: 15px 5px 15px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 250px;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
