import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend, uri } from "./api/api";
import Moment from "moment";
import parse from "html-react-parser";

const Careers = () => {
  const [careers, setCareers] = React.useState([]);
  React.useEffect(() => {
    backend
      .get("/api/jobs")
      .then((response) => {
        setCareers(response.data.careers);
      })
      .catch((error) => console.error(error));
  }, []);
  const jobs = careers.map((job) => (
    <tr key={job.id}>
      <td>{job.title}</td>
      <td>{parse(`${job.description}`)}</td>
      <td>{Moment(job.created_at).format("MMMM Do YYYY")}</td>
      <td>
        <Link href={uri + job.document}>
          <a>Download</a>
        </Link>
      </td>
    </tr>
  ));
  if (careers.length) {
    return (
      <>
        <Navbar />

        <div className="page-career">
          <div className="container">
            <div className="page-career-content">
              <h2>Careers</h2>
            </div>
          </div>
        </div>

        <div className="client-area ptb-100">
          <div className="container">
            <div className="row">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date Posted</th>
                  </tr>
                </thead>
                <tbody>{jobs}</tbody>
              </table>
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

        <div className="page-career">
          <div className="container">
            <div className="page-career-content">
              <h2>Careers</h2>
            </div>
          </div>
        </div>

        <div className="client-area ptb-100">
          <div className="container">
            <div className="row">
              <h3>No jobs at the moment</h3>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
};

export default Careers;
