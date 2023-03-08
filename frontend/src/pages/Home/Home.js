import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Cards from "../../components/Cards/Cards";
import { CardData } from "../../utils/data";
export default function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h2 className="home-heading">
            <img src="./YoPo-logo.png" alt="Logo" height="30px"></img>
            <span className="first-text">Yo</span>Po
          </h2>
          <h3 className="home-sub-h">
            <span className="first-text">A personal </span>Yoga Trainer
          </h3>
          <nav>
            <button className="btn btns btn-secondary border-0" id="about-btn">
              <a href="#features">
                <span className="first-text ">F</span>eatures
              </a>
            </button>

            <button className="btn btns btn-secondary border-0" id="about-btn">
              <a href="#Contact-Us">
                <span className="first-text ">C</span>ontact Us
              </a>
            </button>

            <Link to="/about">
              <button
                className="btn btns btn-secondary border-0"
                id="about-btn"
              >
                <span className="first-text ">A</span>bout
              </button>
            </Link>
          </nav>
        </div>
        <Container>
          <Row>
            <Col>
              <div className="landing-page">
                <div className="landing-page-content">
                  <p className="content1">
                    Yoga is a mind and body practice. Various styles of yoga
                    combine physical postures, breathing techniques, and
                    meditation or relaxation. Yoga is an ancient practice that
                    may have originated in India. It involves movement,
                    meditation, and breathing techniques to promote mental and
                    physical well-being.
                  </p>
                  <div className="btn-section">
                    <Link to="/start">
                      <button className="btn btns start-btn">
                        Let's Start
                      </button>
                    </Link>
                    <Link to="/tutorials">
                      <button className="btn btns start-btn">Tutorials</button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="landing-page">
                <div>
                  <img
                    className="illustration"
                    alt="landing page illustration"
                    src="./illustration1.svg"
                  ></img>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="highlight" id="features">
        <div className="high-header">
          <h1 className="home-sub-high" color="black">
            <sapn className="first-text-w">Highlighting</sapn>{" "}
            <sapn className="first-text-w">Features</sapn>
          </h1>
        </div>

        <Row>
          {CardData.map((items) => (
            <Col>
              <Cards
                key={items.id}
                cardHead={items.cardHead}
                description={items.description}
                image={items.image}
              ></Cards>
            </Col>
          ))}
        </Row>
      </div>
      <section>
        <div id="Contact-Us">
          <h1 className="home-sub-high" color="black">
            <sapn className="first-text-w">Contact</sapn>{" "}
            <sapn className="first-text-w">Us</sapn>
          </h1>
          <Row>
            <Col>
              <div className="img-part">
                <img
                  src="./contact.svg"
                  alt="contact-illustraion"
                  height={"80%"}
                ></img>
              </div>
            </Col>
            <Col>
              <div className="contact-form">
                <ContactForm></ContactForm>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <div className="footer-section">
        <div className="btn-container">
          <Button variant="outline-primary" className="opr ">
            Open Report
          </Button>
          <Button variant="outline-primary" className="opr ">
            Open Presentation
          </Button>
          <Button variant="outline-primary" className="opr">
            Open Repository
          </Button>
        </div>
        <div className="footer-text">
          {/* <p>Made With ❣️& ☕</p> */}
        </div>
      </div>
    </div>
  );
}
