import React from "react";
import "./Banner.css";
import bg1 from "../../../images/bg1.jpg";
import bg2 from "../../../images/bg2.jpg";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div className="row content mt-lg-5">
          <div className="col-md-6 col-12 banner">
            <div className="mt-lg-5 ">
              <h3 className="heading-style">Junoir Bycycle</h3>
              <h1>top Junoir Bycycles collection</h1>
            </div>

            <h5 className="mt-3">
            if you cant stop thinking about it <span>buy it</span>
            </h5>
            <button className="px-4 py-1 btn-buy">Buy Now</button>
          </div>
          <div className="col-md-6 col-12">
            <Carousel id="home">
              <Carousel.Item>
                <img className="d-block w-100" src={bg1} alt="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={bg2} alt="Second slide" />

                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
