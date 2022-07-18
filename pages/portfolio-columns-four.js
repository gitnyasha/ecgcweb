import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioColumnsFourCard from "../components/Portfolio/PortfolioColumnsFourCard";
import Footer from "../components/_App/Footer";

const PortfolioColumnsFour = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Columns Four"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Four"
      />

      <PortfolioColumnsFourCard />

      <Footer />
    </>
  );
};

export default PortfolioColumnsFour;
