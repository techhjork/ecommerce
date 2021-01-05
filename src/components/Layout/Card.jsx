import React from "react";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const CardComponent = (props) => {
  const history = useHistory();
  // console.log(props);
  const modal = () => {
    history.push(`/img/${props.id}`);
  };
  return (
    <Card>
      {/* <Link to={`/img/${props.id}`}> */}
      <Card.Img
        variant="top"
        src={props.image}
        fluid
        style={{ height: "300px" }}
        onClick={modal}
      />
      {/* </Link> */}
      <Card.Body>
        <Link to={`/product/${props.id}`}>
          <Card.Title as="h3">{props.name}</Card.Title>
        </Link>
        <Card.Text className="text-nowrap text-truncate">
          {props.desc}
        </Card.Text>
        <Rating
          value={props.rating}
          color="yellow"
          text={`${props.rating} Reviews`}
        />
        <Card.Title as="h2" className="my-3">
          ${props.price}
        </Card.Title>
        {/* { <Button variant="primary">ADD TO CART</Button>} */}
      </Card.Body>
    </Card>
  );
};
export default CardComponent;
