import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from '../../content_option';

export const About = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // This useEffect is called when the component mounts and sets isDarkTheme to false.
    setIsDarkTheme(false);
  }, []);

  const tableClassName = isDarkTheme ? 'table-dark' : 'table-light';

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className={`t_border my-4 ml-0 text-left ${isDarkTheme ? 'border-light' : ''}`} />
            {/* Changed the template literal to use backticks (`) for string interpolation. */}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className={`color_sec py-4 ${isDarkTheme ? 'text-white' : ''}`}>{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className={`color_sec py-4 ${isDarkTheme ? 'text-white' : ''}`}>Academic Details</h3>
          </Col>
          <Col lg="7">
            <table className={`table caption-top ${tableClassName} mb-5`}>
              {/* Changed the template literal to use backticks (`) for string interpolation. */}
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className={`color_sec py-4 ${isDarkTheme ? 'text-white' : ''}`}>Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => (
              <div key={i} className="mb-4">
                <h3 className={`progress-title ${isDarkTheme ? 'text-white' : ''}`}>{data.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${data.value}%`,
                    }}
                  >
                    <div className="progress-value">{data.value}%</div>
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className={`color_sec py-4 ${isDarkTheme ? 'text-white' : ''}`}>Achievements</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => (
              <div className={`service_ py-4 ${isDarkTheme ? 'text-white' : ''}`} key={i}>
                <h5 className={`service__title ${isDarkTheme ? 'text-white' : ''}`}>{data.title}</h5>
                <p className={`service_desc ${isDarkTheme ? 'text-white' : ''}`}>{data.description}</p>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
