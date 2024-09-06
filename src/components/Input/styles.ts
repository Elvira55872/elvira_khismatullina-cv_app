import styled from "@emotion/styled";

export const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 5px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  &::placeholder {
    color: gray;
  }
`;

export const LabelStyled = styled.label``;
