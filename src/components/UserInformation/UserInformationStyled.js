import styled from "styled-components/macro";

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 33px 66px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

export const UserName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 700;
  color: #585858;
`;

export const UsernameContainer = styled.div`
  margin-top: 5px;
  font-size: 18px;
  font-weight: 700;
  color: #585858;
`;

export const ProfileUrl = styled.a`
  text-decoration: none;
  font-size: 18px;
  font-weight: 300;
  color: #585858;

  &:hover {
    text-decoration: underline;
  }
`;

export const BioContainer = styled.div`
  margin-top: 25px;
  color: #585858;
  width: 500px;
`;

export const DetailTilesContainer = styled.div`
  margin-top: 25px;
  display: flex;
`;

export const BlogUrl = styled.a`
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;
