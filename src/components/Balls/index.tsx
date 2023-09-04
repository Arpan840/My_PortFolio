import React from "react";
import balls from "../../jsonFiles/balls.json";
import style from "../../styles/Invisable.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Balls = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        flexWrap: "wrap",
        gap: "3%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {balls.map((i) => (
        <motion.div
          className="box"
          animate={
            inView
              ? {
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                }
              : {}
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 1,
            repeatDelay: 1,
          }}
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
            className={style.borderRadious}
            style={{ width: "50%", height: "50%", borderRadius: "100%" }}
            src={i.icon}
            alt="icon"
          />
          <h3 style={{ color: "white" }}>{i.name}</h3>
        </motion.div>
      ))}
    </div>
  );
};

export default Balls;
