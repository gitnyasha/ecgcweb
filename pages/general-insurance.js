import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import GeneralInsuranceProducts from '../components/Services/GeneralInsuranceProducts';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";

const GeneralInsurance = () => {
    return (
        <>
            <Navbar />

            <br/>
            <br/>
            <br/>

            <GeneralInsuranceProducts />

            <Footer />
        </>
    )
}

export default GeneralInsurance;