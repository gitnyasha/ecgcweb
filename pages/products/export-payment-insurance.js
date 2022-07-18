import React from 'react';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import ExportPaymentInsurancePolicyDetails from "../../components/products/ExportPaymentInsurancePolicyDetails";

const DomesticInsuranceDetails = () => {
    return (
        <>
            <Navbar />

          {/*  <PageBanner
                pageTitle="Export Payment Insurance Policy"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Export Payment Insurance Policy"
            />*/}

            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <ExportPaymentInsurancePolicyDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default DomesticInsuranceDetails;