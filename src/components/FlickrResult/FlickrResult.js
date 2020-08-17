import React from "react";
import PropTypes from "prop-types";

import Loader from "../Loader/Loader";
import { LoaderContainer } from "./FlickrResultStyled";
import FlickrGallery from "../FlickrGallery/FlickrGallery";

const FlickrResult = ({ isLoading, isNotFound, images }) => {
  return (
    <>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : isNotFound || images.length === 0 ? (
        <LoaderContainer>no images found</LoaderContainer>
      ) : images.length > 0 ? (
        <FlickrGallery images={images} />
      ) : null}
    </>
  );
};

FlickrResult.propTypes = {
  isLoading: PropTypes.bool,
  isNotFound: PropTypes.bool,
  images: PropTypes.arrayOf(PropTypes.object),
};

export default FlickrResult;
