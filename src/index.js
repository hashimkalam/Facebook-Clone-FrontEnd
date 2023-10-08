import React from "react";
import ReactDOM from "react-dom/client"; // This import is for the createRoot method
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app within the root
root.render(
  <React.StrictMode>
    {/* Wrap the App component with StateProvider */}
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
