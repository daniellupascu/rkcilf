import React, { useState } from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import UserSearchForm from "./components/UserSearchForm/UserSearchForm";
import userReducer from "./store/reducers/user";
import flickrReducer from "./store/reducers/flickr";
import Button from "./components/Button/Button";
import FlickrSearchForm from "./components/FlickrSearchForm/FlickrSearchForm";

function App() {
  const [isSearchingGitUser, setIsSearchingGitUser] = useState(false);
  const rootReducer = combineReducers({
    user: userReducer,
    flickr: flickrReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <div className="App">
        <Button onClick={() => setIsSearchingGitUser(!isSearchingGitUser)}>
          {isSearchingGitUser ? "Search on Flickr" : "Search Github user"}
        </Button>
        {isSearchingGitUser ? <UserSearchForm /> : <FlickrSearchForm />}
      </div>
    </Provider>
  );
}

export default App;
