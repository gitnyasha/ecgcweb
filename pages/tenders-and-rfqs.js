import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import TendersAndRfqs from "../components/Services/TendersAndRfqs";

const TendersAndRfq = () => {
  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      {/*   <PageBanner
                pageTitle="Credit Insurance"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Credit Insurance"
            />
*/}
      <TendersAndRfqs />

      <Footer />
    </>
  );
};

export default TendersAndRfq;
