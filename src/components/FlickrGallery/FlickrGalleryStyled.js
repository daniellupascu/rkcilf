import styled from "styled-components/macro";

export const FlickrGalleryContainer = styled.div`
  margin: 20px;
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(200px, 1fr))
  grid-gap: 5px;
`;

export const FlickrImageContainer = styled.figure``;

export const FlickrImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;

  &:hover {
    transform: scale(1.5);
    transition: transform 0.2s;
    box-shaddow: 0px 24px 38px 3px rgba(0, 0, 0, 0.5),
      0px 9px 46px 8px rgba(0, 0, 0, 0.5), 0px 11px 15px -7px rgba(0, 0, 0, 0.5);
  }
`;
