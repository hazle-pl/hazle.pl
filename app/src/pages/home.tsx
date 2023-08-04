import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

//Components
import InfiniteGalerry from '../components/infinity-gallery';


export const Home: React.FC = () => {

  const pictures = [
    { src: '/img/logo-superspas.png', alt: 'Superspas' },
    { src: '/img/logo-platinumspas.png', alt: 'Platinum spas' },
    { src: '/img/logo-homedeluxe.webp', alt: 'Home deluxe' },
  ];

  return (
    <>
    <section className="bg-neutral-900 padding-top-5 padding-bottom-5">
      <div className="content-wrapper">
        <Container>
          <div className="blob bg-secondary-700 left"></div>
          <h1>Unleashing<br/>Boundless<br/><span className="gradient">Creativity</span></h1>
        </Container>
        <div className="blob bg-primary-900 center"></div>
        <div className="blob bg-secondary-500 right top"></div>
      </div>
    </section>
    <section className="bg-neutral-900">
      <div className="content-wrapper">
        <Container>
          <h2>Our partners</h2>
          <InfiniteGalerry pictures={pictures} />
        </Container>
      </div>
    </section>
    </>
  );
};
