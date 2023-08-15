import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import useIntersectionObserver from '../scripts/intersection-observer';


export const Privacy: React.FC = () => {
    
    useIntersectionObserver('.container *');

  return (
    <>
    {/* Section Hero */}
    <section className={`bg-neutral-900 padding-top-4 padding-bottom-4`}>
        <div className="content-wrapper">
          <Container>
          <div className="blob bg-secondary-500 left"></div>
            <Row className="align-items-center privacy">
                <Col xl={6} md={8} xs={12}>
                    <h2 className="margin-bottom-2">Privacy</h2>
                    <p>At Hazle.pl, we are committed to safeguarding your privacy and ensuring the security of 
                        your personal information. This Privacy Information outlines how we collect, 
                        use, disclose, and protect the information you provide to us through our website and 
                        related services. By using our website, you consent to the practices described in this Privacy Information.
                    </p>
                    <h3>1. Information Collection and Use:</h3>
                    <p>We may collect various types of information from users of our website:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> When you interact with our website or utilize our 
                        services, we may collect personal information such as your name, email address, phone number, 
                        and company details. We use this information to respond to your inquiries, provide services, 
                        and communicate with you.
                        </li>
                        <li><strong>Usage Data:</strong> We collect non-personal information about your interactions
                        with our website, including your IP address, browser type, operating system, and pages visited.
                        This data helps us improve our website's functionality and user experience.
                        </li>
                        <div className="blob bg-secondary-700 right"></div>
                    </ul>
                    <h3>2. Information Sharing and Disclosure:</h3>
                    <p>We do not sell, trade, or rent your personal information to third parties. 
                        However, we may share your information in the following circumstances:
                    </p>
                    <ul>
                        <li><strong>Service Providers:</strong> We may share your information with trusted third-party
                        service providers who assist us in delivering our services, such as hosting, analytics, and customer support.</li>
                        <li><strong>Legal Compliance:</strong> We may disclose your information if required by 
                        law or to protect our rights, privacy, safety, or property.
                        </li>
                    </ul>
                    <h3>3. Cookies and Tracking:</h3>
                    <p>We use cookies and similar technologies to enhance your browsing experience and gather usage data.
                        Cookies are small text files stored on your device. By using our website, you consent to the use 
                        of cookies as described in our Cookie Policy.
                    </p>
                    <h3>4. Your Choices:</h3>
                    <ul>
                        <li><strong>Opt-Out:</strong> You can choose not to provide us with certain personal information, but this might limit your ability to access certain services or features.</li>
                        <li><strong>Communication:</strong> If you no longer wish to receive promotional emails or communications from us, you can unsubscribe by following the instructions in the email or contacting us directly.</li>
                    </ul>
                    <h3>5. Security:</h3>
                    <p>We employ industry-standard security measures to protect your personal information from unauthorized access,
                        disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure,
                        and we cannot guarantee absolute security.
                    </p>
                    <div className="blob bg-primary-500 left"></div>
                    <h3>6. Children's Privacy:</h3>
                    <p>Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information
                        from children under this age. If you believe we have collected information from a child, please contact us to have it removed.
                    </p>
                    <h3>7. Changes to this Privacy Information:</h3>
                    <p>We may update this Privacy Information to reflect changes in our practices or for legal reasons.
                        We will notify you about significant changes via the email address provided or by prominently 
                        posting a notice on our website.
                    </p>
                </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
