import axios from "axios";
import React, { useEffect, useState } from "react";
import './ManageOrder.css'

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    fetch("https://cryptic-ravine-18328.herokuapp.com/allbooking")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [updated]);

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
            const remaining = orders.filter((order) => order?._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  const handleUpdate = (id) => {
    axios
      .put(`https://cryptic-ravine-18328.herokuapp.com/booking/${id}`, { id })
      .then(function (response) {
        // console.log(response.data);
        if (response.data.modifiedCount) {
          window.alert("Status Updated Successfully!!");
          setUpdated(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      
        <h1 className="text-title text-center mb-5">Manage Order</h1>
        <div className="row">
      {orders.map(order =>
        <div key={order._id} className="col-lg-4 col-md-6 mb-5">
          <div className="card card-details shadow-lg ">
            <div className="text-center">
            <img
              src={order?.product.img}
              className="card-img-top card-img p-3 w-50 "
              alt="..."
            />
            </div>
            <div className="card-body ">
              <h3 className="card-title text-center">
              {order?.product?.name}
              </h3>
              <hr />
              <h5 className="card-text text-center">Cost:
                ${order?.product.price}
              </h5>
              <hr />
              <p className="card-text text-center">Details:
                ${order?.product.description}
              </p>
              <hr />
              <h6 className="card-text text-center">Status:
                {order?.status}
              </h6>
              <hr />

              <div className="btn-grp">
              <button className=" px-2 py-1 fw-bold text-center btn-buy" onClick={() => handleDelete(order._id)}>
                Delete
              </button>
              <button className=" px-2 py-1 fw-bold text-center btn-buy" onClick={() => handleUpdate(order._id)}>
                Update Status
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
      
    </>
  );
};

export default ManageOrder;
