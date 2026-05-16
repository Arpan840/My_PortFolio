import React, { useState } from "react";
import Link from "next/link";

import majorProjects from "../../jsonFiles/majorProjects.json";

import styles from "../../styles/MostRecent.module.css";

const MostRecent = () => {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const nextProject = () => {
    setActiveIndex((prev) =>
      prev ===
      majorProjects.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0
        ? majorProjects.length - 1
        : prev - 1
    );
  };

  const project =
    majorProjects[activeIndex];

  return (
    <section
      className={styles.sliderWrapper}
    >
      {/* left */}
      <button
        className={styles.navLeft}
        onClick={prevProject}
      >
        ←
      </button>

      {/* card */}
      <Link
        href={project.deploymentLink}
        target="_blank"
        className={styles.link}
      >
        <div className={styles.card}>
          <div className={styles.content}>
            <span
              className={styles.badge}
            >
              Live Product
            </span>

            <h2
              className={styles.title}
            >
              {project.title}
            </h2>

            <div
              className={styles.stack}
            >
              {project.stack?.map(
                (
                  tech: string,
                  i: number
                ) => (
                  <span
                    key={i}
                    className={
                      styles.techBadge
                    }
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <p
              className={
                styles.description
              }
            >
              {
                project.description
              }
            </p>

            <div
              className={
                styles.features
              }
            >
              {project.features?.map(
                (
                  feature: string,
                  i: number
                ) => (
                  <div
                    key={i}
                    className={
                      styles.feature
                    }
                  >
                    ✓ {feature}
                  </div>
                )
              )}
            </div>

            <span
              className={styles.cta}
            >
              Explore →
            </span>
          </div>
        </div>
      </Link>

      {/* right */}
      <button
        className={styles.navRight}
        onClick={nextProject}
      >
        →
      </button>
    </section>
  );
};

export default MostRecent;