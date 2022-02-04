import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthProvider } from "./Components/Context/UserContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>,
  rootElement
);
