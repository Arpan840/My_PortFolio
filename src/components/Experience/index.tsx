import { motion } from "framer-motion";
import style from "../../styles/Invisable.module.css";
import Image from "next/image";
import klythePro from "../../../public/assets/company/klythe.jpeg";

const Experience = () => {
  return (
    <div id="Experience" className={style.experienceContainer}>
      <motion.div className={style.titleContainer}>
        <p className={style.subheading}>What I have done so far.</p>
        <h1 className={style.heading}>Work Experience</h1>
      </motion.div>

      <div className={style.cardGrid}>
        {/* Hoop Konsulting */}
        <div className={style.card}>
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQGDPQBetfICRg/company-logo_200_200/company-logo_200_200/0/1723033497197/hoopkonsulting_logo?e=1750896000&v=beta&t=41lcJ39Qrc7dHqhxsRv0fU-yLo2qNQS1gs1f3_BT568"
            alt="Hoop Konsulting"
          />
          <h5 className="card-title">Hoop Konsulting</h5>
          <p className="card-text">
            I’ve been working as a full-stack developer, building web and backend systems using Node.js, Express.js, TypeScript, TypeORM, and PostgreSQL. I’ve also handled Angular frontend for admin panels, S3-based file uploads, Firebase notifications, WebSocket integration, and data dashboards with custom charts.
          </p>
          <a
            href="https://www.hoopkonsulting.com/"
            className="btn-primary"
            target="_blank"
          >
            Visit website
          </a>
        </div>

        {/* NextPage IT */}
        <div className={style.card}>
          <img
            src="https://media.licdn.com/dms/image/C4D0BAQH1CuGtEo8Ezg/company-logo_200_200/0/1631350343181?e=1709769600&v=beta&t=ooF3YPZFuMBiktk1f538HraBTcPUgDT1Ia-1AQ1VOSU"
            alt="NextPage IT"
          />
          <h5 className="card-title">NextPage IT Solutions</h5>
          <p className="card-text">
            As a Senior Frontend Developer, I led UI development using modern frameworks like React and Angular, translating designs into responsive applications. I mentored junior devs and maintained high-quality standards with CI/CD, testing, and version control practices.
          </p>
          <a
            href="https://www.nextpageit.com/"
            className="btn-primary"
            target="_blank"
          >
            Visit website
          </a>
        </div>

        {/* Klythe Pvt Ltd */}
        <div className={style.card}>
          <Image src={klythePro} alt="Klythe Logo" />
          <h5 className="card-title">Klythe Private Limited</h5>
          <p className="card-text">
            Worked as a MERN Stack Developer building web apps with MongoDB, Express, React, and Node.js. I contributed to end-to-end feature development, strengthening my skills in scalable architecture and performance optimization.
          </p>
          <a
            href="https://www.linkedin.com/company/klythe/about/"
            className="btn-primary"
            target="_blank"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
