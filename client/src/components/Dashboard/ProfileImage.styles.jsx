import styled from 'styled-components'
import { Gallery } from '@styled-icons/remix-fill/Gallery'

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: auto;
	justify-content: center;
	align-items: center;
 
	
`

export const FormContainer = styled.div`
	/* background-color: #33415c; */
	width: 30vw;
	height: auto;
	border-radius: 5px;
	padding-bottom: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
  text-align: center;
	@media screen and (max-width: 800px) {
		width: 70vw;
		margin-left: auto;
		margin-right: auto;

	}
`

export const Title = styled.h3`

font-size: 15px;
`

export const FormInput = styled.input`
	background: none;
	color: black;
	font-size: 13px;
	padding: 5px 10px 10px 5px;
	display: block;
	position: relative;
	width: 70%;
	border: 1px solid white;
	border-radius: 5px;
	margin-top: 0px;

	align-items: center;
	outline: none;
`
export const PostPrev = styled.div`
	display: flex;
	flex-direction: row;
 justify-content: center;
 align-items: center;

`

export const Gal = styled(Gallery)`
	width: 40px;
	height: 40px;
  margin-top: 1vw;
	color: black;
	cursor: pointer;
`

export const PostingB = styled.h5`
	font-size: 20px;
	color: rgb(211, 211, 211);
	margin-left: 20px;
`

export const Button = styled.button`
	border-radius: 10px;
	width: 80px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
	height: 31px;
	border: none;
	cursor: pointer;
	text-align: center;
	background: black;
	border-radius: 10px;
	color: #fff;
	font-family: 'Montserrat-SemiBold';

	@media screen and (max-width: 800px) {
		
	}
`

export const ButtonDimed = styled(Button)`
	opacity: 0.4;

	&:before {
		background: black;
	}
`
