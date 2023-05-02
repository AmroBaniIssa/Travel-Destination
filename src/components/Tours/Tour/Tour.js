import { useState } from "react";
import TourDetails from "../../TourDetails/TourDetails";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const info = require("../../../data.json");

function Tour(props) {
  return (
    <div>
      {props.ArrayData.map((item, i) => {
        return (
          <div key={item.id}>
            <hr></hr>
            <Link to={`/city/${item.id}`}>
              <Card style={{ width: "25rem" }}>
                <Card.Img variant="top" src={item.image} alt="page" />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                  </Card.Text>
                  {/* <Button onClick={renderInfo} variant="primary"> more informations </Button> */}
                </Card.Body>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Tour;

