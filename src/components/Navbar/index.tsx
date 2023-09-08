import React, { useState } from "react";
import navItems from "../../jsonFiles/navItems.json";
import { Link } from "react-scroll";
import { FaFileCode } from "react-icons/fa";

const Navbar = () => {
  const [location, setLocation] = useState("Home");
  const handelClick = (name: string) => {
    setLocation(name);
  };
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        background: "rgba(5,8,22,255)",
        position: "sticky",
        width: "100%",
        top: "0",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid" style={{ display: "flex" }}>
        <div
          className="navbar-brand"
          style={{ color: "white", fontSize: "30px", marginLeft:'40px' }}
        >
          <FaFileCode />

          <i style={{ marginLeft: "10px", fontSize: "25px", fontFamily:'monospaced ' }}>Arpan Das</i>

          <p style={{ color: "white", fontSize: "15px" }}>
            {" "}
            MERN STACK DEVELOPER
          </p>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
            style={{ color: "white" }}
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <div
            style={{ justifyContent: "center", display: "flex", width: "100%" }}
          >
            <ul className="navbar-nav">
              {navItems.map((i) => (
                <li key={i.name} className="nav-item">
                  <Link
                    smooth={true}
                    spy={true}
                    offset={50}
                    duration={50}
                    to={i.name}
                  >
                    <button
                      className="btn  mx-3  "
                      style={{
                        border: `${
                          location === i.name ? "1px solid lightBlue" : ""
                        }`,
                        background: `${location === i.name ? "lightBlue" : ""}`,
                        color: `${location === i.name ? "blue" : "lightBlue"}`,
                      }}
                      onClick={() => handelClick(i.name)}
                    >
                      {i.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
