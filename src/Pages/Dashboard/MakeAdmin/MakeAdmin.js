import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import admin from "../../../images/admin.png";
import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://cryptic-ravine-18328.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <Container className="text center add-service pt-5">
        <Row>
          <Col className="text center p-lg-5" lg={6} md={6} sm={12}>
            <h1 className="text-center text-title text-gray">Make Admin</h1>
            <Form onSubmit={handleAdminSubmit}>
              <Form.Control
                className="w-100"
                type="email"
                onBlur={handleOnBlur}
                placeholder="Enter email"
              />
              <Button className="btn-buy" type="submit">
                Submit
              </Button>
            </Form>
            {success && (
              <Alert variant="success">Admin made successfully</Alert>
            )}
          </Col>
          <Col lg={6} md={6} sm={12}>
            <img className="img-fluid" src={admin} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MakeAdmin;
