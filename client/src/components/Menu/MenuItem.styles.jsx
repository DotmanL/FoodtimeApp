import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const wobAnimation = keyframes`${fadeIn}`;

export const Card = styled.div`
  background: white;
  display: flex;
  color: black;
  pointer-events: none;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px #888888;
  border-radius: 8px;
  width: auto;
  margin: 40px 40px 40px 40px;
  height: auto;
  padding-bottom: 20px;
  animation: 5s ${wobAnimation};
  cursor: pointer;

  @media screen and (max-width: 450px) {
    margin: 5px 5px 5px 5px;
    box-shadow: 1px 1px 2px 2px #888888;
    width: auto;
    height: auto;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 450px) and (max-width: 800px) {
    margin: 8.5px 8.5px 8.5px 8.5px;
    box-shadow: 1px 1px 2px 2px #888888;
    width: auto;
    height: auto;
    padding-bottom: 20px;
  }
`;

export const PrContainer = styled.div`
  display: flex;
  width: auto;
  height: auto;

  @media screen and (max-width: 450px) {
    width: auto;
    height: auto;
  }
  @media screen and (min-width: 450px) and (max-width: 800px) {
    width: auto;
    height: auto;
  }
`;

export const ProductImage = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 3px;
  pointer-events: auto;
  @media screen and (max-width: 450px) {
    width: 170px;
    height: 160px;
  }
  @media screen and (min-width: 450px) and (max-width: 800px) {
    width: 240px;
    height: 200px;
  }
`;

export const ProductName = styled.h2`
  color: white;
  font-size: 15px;
  outline: 1px solid;
  background: #eb392e;
  width: 100%;
  padding: 8px 5px;
  text-align: center;
  margin-top: -5px;

  @media screen and (max-width: 800px) {
    font-size: 10px;
    width: 100%;
  }
`;

export const RestaurantName = styled.h3`
  color: white;
  background: black;
  border-radius: 5px;
  font-size: 13px;
  margin-top: 5px;
  /* margin-left: 14px; */
  text-align: center;
  width: 90%;
  align-self: center;
  padding: 6px 6px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
    width: 90%;
  }
`;

export const Price = styled.h4`
  color: green;
  margin-top: 0px;
  margin-left: 20px;
  font-size: 25px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    margin-top: -5px;
  }
`;

export const Add = styled.button`
  width: 60%;
  height: auto;
  color: white;
  border-radius: 5px;
  pointer-events: auto;
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  background: black;
  border: none;
  cursor: pointer;
  padding: 12px 5px;
  outline: none;
  margin-right: auto;
  margin-left: auto;

  :hover {
    background: #eb392e;
  }
  @media screen and (max-width: 800px) {
    margin-top: 1px;
    padding: 6px 6px;
    width: 70%;
    font-size: 12px;
  }
`;

export const Quantity = styled.h4`
  color: orange;
  font-size: 15px;
  margin-top: -15px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;
