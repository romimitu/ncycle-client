import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://cryptic-ravine-18328.herokuapp.com/booking/?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to delete?");
    if (confirmation) {
      const url = `https://cryptic-ravine-18328.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = myOrders.filter((order) => order?._id !== id);
            setMyOrders(remaining);
          }
        });
    }
  };
  return (
    <div id="orders" className="container text-center ">
    <h1 className="text-center my-lg-5 order-top title-header">Order for {user.displayName}</h1>
    <div className="row">
      {myOrders.map((order) => (
        <div key={order._id} className="col-lg-4 col-md-6 col-12 mb-5">
          <div className="card card-details shadow-lg">
            <img
              src={order?.product.img}
              className="card-img-top card-img p-3 w-100"
              alt="..."
            />
            <div className="card-body ">
              <h1 className="card-title text-center">
                {order?.product.name}
              </h1>
              <hr />
              <h3 className="card-text text-center">Cost:
                ${order?.product.price}
              </h3>
              <hr />
              <p className="card-text text-center">Details:
                ${order?.product.description}
              </p>
              <hr />
              <h6 className="card-text text-center">Status:
                {order?.status}
              </h6>
              <hr />

              <button className=" px-5 py-2 fw-bold text-center btn-buy" onClick={() => handleDelete(order._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MyOrder;
