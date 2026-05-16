import React from "react";
import { motion } from "framer-motion";

import MostRecent from "@/components/MostRecent";

import styles from "../../styles/Work.module.css";

const Work = () => {
  return (
    <section
      id="Work"
      className={styles.wrapper}
    >
      <div className={styles.fire}></div>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.label}>
          FEATURED PRODUCTS
        </span>

        <h2 className={styles.title}>
          Systems I’ve built in
          <span> production</span>
        </h2>

        <p className={styles.description}>
          From multi-tenant SaaS platforms
          to SDK infrastructure, analytics,
          AI products, and scalable APIs.
        </p>
      </div>

      {/* Most recent */}
      <motion.section
        className={styles.recentSection}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>
            Latest Build
          </span>

          <h3 className={styles.subTitle}>
            Most Recent
          </h3>
        </div>

        <MostRecent />
      </motion.section>

      {/* flagship */}
      {/* <motion.section
        className={styles.projectSection}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionHeader}>
          <h3 className={styles.subTitle}>
            Flagship Products
          </h3>
        </div>

        <MajorProject />
      </motion.section> */}

      {/* other */}
      {/* <motion.section
        className={styles.projectSection}
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <div className={styles.sectionHeader}>
          <h3 className={styles.subTitle}>
            Additional Engineering Work
          </h3>
        </div>

        <MinorProjects />
      </motion.section> */}
    </section>
  );
};

export default Work;