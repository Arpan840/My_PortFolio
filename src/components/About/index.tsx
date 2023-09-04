import { Variants, motion, stagger } from "framer-motion";
import services from "../../jsonFiles/services.json";
import style from "../../styles/Invisable.module.css";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "rgba(5,8,22,255)",
        height: "100%",
        padding: "0%",
        width:'100vw',
        textAlign:'center',
        
      }}
    >
      <p style={{ color: "white", width:'100vw', fontSize:'30px' }}> Introduction</p>
      <h1
        style={{
          fontFamily: "monospace",
          fontWeight: "bolder",
          color: "#915eff",
          width: "100vw",
          fontSize:'60px',
          textAlign:'center'
        }}
      >
        Overview.
      </h1>

      <motion.p
        style={{
          color: "lightblue",
          fontSize: "17px",
          margin: "15px",
          width: "60vw",
        }}
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
      <motion.section
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
          gap: "10%",
          marginTop: "5%",
          flexWrap: "wrap",
        }}
      >
        {services.map((i, index) => (
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={30}
            tiltMaxAngleY={30}
            perspective={2000}
            glareColor={"rgb(255,0,0)"}
            className={style.borderRadious}
            key={index}
            style={{
              width: "200px",
              alignItems: "center",
              height: "250px",
              display: "flex",
              margin: "2%",
              justifyContent: "center",
              flexDirection: "column",
              backgroundColor: "rgb(49 46 129)",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ width: "80%" }} src={i.icon} alt="icon"></img>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
                fontSize: "16px",
                color: "white",
              }}
            >
              {i.title}
            </div>
          </Tilt>
        ))}
      </motion.section>
    </div>
  );
};

export default About;
