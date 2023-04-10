import React from "react";
import Nav from "react-bootstrap/Nav";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import { AuthContext } from "../../AuthProvider";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Carousel from "../../components/Carousel/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import Cards from "../../components/Cards/Cards";
import { images } from "../../utils/data";
import { CardData } from "../../utils/data";
import { useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
export default function Home() {
  const { currentUser } = useContext(AuthContext);
  const [setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser, setUsername]);

  const clickLogout = () => {
    navigate("/login");
    localStorage.clear();
  };

  const clickDashboard = () => {
    navigate("/dashboard");
  };
  let user = localStorage.getItem("user-info");
  // console.log(localStorage.getItem('user-info'))
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
          <Nav>
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

            <button className="btn btns btn-secondary border-0" id="about-btn">
              <Link to="/about">
                <span className="first-text ">A</span>bout
              </Link>
            </button>

            <Nav>
              <NavDropdown title={user} className="home-sub-h profile-sec">
                <NavDropdown.Item onClick={clickDashboard}>
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item onClick={clickLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Nav>
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
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="landing-page">
                <div className="carousel-field">
                  <Carousel images={images} />
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
      <Container className="mt-4">
        <div id="Contact-Us">
          <h1 className="home-sub-high" color="black">
            <sapn className="first-text-w">Contact</sapn>{" "}
            <sapn className="first-text-w">Us</sapn>
          </h1>

          <div className="img-part">
            <img
              src="./contact.svg"
              alt="contact-illustraion"
              height={"400px"}
            ></img>
          </div>

          <div className="contact-form">
            <ContactForm></ContactForm>
          </div>
        </div>
      </Container>
    </div>
  );
}
