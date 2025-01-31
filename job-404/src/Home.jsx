import React from 'react';
import Navbar from './Components/Navbar';
import Banner from './Components/banner';
import Searchbar from './Components/searchbar';
import SignupBanner from './Components/signup_banner';
import Footer from './Components/footer';
import ServiceCounts from './Components/service_counts';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Searchbar />
            <Banner />
            <ServiceCounts />
            <SignupBanner />
            <Footer/>
        </div>
    );
};

export default Home;
