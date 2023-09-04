import Link from "next/link";
import React from "react";
import navItems from "../../jsonFiles/navItems.json";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg "
      style={{
        background:"rgba(5,8,22,255)",
        position: "sticky",
        width:'100%',
        top: "0",
        zIndex: "1000",
      }}
    >
      <div className="container-fluid">
        <p className="navbar-brand" style={{ color: "white" }}>
          <img
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "200px",
              marginLeft: "3%",
              marginRight: "3%",
            }}
            src="https://media.licdn.com/dms/image/D4D03AQGWZkuKXxVCqg/profile-displayphoto-shrink_800_800/0/1690717033455?e=1698883200&v=beta&t=J25DgQy6yuTqKnKPnfapOD6lMEdeAaPcdQFVyN8CYBA"
            alt="logo"
          />
          Full-Stack Developer
        </p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
         
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
          <div style={{ justifyContent: "center", display: "flex", width: "100%" }}>
            <ul className="navbar-nav">
              {navItems.map((i) => (
                <li className="nav-item" >
                  <Link href={i.Link}>
                    <button
                      className="btn  mx-3 text-light "
                      style={{ width: "100px"}}
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
