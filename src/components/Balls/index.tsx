import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

import balls from "../../jsonFiles/balls.json";
import styles from "../../styles/Balls.module.css";

const Balls = () => {
  return (
    <section id="Technologies" className={styles.wrapper}>
      <div className={styles.stars}></div>
      <div className={styles.vortex}></div>
      <section className={styles.techSection}></section>
      {balls.map((skill, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.08,
          }}
          viewport={{ once: true }}
        >
          <Tilt
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1200}
            className={styles.tilt}
          >
            <div className={styles.card}>
              <img
                src={skill.icon}
                alt={skill.name}
                className={styles.icon}
                loading="lazy"
              />

              <span className={styles.name}>{skill.name}</span>

              {/* Top skills badge */}
              {index < 4 && <span className={styles.topBadge}>Core</span>}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </section>
  );
};

export default Balls;
