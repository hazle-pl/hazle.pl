import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useIntersectionObserver from '../scripts/intersection-observer';


export const StayTuned: React.FC = () => {
    
    useIntersectionObserver('.container *');

  return (
    <>
    {/* Section Hero */}
    <section className={`bg-neutral-900 padding-top-4 padding-bottom-4`}>
        <div className="content-wrapper">
          <Container>
            <div className="blob bg-secondary-700 left"></div>
            <h1>Comming<br/><span className="gradient">soon!</span></h1>
          </Container>
          <div className="blob bg-primary-900 center"></div>
          <div className="blob bg-secondary-500 right top"></div>
        </div>
      </section>
    </>
  );
};
