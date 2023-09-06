import React from "react";
import style from "../../styles/Invisable.module.css";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        width: "80vw",
      }}
    >
      <h1
        style={{ fontSize: "50px", color: "skyblue", fontFamily: "monospace" }}
      >
        Contact
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "80vw",
        }}
      ></div>
    </div>
  );
};

export default Contact;
