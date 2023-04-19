import React from "react";

import "./About.css";
import { projdesc, DevData } from "../../utils/data";
import { Container, Row, Col } from "react-bootstrap";

import DevCard from "../../components/DevCard/DevCard";

export default function About() {
  return (
    <div className="about-container">
      <h2 className="home-heading">
        <a href="/">
          <img src="./YoPo-logo.png" alt="Logo" height="30px"></img>
          <span className="first-text">Yo</span>Po
        </a>
      </h2>
      <h5 className="about-heading">
        <span className="first-text">About</span>{" "}
        <span className="first-text-w">Us</span>
      </h5>
      <hr className="rule"></hr>
      <Container className="about-nit text-center">
        <Row>
          <Col>
            <div className="project-desc">{projdesc}</div>
          </Col>
          <Col>
            {" "}
            <img className="nit-logo" src="nit-logo.png" alt="nit-logo"></img>
          </Col>
        </Row>
      </Container>
      <hr className="rule"></hr>
      <h5 className="about-heading">
        <span className="first-text">About</span>{" "}
        <span className="first-text-w">Faculty</span>
      </h5>
      <Container className="about-faculty">
        {/* <div className="prof-img text-center">
          <img
            src="faculty.jpeg"
            alt="faculty-pic"
            height={"200px"}
            width={"200px"}
          ></img>
        </div> */}
        <div className="prof-details">
          <h5 className="text-center">
            <a
              href="https://www.nitjsr.ac.in/people/profile/CS108"
              rel="noreferrer"
              target={"_blank"}
            >
              Dr. Mantosh Biswas
            </a>
          </h5>
          <h5 className="text-center">Assistant Professor </h5>
          <h5 className="text-center">Computer science & Engineering </h5>
        </div>
      </Container>
      <hr className="rule"></hr>
      <h5 className="about-heading">
        <span className="first-text">About</span>{" "}
        <span className="first-text-w">Developers</span>
      </h5>
      <Container className="about-developer">
        <Row>
          {DevData.map((items) => (
            <Col>
              <DevCard
                key={items.id}
                cardHead={items.cardHead}
                description={items.description}
                image={items.image}
                git={items.git}
                linkedin={items.linkedin}
              ></DevCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
