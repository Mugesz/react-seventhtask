import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky-top mb-2 bg-secondary">
      <div className="container px-4 px-lg-5">
        <Link className="btn" to="/">
          <h3>Dashboard</h3>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
        <li className="nav-item">
              <Link className="btn" to={"/createbooks"}>
               <h4>Create Books</h4> 
              </Link>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
