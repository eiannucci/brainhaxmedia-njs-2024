"use client";

// SolarSearchApp.tsx
import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Row, Col, InputGroup, Spinner } from "react-bootstrap";
import { FaGalacticRepublic } from "react-icons/fa";
// import { SolarBackToTopButton } from "./SolarBackToTopBtn";
import Form from "react-bootstrap/Form";
import ReactGA from "react-ga";
import styles from "../scss/SolarSearch.module.scss";

interface Planet {
  englishName: string;
  bodyType: string;
  gravity: number;
  density: number;
  founder: string;
  dDate: string;
  latinName: string;
}

 const SolarSearchApp: React.FC = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);

    fetch("https://api.le-systeme-solaire.net/rest/bodies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const planetData = data.bodies.map((body: any) => {
          return {
            englishName: body.englishName,
            bodyType: body.bodyType,
            gravity: body.gravity,
            density: body.density,
            founder: body.discoveredBy,
            dDate: body.discoveryDate,
            latinName: body.name,
          };
        });
        setPlanets(planetData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    ReactGA.initialize("G-SSE6730X77");
    ReactGA.pageview(window.location.pathname + window.location.search);
    console.log(ReactGA);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredPlanets = planets.filter((planet) =>
    planet.englishName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col>
            <InputGroup className="my-3">
              <InputGroup.Text id="search-bar-button">
                <FaGalacticRepublic />
              </InputGroup.Text>
              <Form.Control
                placeholder="Search planet"
                aria-label="Planet Search"
                aria-describedby="search-bar-button"
                value={searchText}
                onChange={handleSearch}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        filteredPlanets.map((planet) => (
          <Container fluid className={"g-0"} key={planet.englishName}>
            <Row>
              <Col>
                <div className={styles["planet-container"]}>
                  <div style={{background:'#0000ff80', padding:'1rem', borderRadius: '10px'}}>
                    {/* <SolarBackToTopButton /> */}
                    <div className={styles["planet-name"]}>
                      {planet.englishName}
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Body Type:</span>
                      <span className={styles["type-details"]}>
                        {planet.bodyType}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Gravity:</span>
                      <span className={styles["type-details"]}>
                        {planet.gravity}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Density:</span>
                      <span className={styles["type-details"]}>
                        {planet.density}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Founder:</span>
                      <span className={styles["type-details"]}>
                        {planet.founder}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Discovery Date:</span>
                      <span className={styles["type-details"]}>
                        {planet.dDate}
                      </span>
                    </div>
                    <div className={styles.planetInfo}>
                      <span className={styles["type-header"]}>Discovery Name:</span>
                      <span className={styles["type-details"]}>
                        {planet.latinName}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ))
      )}
    </React.Fragment>
  );
};

export default SolarSearchApp;

