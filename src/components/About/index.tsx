import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import Tilt from "react-parallax-tilt";

import {
  useInView,
} from "react-intersection-observer";

import Aos from "aos";

import "aos/dist/aos.css";

import services from "../../jsonFiles/services.json";

import styles from "../../styles/About.module.css";


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const cardVariants = {

  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};


const About = () => {

  const [novaKey, setNovaKey] =
    useState(0);


  const [ref, inView] =
    useInView({
      threshold: 0.35,
      triggerOnce: false,
    });


  useEffect(() => {

    Aos.init({
      duration: 800,
    });

  }, []);


  useEffect(() => {

    if (inView) {
      setNovaKey(
        Date.now()
      );
    }

  }, [inView]);


  return (

    <section
      ref={ref}
      className={styles.wrapper}
      id="About"
    >

      {/* supernova */}

      {inView && (
        <div
          key={novaKey}
          className={
            styles.supernova
          }
        />
      )}


      {/* header */}

      <div
        className={
          styles.header
        }
      >

        <span
          className={
            styles.label
          }
        >
          ENGINEERING IDENTITY
        </span>


        <h2
          className={
            styles.title
          }
        >
          Building products,
          <span>
            {" "}systems
          </span>,
          and infrastructure.
        </h2>


        <p
          className={
            styles.description
          }
        >
          I’m Arpan Das,
          a Full Stack Systems
          Engineer focused on
          building scalable
          backend platforms,
          developer SDKs,
          multi-tenant SaaS
          products, and
          AI-powered
          infrastructure.
        </p>

      </div>


      {/* cards */}

      <motion.div
        className={
          styles.cards
        }

        variants={
          containerVariants
        }

        initial="hidden"

        whileInView="show"

        viewport={{
          once: false,
        }}
      >

        {services.map(
          (
            service,
            index
          ) => (

            <motion.div
              key={index}

              variants={
                cardVariants
              }
            >

              <Tilt
                tiltMaxAngleX={8}

                tiltMaxAngleY={8}

                perspective={1500}

                glareEnable

                glareMaxOpacity={
                  0.15
                }

                className={
                  styles.tilt
                }
              >

                <div
                  className={
                    styles.card
                  }
                >

                  <img
                    src={
                      service.icon
                    }

                    alt={
                      service.title
                    }

                    className={
                      styles.icon
                    }
                  />


                  <h3
                    className={
                      styles.cardTitle
                    }
                  >
                    {
                      service.title
                    }
                  </h3>


                  <p
                    className={
                      styles.cardText
                    }
                  >
                    Production-focused
                    engineering with
                    clean architecture,
                    performance,
                    and scalability.
                  </p>

                </div>

              </Tilt>

            </motion.div>
          )
        )}

      </motion.div>

    </section>
  );
};

export default About;