import Head from "next/head";
import Hero from "../components/Hero";
import About from "./about";
import Experience from "../components/Experience";
import { useInView } from "react-intersection-observer";
import Work from "../pages/work";
import Contact from "../pages/contact";
import Balls from "../components/Balls";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import style from "../styles/Invisable.module.css";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>My Port Folio</title>
        <meta
          name="description"
          content="Arpan Das Software Portfolio showcasing web and mobile applications, projects, and skills. Hire me for your next software development project!"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/8759/8759045.png"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main
        id="Home"
        style={{
          background: "rgba(5,8,22,255)",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div data-aos="fade-up">
          <Hero></Hero>
        </div>
        <div ref={ref}>
          <div data-aos="fade-down">
            <About />
          </div>
        </div>
        <div data-aos="fade-left">
          <Experience />
        </div>
        <div
          data-aos="zoom-out"
          style={{ width: "100vw", textAlign: "center" }}
        >
          <h1 style={{ color: "white", margin: "5%" }}>
            Technologies I worked on
          </h1>
          <Balls></Balls>
        </div>
        <div className={style.workMarginTop}>
          <Work />
        </div>
        <div className={style.contactHeight}>
          <Contact />
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          async
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossOrigin="anonymous"
        ></script>
      </main>
    </>
  );
}
