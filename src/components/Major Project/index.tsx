import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../../styles/MajorProject.module.css";

const ReactPlayer = dynamic(
  () => import("react-player"),
  { ssr: false }
);

const projects = [
  {
    title:
      "Product Synchronizer Platform",

    type:
      "SaaS Infrastructure",

    video:
      "https://www.youtube.com/watch?v=gvm1TZBVdPQ",

    description:
      "A multi-platform synchronization system built to centralize product data across e-commerce channels, marketing systems, and marketplace integrations.",

    url:
      "/productSync",
  },

  {
    title:
      "Payever Backend Platform",

    type:
      "Enterprise Commerce",

    image:
      "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_03073e9fa619088246033de8869220ba/payever.png",

    description:
      "Contributed to enterprise backend systems using NestJS, production deployments, package upgrades, bug resolution, code reviews, and platform stability.",

    url:
      "https://getpayever.com",
  },
];

const MajorProject = () => {
  return (
    <section className={styles.wrapper}>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={styles.card}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
        >
          <div className={styles.media}>
            {project.video ? (
              <ReactPlayer
                url={project.video}
                width="100%"
                height="100%"
                controls
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            )}
          </div>

          <div className={styles.content}>
            <span className={styles.badge}>
              {project.type}
            </span>

            <h3 className={styles.title}>
              {project.title}
            </h3>

            <p className={styles.description}>
              {project.description}
            </p>

            <Link
              href={project.url}
              className={styles.button}
              target={
                project.url.startsWith("http")
                  ? "_blank"
                  : "_self"
              }
            >
              Explore Project
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default MajorProject;