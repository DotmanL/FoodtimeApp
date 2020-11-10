import styled from 'styled-components';

export const Container = styled.div`
display: flex;
	width: auto;
  height: 100vh;
  flex-direction: column;
	color: white;
	margin-top: 40px;
  padding: 5px 5px 5px 5px;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-top: 120px;
	}

`

export const Title = styled.h2`
font-size: 20px;
color: white;

`


export const Button = styled.button`
	min-width: 55px;
	width: auto;
	height: 20px;
	font-size: 10px;
	background-color: red;
	color: white;
	outline: none;
	text-transform: uppercase;
	font-weight: bolder;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media screen and (max-width: 800px) {
		height: 40px;
		min-width: 105px;
		width: auto;
	}
`