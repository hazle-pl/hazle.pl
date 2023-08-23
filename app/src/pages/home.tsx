import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InfinityGalerry from '../components/infinity-gallery';
import useIntersectionObserver from '../scripts/intersection-observer';
import MultiItemCarousel from '../components/multi-item-carousel';
import ContactForm from '../components/contact-form';

export const Home: React.FC = () => {
  const pictures = [
    { src: '/img/logo-superspas.png', alt: 'Superspas' },
    { src: '/img/logo-platinumspas.png', alt: 'Platinum Spas Polska' },
    { src: '/img/logo-homedeluxe.webp', alt: 'Home-Deluxe Polska' },
    { src: '/img/logo-awt.png', alt: 'AWT Polska' },
    { src: '/img/logo-hanscraft.png', alt: 'Hanscraft Polska' },
    { src: '/img/logo-infra-bruk.png', alt: 'Infra-Bruk' },
    { src: '/img/logo-bewell.png', alt: 'Bewell Polska' },
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
      <section className="bg-neutral-900 padding-top-5 padding-bottom-5">
        <div className="content-wrapper">
          <Container>
            <h2>Our service</h2>
              <Row className="padding-top-3">
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


      <section id="idea" className="bg-neutral-900">
        <div className="content-wrapper">
          <Container>
          <div className="blob bg-secondary-700 right"></div>
            <h2>Power of idea</h2>
            <Row className='margin-top-3 margin-bottom-3'>
              <Col xl={6} md={6} xs={12}>
                <img className='full-width' src="img/idea.png"/>
              </Col>
              <Col class xl={6} md={6} xs={12}>
                <div className="card">
                    <p>At Hazle, we believe in the power of a good idea. It's the spark that sets everything in motion. 
                    From captivating designs to functional websites and innovative apps, it all begins with that initial concept. 
                    Let us turn your ideas into reality and create something remarkable together.</p>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="design" className="bg-neutral-900">
        <div className="content-wrapper">
          <Container className='margin-top-5 margin-bottom-5'>
            <h2>Unbound Design Visions</h2>
            <div className="blob bg-secondary-500 left"></div>
            <div className="blob bg-primary-700 center"></div>
            <Row className='margin-top-3 margin-bottom-3 mobile-reverse-column'>
              <Col xl={6} md={6} xs={12}>
                <div className="card">
                    <p>We understand that great design is the starting point for every successful digital venture.
                       Our team of talented designers is passionate about crafting captivating visuals that set your brand apart. 
                       From logos to comprehensive design systems,
                       we create remarkable designs that leave a lasting impression. 
                       Let us bring your vision to life through the power of exceptional design..</p>
                  </div>
              </Col>
              <Col xl={6} md={6} xs={12}>
                <img className='full-width' src="img/design.png"/>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section id="development" className="bg-neutral-900">
        <div className="content-wrapper">
          <Container className='margin-top-5 margin-bottom-5'>
            <h2>Say Hello to world.</h2>
            <div className="blob bg-primary-900 center"></div>
            <div className="blob bg-secondary-500 right"></div>
            <Row className='margin-top-3 margin-bottom-3'>
              <Col xl={6} md={6} xs={12}>
              <div className="card code">
                  <p><span className="blue">import </span> <span className="red">React </span> <span className="blue">from </span> <span className="green">'react' </span>;</p>
                  <br/>
                  <p><span className="blue">class </span> <span className="red">App </span> <span className="blue">extends </span> <span className="red">React.Component </span> {`{`}</p>
                  <p>&nbsp;{`handleClick = () => {`}</p>         
                  <p>&nbsp;&nbsp;<span className="red">alert</span>(<span className="green">"Hello World!"</span>);</p>   
                  <p>&nbsp;{`}`}</p>   
                  <br/>
                  <p>&nbsp;<span className="red">render</span>() {`}`}</p>   
                  <p>&nbsp;&nbsp;<span className="blue">return </span> {`(`}</p>   
                  <p>&nbsp;&nbsp;&nbsp;{`<>`}</p>   
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;{`<button`} onClick=<span className="green">{`{this.handleClick}`}</span>{`>Click me</button>`}</p>   
                  <p>&nbsp;&nbsp;&nbsp;{`</>`}</p>   
                  <p>&nbsp;&nbsp;{`);`}</p>   
                  <p>&nbsp;{`}`}</p>   
                  <p>{`}`}</p>  
                  <br/> 
                  <p><span className="blue">export default </span><span className="red">App</span>;</p>  

                </div>
              </Col>
              <Col xl={6} md={6} xs={12}>
                <div className="card">
                    <p>We are passionate about coding and creating exceptional websites and mindblowing web apps.
                       Our skilled developers write clean, efficient code to bring your vision to life.
                        From responsive layouts to optimized performance, we craft custom websites that impress and engage your audience.
                        Partner with us to unlock the full potential of your online presence. Let's create something extraordinary together.</p>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* <section id="contact-us" className="bg-neutral-900">
        <div className="content-wrapper">
          <Container  className='margin-top-5 margin-bottom-5'>
          <div className="blob bg-secondary-700 left"></div>
          <h2 className="text-align-center">Message us</h2>
            <Row className='margin-top-3 margin-bottom-3 justify-content-center'>
            <div className="blob bg-secondary-500 right"></div>
              <Col xl={5} md={6} xs={12}>
                <ContactForm />
                <div className="blob bg-primary-500 left"></div>
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}

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
