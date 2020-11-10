import styled from 'styled-components'
import { Cancel } from '@styled-icons/material/Cancel'
import { Edit } from '@styled-icons/boxicons-solid/Edit'

export const Container = styled.div`
	width: 20vw;
	display: flex;
	flex-direction: column;
	background-color: black;
	padding: 15px 15px 15px 15px;
	box-shadow: 5px 5px #ffff;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	height: auto;
	@media screen and (max-width: 800px) {
		margin-right: 0vw;
		margin-top: 120px;
		width: 80vw;
	}
`

export const Main = styled.div`
	display: flex;
	width: 80vw;
	height: auto;
	padding: 15px 15px 15px 35px;
	flex-direction: row;
	justify-content: center;
	margin-top: 50px;
	margin-left: 2vw;
	@media screen and (max-width: 800px) {
		flex-direction: column;
		background: none;
		align-items: center;
		width: 100vw;
		margin-left: 0vw;
		padding-bottom: 10vh;
		margin-top: 5px;
	}
`

export const FormInput = styled.input`
	width: 15vw;
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
	padding-bottom: 20px;
`

export const CategoriesDetails = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	background-color: black;
	color: white;
	padding: 10px 10px 10px 10px;
	box-shadow: 5px 5px #ffff;
	margin-left: 50px;
	width: 90vw;
	padding-bottom: 50px;
	margin-top: 20px;
	align-items: center;
	justify-content: space-between;
	height: auto;

	@media screen and (max-width: 800px) {
		margin-left: 0px;
		width: 85vw;
		display: flex;
	flex-direction: column;
	flex-wrap: wrap;
		height: auto;
	}
`

export const CategoriesList = styled.div`
	display: flex;
	background-color: green;
	color: white;
	padding: 5px 5px 5px 5px;
	box-shadow: 5px 5px #ffff;
	width: 40%;
	margin-top: 10px;
	justify-content: space-between;
	@media screen and (max-width: 800px) {
		width: 60vw;
		padding: 5px 5px 5px 5px;
	}
`

export const Remove = styled(Cancel)`
	width: 28px;
	height: 28px;
	color: red;
	display: inline-block;
	align-items: flex-start;
	justify-content: flex-end;
  cursor: pointer;
	margin-top: 8px;
	:hover {
		opacity: 0.5;
	}
`

export const Ed = styled(Edit)`
	width: 25px;
	height: 25px;
	color: #eb392e;
	cursor: pointer;
	@media screen and (max-width: 800px) {
	}
`

export const SubCat = styled.div`
	display: flex;
`

export const Name = styled.div`
	display: flex;
`
