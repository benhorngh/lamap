import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GoogleMapsProvider from "./mapsComponents/GoogleMapsProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <GoogleMapsProvider apiKey={"AIzaSyAU1-dHjuu_yOEtSwD86ACC_y_WcisumxI"}>
      <App />
    </GoogleMapsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
