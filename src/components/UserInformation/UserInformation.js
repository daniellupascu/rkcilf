import React from "react";

import { UserInfoContainer } from "./UserInformationStyled";

const UserInformation = ({ user }) => {
  console.log({ user });
  return <UserInfoContainer>{user.id}</UserInfoContainer>;
};

export default UserInformation;
