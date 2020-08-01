import React from "react";
import renderer from "react-test-renderer";
import UserResult from "./UserResult";

describe("Test UserResult Component", () => {
  it("renders correctly", () => {
    const user = {
      name: "Frank Johnson",
      html_url: "https://github.com/",
      blog: "https://github.com/",
      bio: "users bio",
      location: "Arizona",
      public_repos: 10,
      public_gists: 0,
      avatar_url:
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    };
    const tree = renderer
      .create(<UserResult user={user} isLoading={false} isNotFound={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly the loading state", () => {
    const tree = renderer
      .create(<UserResult user={{}} isLoading={true} isNotFound={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly the not found state", () => {
    const tree = renderer
      .create(<UserResult user={{}} isLoading={false} isNotFound={true} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
