import LandingPage from "./pages/LandingPage";
import PagCrearCuenta from "./pages/PagCrearCuenta";
import PagLogin from "./pages/PagLogin";
import { Routes, Route, Navigate } from "react-router-dom";
import { UsuarioContext } from "./context/UsuarioProvider";
import { useContext } from "react";
import Principal from "./pages/Principal";
import PaginaSalas from "./pages/PaginaSalas";
import PagNuevaSala from "./pages/PagNuevaSala";
import PaginaReservarSala from "./pages/PaginaReservarSala";
import PaginaMisReservas from "./pages/PaginaMisReservas";

const App = () => {
  const { token, isAdmin } = useContext(UsuarioContext);

  return (
    <Routes>
      <Route
        path="/"
        element={token ? <Navigate to="/inicio" /> : <LandingPage />}
      />

      <Route
        path="/login"
        element={!token ? <PagLogin /> : <Navigate to="/inicio" />}
      />
      <Route
        path="/registro"
        element={!token ? <PagCrearCuenta /> : <Navigate to="/inicio" />}
      />

      <Route
        path="/inicio"
        element={token ? <Principal /> : <Navigate to="/" />}
      />

      <Route
        path="/sala"
        element={token ? <PaginaSalas /> : <Navigate to="/" />}
      />

      <Route
        path="/mis-reservas"
        element={token ? <PaginaMisReservas /> : <Navigate to="/" />}
      />

      <Route
        path="/sala/:id"
        element={token ? <PaginaReservarSala /> : <Navigate to="/" />}
      />

      <Route
        path="/new"
        element={
          token && isAdmin ? <PagNuevaSala /> : <Navigate to="/inicio" />
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
