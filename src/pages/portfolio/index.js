import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta } from '../../content_option';

export const Portfolio = () => {
  const resumePdfUrl = 'https://drive.google.com/file/d/1VWY5jd7j7ZM-yOxDrELtph8angCVJ__R/view'; 

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
       
        <div className="resume-download">
          <p className="resume-description">
            Download my resume to learn more about my skills and experiences.
          </p>
          <a href={resumePdfUrl} target="_blank" download="resume.pdf">
            <button className="download-button" >Download Resume</button>
          </a>
        </div>
      </Container>
    </HelmetProvider>
  );
};
