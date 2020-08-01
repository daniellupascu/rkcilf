import React from "react";
import PropTypes from "prop-types";

import {
  UserInfoContainer,
  UserName,
  ProfileUrl,
  UsernameContainer,
  DetailsContainer,
  BioContainer,
  DetailTilesContainer,
  BlogUrl,
} from "./UserInformationStyled";
import UserProfilePicture from "../UserProfilePicture/UserProfilePicture";
import DetailTile from "../DetailTile/DetailTile";

const UserInformation = ({ user }) => {
  return (
    <UserInfoContainer>
      <UserProfilePicture imageUrl={user.avatar_url} />
      <DetailsContainer>
        {user.name && <UserName>{user.name}</UserName>}
        <UsernameContainer>
          <ProfileUrl href={user.html_url}>{user.login}</ProfileUrl>
        </UsernameContainer>
        {user.bio && <BioContainer>{user.bio}</BioContainer>}
        <DetailTilesContainer>
          <DetailTile label={"Following"}>{user.following}</DetailTile>
          <DetailTile label={"Followers"}>{user.followers}</DetailTile>
        </DetailTilesContainer>

        <DetailTilesContainer>
          {user.location && (
            <DetailTile label={"Location"}>{user.location}</DetailTile>
          )}
          {user.blog && (
            <DetailTile label={"Blog"}>
              <BlogUrl href={user.blog}>{user.blog}</BlogUrl>
            </DetailTile>
          )}
        </DetailTilesContainer>

        <DetailTilesContainer>
          <DetailTile label={"Repos"}>{user.public_repos}</DetailTile>
          <DetailTile label={"Gitsts"}>{user.public_gists}</DetailTile>
        </DetailTilesContainer>
      </DetailsContainer>
    </UserInfoContainer>
  );
};

export default UserInformation;

UserInformation.propTypes = {
  user: PropTypes.object.isRequired,
};
