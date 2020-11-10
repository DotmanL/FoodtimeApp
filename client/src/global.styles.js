import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0px;
    margin: 0px;
    background-color: black;
    color: #000000;
    font-size: 1rem;
    height: 100%;
  line-height: 1.6;
  overflow-x: hidden;


    @media screen and ( max-width: 800px) {
        padding: 0px;
    margin: 0px;
   
    }
}

a{
    text-decoration: none;
    color: White;
    
}
*{
    box-sizing: border-box;
}


`;
