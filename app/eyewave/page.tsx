"use client";

import React, { useEffect, useRef } from "react";
import ReactGA from 'react-ga';
import styles from "../scss/CubeWave.module.scss";
import gsap from "gsap";

const CubeWave: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const init = () => {
      if (!containerRef.current || !gridRef.current || !cubeRef.current) {
        console.error("Container, grid or cube is not defined");
        return;
      }

      const styleVars = getComputedStyle(document.documentElement);
      const numRowsColsStr = styleVars.getPropertyValue("--numRowsCols");
      const numRowsCols = parseInt(numRowsColsStr);

      if (isNaN(numRowsCols)) {
        console.error("numRowsCols is not a valid number", numRowsColsStr);
        return;
      }

      const numCubes = numRowsCols * numRowsCols;
      const cube = cubeRef.current;
      const grid = gridRef.current;

      console.log("Number of rows and columns:", numRowsCols);
      console.log("Number of cubes:", numCubes);

      for (let i = 0; i < numCubes - 1; i++) {
        const clone = cube.cloneNode(true) as HTMLElement;
        grid.appendChild(clone);
      }

      gsap.set(containerRef.current, { autoAlpha: 1 });
      gsap.set(cube, { rotateY: 90, transformOrigin: "right center" });

      gsap.to(grid, {
        x: "random(0, 0)",
        y: "random(0, 0)",
        rotateY: "random(0, 0)",
        repeat: -1,
        repeatDelay: 1,
        repeatRefresh: true,
        ease: "sine.inOut",
        duration: 6,
      });

      gsap.timeline({ delay: 0.5 }).to(`.${styles.cube}`, {
        duration: 0.6,
        scaleX: 0.09,
        ease: "sine.inOut",
        stagger: {
          each: 0.15,
          yoyo: true,
          repeat: -1,
          grid: [numRowsCols, numRowsCols],
          from: "start",
        },
      });
    };

    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);

    init();
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.grid} ref={gridRef}>
        <div className={styles.cube} ref={cubeRef}>
          <div className={`${styles.face} ${styles["face--front"]}`}></div>
          <div className={`${styles.face} ${styles["face--back"]}`}></div>
          <div className={`${styles.face} ${styles["face--left"]}`}></div>
          <div className={`${styles.face} ${styles["face--right"]}`}></div>
          <div className={`${styles.face} ${styles["face--top"]}`}></div>
          <div className={`${styles.face} ${styles["face--bottom"]}`}></div>
        </div>
      </div>
    </div>
  );
};

export default CubeWave;
