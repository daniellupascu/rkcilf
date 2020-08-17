import xmlConverter from "xml-js";

export const FETCH_FLICKR_START = "FETCH_FLICKR_START";
export const FETCH_FLICKR_FAIL = "FETCH_FLICKR_FAIL";
export const FLICKR_NOT_FOUND = "FLICKR_NOT_FOUND";
export const FLICKR_SET_DATA = "FLICKR_SET_DATA";

const doCORSRequest = async (tags = null) => {
  const corsApiUrl = "https://cors-anywhere.herokuapp.com/";
  return new Promise((resolve, reject) => {
    const x = new XMLHttpRequest();
    x.open(
      "GET",
      corsApiUrl +
        `https://www.flickr.com/services/feeds/photos_public.gne${
          tags ? `?tags=${tags}` : ""
        }`
    );
    x.onload = x.onerror = function () {
      resolve(x.response);
    };
    x.send();
  });
};

const getImagesFromData = (data) =>
  data.feed.entry.map((image) => ({
    ...image,
    src: image.link.find((link) => link._attributes.type.includes("image"))
      ?._attributes?.href,
  }));

export const loadInitialImages = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FLICKR_START });
    try {
      const XMLResponse = await doCORSRequest();

      // convert XML to JSON
      const response = xmlConverter.xml2json(XMLResponse, {
        compact: true,
        spaces: 4,
      });
      const data = JSON.parse(response);

      if (data && data.feed && data.feed.entry) {
        // create an array with all the images received and pull the link to it in a separate property
        const images = getImagesFromData(data);
        dispatch({ type: FLICKR_SET_DATA, images });
      } else {
        dispatch({ type: FLICKR_NOT_FOUND });
      }
    } catch (e) {
      dispatch({ type: FETCH_FLICKR_FAIL });
      console.log("failed loading images", e);
    }
  };
};

export const loadTaggedImages = (searchCriteria) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FLICKR_START });
    try {
      const tags = searchCriteria.trim().replace(" ", ",");
      const XMLResponse = await doCORSRequest(tags);

      // convert XML to JSON
      const response = xmlConverter.xml2json(XMLResponse, {
        compact: true,
        spaces: 4,
      });
      const data = JSON.parse(response);
      // create an array with all the images received and pull the link to it in a separate property
      if (data && data.feed && data.feed.entry) {
        const images = getImagesFromData(data);
        dispatch({ type: FLICKR_SET_DATA, images });
      } else {
        dispatch({ type: FLICKR_NOT_FOUND });
      }
    } catch (e) {
      dispatch({ type: FETCH_FLICKR_FAIL });
      console.log("failed loading images", e);
    }
  };
};
