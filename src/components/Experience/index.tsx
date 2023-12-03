import { motion, useInView } from "framer-motion";
import style from "../../styles/Invisable.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Balls from "../Balls";

const Experience = () => {
  return (
    <>
      <div
        id="Experience"
        className={style.experience}
        style={{
          color: "white",
          height: "100%",
          padding: "5%",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            width: "100vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p style={{ color: "white", fontSize: "30px", textAlign: "center" }}>
            {" "}
            What I have done so far.
          </p>
          <h1
            style={{
              fontFamily: "monospace",
              fontWeight: "bolder",
              color: "#915eff",
              textAlign: "center",
              fontSize: "50px",
            }}
          >
            Work Expirence.
          </h1>
        </motion.div>
        <div
          className="experience"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <div
            className={style.borderRadious}
            style={{
              width: "25rem",
              padding: "20px",
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin:"50px"
            }}
          >
            <img
              style={{ width: "60%", height: "50%" }}
              className="card-img-top"
              src={
                "https://media.licdn.com/dms/image/C4D0BAQH1CuGtEo8Ezg/company-logo_200_200/0/1631350343181?e=1709769600&v=beta&t=ooF3YPZFuMBiktk1f538HraBTcPUgDT1Ia-1AQ1VOSU"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "skyblue", fontSize: "30px" }}
              >
                NextPage IT Solutions
              </h5>
              <p className="card-text">
                As a Senior Frontend Developer at nextPage IT Solutions, I am at the forefront of transforming digital landscapes. Collaborating with a talented team, I lead the development of cutting-edge user interfaces, ensuring seamless integration and optimal performance. My role involves translating design concepts into pixel-perfect, responsive applications, utilizing my expertise in modern frontend frameworks like React, Angular, or Vue.js.

                Working in an innovative environment, I contribute to the company's commitment to excellence in coding, testing, and version control. Beyond crafting code, I mentor junior developers, fostering a collaborative and growth-oriented culture. The flexibility of our work environment and the emphasis on continuous learning make nextPage IT Solutions an ideal place for honing skills and pushing the boundaries of frontend development.
              </p>
              <a href="https://www.nextpageit.com/" className="btn btn-primary" target="_blank">
                Visit website
              </a>
            </div>
          </div>
          <div
            className={style.borderRadious}
            style={{
              width: "25rem",
              padding: "20px",
              marginTop: "5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <img
              style={{ width: "60%", height: "50%" }}
              className="card-img-top"
              src={
                "https://media.licdn.com/dms/image/D4D0BAQFL8OwYfyxtxg/company-logo_200_200/0/1691427307144?e=1701907200&v=beta&t=5hB3DwFpuH03Y0UjW3-aQU72Ob6at234wkSzt0tYtKU"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5
                className="card-title"
                style={{ color: "skyblue", fontSize: "30px" }}
              >
                Klythe Private Limited{" "}
              </h5>
              <p className="card-text">
                As a MERN (MongoDB, Express.js, React, Node.js) stack developer
                at Klythe Private Limited, I have gained valuable experience and
                expertise in building web applications using the MERN technology
                stack. Over the course of one year, I have contributed to
                various projects and have developed a strong skill set
              </p>
              <a href="https://klythe.com/" className="btn btn-primary" target="_blank">
                Visit website
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Experience;
