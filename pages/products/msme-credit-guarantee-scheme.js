import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import DomesticPaymentInsurancePolicyDetails from "../../components/products/DomesticPaymentInsurancePolicyDetails";
import Navbar from "../../components/_App/Navbar";
import MsmeCreditGuaranteeSchemeDetails from "../../components/products/MsmeCreditGuaranteeSchemeDetails";

const MsmeCreditGuaranteeScheme = () => {
    return (
        <>
            <Navbar />

           {/* <PageBanner
                pageTitle="MSME Credit Guarantee Scheme"
                homePageUrl="/"
                homePageText="Home"
                activePageText="MSME Credit Guarantee Scheme"
            />*/}

            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <MsmeCreditGuaranteeSchemeDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default MsmeCreditGuaranteeScheme;