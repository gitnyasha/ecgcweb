import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import CustomsBondsDetails from "../../components/products/CustomsBondsDetails";

const CustomsBonds = () => {
    return (
        <>
            <Navbar />

           {/* <PageBanner
                pageTitle="Customs Bonds"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Customs Bonds"
            />*/}
            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <CustomsBondsDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default CustomsBonds;