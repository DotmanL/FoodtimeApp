import styled from 'styled-components';
import { Gallery } from '@styled-icons/remix-fill/Gallery';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  /* background-color: orange; */
  height: auto;
  color: white;
  margin-top: 100px;
  @media screen and (max-width: 800px) {
    margin-top: 30px;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 2px solid #eb392e;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 50px 30px 20px 30px;
  @media screen and (max-width: 800px) {
    width: 95%;
    margin-top: 0px;
    padding: 10px 5px 10px 5px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 50%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const FormInput = styled.input`
  background: white;
  color: black;
  font-size: 15px;
  padding: 5px 10px 10px 10px;
  width: 40vw;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 22px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:focus {
    outline: 1px solid #eb392e;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    margin: 18px 0px;
  }
`;

export const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 150px;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    align-self: flex-start;
    margin-left: 15px;
  }
`;

export const CategorySelect = styled.select`
  width: 40vw;
  height: 40px;
  background-color: none;
  font-size: 15px;
  border: 1px solid black;
  border-radius: 5px;
  margin-top: 12px;
  padding: 5px 10px 10px 10px;
  &:focus {
    outline: 1px solid #eb392e;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const ImageUpload = styled.input`
  display: flex;
`;

export const PostPrev = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  padding: 20px 50px;
`;

export const ImagePreview = styled.img`
  flex-direction: row;
  justify-content: center;
  width: 150px;
  height: 150px;
`;

export const Gal = styled(Gallery)`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  color: black;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 75px;
    height: 75px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
  padding: 0px 150px;
  @media screen and (max-width: 800px) {
    justify-content: center;
    padding: 10px 0px;
  }
`;
