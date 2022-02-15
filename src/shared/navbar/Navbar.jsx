import React from "react";
import { NavLink } from "react-router-dom";
import Spanish from "../../assets/img/Spanish.png";
import English from "../../assets/img/English Flag.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_1">
          <img src="" alt="BlackBehaviour" />
        </div>
        <div className="navbar_2">
          <NavLink to="/home" className="navlink">
            HOME
          </NavLink>
          <NavLink to="/aboutus" className="navlink">
            ABOUT US
          </NavLink>
          <NavLink to="/services" className="navlink">
            SERVICES
          </NavLink>
          <NavLink to="/contact" className="navlink">
            CONTACT US
          </NavLink>
          <NavLink to="/homesp">
            {" "}
            <img src={Spanish} alt="Spanish" className="Spanish" />
          </NavLink>
          <NavLink to="/home">
            {" "}
            <img src={English} alt="English" className="English" />
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
