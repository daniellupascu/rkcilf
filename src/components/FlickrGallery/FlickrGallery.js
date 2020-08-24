import React from "react";
import PropTypes from "prop-types";

import {
  FlickrGalleryContainer,
  FlickrImageContainer,
  FlickrImage,
  ImageInfo,
  ImageDetail,
} from "./FlickrGalleryStyled";

const FlickrGallery = ({ images }) => {
  return (
    <FlickrGalleryContainer>
      {images.map((image, i) => (
        <FlickrImageContainer key={i}>
          <FlickrImage src={image.src} />
          <ImageInfo>
            <ImageDetail>{image.title._text}</ImageDetail>
            <ImageDetail>credits: {image.author.name._text}</ImageDetail>
          </ImageInfo>
        </FlickrImageContainer>
      ))}
    </FlickrGalleryContainer>
  );
};

FlickrGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default FlickrGallery;
