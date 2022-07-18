import React from 'react';
import Footer from '../components/_App/Footer';
import Navbar from "../components/_App/Navbar";
import BondsAndFinancialGuaranteesProducts from "../components/Services/BondsAndFinancialGuaranteesProducts";

const BondsAndFinancialGuarantees = () => {
    return (
        <>
            <Navbar />

           {/* <PageBanner
                pageTitle="Bonds and Financial Guarantees"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Bonds and Financial Guarantees"
            />*/}
            <br/>
            <br/>
            <br/>

            <BondsAndFinancialGuaranteesProducts />

            <Footer />
        </>
    )
}

export default BondsAndFinancialGuarantees;