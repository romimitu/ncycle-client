import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://calm-tundra-53009.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const pd=data.slice(0,6);
        setProducts(pd);
        setLoading(false);
      });
  }, []);
    return (
        <div id="products" className="container mb-5 mt-5">
      <h1 className="text-center mt-5 text-title">Junior Bycycle</h1>
      <h6 className="text-center title-header mb-5">Your Desirable Bycycles Are Here</h6>
      <div className="row mt-5">
        {
          loading?(<div className='d-flex justify-content-center'>
          <Spinner animation="border" />
        </div>):(products.map((product) => (
            <div key={product._id} className="col-lg-4 col-md-6 col-12 mb-5 mt-5">
              <div className="card card-details border-none text-center ">
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
                        Buy Now
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
    );
};

export default Products;