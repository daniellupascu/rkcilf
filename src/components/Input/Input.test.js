import React from "react";
import renderer from "react-test-renderer";
import Input from "./Input";

describe("Test Input Component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Input label="Name" placeolder="Name" onChange={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
