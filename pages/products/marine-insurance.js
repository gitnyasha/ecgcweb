import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import MarineInsuranceDetails from "../../components/products/MarineInsuranceDetails";

const MarineInsurance = () => {
    return (
        <>
            <Navbar />

            {/*<PageBanner
                pageTitle="Marine Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Marine Insurance"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <MarineInsuranceDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default MarineInsurance;