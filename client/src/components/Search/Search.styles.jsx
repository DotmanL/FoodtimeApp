import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100vw;
  padding: 20px 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: row;
  justify-content: center;
`;

export const FormInput = styled.input`
  background: white;
  width: 40%;
  height: 50px;
  outline: none;
  border: 1px solid #03071e;
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;

  &::placeholder {
    font-style: italic;
  }
  @media screen and (max-width: 800px) {
    width: 70vw;
    height: 40px;
    font-size: 15px;
  }
`;

export const SearchButton = styled.button`
  background-color: #52b788;
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px auto;
  width: 90px;
  outline: none;
  border: 0px solid #03071e;
  cursor: pointer;
  height: 50px;

  :hover {
    opacity: 0.7;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 800px) {
    height: 40px;
  }
`;
