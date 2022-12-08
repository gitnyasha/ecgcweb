import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend, uri } from "./api/api";
import Moment from "moment";

const Rfqs = () => {
  const [rfqs, setRfqs] = React.useState([]);

  React.useEffect(() => {
    backend
      .get("/api/rfqs")
      .then((response) => {
        setRfqs(response.data.rfqs);
      })
      .catch((error) => console.error(error));
  }, []);

  const myrfqs = rfqs.map((p) => (
    <div className="client-area">
      <div className="container">
        <div className="row">
          <div className="table-responsive">
            <table className="table top-selling-table" id="datatablesSimple">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Issued</th>
                  <th>Deadline Date</th>
                  <th>Deadline Time</th>
                  <th>Description</th>
                  <th>Prebid Meeting</th>
                  <th>Document</th>
                </tr>
              </thead>
              <tbody>
                <tr key={p.id}>
                  <td>{p.title}</td>
                  <td>{Moment(p.date_posted).format("MMMM Do YYYY")}</td>
                  <td>{Moment(p.deadline).format("MMMM Do YYYY")}</td>
                  <td>{p.deadline_time}</td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: `${p.description.substring(0, 15)}`,
                    }}
                  />
                  <td>{p.prebid_meeting}</td>
                  <td>
                    <Link href={uri + p.document}>
                      <a>Download</a>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />

      <div className="page-tender">
        <div className="container">
          <div className="page-tender-content">
            <h2>RFQs</h2>
          </div>
        </div>
      </div>

      <div className="client-area ptb-100">
        <div className="container">
          {myrfqs.length > 0 ? (
            <>
              <h3>RFQs</h3>
              {myrfqs}
            </>
          ) : (
            <h3>No RFQs Available</h3>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Rfqs;
