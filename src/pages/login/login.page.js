import { Button } from "@material-ui/core";
import React from "react";

import { auth, provider } from "../../firebase";
import { actionTypes } from "../../store/reducers/login.reducer";
import { useStateValue } from "../../store/state.provider";

import "./login.page.css";

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <img
          src="https://marka-logo.com/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
