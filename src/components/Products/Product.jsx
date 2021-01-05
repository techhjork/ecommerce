import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import products from "../../products";
import CardComponent from "../Layout/Card";
import { listProduct } from "../../action/ProductActions";
const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  console.log(products);
  useEffect(() => {
    dispatch(listProduct());
    console.log(productList);
  }, []);
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product._id} xl={3} md={6} sm={12} xs={12} className="p-1">
            <CardComponent
              id={product._id}
              image={product.image}
              desc={product.description}
              name={product.name}
              price={product.price}
              numReviews={product.numReviews}
              rating={product.rating}
              countInStock={product.countInStock === 0}
              category={product.category}
              brand={product.brand}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Product;
