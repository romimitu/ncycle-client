import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useForm } from "react-hook-form";
import review from "../../../images/review.jpg";
import useAuth from '../../../hooks/useAuth';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        console.log(data);
         axios.post('https://calm-tundra-53009.herokuapp.com/addReview', data)
             .then(res => {
                if (res.data.insertedId) {
                     alert('added successfully');
                     reset();
                 }
             });
      };
    return (
        <div>
            <Container className="text center add-service pt-5">
      <Row>
        <Col className="text center p-lg-5" lg={6} md={6} sm={12}>
          
            <h1 className="text-center text-title text-gray">
              Review
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
              <textarea
                {...register("comment")}
                placeholder="What's your feedback?"
              />
              <input type="decimal" {...register("rating")} placeholder="Rate us between 1 to 5" />

              <input
                className="btn-buy fs-3 border-0 rounded-1 fw-bold"
                type="submit"
              />
            </form>
          
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img className="img-fluid" src={review} alt="" />
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Review;