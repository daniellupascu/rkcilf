import React from "react";
import renderer from "react-test-renderer";
import FlickrResult from "./FlickrResult";

describe("Test FlickrResult Component", () => {
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
    const tree = renderer
      .create(
        <FlickrResult images={images} isLoading={false} isNotFound={false} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly the loading state", () => {
    const tree = renderer
      .create(<FlickrResult images={[]} isLoading={true} isNotFound={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly the not found state", () => {
    const tree = renderer
      .create(<FlickrResult images={[]} isLoading={false} isNotFound={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
