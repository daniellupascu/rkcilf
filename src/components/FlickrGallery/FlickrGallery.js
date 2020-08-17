import React from "react";
import PropTypes from "prop-types";

import {
  FlickrGalleryContainer,
  FlickrImageContainer,
  FlickrImage,
} from "./FlickrGalleryStyled";

const FlickrGallery = ({ images }) => {
  return (
    <FlickrGalleryContainer>
      {images.map((image, i) => (
        <FlickrImageContainer key={i}>
          <FlickrImage src={image.src} />
        </FlickrImageContainer>
      ))}
    </FlickrGalleryContainer>
  );
};

FlickrGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default FlickrGallery;
