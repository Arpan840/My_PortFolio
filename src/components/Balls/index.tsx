import React from "react";
import balls from "../../jsonFiles/balls.json";
import style from "../../styles/Invisable.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

const Balls = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      id="Technologies"
      style={{
        display: "flex",
        width: "100vw",
        flexWrap: "wrap",
        gap: "3%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {balls.map((i, index) => (
        <Tilt
          tiltMaxAngleX={30}
          tiltMaxAngleY={30}
          key={index}
          style={{
            width: "20%",
            height: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <img
            data-aos={"flip-right"}
            className={style.borderRadious}
            style={{ width: "50%", height: "50%", borderRadius: "100%" }}
            src={i.icon}
            alt="icon"
          />
          <h3 style={{ color: "white" }}>{i.name}</h3>
        </Tilt>
      ))}
    </div>
  );
};

export default Balls;
