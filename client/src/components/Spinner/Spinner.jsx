import React from 'react'
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/PuffLoader";
 



const override = css`
  display: flex;
  flex-direction: row;
 
  margin-left: auto;
  margin-right: auto;
  margin-top: 50vh;
 height: 100vh;
  border-color: red;

  @media screen and (max-width: 800px) {
    margin-top: 40vh;
  }
`;
const Spinner = () => {
  return (
   
       <div>
        <PuffLoader
          css={override}
          size={100}
          color={"#eb392e"}
          
        />
      </div> 
  )
}

export default Spinner
