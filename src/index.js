import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.component";

import { StateProvider } from "./store/state.provider";
import reducer, { initialState } from "./store/reducers/login.reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
