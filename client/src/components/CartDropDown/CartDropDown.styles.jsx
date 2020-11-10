import styled, { keyframes } from 'styled-components';

import { CloseCircle } from '@styled-icons/evaicons-solid/CloseCircle';

import { slideInRight } from 'react-animations';

const wobAnimation = keyframes`${slideInRight}`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  width: 270px;
  height: auto;
  background: white;
  color: black;
  border: 2px solid #eb392e;
  margin-top: 55px;
  margin-left: -10px;
  animation: 1s ${wobAnimation};

  @media screen and (max-width: 800px) {
    margin-left: -219px;
    margin-top: 65px;
  }
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 300px;
`;

export const Empty = styled.div`
  color: #eb392e;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-top: 50%;
  padding: 20px;
`;

export const Checkout = styled.div`
  background: #eb392e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 9px;
  margin-top: 10px;
  width: 100%;
  height: 65px;
  @media screen and (max-width: 800px) {
    padding: 3px;
    height: 70px;
  }
`;

export const Close = styled(CloseCircle)`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 30px;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  justify-content: space-between;
  background: #eb392e;
  cursor: pointer;
  padding: 5px;
  width: 100%;
  height: 60px;
  @media screen and (max-width: 800px) {
    padding: 2px;
    height: 40px;
  }
`;

export const OptText = styled.h2`
  font-size: 15px;
  font-weight: 600;
  width: 80%;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
export const CheckoutButton = styled.button`
  background: #55a630;
  width: auto;
  padding: 20px;
  display: flex;
  cursor: pointer;
  font-size: 13px;
  font-weight: 800;
  outline: none;
  color: white;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  align-items: center;
  height: 30px;
  border-radius: 9px;

  &:hover {
    background: white;
    color: #55a630;
  }
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
