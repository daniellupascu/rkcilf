import React from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import UserInformation from "../UserInformation/UserInformation";
import { LoaderContainer } from "./UserResultStyled";

const UserResult = ({ isLoading, isNotFound, user }) => {
  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : isNotFound ? (
        <LoaderContainer>user not found</LoaderContainer>
      ) : user.id ? (
        <UserInformation user={user} />
      ) : null}
    </>
  );
};

export default UserResult;

UserResult.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isNotFound: PropTypes.bool.isRequired,
  user: PropTypes.object,
};
