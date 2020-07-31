import React from "react";

import { UserInfoTileContainer, TileTitle, TileInfo } from "./UserInfoStyled";

const InfoTile = ({ title, value }) => {
  return (
    <UserInfoTileContainer>
      <TileTitle>{title}</TileTitle>
      <TileInfo>{value}</TileInfo>
    </UserInfoTileContainer>
  );
};

export default InfoTile;
