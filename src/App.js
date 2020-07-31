import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import UserSearchForm from "./components/UserSearchForm/UserSearchForm";
import userReducer from "./store/reducers/user";

function App() {
  const rootReducer = combineReducers({
    user: userReducer,
  });
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <div className="App">
        <UserSearchForm />
      </div>
    </Provider>
  );
}

export default App;
