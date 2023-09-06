import Head from "next/head";
import Hero from "../components/Hero";
import About from "./about";
import Experience from "../components/Experience";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Work from '../pages/work'
import Contact from "../components/Contact"

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <main
        style={{
          background: "rgba(5,8,22,255)",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Hero></Hero>
        <div ref={ref}>
          <div>
            <About />
          </div>
        </div>
        <Experience />
        <Work></Work>
        <Contact></Contact>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
          crossOrigin="anonymous"
        ></script>
      </main>
    </>
  );
}
