import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    fetch("https://calm-tundra-53009.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [updated]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to delete?");
    if (confirmation) {
      const url = `https://calm-tundra-53009.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product?._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <>
      <div id="services" className="container-fluid">
        <h1 className="text-center mb-5 title-header">Manage Product</h1>
        <div className="row">
          {products.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 col-12 mb-5">
              <Card className="text-center">
                <Card.Header>Product Id: {product._id}</Card.Header>
                <Card.Body>
                  <Card.Title>Brand: {product.name}</Card.Title>
                  <Card.Text>
                   {product.description}
                  </Card.Text>
                  <Card.Text>
                   Price: ${product.price}
                  </Card.Text>
                  
                </Card.Body>
                <Card.Footer><Button className="btn-buy" onClick={() => handleDelete(product._id)}>Delete</Button></Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ManageProduct;
