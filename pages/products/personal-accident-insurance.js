import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import PersonalAccidentInsuranceDetails from "../../components/products/PersonalAccidentInsuranceDetails";

const PersonalAccidentInsurance = () => {
    return (
        <>
            <Navbar />

           {/* <PageBanner
                pageTitle="Personal Accident Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Personal Accident Insurance"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <PersonalAccidentInsuranceDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default PersonalAccidentInsurance;