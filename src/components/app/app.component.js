import React from "react";

import Header from "../header/header.component";
import Sidebar from "../sidebar/sidebar.component";

import "../../common/styles";


const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
