import Contact from "../../components/Contact";
import style from "../../styles/Invisable.module.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const contact = () => {
  return (
    <div
      data-aos={"fade-left"}
      id="Contact"
      style={{
        background: "rgba(5,8,22,255)",

        display: "flex",
        justifyContent: "center",
        margin: "auto",
       
      }}
    >
      <Contact></Contact>
    </div>
  );
};

export default contact;
