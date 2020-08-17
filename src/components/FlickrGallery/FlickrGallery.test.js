import React from "react";
import renderer from "react-test-renderer";
import FlickrGallery from "./FlickrGallery";

describe("Test Flickr Gallery Component", () => {
  it("renders correctly", () => {
    const images = [{ src: "url.com" }, { src: "url.dk" }];
    const tree = renderer.create(<FlickrGallery images={images} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
