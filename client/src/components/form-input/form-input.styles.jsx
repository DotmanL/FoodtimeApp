import styled, { css } from 'styled-components'

const subColor = 'black'
const mainColor = 'black'

const shrinkLabelStyles = css`
	top: -15px;
	font-size: 13px;
	color: ${mainColor};
`

export const GroupContainer = styled.div`
	position: relative;
	margin: 7px 0;
	input[type='password'] {
		letter-spacing: 0.3em;
	}
`

export const FormInputContainer = styled.input`
	background: none;
	color: ${subColor};
	font-size: 15px;
	padding: 5px 10px 10px 10px;
	width: 45vw;
	height: auto;
	border: 1px solid black;
	border-radius: 5px;
	margin: 5px 0;
	&:focus {
		outline: none;
	}
	&:focus ~ label {
		${shrinkLabelStyles}
	}
	@media screen and (max-width: 800px) {
		width: 75vw;
	}
`

export const FormInputLabel = styled.label`
	color: ${subColor};
	font-size: 15px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`
