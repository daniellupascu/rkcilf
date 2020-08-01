import React from "react";
import PropTypes from "prop-types";

import {
  UserProfilePictureContainer,
  ImageStyled,
} from "./UserProfilePictureStyled";

const UserProfilePicture = ({ imageUrl }) => {
  return (
    <UserProfilePictureContainer>
      <ImageStyled src={imageUrl} />
    </UserProfilePictureContainer>
  );
};

export default UserProfilePicture;

UserProfilePicture.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
