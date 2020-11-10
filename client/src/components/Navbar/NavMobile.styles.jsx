import styled from "styled-components"
import { Link } from 'react-router-dom';
import {LogOutCircle} from '@styled-icons/boxicons-solid/LogOutCircle'
import {UserCircle} from '@styled-icons/boxicons-solid/UserCircle'
import {FoodMenu} from '@styled-icons/boxicons-solid/FoodMenu'
import {LogInCircle} from "@styled-icons/boxicons-solid/LogInCircle"

export const NavItem = styled.div`
display: none;
color: black;
width: 100%;
font-family: 'Raleway', sans-serif;
transition: all 200ms ease-in;
cursor: pointer;
position: relative;
:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 0%;
  content: ".";
  color: transparent;
  background: #14213d;
  height: 1px;
  transition: all 0.4s ease-in;
}

@media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  font-size: 20px;
  z-index: 6;
color: #14213d;
}
`


export const NavLink = styled(Link)`
color: black;
margin-top: 30px;
margin-left: 5vw;
position: relative;
`

export const NavText = styled.h3`
color: black;
margin-left: 5vw;
margin-top: 30px;
position: relative;

`




export const Dash = styled(UserCircle)`
display: none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      color:  #EB392E;
      display: inline-block;
      position: relative;
      margin-left: 5px;
      margin-top: 3px;
  }
`
export const Si = styled(LogInCircle)`
display: none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      color:  #EB392E;
      display: inline-block;
      margin-left: 5px;
      position: relative;
      margin-top: 3px;
  }
`



export const Food = styled(FoodMenu)`
display: none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      color:  #EB392E;
      display: inline-block;
      margin-left: 5px;
      margin-top: 3px;
  }
`

export const Sos =styled(LogOutCircle)`
color: white;
width: 30px;
height: 30px;
margin-left: 10px;
cursor: pointer;
display:none;
@media screen and ( max-width: 800px) {
      width: 25px;
      height: 25px;
      color: #EB392E;
      display: inline-block;
      margin-left: 5px;
      margin-top: 3px;
  }
`



export const Dropdown =styled.div`
background: white;
color: black;
width: auto;
display: flex;
font-size: 8px;
flex-direction: column;
align-items: center;
height: auto;
padding: 5px 5px;
cursor: pointer;
margin-top: 114px;
`

export const Opt= styled(Link)`
text-decoration: none;
color: black;
height: 70px;
border-bottom: 1px solid black;
font-weight: 700;
font-size: 10px;
margin-top: 10px;
font-family: 'Raleway', sans-serif;
padding-top: 2vh;
transition: all 200ms ease-in;
cursor: pointer;
:hover {
  color: #EB392E;
  ::after {
    width: 100%;
  }
}
@media (max-width: 800px) {
  margin-top: -15px;
  font-size: 20px;  
display: flex;
flex-direction: column;
justify-content: space-evenly;
  border-bottom: 0px solid black;
}
`

export const OptItem = styled(NavText)`
font-size: 25px;
font-family: 'Raleway', sans-serif;
color: black;
margin-left: -32vw;
@media (max-width: 800px) {
  margin-top: -120px;
}
`

export const Welcome  = styled.h4`
display: none;
@media (max-width: 800px) {
display: flex;
  font-size: 20px;
color: black;
margin-top: 10px;
margin-left: 50%;
}
`