import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import GuaranteeFacilityApplicationForm from "../../components/Forms/GuaranteeFacility/GuaranteeFacilityApplicationForm";

const GuaranteeFacilityApplication = () => {
    return (
        <>
            <Navbar/>
            <br/>
            <GuaranteeFacilityApplicationForm/>

            <Footer/>
        </>
    )
}

export default GuaranteeFacilityApplication;