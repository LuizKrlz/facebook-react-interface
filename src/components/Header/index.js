import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { NavBar, Menu } from "./style";

import logo from "../../assets/logo.png";

const Header = () => (
  <NavBar>
    <img src={logo} alt="Facebook" />
    <span />
    <Menu>
      <span>Meu Perfil</span>
      <FaUserCircle />
    </Menu>
  </NavBar>
);

export default Header;
