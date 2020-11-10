import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
	min-height: 100vh;
  display: flex;
  color: white;
	flex-direction: column;
  align-items: center;
  justify-content: center;
	z-index: 1;
`




const accessdenied = () => {
  return (
    <Container> 

       <h2> You don't have access to this resource</h2>
       <h3> Either your account has been suspended or you don't have permission to access that route</h3>
       <h3> Email me via oladotunlawal7@gmail.com </h3>


    </Container>
  )
}






export default accessdenied
