import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import ConstructionBondsDetails from "../../components/products/ConstructionBondsDetails";
import HomeProtectionInsuranceDetails from "../../components/products/HomeProtectionInsuranceDetails";

const HomeProtectionInsurance = () => {
    return (
        <>
            <Navbar />

          {/*  <PageBanner
                pageTitle="Home Protection Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Home Protection Insurance"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <HomeProtectionInsuranceDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default HomeProtectionInsurance;