import React from 'react';
import NavbarTwo from '../components/_App/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />

            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className={"row"}>
                <div className="card">
                    <img src="/images/banner/contact-us-banner.jpg" className="card-img-top" alt="..."/>

                </div>
            </div>

            <ContactForm />
            
            <Map />
            
            <Footer />
        </>
    )
}

export default Contact;