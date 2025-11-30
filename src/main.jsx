import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SignIn from "./containers/Sign-in/sign";
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SignIn />
  </StrictMode>
);
