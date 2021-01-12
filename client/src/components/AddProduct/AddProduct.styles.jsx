import styled from 'styled-components';
import { ReactComponent as Gallery } from './assets/galleryicon.svg';
import { GalleryUpload } from '@styled-icons/remix-fill/GalleryUpload';
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
    margin-top: 15px;
    justify-content: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 0px solid #eb392e;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 30px;
  border-radius: 8px;
  padding: 30px 70px 30px 70px;
  @media screen and (max-width: 800px) {
    width: 95%;
    margin-top: 0px;
    border: 0px solid #eb392e;
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
  flex: 2;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    align-self: center;
    margin-left: 0px;
    margin-top: 2px;
    width: 90vw;
  }
`;

export const ImagePreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  align-self: center;
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
  width: 180px;
  height: 180px;
  margin: 5px 3px 0px 2px;
  /* @media screen and (max-width: 800px) {
    width: 120px;
    height: 120px;
  } */
`;

export const PreviewLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImagePreviewButtons = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  justify-self: center;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  outline: none;
  cursor: pointer;
  padding: 2px 32px;
  margin: 2px 3px;
  width: 180px;
  height: 35px;
`;

export const Remove = styled(MinusCircle)`
  width: 25px;
  height: 25px;
  color: #eb392e;
  margin-left: 10px;
  cursor: pointer;
`;

export const Gal = styled(Gallery)`
  width: 150px;
  height: 150px;
  margin-top: 10px;
  color: #eb392e;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    width: 75px;
    height: 75px;
  }
`;

export const AddMore = styled.div`
  width: auto;
  height: auto;
  padding: 2px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Add = styled(GalleryUpload)`
  width: 180px;
  height: 180px;
  margin-top: 15px;
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
  justify-content: center;
  @media screen and (max-width: 800px) {
    justify-content: center;
    padding: 10px 0px;
  }
`;
