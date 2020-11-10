import styled from 'styled-components';
import { ReactComponent as CartIcon } from './assets/cart.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-top: -10px;
  margin-right: 20px;
  cursor: pointer;
  @media (max-width: 800px) {
    margin-left: 6px;
    margin-top: 0px;
    margin-right: 0px;
  }
`;

export const Cart = styled(CartIcon)`
  margin-top: -12px;
  margin-left: -60px;
  fill: red;
  @media (max-width: 800px) {
    fill: red;
    margin-left: -10px;
    width: 30px;
    height: 30px;
  }
`;

export const CartItemCount = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: white;
  margin-left: -30px;
  margin-top: -7px;
  border: 1px solid red;
  @media (max-width: 800px) {
    margin-left: 5px;
    border: 0.5px solid red;
    width: 20px;
    height: 20px;
  }
`;
