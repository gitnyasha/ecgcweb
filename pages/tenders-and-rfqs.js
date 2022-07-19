import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend } from "./api/api";

const TendersAndRfqs = () => {
  const [tenders, setTenders] = React.useState([]);
  React.useEffect(() => {
    backend
      .get("/api/tenders-and-rfqs")
      .then((response) => {
        setTenders(response.data.tenders);
      })
      .catch((error) => console.error(error));
  }, []);
  const tnq = tenders.map((job) => (
    <div className="col-lg-4 col-sm-6">
      <div className="single-client">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </div>
    </div>
  ));
  if (tenders.length > 0) {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="tenders"
          homePageUrl="/"
          homePageText="Home"
          activePageText="tenders"
        />

        <div className="client-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>ECGC tenders</h2>
            </div>

            <div className="row">{tnq}</div>
          </div>
        </div>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="tenders"
          homePageUrl="/"
          homePageText="Home"
          activePageText="tenders"
        />

        <div className="client-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>ECGC tenders and rfqs</h2>
            </div>
            <div className="row">
              <h3>No tenders at the moment</h3>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default TendersAndRfqs;
