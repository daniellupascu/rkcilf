import styled from "styled-components/macro";

export const FlickrGalleryContainer = styled.div`
  margin: 20px;

  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr))
  grid-gap: 5px;
`;

export const FlickrImageContainer = styled.figure``;

export const FlickrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
