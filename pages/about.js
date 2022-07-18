import React from 'react';
import AboutUsContent from '../components/About/AboutUsContent';
import OurVision from '../components/About/OurVision';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={"row"}>
                <div className="card">
                    <img src="/images/banner/banner.jpg" className="card-img-top" alt="..." style={{borderRadius: '15px'}}/>

                </div>
            </div>
            <AboutUsContent />

            <OurVision />
            
            <Footer />
        </>
    )
}

export default About;