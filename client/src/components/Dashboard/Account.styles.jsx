import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { User } from '@styled-icons/boxicons-solid/User'
import { Email } from '@styled-icons/evaicons-solid/Email'
import { Phone } from '@styled-icons/boxicons-solid/Phone'
import { Edit } from '@styled-icons/boxicons-solid/Edit'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	width: 66vw;
	padding-bottom: 20px;
	padding-top: 3px;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		display: flex;
		flex-direction: column;
	}
`
export const ModalC = styled.div`
	background: black;
	color: rgb(211, 211, 211);
	padding: 19px 10px 19px 10px;
	flex-direction: column;
	position: relative;
`

export const Button = styled.button`
	background-color: black;
	margin-left: 5vw;
	color: white;
	border-radius: 5px;
	width: 90px;
	text-align: center;
	outline: none;
	cursor: pointer;
	height: 42px;

	:hover {
		opacity: 0.7;
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
	@media screen and (max-width: 800px) {
		margin-left: 55vw;
		margin-top: -25vh;
		height: 40px;
		width: 80px;
	}
`

export const Us = styled(User)`
	width: 30px;
	height: 30px;
	color: white;
`

export const Em = styled(Email)`
	width: 30px;
	height: 30px;
	color: white;
`

export const Tl = styled(Phone)`
	width: 30px;
	height: 30px;
	color: white;
`

export const Ed = styled(Edit)`
	width: 30px;
	height: 30px;
	align-self: flex-end;
	margin: 5px 20px;
	color: white;
	cursor: pointer;
`

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	width: 35vw;
	border-right: 1.5px solid white;
	border-left: 1.5px solid white;
	align-items: center;
	box-shadow: 7px 7px 7px 7px #888888;
	justify-content: center;
	background: #eb392e;
	padding: 10px 10px;
	text-align: center;
	border-radius: 7px;
	margin-right: 10px;
	&:hover {
		transform: translateX(-20px);
		transition: 0.2s ease-out;
	}
	@media screen and (max-width: 800px) {
		border-bottom: 1.5px solid white;
		border-top: 1.5px solid white;
		border-right: 0px;
		width: 85vw;
		margin-right: 0px;
		margin-top: 10px;
		&:hover {
			transform: translateX(0px);
			transition: 0.2s ease-out;
		}
	}
`

export const Add = styled(Main)`
	&:hover {
		transform: translateX(0px);
		transition: 0.2s ease-out;
	}
`

export const MainText = styled.h3`
	font-size: 25px;
	color: white;
	@media screen and (max-width: 800px) {
		font-size: 18px;
	}
`

export const TextHead = styled.h2`
	font-size: 20px;
	color: white;
	font-style: bolder;
	align-self: center;
	@media screen and (max-width: 800px) {
		font-size: 20px;
	}
`

export const MainLink = styled(Link)`
	font-size: 24px;
	color: white;
	cursor: pointer;
	font-style: bolder;
	margin-top: 0px;
	margin-left: 30px;
	:hover {
		color: #eb392e;
	}
	@media screen and (max-width: 800px) {
		padding-bottom: 20px;
		font-size: 20px;
	}
`

export const Linediv = styled.div`
	display: none;
	@media screen and (max-width: 800px) {
		display: flex;
		height: 2px;
		width: 65vw;
		margin-left: 10vw;
		background: #eb392e;
	}
`

export const ModalClose = styled(CloseOutline)`
	color: white;
	resize: none;
	width: 35px;
	height: 35px;
	outline: none;
	stroke: none;
	cursor: pointer;
	@media screen and (max-width: 800px) {
		width: 35px;
		height: 35px;
	}
`
