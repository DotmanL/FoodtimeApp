import styled from 'styled-components';
import { Gallery } from '@styled-icons/remix-line/Gallery';
import { MinusCircle } from '@styled-icons/boxicons-regular/MinusCircle';

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
    align-items: center;
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
  margin-left: 50px;
  width: 800px;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    align-self: center;
    margin-left: 0px;
    margin-top: 20px;
    width: 90vw;
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  width: 100%;
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
  width: 160px;
  height: 160px;
  margin: 5px 3px;
  /* flex-wrap: wrap; */
`;

export const ImagePreviewButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: black;
  cursor: pointer;
  margin: 1px 5px;
  padding: 2px 5px;
`;

export const Gal = styled(Gallery)`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  color: #eb392e;
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

export const Remove = styled(MinusCircle)`
  width: 30px;
  height: 30px;
  color: #eb392e;
  margin: 0px 3px;
  cursor: pointer;
`;
