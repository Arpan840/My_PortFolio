import React from "react";
import { motion } from "framer-motion";

import styles from "../../styles/Experience.module.css";

const experiences = [
  {
    year: "2025 — Present",
    company: "Trigma",
    role: "Full Stack Systems Engineer",

    description:
      "Designing enterprise-grade backend systems, multi-tenant SaaS architectures, secure APIs, SDK infrastructure, and cloud-native products.",
  },

  {
    year: "2024 — 2025",
    company: "Hoop Konsulting",
    role: "Full Stack Developer",

    description:
      "Built scalable backend services using Node.js, TypeScript, PostgreSQL, WebSockets, Firebase, AWS S3, and real-time analytics dashboards.",
  },

  {
    year: "2024",
    company: "NextPage IT Solutions",
    role: "Frontend Engineer",

    description:
      "Led frontend architecture with React and Angular while improving developer workflows and delivery pipelines.",
  },

  {
    year: "2023 — 2024",
    company: "Klythe Private Limited",
    role: "Full Stack Developer",

    description:
      "Built production web applications, APIs, reusable components, and performance-focused product features.",
  },
];

const Experience = () => {
  return (
    <section
      id="Experience"
      className={styles.wrapper}
    >
      <div className={styles.header}>
        <span className={styles.label}>
          CAREER JOURNEY
        </span>

        <h2 className={styles.title}>
          Experience that built
          <span> engineering depth</span>
        </h2>
      </div>

      <div className={styles.timeline}>
        {experiences.map((item, index) => (
          <motion.div
            key={index}
            className={styles.item}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className={styles.year}>
              {item.year}
            </div>

            <div className={styles.lineBox}>
              <div className={styles.dot} />
              {index !== experiences.length - 1 && (
                <div className={styles.line} />
              )}
            </div>

            <motion.div
              whileHover={{
                y: -8,
              }}
              className={styles.card}
            >
              <h3 className={styles.company}>
                {item.company}
              </h3>

              <h4 className={styles.role}>
                {item.role}
              </h4>

              <p className={styles.description}>
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;