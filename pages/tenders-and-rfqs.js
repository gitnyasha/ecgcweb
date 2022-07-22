import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend } from "./api/api";
import Moment from "moment";

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
  const tnq = tenders.map((p) => (
    <tr key={p.id}>
      <td>{p.title}</td>
      <td>{Moment(p.date_posted).format("MMMM Do YYYY")}</td>
      <td>{Moment(p.deadline).format("MMMM Do YYYY")}</td>
      <td>
        <a href="#">Download</a>
      </td>
    </tr>
  ));
  if (tenders.length > 0) {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="ECGC Tenders"
          homePageUrl="/"
          homePageText="Home"
          activePageText="tenders"
        />

        <div className="client-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="table-responsive">
                <table
                  className="table top-selling-table"
                  id="datatablesSimple"
                >
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Issued</th>
                      <th>Deadline</th>
                      <th>Document</th>
                    </tr>
                  </thead>
                  <tbody>{tnq}</tbody>
                </table>
              </div>
            </div>
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
