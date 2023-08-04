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


      <section className="bg-neutral-900 padding-top-4 padding-bottom-4 buisness-values">
        <div className="content-wrapper">
          <Container>
            <Row className="justify-content-center">
              <h2>Complex Service</h2>
            </Row>
            <Row className="justify-content-center buisness-values padding-top-3 padding-bottom-3">
                <a href="#idea" className="icon">
                  <i className="fa-regular fa-lightbulb"></i>
                </a>
                <a href="#design" className="icon">
                  <i className="fa-brands fa-figma"></i>
                </a>
                <a href="#code" className="icon">
                  <i className="fa-solid fa-code"></i>
                </a>
                <a href="#service" className="icon">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                </a>
            </Row>
          </Container>
        </div>
      </section>


      <section id="idea" className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2><span className="section-icon"><i className="fa-regular fa-lightbulb"></i></span>Power of idea</h2>
            <Row>
              <Col lg={6} md={6} xs={12} className={`service`}>
              <p>At Hazle, we believe in the power of a good idea. It's the spark that sets everything in motion. From captivating designs to functional websites and innovative apps, it all begins with that initial concept. Let us turn your ideas into reality and create something remarkable together.</p>
              </Col>
              <Col lg={6} md={6} xs={12} className={`service`}>
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

      {/* Section Service */}
      <section className="bg-neutral-900 padding-top-4 padding-bottom-4">
        <div className="content-wrapper">
          <Container>
            <h2>Our Service</h2>
            <Row>
              <Col lg={8} md={6} xs={12} className={`service`}>
                At Hazle, we believe in the power of a good idea. It's the spark that sets everything in motion. From captivating designs to functional websites and innovative apps, it all begins with that initial concept. Let us turn your ideas into reality and create something remarkable together.
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
