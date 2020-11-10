import  styled from 'styled-components';

export const Container = styled.div `
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background: wheat;
flex-direction: column;
margin: 170px auto;
width: 40vw;
height: 40vh;
border-radius: 3px;


@media screen and (max-width: 800px) {
    background-size: cover;
    background-position: center;
    width: 70vw;
    height: 50vh;
    margin: 70px auto;
}

`

export const Details = styled.h2 `
color: black;
font-size: 20px;
font-weight: bold;

@media screen and (max-width: 800px) {
    font-size: 20px;
}
`

export const Button = styled.button`
  color: #333;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  display: flex;
  flex-direction: row;  
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 50px;
  text-align: center;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  cursor: pointer;
  transition: opacity 0.2s ease-in;
  outline: none;
  
  &:hover {
    opacity: 0.8;
  }
`;
export const Buttons = styled.div` 
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  text-align: center;
  
`;
 
export const ActivateButton = styled(Button)` 
background-color: green;
margin-left: 200px;
margin-top: 40px;
color: white;
font-size: 12px;


@media screen and (max-width: 800px) {
    font-size: 10px;
}

`;