import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100vw;
  padding: 20px 20px;
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const FormInput = styled.input`
  background: white;
  width: 85%;
  height: 45px;
  outline: none;
  border: 1px solid gray;
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  position: relative;
  text-indent: 10px;
  font-size: 20px;

  &::placeholder {
    font-style: bold;
  }
  @media screen and (max-width: 800px) {
    width: 70vw;
    height: 40px;
    font-size: 15px;
  }
`;

export const SearchButton = styled.button`
  background-color: #eb392e;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.3);
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px auto;
  color: white;
  width: 90px;
  outline: none;
  font-size: 18px;
  border: 0px;
  cursor: pointer;
  height: 40px;

  :hover {
    opacity: 0.8;
    transform: translateY(-3px);
  }
  @media screen and (max-width: 800px) {
    height: 40px;
  }
`;
