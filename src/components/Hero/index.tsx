import React from "react";
import heroBackground from "../../assets/herobg.png";
import Image from "next/image";
import styles from "../../styles/Invisable.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Image
        src={heroBackground}
        alt={"background"}
        style={{ height: "100vh", width: "100vw", margin: "auto" }}
      ></Image>
      <div
        className={styles.center}
        style={{
          position: "absolute",
          top: "50%",
          left: "35%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <div
            style={{
              borderRadius: "100%",
              background: "#915eff",
              height: "20px",
              width: "20px",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              height: "300px",
              width: "5px",
              marginLeft: "27.5px",
              marginTop: "-20px",
              background: "linear-gradient(to bottom, #915eff, black)",
            }}
          ></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "50px",
                marginTop: "25px",
              }}
            >
              Hi! I'm{" "}
              <span
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  color: "#915eff",
                }}
              >
                Arpan
              </span>{" "}
            </h1>
          </div>
          <p style={{ color: "white" }}>
            I'm a passionate and highly skilled MERN (MongoDB, Express.js,
            React, Node.js) stack developer with a strong background in creating
            web applications and dynamic user experiences. With a deep
            understanding of both front-end and back-end technologies, I bring
            your digital ideas to life by crafting robust, scalable, and
            efficient solutions.
          </p>
        </div>
        <div className={styles.invisable}>
          <img
            style={{ height: "-100%", width: "300%" }}
            src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
            alt="hero image"
          />
        </div>
      </div>
      <div
        className={styles.more}
        style={{
          height: "200px",
          position: "absolute",
          marginTop: "0%",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href={"/about"} className={styles.centerMore}>
          <div
            className={styles.more}
            style={{
              border: "3px solid white",
              height: "70px",
              width: "40px",
              borderRadius: "20px",
              transform: "translate(40%, -50%)",
              position: "absolute",
              margin: "auto",
              marginTop: "10%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              style={{
                width: "20px",
                height: "20px",
                border: "2px solid white",
                backgroundColor: "white",
                borderRadius: "100%",
                padding: "10px",
                margin: "10px",
              }}
            ></motion.div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
