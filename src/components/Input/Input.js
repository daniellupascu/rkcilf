import React from "react";
import PropTypes from "prop-types";

import {
  InputWrapper,
  Label,
  InputContainer,
  InputStyled,
} from "./InputStyled";

const Input = ({ value, label, placeholder, onChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputContainer>
        <InputStyled
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </InputContainer>
    </InputWrapper>
  );
};

export default Input;

Input.protoTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
