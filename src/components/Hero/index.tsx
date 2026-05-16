"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import NextLink from "next/link";

import { Link as ScrollLink } from "react-scroll";

import heroBackground from "../../assets/herobg.png";
import heroImage from "../../../public/assets/heroImage.png"; // your image

import styles from "../../styles/Hero.module.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.stars}></div>
      
      <div className={styles.galaxy}></div>

      <div className={styles.galaxy2}></div>

      <div className={styles.core}></div>

      <div className={styles.shootingStar}></div>
      {/* Background */}
      {/* <Image
        src={heroBackground}
        alt="background"
        fill
        priority
        className={styles.background}
      /> */}

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Floating blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* Main content */}
      <div className={styles.container}>
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.left}
        >
          <span className={styles.badge}>Full Stack Systems Engineer</span>

          <h1 className={styles.title}>
            Building scalable
            <span> SaaS systems</span>,
            <br />
            AI products, and
            <br />
            developer infrastructure.
          </h1>

          <p className={styles.description}>
            I’m Arpan Das — focused on NestJS, TypeScript, distributed backend
            systems, SDK development, and AI-powered products.
          </p>

          {/* CTA */}
          <div className={styles.actions}>
            <ScrollLink to="Work" smooth={true} duration={700} offset={-100}>
              <button className={styles.primaryBtn}>View Projects</button>
            </ScrollLink>

            {/* <a href="/resume.pdf" target="_blank" rel="noreferrer">
              <button className={styles.secondaryBtn}>Resume</button>
            </a> */}
          </div>

          {/* Tech pills */}
          <div className={styles.techs}>
            <span>NestJS</span>
            <span>TypeScript</span>
            <span>PostgreSQL</span>
            <span>MongoDb</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>AI</span>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={styles.right}
        >
          <div className={styles.imageCard}>
            <Image src={heroImage} alt="Arpan" className={styles.heroImage} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link to="About" smooth>
        <div className={styles.scroll}>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className={styles.scrollDot}
          />
        </div>
      </Link>
    </section>
  );
};

export default Hero;
