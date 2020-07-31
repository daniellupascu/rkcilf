export const SET_USER = "SET_USER";
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_FAIL = "FETCH_USER_FAIL";
export const FETCH_USER_NOT_FOUND = "FETCH_USER_NOT_FOUND";
export const CLEAR_USER = "CLEAR_USER";

export const loadUser = (username) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_START });
    try {
      const resposnseString = await fetch(
        `https://api.github.com/users/${username}`
      );
      const data = await resposnseString.json();
      if (data) {
        if (data.message === "Not Found") {
          dispatch({ type: FETCH_USER_NOT_FOUND });
        } else {
          dispatch({ type: SET_USER, user: data });
        }
      }
    } catch (e) {
      console.log("failed fetching users", e);
      dispatch({ type: FETCH_USER_FAIL });
    }
  };
};

export const clearUser = () => {
  return { type: CLEAR_USER };
};
