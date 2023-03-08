import React from "react";
import Card from "react-bootstrap/Card";
import './Cards.css';
const Cards=(Cards)=> {
  return (
    <Card className="text-center card-comp">
      <Card.Img  className="cards-image" src={Cards.image} alt={Cards.cardHead}></Card.Img>
      <Card.Header className="card-head">{Cards.cardHead}</Card.Header>
      <Card.Body>
        <Card.Text className="card-content">{Cards.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;
