import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center p-3">
        <div className="text-light">LOGO</div>
        <div className="links d-flex gap-4 fs-4">
          <Link className="text-light" to="/">
            Home
          </Link>
          <Link className="text-light" to="/about">
            About
          </Link>
          <Link className="text-light" to="/skills">
            Skills
          </Link>
          <Link className="text-light" to="/projects">
            Projects
          </Link>
          <Link className="text-light" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
      <div>
        <Sidebar />
      </div>
    </>
  );
};

export default Navbar;
