import React from 'react';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import GolfersInsuranceDetails from "../../components/products/GolfersInsuranceDetails";

const GolfersInsurance = () => {
    return (
        <>
            <Navbar />

          {/*  <PageBanner
                pageTitle="Golfers Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Golfers Insurance"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <GolfersInsuranceDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default GolfersInsurance;