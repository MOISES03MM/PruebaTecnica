import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import UsuarioProvider from "./context/UsuarioProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <App />
      </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>,
);
