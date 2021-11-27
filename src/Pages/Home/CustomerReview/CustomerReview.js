import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./CustomerReview.css";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-ravine-18328.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="container">
      <h1 className="text-title text-center">Review</h1>
      <h6 className="text-center title-header mb-5">What's Our Client Says About Us</h6>
      <Row xs={1} md={2} className="g-4">
        {reviews.map((review) => (
          <Col key={review._id}>
            <Card className="details mb-5">
              <Card.Body>
                <Card.Text>{review.comment}</Card.Text>
                <Card.Text>
                  <Rating
                    initialRating={review.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>
                </Card.Text>
                <Card.Text >Reviewed by <span className="title-name">{review.name}</span></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CustomerReview;
