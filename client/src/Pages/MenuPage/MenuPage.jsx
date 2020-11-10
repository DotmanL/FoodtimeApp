import React from 'react';
import styled from 'styled-components';
import Menu from '../../components/Menu/Menu';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e5e5e5;
  padding-bottom: 5px;
  width: 100vw;
  @media screen and (max-width: 800px) {
  }
`;

const MenuPage = () => {
  return (
    <Container>
      <Menu />
    </Container>
  );
};

export default MenuPage;
