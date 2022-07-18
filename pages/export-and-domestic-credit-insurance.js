import React from 'react';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";
import ExportAndDomesticCreditInsuranceProducts from "../components/Services/ExportAndDomesticCreditInsuranceProducts";

const ExportAndDomesticCreditInsurance = () => {
    return (
        <>
            <Navbar />

            <br/>
            <br/>
            <br/>
         {/*   <PageBanner
                pageTitle="Credit Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Credit Insurance"
            />
*/}
            <ExportAndDomesticCreditInsuranceProducts />

            <Footer />
        </>
    )
}

export default ExportAndDomesticCreditInsurance;