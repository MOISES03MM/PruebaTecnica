import React, { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioProvider";
import NavbarPrivado from "./NavbarPrivado";
import NavbarPublico from "./NavbarPublico";

const Navbar = () => {
  const { token, usuario, cerrarSesion } = useContext(UsuarioContext);

  return token ? (
    <NavbarPrivado usuario={usuario} cerrarSesion={cerrarSesion} />
  ) : (
    <NavbarPublico />
  );
};

export default Navbar;