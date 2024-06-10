"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const imageSources: string[] = [
  "/cover-superhero.jpg",
  "/cover-bandstats.jpg",
  "/cover-solarsearch.jpg",
  "/cover-eyewave.png",
  "/cover-banners.png",
  "/cover-cube.png",
  "/cover-san-email.png",
  "/cover-ins-email.png",
];

const imageRoutes: string[] = [
  "/superheroSearch",
  "/bandstats",
  "/solarSearch",
  "/eyewave",
  "/banners",
  "/multiCube",
  "/emailSanTou",
  "/emailInsTou",
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

    // gsap.to("body", {
    //   background: "radial-gradient(circle, rgba(83,24,83,1) 0%, rgba(0,0,0,1) 100%)",
    //   duration: 8,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "none"
    // });

  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={styles.imgCon}>
          <a
            href="https://brainhaxmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo512.png"
              alt="Brainhaxmedia Logo"
              className={styles.logo}
              fill
              priority
            />
          </a>
        </div>
        <p>
          <span className="header-name">Elijah Iannucci&nbsp;::&nbsp;</span><code className={styles.code}>Senior Interactive Developer</code>
        </p>
      </div>
      <div className={styles.center}>
        {imageSources.map((src, index) => (
          <div
            key={index}
            ref={(el) => setRefs(el, index)}
            className={styles.imageContainer}
          >
            <Link href={imageRoutes[index]}>
              <Image
                className={styles.projectImage}
                src={src}
                alt={`Image ${index + 1}`}
                width={300}
                height={169}
                // layout="fill"
                priority
              />
            </Link>
            <div className={styles.selectionDescription}>
              <h1 className={styles.h1}>TEST</h1>
              <p className={styles.h2}>Test2</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.grid}>
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
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>LOREM</p>
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Bio <span>-&gt;</span>
          </h2>
          <p>LOREM</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub <span>-&gt;</span>
          </h2>
          <p>
            LOREM
          </p>
        </a>
      </div>
    </main>
  );
};

export default Home;
