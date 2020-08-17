import React from "react";

import { ButtonStyled } from "./ButtonStyled";

const Button = ({ children, ...otherProps }) => {
  return <ButtonStyled {...otherProps}>{children}</ButtonStyled>;
};

export default Button;
