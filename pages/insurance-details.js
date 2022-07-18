import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import AchievementContent from "../components/About/AchievementContent";
import GetAFreeQuoteFormStyleTwo from "../components/Common/GetAFreeQuoteFormStyleTwo";
import ContactWithAgent from "../components/Common/ContactWithAgent";
import Footer from "../components/_App/Footer";

const InsuranceDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Insurance Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Insurance Details"
      />

      <div className="pt-100">
        <AchievementContent />
      </div>

      <GetAFreeQuoteFormStyleTwo />

      <ContactWithAgent />

      <Footer />
    </>
  );
};

export default InsuranceDetails;
