import styled from 'styled-components';


export const FormContainer = styled.div`
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 40vw;
@media screen and (max-width: 800px) {
	width: 65vw;
}
`


export const Container = styled.div`
width: auto;
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px 10px 10px 10px;
align-items: center;
height: auto;
@media screen and (max-width: 800px) {
	width: 60vw;
}
`

export const FormInput =styled.input`
width: 35vw;
height: 35px;
outline: none;
padding-left: 10px;
background: white;
position: relative;
border-radius: 5px;
margin-top: 5px;
border: 1px solid orange;
@media screen and (max-width: 800px) {
	width: 50vw;
}
`

export const FormLabel = styled.label`
color: white;
font-size: 12px;
margin-top: 10px;
display: flex;
flex-direction: column;
`

export const Button = styled.button`
	background-color: black;
  margin-top: 10px;
	color: white;
	border: 2px solid white;
	border-radius: 5px;
	width: 90px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	outline: none;
	cursor: pointer;
	height: 42px;

	:hover {
	 opacity: 0.7;
	 transform: translateY(-3px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

	}
	@media screen and (max-width: 800px) {
 
	}
`
