import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfinityGalerry from '../components/infinity-gallery';
import useIntersectionObserver from '../scripts/intersection-observer';

export const Home: React.FC = () => {
  const pictures = [
    { src: '/img/logo-superspas.png', alt: 'Superspas' },
    { src: '/img/logo-platinumspas.png', alt: 'Platinum spas' },
    { src: '/img/logo-homedeluxe.webp', alt: 'Home deluxe' },
  ];

  useIntersectionObserver('.container *');

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


      <section className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2>Our service</h2>
              <Row className="padding-top-4 padding-bottom-4">
                <Col lg={3} md={6} xs={12}>
                  <div className="card margin-top-3 margin-bottom-3">
                    <div className="title">
                      <i className="fa-solid fa-globe"></i>
                      <h3>Web-based apps</h3>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={5} xs={12}>
                <div className="card margin-top-3 margin-bottom-3">
                    <div className="title">
                      <i className="fa-solid fa-basket-shopping"></i>
                      <h3>eCommerce</h3>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} xs={12}>
                <div className="card margin-top-3 margin-bottom-3">
                    <div className="title">
                      <i className="fa-solid fa-pen-to-square"></i>
                      <h3>UX/UI</h3>
                    </div>
                  </div>
                </Col>
                <Col lg={3} md={6} xs={12}>
                <div className="card margin-top-3 margin-bottom-3">
                    <div className="title">
                      <i className="fa-solid fa-toolbox"></i>
                      <h3>Management</h3>
                    </div>
                  </div>
                </Col>
            </Row>
          </Container>
        </div>
      </section>


      <section id="idea" className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2>What makes us stand out?</h2>
            <Row>
              <Col lg={6} md={6} xs={12}>
              <p>At Hazle, we believe in the power of a good idea. It's the spark that sets everything in motion. From captivating designs to functional websites and innovative apps, it all begins with that initial concept. Let us turn your ideas into reality and create something remarkable together.</p>
              </Col>
              <Col lg={6} md={6} xs={12}>
              <p>At Hazle, we believe in the power of a good idea. It's the spark that sets everything in motion. From captivating designs to functional websites and innovative apps, it all begins with that initial concept. Let us turn your ideas into reality and create something remarkable together.</p>
              </Col>
            </Row>
          </Container>
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
    </>
  );
};
