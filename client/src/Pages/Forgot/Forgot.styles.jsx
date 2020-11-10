import styled from 'styled-components';

export const Container = styled.div `
	position: relative;
	min-height: 100vh;
	padding-bottom: 5px;
`

export const FormContainer = styled.div`
  display: flex;
align-items: center;
justify-content: center;
text-align: center;
box-shadow: 5px 5px 8px 8px  #888888;
background: white;
border: 2px solid #eb392e;
flex-direction: column;
padding: 20px 10px 10px 20px;
margin-top: 140px;
margin-left: auto;
margin-right: auto;
width: 60vw;
height: auto;
border-radius: 10px;
@media screen and (max-width: 800px) {
 width: 85vw;
 box-shadow: 2px 3px 4px 4px  #888888;

}


`




export const Title = styled.h2 `
color: black;
font-size: 20px;
text-align: center;
width: 40vw;
@media screen and (max-width: 800px) {
  font-size: 15px;
  width: 70vw;
}

`

export const FormInput = styled.input`
background: white;
  font-size: 15px;
  padding: 5px 10px 10px 5px;
  display: block;
  width: 250px;
  border: 1px solid black;
  border-radius: 3px;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`

  
export const Button = styled.button`
  border: 3px solid black;
  width: 162px;
  height: 51px;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: black;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; 
 
  & i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: #eb392e;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:hover {
    border-color: transparent; }
    &:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1); }
    &:hover i {
      -webkit-transform: translateX(4px);
      transform: translateX(4px); }

`;
