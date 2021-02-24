import React from "react";

import Home from "../../pages/home/home.page";
import Login from "../../pages/login/login.page";

import "../../common/styles";
import "./app.component.css";

import { useStateValue } from "../../store/state.provider";

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return <div className="app">{!user ? <Login /> : <Home />}</div>;
};

export default App;
