import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export const Home: React.FC = () => {

  return (
    <>
    <section>
      <div className="content-wrapper">
        Here is max 1920px content
        <Container>
          Content in 1530px
        </Container>
      </div>
    </section>
    </>
  );
};
