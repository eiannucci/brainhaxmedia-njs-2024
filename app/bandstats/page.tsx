"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Band {
  band_name: string;
  formed_year: number;
  studio_albums: number;
  recorded_songs: number;
  members: Member[];
  albums: Album[];
  image: string;
  trivia: string[];
}

interface Member {
  name: string;
  instruments: string[];
}

interface Album {
  title: string;
  year: number;
  songs: number;
  sales: string;
}

const BandStats: React.FC = () => {
  const [bands, setBands] = useState<Band[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ bands: Band[] }>('https://bandstats-elijahiannucci-default-rtdb.firebaseio.com/bands.json');

        // Log the response to see the structure
        console.log('API Response:', response);

        if (response.data && Array.isArray(response.data)) {
          const sortedBands = response.data.sort((a, b) => a.band_name.localeCompare(b.band_name));
          setBands(sortedBands);
        } else {
          console.error('Unexpected response structure:', response);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container fluid className="text-center my-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container fluid>
      <Row>
        {bands.map((band, index) => (
          <Col key={index} sm={12} md={4}>
            <Card className="m-4">
              {band.image ? (
                // <Image
                //   src={band.image}
                //   alt={band.band_name}
                //   layout="responsive"
                //   width={500}
                //   height={300}
                //   className="card-img-top"
                // />
                <img src={band.image}/>
              ) : (
                <p>No image available</p>
              )}
              <Card.Body>
                <Card.Title>{band.band_name}</Card.Title>
                <Card.Text>Formed Year: {band.formed_year}</Card.Text>
                <div>
                  <strong>Members:</strong>
                  <div>
                    {band.members.map((member, memberIndex) => (
                      <div key={memberIndex}>
                        <p>Name: {member.name}</p>
                        <p>Instruments: {member.instruments.join(', ')}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Albums:</strong>
                  <div>
                    {band.albums.map((album, albumIndex) => (
                      <div key={albumIndex}>
                        <p>Title: {album.title}</p>
                        <p>Year: {album.year}</p>
                        <p>Songs: {album.songs}</p>
                        <p>Sales: {album.sales}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <strong>Trivia:</strong>
                  <div>
                    {band.trivia.map((triviaItem, triviaIndex) => (
                      <div key={triviaIndex}>
                        <p>{triviaItem}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BandStats;

