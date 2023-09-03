import React from "react";
import tilt from "react-tilt";
import { Variants, motion } from "framer-motion";
import services from "../../jsonFiles/services.json";

const About = () => {
  const fadeInVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.div>
        <p> Introduction</p>
        <h1>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeInVariants}
        style={{ color: "lightblue", fontSize: "17px", margin: "15px" }}
      >
        I'm a MERN stack developer with one year of experience at Klyth Private
        Limited. Proficient in TypeScript, JavaScript, HTML, and CSS, I
        specialize in creating visually appealing, user-friendly web
        applications. I excel in front-end development using React.js, Next.js,
        Material UI, and Bootstrap, while also handling back-end tasks with
        Node.js, Express.js, and MongoDB. I'm passionate about staying updated
        with industry trends and I'm committed to delivering high-quality web
        solutions.
      </motion.p>
      <div>
        {services.map((i) => (
          <div style={{ width: "200px", height: "250px" }}>
            <div style={{ width: "80%" }}><img style={{width:'80%'}} src={i.icon} alt="icon"></img></div>
            <div>{i.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
