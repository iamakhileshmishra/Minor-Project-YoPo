import React from "react";
import Card from "react-bootstrap/Card";
import "./DevCard.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Cards = (Cards) => {
  return (
    <Card className="text-center card-comp">
      <Card.Img
        className="cards-image"
        src={Cards.image}
        alt={Cards.cardHead}
      ></Card.Img>
      <Card.Header className="card-head">{Cards.cardHead}</Card.Header>
      <Card.Body>
        <Card.Text className="card-content">{Cards.description}</Card.Text>
        <a
          href={Cards.git}
          className="icon-gl"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaGithub />
        </a>
        <a
          href={Cards.linkedin}
          className="icon-gl"
          rel="noreferrer"
          target={"_blank"}
        >
          <FaLinkedin />
        </a>
      </Card.Body>
    </Card>
  );
};

export default Cards;
