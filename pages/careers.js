import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend } from "./api/api";

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
    <div className="col-lg-4 col-sm-6">
      <div className="single-client">
        <h3>{job.title}</h3>
        <p>{job.description}</p>
      </div>
    </div>
  ));
  if (careers.length > 0) {
    return (
      <>
        <Navbar />

        <PageBanner
          pageTitle="careers"
          homePageUrl="/"
          homePageText="Home"
          activePageText="careers"
        />

        <div className="client-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>ECGC Careers</h2>
            </div>

            <div className="row">
              {jobs}

              <div className="col-lg-12">
                {/* Pagination */}
                <div className="page-navigation-area text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link page-links">
                          <i className="bx bx-chevrons-left"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link href="#">
                        <a className="page-link">1</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link">2</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link">3</a>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="#">
                        <a className="page-link">
                          <i className="bx bx-chevrons-right"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
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
          pageTitle="careers"
          homePageUrl="/"
          homePageText="Home"
          activePageText="careers"
        />

        <div className="client-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>ECGC Careers</h2>
            </div>
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
