import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import { Link } from "react-router-dom";

const Explore = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://cryptic-ravine-18328.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
    return (
        <>
        <div id="explore" className="container-fluid mb-5 mt-5">
            <Header></Header>
      <h1 className="text-center pt-5 mt-5 mb-5 text-title">Ladies Bag</h1>
      <div className="row p-5">
        {
          loading?(<div className='d-flex justify-content-center'>
          <Spinner animation="border" />
        </div>):(products.map((product) => (
            <div key={product._id} className="col-lg-3 col-md-4 col-12 mb-5 ">
              <div className="card card-details shadow-lg text-center ">
                <div className="text-center">
                <img
                  src={product?.img}
                  className="card-img-top card-img w-75 p-3"
                  alt="..."
                />
                </div>
                <div className="card-body ">
                  <h1 className="card-title text-center">{product?.name}</h1>
                  <p className="card-text">{product?.description}</p>
                  <h3 className="card-text text-center">${product?.price}</h3>
                  <Link to={`/purchase/${product?._id}`}>
                    <div className="text-center py-2">
                      <button className="text-center btn-buy px-3 py-1 mb-2">
                        Book Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )))
        }
      </div>
      
    </div>
    <Footer></Footer>
    </>
    );
};

export default Explore;