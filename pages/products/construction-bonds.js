import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import ContactWithAgent from '../../components/Common/ContactWithAgent';
import Footer from '../../components/_App/Footer';
import Navbar from "../../components/_App/Navbar";
import ConstructionBondsDetails from "../../components/products/ConstructionBondsDetails";

const ConstructionBonds = () => {
    return (
        <>
            <Navbar />

            {/*<PageBanner
                pageTitle="Construction Bonds"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Construction Bonds"
            />*/}

            <br/>
            <br/>
            <br/>

            <div className="pt-100">
                <ConstructionBondsDetails />
            </div>

            <ContactWithAgent />

            <Footer />
        </>
    )
}

export default ConstructionBonds;