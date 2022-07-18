import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PortfolioColumnsThreeCard from "../components/Portfolio/PortfolioColumnsThreeCard";
import Footer from "../components/_App/Footer";

const PortfolioColumnsThree = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Portfolio Columns Three"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Portfolio Columns Three"
      />

      <PortfolioColumnsThreeCard />

      <Footer />
    </>
  );
};

export default PortfolioColumnsThree;
