import React, { useState, useEffect } from "react";

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
