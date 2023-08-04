import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfinityGalerry from '../components/infinity-gallery';

export const Home: React.FC = () => {
  const pictures = [
    { src: '/img/logo-superspas.png', alt: 'Superspas' },
    { src: '/img/logo-platinumspas.png', alt: 'Platinum spas' },
    { src: '/img/logo-homedeluxe.webp', alt: 'Home deluxe' },
  ];

  return (
    <>
      {/* Section Hero */}
      <section className={`bg-neutral-900 padding-top-4 padding-bottom-4`}>
        <div className="content-wrapper">
          <Container>
            <div className="blob bg-secondary-700 left"></div>
            <h1>Unleashing<br />Boundless<br /><span className="gradient">Creativity</span></h1>
          </Container>
          <div className="blob bg-primary-900 center"></div>
          <div className="blob bg-secondary-500 right top"></div>
        </div>
      </section>

      {/* Section Partners */}
      <section className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2>Our Partners</h2>
            <InfinityGalerry pictures={pictures} />
          </Container>
        </div>
      </section>

      {/* Section Service */}
      <section className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2>Our Service</h2>
            <Row>
              <Col lg={8} md={6} xs={12} className={`service`}>
                <div className="card">x</div>
              </Col>
              <Col lg={4} md={6} xs={12} className={`service`}>
                <div className="card">x</div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
