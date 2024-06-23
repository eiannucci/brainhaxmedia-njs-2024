"use client";

import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import styles from '../scss/MultiCube.module.scss';

const MultiCube: React.FC = () => {
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const middle = windowHeight / 2;
    const topPosition = middle - 336 / 2;
    const cube = document.getElementById('cube');

    if (cube) {
      cube.style.top = `${topPosition}px`;
    } else {
      console.error('Cube element not found');
    }

    ReactGA.initialize('G-SSE6730X77');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container id="cube">
      <Row>
        <Col>
          <div className={styles.container}>
            {[...Array(3)].map((_, index) => (
              <div key={index} className={styles.cube}>
                {[...Array(3)].map((_, subIndex) => (
                  <div
                    key={subIndex}
                    style={{ '--x': subIndex - 1, '--y': 0 } as React.CSSProperties}
                  >
                    {[...Array(3)].map((_, spanIndex) => (
                      <span key={spanIndex} style={{ '--i': 3 - spanIndex } as React.CSSProperties}></span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MultiCube;
