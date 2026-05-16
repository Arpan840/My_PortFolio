import React, { useState } from "react";
import { motion } from "framer-motion";

import socialMedia from "../../jsonFiles/socialmedia.json";

import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const [clickedCard, setClickedCard] = useState<number | null>(null);

  const handleClick = (index: number, url: string) => {
    if (clickedCard !== null) {
      return;
    }

    setClickedCard(index);

    setTimeout(() => {
      window.open(url, "_blank");

      setClickedCard(null);
    }, 900);
  };

  return (
    <section id="Contact" className={styles.wrapper}>
      <div className={styles.starsLayer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* header */}

      <div className={styles.header}>
        <span className={styles.label}>Let&apos;s build</span>

        <h2 className={styles.title}>Have a product, platform, or AI idea?</h2>

        <p className={styles.subtitle}>
          I build scalable SaaS, distributed backend systems, developer
          platforms, and AI powered products.
        </p>
      </div>
      <div className={styles.starsLayer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* cards */}

      <div className={styles.grid}>
        {socialMedia.map((item, index) => (
          <motion.div
            key={index}
            className={`
                ${styles.card}
                ${clickedCard === index ? styles.burst : ""}
              `}
            onClick={() => handleClick(index, item.link)}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.12,
            }}
            viewport={{
              once: true,
            }}
          >
            <img src={item.image} alt={item.name} className={styles.icon} />

            <h3 className={styles.name}>{item.name}</h3>

            <span className={styles.visit}>Connect →</span>
          </motion.div>
        ))}
      </div>
      <div className={styles.starsLayer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* footer */}

      <p className={styles.footer}>Built with passion by Arpan Das © 2026</p>
    </section>
  );
};

export default Contact;
