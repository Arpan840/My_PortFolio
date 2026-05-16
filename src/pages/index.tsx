import Head from "next/head";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import Hero from "../components/Hero";
import About from "./about";
import Experience from "../components/Experience";
import Work from "./work";
import Contact from "./contact";
import Balls from "../components/Balls";

import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <>
      <Head>
        <title>
          Arpan Das | Full Stack Systems Engineer
        </title>

        <meta
          name="description"
          content="
          Arpan Das builds scalable SaaS systems,
          distributed backend infrastructure,
          AI-powered products, SDKs,
          and enterprise software solutions.
          "
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="icon"
          href="/favicon.png"
        />
      </Head>

      <main
        id="Home"
        className={styles.main}
      >
        {/* Hero */}
        <section data-aos="fade-up">
          <Hero />
        </section>

        {/* About */}
        <section data-aos="fade-up">
          <About />
        </section>

        {/* Experience */}
        <section data-aos="fade-up">
          <Experience />
        </section>

        {/* Tech Stack */}
        <section
          data-aos="fade-up"
          className={styles.techSection}
        >
          <span className={styles.label}>
            TECH STACK
          </span>

          <h2 className={styles.heading}>
            Technologies I build with
          </h2>

          <Balls />
        </section>

        {/* Projects */}
        <section data-aos="fade-up">
          <Work />
        </section>

        {/* Contact */}
        <section data-aos="fade-up">
          <Contact />
        </section>
      </main>
    </>
  );
}