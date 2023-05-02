import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useState } from "react";
const info = require("../../data.json");

function TourDetails() {
  const { id } = useParams();
  const resultx = info.filter((item) => item.id == id);
  let [cardText, setCartText] = useState(
    resultx[0].info.slice(0, 100) + "....."
  );
  let [buttonText, setButtonText] = useState(" show more info ");

  const renderCardText = () => {
    setCartText((cardText = resultx[0].info));
    setButtonText((buttonText = " show less "));
  };

  return (
    <div>
      <Card style={{ width: "50rem" }}>
        <Card.Img variant="top" src={resultx[0].image} alt="page" />
        <Card.Body>
          <Card.Title>{resultx[0].name}</Card.Title>
          <Card.Text>{"price " + resultx[0].price}</Card.Text>
          <Card.Text>{cardText}</Card.Text>
          <Button onClick={renderCardText} variant="outline-primary">
            {buttonText}
          </Button>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}
export default TourDetails;
