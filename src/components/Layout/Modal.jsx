import React, { useState } from "react";
import { Button, Modal, Image, ListGroup } from "react-bootstrap";
import products from "../../products";
import Rating from "./Rating";
const ModalComponent = ({ match, history }) => {
  const [show, setShow] = useState(true);
  // console.log(history);
  const product = products.find((el) => el._id === match.params.id);
  const back = () => {
    history.goBack();
    setShow(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={back}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <p>{product.name}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>
              <Image src={product.image} fluid="true" className="img-fluid" />
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                color="yellow"
                text={`${product.rating} Reviews `}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{product.description}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="text-center d-flex">
              <Button className="mx-3" onClick={back}>
                ADD TO CART
              </Button>
              <Button className="mx-3 " variant="danger" onClick={back}>
                CLOSE
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
