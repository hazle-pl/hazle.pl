import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';



export const Footer: React.FC = () => {
  

  return (
    <footer>
        <div className="content-wrapper">
          <Container>
            <Row className="padding-bottom-3 padding-top-3">
              <Col>
                  <p>At Hazle we nurturing Your Ideas with Our Digital Expertise. Transforming Visions into Reality – Websites, Designs, Marketing and much more!</p>
                </Col>
                <Col>
                    <h3>Company</h3>
                    <ul>
                        <li><a href="/about-us">About us</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </Col>
                <Col>
                    <h3>Service</h3>
                    <ul>
                      <li><a href="/web-development">Web Development</a></li>
                      <li><a href="/ecommerce">eCommerce</a></li>
                      <li><a href="/design">Design</a></li>
                      <li><a href="/management">Management</a></li>
                      <li><a href="/marketing">Marketing</a></li>
                    </ul>
                </Col>
                <Col>
                <h3>Quick links</h3>
                  <ul>
                    <li><a href="/sitemap">Sitemap</a></li>
                  </ul>
                </Col>
            </Row>
            <Row>
              <Col lg={3} md={3} xs={3} className="social-icons">
              <a href="/facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="/twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="/linkedin"><i className="fa-brands fa-linkedin"></i></a>
              <a href="/instagram"><i className="fa-brands fa-instagram"></i></a>
              </Col>
              <Col>
                <a target="_blank" href="https://www.google.com/maps/place/Pozna%C5%84/@52.4005285,16.9016659,11z"><i className="fa-solid fa-location-dot"></i> Poznań</a>
              </Col>
            </Row>
            <Row className="padding-bottom-3 padding-top-3 legacy">
              <Col>© 2023 Hazle.pl</Col>
              <Col className="align-items-end">
                <a href="/terms">Terms</a>
                <a href="/privacy">Privacy</a>
              </Col>
            </Row>
          </Container>
        </div>
    </footer>
  );
};
