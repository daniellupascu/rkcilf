import React from "react";
import renderer from "react-test-renderer";
import FlickrGallery from "./FlickrGallery";

describe("Test Flickr Gallery Component", () => {
  it("renders correctly", () => {
    const images = [
      {
        src: "url.com",
        title: { _text: "random Image" },
        author: { name: { _text: "Random User" } },
      },
      {
        src: "url.dk",
        title: { _text: "random Image" },
        author: { name: { _text: "Random User" } },
      },
    ];
    const tree = renderer.create(<FlickrGallery images={images} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
