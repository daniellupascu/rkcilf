import React, { useState, useEffect, useRef } from "react";

import {
  FlickrSearchFormStyled,
  FormContainer,
} from "./FlickrSearchFormStyled";
import Input from "../Input/Input";
import FlickrResult from "../FlickrResult/FlickrResult";
import { useSelector, useDispatch } from "react-redux";
import {
  loadInitialImages,
  loadTaggedImages,
} from "../../store/actions/flickr";

const FlickrSearchForm = () => {
  const didMountRef = useRef(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const flickr = useSelector((state) => state.flickr);
  const { images } = flickr;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialImages());
  }, [dispatch]);

  const onInputValueChange = (e) => {
    setInputValue(e.target.value);
    setIsTyping(true);
  };

  useEffect(() => {
    let timeoutId;
    if (didMountRef.current) {
      try {
        timeoutId = setTimeout(async () => {
          if (inputValue) {
            await dispatch(loadTaggedImages(inputValue));
          } else {
            dispatch(loadInitialImages());
          }
          setIsTyping(false);
        }, 1000);
      } catch {
        console.log("ERROR LOADING IMAGES");
      }
    } else {
      didMountRef.current = true;
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, inputValue]);

  return (
    <FlickrSearchFormStyled>
      <FormContainer>
        <Input
          label={"Search Flickr Images"}
          placeholder={"Type tags"}
          onChange={onInputValueChange}
          value={inputValue}
        />
      </FormContainer>
      <FlickrResult
        images={images}
        isLoading={isTyping || flickr.isLoading}
        isNotFound={flickr.isNotFound}
      />
    </FlickrSearchFormStyled>
  );
};

export default FlickrSearchForm;
