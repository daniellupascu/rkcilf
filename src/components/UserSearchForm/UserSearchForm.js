import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Input from "../Input/Input";
import { loadUser, clearUser } from "../../store/actions/user";
import { FormContainer } from "./UserSearchFormStyled";
import UserResult from "../UserResult/UserResult";

const UserSearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onInputValueChange = (e) => {
    setInputValue(e.target.value.trim());
    setIsTyping(true);
  };

  useEffect(() => {
    let timeoutId;
    try {
      timeoutId = setTimeout(async () => {
        if (inputValue) {
          await dispatch(loadUser(inputValue));
        } else {
          dispatch(clearUser());
        }
        setIsTyping(false);
      }, 1000);
    } catch {
      console.log("ERROR LOADING USER");
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, inputValue]);

  return (
    <>
      <FormContainer>
        <Input
          label={"Search Github User"}
          placeholder={"Type username"}
          onChange={onInputValueChange}
          value={inputValue}
        />
      </FormContainer>

      <UserResult
        user={user.user}
        isLoading={isTyping || user.isLoading}
        isNotFound={user.isNotFound}
      />
    </>
  );
};

export default UserSearchForm;
