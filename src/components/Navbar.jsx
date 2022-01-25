import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">
        <img
          src="https://res.cloudinary.com/girengri/image/upload/v1643141217/automoviles/Captura_fprwvd.jpg"
          width="200"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/vehiculos">
              Lista De Carros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
