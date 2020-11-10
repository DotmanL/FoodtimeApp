import styled from 'styled-components';
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';
import { PlusCircle } from '@styled-icons/evaicons-solid/PlusCircle';
import { Restaurant } from '@styled-icons/material/Restaurant';
import { Delete } from '@styled-icons/material/Delete';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    margin: 4px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px 20px;
  border-bottom: 1px solid #eb392e;
  /* background: orange; */
  width: 96%;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const RemoveDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -22px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Remove = styled(Delete)`
  width: 30px;
  height: 30px;
  color: #eb392e;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 55%;
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
export const RestaurantName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 9px;
  font-size: 13px;
  width: 100px;
  height: 80px;
  text-align: center;
  margin-top: 10px;
  color: white;
  background: black;
`;

export const RestaurantImage = styled(Restaurant)`
  width: 30px;
  height: 30px;
  margin-top: 10px;
`;

export const Name = styled.h3`
  font-size: 21px;
  color: black;
  margin-top: -10px;
`;

export const Desc = styled.h3`
  font-size: 18px;
  color: black;
  margin-top: -20px;
  width: 73%;
`;

export const Image = styled.img`
  width: 100px;
  height: 80px;
`;

export const NPContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 69%;
  margin-top: -10px;
  padding: 0px 40px;
`;

export const SubT = styled.div`
  margin-right: -60px;
  font-size: 20px;
`;

export const Price = styled.h4`
  font-size: 22px;
  margin-right: -25px;
  text-transform: capitalize;
  text-align: center;
  color: #55a630;
`;

export const Qdiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 3px solid #eb392e;
  background: white;
  width: auto;
  height: auto;
  padding: 2px;
`;

export const Quantity = styled.h4`
  font-size: 25px;
  margin-left: -140px;
  text-transform: capitalize;
  text-align: center;
  color: #55a630;
`;

export const Minus = styled(MinusCircle)`
  width: 30px;
  height: 30px;
  color: #eb392e;
  margin: 0px 9px;
  cursor: pointer;
`;

export const MinusDisabled = styled(MinusCircle)`
  width: 30px;
  height: 30px;
  margin: 0px 9px;
  color: gray;
  opacity: 0.4;
`;

export const Plus = styled(PlusCircle)`
  width: 30px;
  margin: 0px 9px;
  height: 30px;
  color: #eb392e;
  cursor: pointer;
`;

export const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    padding: 2px 10px;
    justify-content: center;
    border: 1px solid #eb392e;
    border-radius: 4px;
    background: white;
  }
`;

export const MobileImageContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    padding: 5px;
    border-bottom: 1px solid #eb392e;
  }
`;

export const MobileDescContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
`;

export const MobileName = styled.h3`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    margin-top: 2px;
  }
`;

export const MobileDesc = styled.h3`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    margin-top: -20px;
  }
`;

export const MobileImage = styled.img`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 100px;
    height: 80px;
    margin-top: 5px;
  }
`;

export const MobileNPContainer = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    margin-top: -5px;
    padding: 0px 10px;
  }
`;

export const MobilePrice = styled.h4`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    color: #55a630;
    margin-top: -12px;
    font-size: 20px;
  }
`;

export const MobileRestaurantName = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 3px;
    color: white;
    font-size: 13px;
    background: black;
  }
`;

export const MobileRestaurantImage = styled(Restaurant)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 25px;
    height: 25px;
    color: white;
    margin-top: 5px;
  }
`;

export const MobileImageDiv = styled.div`
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const MobileQuantity = styled.h4`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 65px;
    color: #55a630;
    margin: 7px;
    font-size: 22px;
  }
`;

export const MobileQdiv = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: -15px;
    height: 40px;
    align-items: center;
    border: 1.5px solid #eb392e;
    padding: 1px 5px;
  }
`;

export const MobileRemoveDiv = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 50px;
    padding: 2px 5px;
  }
`;

export const MobileRemove = styled(Delete)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 30px;
    height: 30px;
    color: #eb392e;
    cursor: pointer;
  }
`;

export const MobileMinus = styled(MinusCircle)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 30px;
    height: 30px;
    color: #eb392e;
    margin: 0px 9px;
    cursor: pointer;
  }
`;

export const MobileMinusDisabled = styled(MinusCircle)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 30px;
    margin: 0px 6px 0px 0px;
    height: 30px;
    color: gray;
    opacity: 0.4;
  }
`;

export const MobilePlus = styled(PlusCircle)`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 30px;
    height: 30px;
    margin: 0px 9px;
    color: #eb392e;
    cursor: pointer;
  }
`;
