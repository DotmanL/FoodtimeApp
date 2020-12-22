import styled, { css } from 'styled-components';

const subColor = 'black';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -30px;
  font-size: 16px;
  font-weight: 750;
  color: ${mainColor};
  @media screen and (max-width: 800px) {
    font-size: 15px;
    font-weight: 550;
    top: -23px;
  }
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 7px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  color: ${subColor};
  font-size: 15px;
  padding: 5px 10px 10px 10px;
  width: 40vw;
  height: 40px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 42px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  &:focus {
    outline: 1px solid #eb392e;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
  @media screen and (max-width: 800px) {
    width: 75vw;
    margin: 30px 0;
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
