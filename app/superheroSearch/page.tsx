"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Spinner,
  Card,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../scss/HeroSearch.module.scss";
import "../scss/FontFace.module.scss";
import ReactGA from "react-ga";

interface Hero {
  alterEgos: string;
  name: string;
  biography: {
    aliases: string[];
    fullName: string;
    alterEgos: string;
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    lg: string;
  };
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  work: {
    occupation: string;
  };
}

const HeroSearchApp: React.FC = () => {
  const [heroStateOne, setHeroStateOne] = useState<Hero[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data: Hero[]) => {
        setHeroStateOne(data);
        setIsLoading(false);
      });

    ReactGA.initialize("G-SSE6730X77");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredHeroes = heroStateOne.filter((hero) => {
    return hero.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Container className="pt-3">
        <Row>
          <Col>
            <Container fluid>
              <Row>
                <Col xs={12}>
                  <InputGroup className={styles.inputGroup}>
                    <InputGroup.Text
                      id="search-bar-button"
                      className={styles["search-btn"]}
                    >
                      s<span className={styles.searchText}>earch</span>
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Search any Meta-Human"
                      aria-label="Search any Meta-Human"
                      aria-describedby="search-bar-button"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      {isLoading && (
        <Container className="d-flex justify-content-center my-5">
          <Spinner animation="border" variant="primary" />
        </Container>
      )}

      {!isLoading && (
        <Container>
          <Row>
            {filteredHeroes.map((fullHeroSet) => (
              <Col xs={12} lg={6} key={fullHeroSet.alterEgos}>
                <Card className={styles["herocard"]}>
                  <Card.Img
                    variant="top"
                    className="card-img"
                    src={fullHeroSet.images.lg}
                  />
                  <Card.Body>
                    <Card.Title className={styles.cardTitle}>{fullHeroSet.name}</Card.Title>
                    <Card.Text>
                      <strong>AKA:</strong> {fullHeroSet.biography.aliases.join(", ")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Affiliations:</strong> {fullHeroSet.connections.groupAffiliation.replace(/[,]/g, " /")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Family:</strong> {fullHeroSet.connections.relatives.replace(/[,]/g, " / ")}
                    </Card.Text>
                    <Card.Text>
                      <strong>Facts about {fullHeroSet.name}:</strong>
                    </Card.Text>
                    <Row>
                      <Col xs={12} md={4} className={styles["sidekick-text"]}>
                        <ul>
                          <li>Intelligence: {fullHeroSet.powerstats.intelligence}</li>
                          <li>Strength: {fullHeroSet.powerstats.strength}</li>
                          <li>Speed: {fullHeroSet.powerstats.speed}</li>
                          <li>Durability: {fullHeroSet.powerstats.durability}</li>
                          <li>Power: {fullHeroSet.powerstats.power}</li>
                        </ul>
                      </Col>
                      <Col xs={12} md={4} className={styles["sidekick-text"]}>
                        <ul>
                          <li>Gender: {fullHeroSet.appearance.gender}</li>
                          <li>Race: {fullHeroSet.appearance.race}</li>
                          <li>Height: {fullHeroSet.appearance.height[0]} / {fullHeroSet.appearance.height[1]}</li>
                          <li>Weight: {fullHeroSet.appearance.weight[0]} / {fullHeroSet.appearance.weight[1]}</li>
                          <li>Eye Color: {fullHeroSet.appearance.eyeColor}</li>
                          <li>Hair Color: {fullHeroSet.appearance.hairColor}</li>
                        </ul>
                      </Col>
                      <Col xs={12} md={4} className={styles["sidekick-text"]}>
                        <ul>
                          <li>Full Name: {fullHeroSet.biography.fullName}</li>
                          <li>Alter Egos: {fullHeroSet.biography.alterEgos}</li>
                          <li>Day Job: {fullHeroSet.work.occupation}</li>
                          <li>Birthplace: {fullHeroSet.biography.placeOfBirth}</li>
                          <li>First Appearance: {fullHeroSet.biography.firstAppearance}</li>
                          <li>Publisher: {fullHeroSet.biography.publisher}</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default HeroSearchApp;
