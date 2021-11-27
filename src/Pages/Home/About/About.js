import React from "react";
import { Link } from "react-router-dom";
import about from "../../../images/about.jpg";

const About = () => {
  return (
    <> 
      <div id="about">
        <div className="container-fluid mt-5 mb-5">
          <h1 className="text-center mt-5 text-title">About Us</h1>
          <div className="row">
            <div className="col-md-6 col-12 mt-lg-5 pt-lg-5">
              <h3 className="text-center mt-5 title-header">Establishment</h3>
              <p className="text-left px-5 py-3">
                More than a million of the world's most successful brands trust
                Shopsy to sell, ship and process payments anywhere. Shopsy has
                grown from 5 people in a coffee shop to over 5,000 across the
                globe. With over 1,700,000 businesses powered by Shopsy, we care
                deeply about the work we do. We’re constant learners who thrive on
                change and seek to have an impact in everything we do.
              </p>
              <div className="text-center">
              <Link className="text-center" to="/explore">
                <button className="btn-buy text-center px-4 py-2">Shop Now</button>
              </Link>
              </div>
              {/* <Link to={'/detailabout'}><button className="view-more text-center mt-1">Read More</button></Link> */}
            </div>
            <div className="col-md-6 col-12">
              <img className="w-100" src={about} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <div id="about">
        <div className="container-fluid mt-5 mb-5">
          <h1 className="text-center mt-5 text-title">Newsletter</h1>
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="title-header mb-3">Stay Update</h3>
              <div className="input-group" style={{width: '400px', margin: '0 auto'}}>
                <input
                  type="text"
                  className="form-control bg-dark text-white"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Email"
                />
                <div className="btn-buy px-3">Submit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
