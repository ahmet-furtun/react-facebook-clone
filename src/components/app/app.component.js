import React from "react";

import Home from "../../pages/home/home.page";
import Login from "../../pages/login/login.page";

import "../../common/styles";
import "./app.component.css";


const App = () => {
  const user = "null";
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Home/>
        </>
      )}
    </div>
  );
};

export default App;
