import React from 'react';
import './DashboardHome.css';

const DashboardHome = () => {
    return (
        <div id="destination">
        <div className="covered">
          <div className="content text-center">
            <h1 className="text-title">Shop Now</h1>
            <h3 className="title-header text-center text-white mb-5">
              Word Hard So That You Can Shop Harder
            </h3>
          </div>
        </div>
        <div className="container-fluid text-center">
          <div className="numbers d-flex flex-md-row flex-wrap justify-content-center title-header">
            <div className="rect">
              <h1>
              <i class="fas fa-shipping-fast"></i>
              </h1>
              <h5>Free Shipping</h5>
            </div>
            <div className="rect">
              <h1>
              <i class="far fa-credit-card"></i>
              </h1>
              <h5>Fast Secure Payments</h5>
            </div>
            <div className="rect">
              <h1><i class="fas fa-shopping-cart"></i></h1>
              <h5>
              Premium proudcts
              </h5>
            </div>
            <div className="rect">
              <h1><i class="far fa-handshake"></i></h1>
              <h5>
              Free & Fast Delivery
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashboardHome;