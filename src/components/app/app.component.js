import React from "react";

import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";
import Feed from "../feed/feed.component";

import "../../common/styles";
import "./app.component.css";


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed/>
      </div>
    </div>
  );
};

export default App;
