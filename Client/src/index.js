import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./Contextfiles/StateProvider";
import {initialState} from "./Contextfiles/initialState";
import reducer from "./Contextfiles/reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);