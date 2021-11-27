import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import CustomerReview from '../CustomerReview/CustomerReview';
import About from '../About/About';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Shop></Shop>
            <CustomerReview></CustomerReview>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;