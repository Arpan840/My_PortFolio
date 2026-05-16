import React, { useState } from "react";

import { Link } from "react-scroll";

import { motion } from "framer-motion";

import { FaFileCode } from "react-icons/fa";

import navItems from "../../jsonFiles/navItems.json";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <nav className={styles.navbar}>
      {/* logo */}

      <div className={styles.logoBox}>
        <div className={styles.logoOrb}>
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className={styles.logoRing}
          />

          <span className={styles.logoText}>AD</span>
        </div>

        <div>
          <h2 className={styles.name}>Arpan Das</h2>

          <p className={styles.role}>Systems Engineer</p>
        </div>
      </div>

      {/* nav links */}

      <div className={styles.links}>
        {navItems.map((item, index) => (
          <Link
            key={index}
            smooth
            spy
            offset={-70}
            duration={600}
            to={item.name}
          >
            <motion.button
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => setActive(item.name)}
              className={`
                  ${styles.link}

                  ${active === item.name ? styles.active : ""}
                `}
            >
              {item.name}
            </motion.button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
