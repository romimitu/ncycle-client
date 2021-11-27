import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from 'axios';
import { useForm } from "react-hook-form";
import product from "../../../images/add.jpg";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
     axios.post('https://cryptic-ravine-18328.herokuapp.com/addProduct', data)
         .then(res => {
            if (res.data.insertedId) {
                 alert('added successfully');
                 reset();
             }
         });
  };
  return (
    <Container className="text center add-service pt-5">
      <Row>
        <Col className="text center p-lg-5 p-sm-0" lg={6} md={6} sm={12}>
          
            {/* <h1 className="text-center text-title text-gray">
              Add Product
            </h1> */}
            <h1 className="title-header text-center">Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
              />
              <textarea
                {...register("description")}
                placeholder="Description"
              />
              <input type="number" {...register("price")} placeholder="Price" />

              <input {...register("img")} placeholder="img Url" />
              <input
                className="btn-buy fs-3 border-0 rounded-1 fw-bold"
                type="submit"
              />
            </form>
          
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img className="img-fluid" src={product} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
