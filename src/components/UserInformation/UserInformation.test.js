import React from "react";
import renderer from "react-test-renderer";
import UserInformation from "./UserInformation";

describe("Test UserInformation Component", () => {
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

    const tree = renderer.create(<UserInformation user={user} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Test UserInformation Component with missing fields", () => {
    const user = {
      name: "Frank Johnson",
      html_url: "https://github.com/",
      location: "Arizona",
      public_repos: 10,
      public_gists: 0,
      avatar_url:
        "https://github.githubassets.com/images/modules/logos_page/Octocat.png",
    };

    const tree = renderer.create(<UserInformation user={user} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
