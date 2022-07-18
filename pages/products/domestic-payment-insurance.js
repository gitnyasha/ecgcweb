import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import DomesticPaymentInsurancePolicyDetails from "../../components/products/DomesticPaymentInsurancePolicyDetails";
import Navbar from "../../components/_App/Navbar";

const DomesticInsuranceDetails = () => {
    return (
        <>
            <Navbar />

          {/*  <PageBanner
                pageTitle="Domestic Payment Insurance Policy"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Domestic Payment Insurance Policy"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <DomesticPaymentInsurancePolicyDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default DomesticInsuranceDetails;