import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import ConstructionBondsDetails from "../../components/products/ConstructionBondsDetails";
import MotorInsuranceDetails from "../../components/products/MotorInsuranceDetails";

const MotorInsurance = () => {
    return (
        <>
            <Navbar />

            {/*<PageBanner
                pageTitle="Motor Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Motor Insurance"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <MotorInsuranceDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default MotorInsurance;