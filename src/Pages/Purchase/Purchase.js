import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Purchase.css';

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [info, setInfo] = useState({});
  const { register, handleSubmit, reset } = useForm();
  console.log(user);

  const onSubmit = (data) => {
    const order = { users: data, product: info, status: "pending" };
    axios
      .post("https://cryptic-ravine-18328.herokuapp.com/addOrder", order)
      .then(function (response) {
        if (response.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  useEffect(() => {
    axios.get(`https://cryptic-ravine-18328.herokuapp.com/products/${id}`).then(function (response) {
      setInfo(response.data);
    });
  }, [setInfo, id]);
  return (
    <>
    <Header></Header>
    <div className="container-fluid service-info">
    
      <div className="row mt-5">
        <div className="col-md-6 col-12">
        <h3 className="text-title text-center">Product Deatils</h3>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={info?.img} />
            <Card.Body>
              <Card.Title>{info?.name}</Card.Title>
              <Card.Text>{info?.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Price: {info?.price}</ListGroupItem>
              <ListGroupItem>Status: Pending</ListGroupItem>
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-6 col-12 service mt-5">
          <h3 className="text-title text-center">User Deatils</h3>
          {/* <h3 className="text-center text-title text-white">User Information</h3> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              defaultValue={user.displayName}
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              type="email"
              defaultValue={user.email}
              {...register("email", { required: true })}
              placeholder="Email"
            />
             <input
              type="number"
              {...register("phone")}
              placeholder="Phone Number"
            />
             <input
              type="text"
              {...register("address")}
              placeholder="Address"
            />
            <input
              className="btn-submit fs-5 border-0 rounded-1 fw-bold"
              type="submit"
              value="Purchase"
            />
          </form>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default Purchase;
