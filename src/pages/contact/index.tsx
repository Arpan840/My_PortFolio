import Contact from "../../components/Contact";
import style from "../../styles/Invisable.module.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"
const contact = () => {
  return (
    <div
    data-aos={"fade-left"}
    id="Contact"
      className={style.slideIn}
      style={{
        marginTop: "5%",
        background: "rgba(5,8,22,255)",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        height:'100vh'
      }}
    >
      <Contact></Contact>
    </div>
  );
};

export default contact;
