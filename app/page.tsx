"use client";

import Link from "next/link";
import styles from "./home.module.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from "framer-motion";

const imageSources: string[] = [
  "/images/cover-superhero.jpg",
  "/images/cover-bandstats.jpg",
  "/images/cover-solarsearch.jpg",
  "/images/cover-banners.png",
  "/images/cover-cube.png",
  "/images/cover-bhm.png",
  // "/images/cover-eyewave.jpg",
  // "/images/cover-ins-email.png",
  // "/images/cover-ins-email.png",
  // "/images/cover-ins-email.png",
];

// -------------------------------
// for prod
// -------------------------------
const imageRoutes: string[] = [
  "/superheroSearch.html",
  "/bandstats.html",
  "/solarSearch.html",
  "/banners/index.html",
  "/multiCube.html",
  "/emails/BHM/index.html",
  // "/eyewave.html",
  // "/emails/insBE/index.html",
  // "/banners/index.html",
  // "/banners/lum/index.html",
];

// -------------------------------
// for dev
// -------------------------------
// const imageRoutes: string[] = [
//   "/superheroSearch",
//   "/bandstats",
//   "/solarSearch",
//   "/banners",
//   "/multiCube",
//   "/emails/bhm/",
//   "/banners/",
//   // "/eyewave",
// ];

const imageTitles: string[] = [
  "Hero Search",
  "Band Stats",
  "Solar Search",
  "Banners",
  "Multi Cube",
  "Example Email",
  // "Eye Wave",
  // "Ins Email",
  // "Lum Banners",
  // "Lum Banners",
];
const imageDescriptions: string[] = [
  "Discover superheroes with the Metahuman API",
  "Explore band facts statistics with a custom API that I created",
  "Search the solar system using NASA'a Solaire API",
  "Animated Banners built with GULP/Javascript/SCSS/Handlebars for Double-Click Studio",
  "Experimental 3D cubes",
  "An HTML email template example",
  // "Experience Eye Wave",
  // "Handle Ins emails",
  // "Lum Banners",
  // "Lum Banners",
];
const Home: React.FC = () => {
  const imageContainerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRefs = (el: HTMLDivElement | null, index: number) => {
    imageContainerRefs.current[index] = el;
  };
  useEffect(() => {
    imageContainerRefs.current.forEach((imageContainerRef, index) => {
      if (imageContainerRef) {
        gsap.fromTo(
          imageContainerRef,
          { scale: 0 },
          { scale: 1, duration: 1, delay: index * 0.2 }
        );
      }
    });
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.description}>
          <Container fluid>
            <Row>
              <Col>
                <div className={styles.imgCon}>
                  <a
                    href="https://brainhaxmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/images/logo512.png" className={styles.logo} alt="logo"></img>
                  </a>
                  <span className="header-name">Elijah Iannucci&nbsp;::&nbsp;<code className={styles.code}>Senior Interactive Developer</code></span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {imageSources.map((src, index) => (
          <div
            key={index}
            ref={(el) => setRefs(el, index)}
            className={styles.imageContainer}
          >
            <Link href={imageRoutes[index]}>
              <img src={src} className={styles.projectImage} width={300} height={169} alt={`Image ${index + 1}`}></img>
              {/* <Image
                className={styles.projectImage}
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={169}
                // layout="fill"
                priority
              /> */}
            </Link>
            <div className={styles.selectionDescription}>
              <h1 className={styles.h1}>{imageTitles[index]}</h1>
              <p className={styles.h2}>{imageDescriptions[index]}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/elijahiannucci/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Linkedin <span>-&gt;</span>
          </h2>
          <p>Connections are welcome!</p>
        </a>
        <a
          href="https://github.com/eiannucci/brainhaxmedia-njs-2024/tree/development"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub <span>-&gt;</span>
          </h2>
          <p>
            Check out some code
          </p>
        </a>
      </div>
    </main>
  );
};

export default Home;
