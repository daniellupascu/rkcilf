import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.div`
  margin: 5px;
  font-size: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 350px;
  margin: 5px;
  position: relative;
`;

export const InputStyled = styled.input`
  padding: 0 20px 0 5px;
  align-self: stretch;
  width: 100%;

  border: 1px solid #cecece;
  border-radius: 5px;

  &:focus {
    outline-color: #c179b9;
  }
`;

export const ExpandIconContainer = styled.div`
  right: 8px;
  position: absolute;
  cursor: pointer;
`;
