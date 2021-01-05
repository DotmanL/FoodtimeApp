import styled from 'styled-components';
import { ReactComponent as fullb } from './assets/meal.svg';
import { ArrowBackCircle } from '@styled-icons/ionicons-sharp/ArrowBackCircle';

export const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #e5e5e5;
  width: 100vw;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  background: white;
  margin-top: 0px;
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 800px) {
    display: flex;
    margin-top: 0px;
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  color: white;
  font-weight: 500;
  width: 90vw;
  margin-top: 80px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    width: 90vw;
    margin-top: 50px;
  }
`;
export const Back = styled(ArrowBackCircle)`
  width: 40px;
  height: 40px;
  color: black;

  :hover {
    color: #eb392e;
  }
  @media screen and (max-width: 800px) {
    width: 20px;
    height: 20px;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 2px solid red;
  border-right: 2px solid red;
  width: 55vw;
  height: auto;
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    border-left: 0px solid red;
    border-right: 0px solid red;
    justify-content: center;
    /* border-bottom: 2px solid #eb392e; */
    margin-bottom: 0px;
  }
`;

export const SliderDiv = styled.div`
  width: 55vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5px;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProductImage = styled.img`
  width: auto;
  height: auto;
  /* box-shadow: 2px 2px 2px 2px #888888; */
  margin-top: 15px;
  border-radius: 5px;
  @media screen and (max-width: 450px) {
    width: 95vw;
    height: auto;
  }
  @media screen and (min-width: 450px) and (max-width: 800px) {
    width: 95vw;
    height: auto;
  }
`;

export const ProductName = styled.h2`
  font-size: 18px;
  background: #eb392e;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  margin-top: 25px;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ProductsName = styled.h2`
  font-size: 18px;
  background: #eb392e;
  border-radius: 8px;
  color: white;
  padding: 10px 20px;
  margin-top: 50px;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25vw;
  @media screen and (max-width: 800px) {
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
    border-right: 0px solid black;
    height: auto;
    padding-bottom: 10px;
    justify-content: center;
    /* border-bottom: 2px solid #eb392e; */
  }
`;

export const ProductDescription = styled.h2`
  font-size: 18px;
  background-color: white;
  border: 1.5px solid black;
  border-radius: 8px;
  align-self: center;
  text-align: center;
  margin: 20px 20px 0px 20px;
  padding: 8px 10px;

  &:hover {
    background-color: #eb392e;
    color: white;
  }
  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 10px;
    padding: 5px 5px;
  }
`;

export const ProductRestaurant = styled.h3`
  font-size: 18px;
  text-align: center;
  background: black;
  color: white;
  border-radius: 4px;
  padding: 8px 8px;
  align-self: center;
  margin: 50px 9px 0px 9px;
  @media screen and (max-width: 800px) {
    font-size: 14px;
    padding: 5px 5px;
    margin: 20px 9px 0px 9px;
  }
`;

export const ProductPrice = styled.h4`
  font-style: bolder;
  font-size: 26px;
  text-align: center;
  align-self: center;
  margin: 15px 15px;
  color: green;
  @media screen and (max-width: 800px) {
    font-size: 25px;
    margin: 10px 15px;
  }
`;

export const Tray = styled(fullb)`
  width: 60px;
  height: 25px;
  @media screen and (max-width: 800px) {
    width: 30px;
    height: 18px;
  }
`;

export const Button = styled.button`
  width: auto;
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
  padding: 12px 10px;
  outline: none;
  margin-right: auto;
  margin-left: auto;

  :hover {
    background: #eb392e;
  }
  @media screen and (max-width: 800px) {
    margin-top: 1px;
    padding: 10px 10px;
    font-size: 14px;
  }
`;

export const Related = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  @media screen and (max-width: 800px) {
    height: auto;
    padding-bottom: 10px;
    width: 100vw;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const RelatedHeader = styled.h3`
  font-size: 25px;
  align-self: center;
  margin: 20px 9px 0px 5px;
  padding-top: 10px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
    margin-top: 10px;
  }
`;
