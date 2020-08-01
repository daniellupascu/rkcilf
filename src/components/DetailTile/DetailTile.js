import React from "react";
import PropTypes from "prop-types";

import {
  DetailTileContainer,
  DetailTileLabel,
  DetailTileContent,
} from "./DetailTileStyled";

const DetailTile = ({ label, children }) => {
  return (
    <DetailTileContainer>
      <DetailTileLabel>{label}</DetailTileLabel>
      <DetailTileContent>{children}</DetailTileContent>
    </DetailTileContainer>
  );
};

export default DetailTile;

DetailTile.propTypes = {
  label: PropTypes.string,
};
