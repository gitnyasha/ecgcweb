import Link from "next/link";
import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";

const Claims = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="container my-5">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <div className="section-title pt-5">
            <h2>Claim Forms</h2>
          </div>
          <div className="row">
            {/* <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/credit-claim">
                  <img
                    src="/images/clients/banks.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/credit-claim">
                    <h3 style={{ fontSize: 16 }}>Credit Claim Form</h3>
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/public-liability">
                  <img
                    src="/images/services/personal-accident.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/public-liability">
                    <h3 style={{ fontSize: 16 }}>Public Liability Form</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/property-claim">
                  <img
                    src="/images/services/home.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/property-claim">
                    <h3 style={{ fontSize: 16 }}>Property Claim Form</h3>
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/guarantee-scheme-claim">
                  <img
                    src="/images/ecgc/msme.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/guarantee-scheme-claim">
                    <h3 style={{ fontSize: 16 }}>Guarantee Scheme Claim</h3>
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/all-risks-claim">
                  <img
                    src="/images/allrisk.jpeg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/all-risks-claim">
                    <h3 style={{ fontSize: 16 }}>All Risk Claim</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/motor-glass">
                  <img
                    src="/images/services/motor.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/motor-glass">
                    <h3 style={{ fontSize: 16 }}>Motor Glass Claim</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/transit-form">
                  <img
                    src="/images/services/marine-insurance.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/transit-form">
                    <h3 style={{ fontSize: 16 }}>Goods In Transit Claim</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/domestic-payment-insuarance-form">
                  <img
                    src="/images/ecgc/domestic-payment.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/domestic-payment-insuarance-form">
                    <h3 style={{ fontSize: 16 }}>Domestic Payment Insurance</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/export-payment-insuarance-form">
                  <img
                    src="/images/ecgc/export-credit.jpg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/export-payment-insuarance-form">
                    <h3 style={{ fontSize: 16 }}>Export Payment Insurance</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-blog">
                <Link href="/motor-accident">
                  <img
                    src="/images/motoraccident.jpeg"
                    alt="Image"
                    style={{ borderRadius: "15px" }}
                  />
                </Link>
                <div className="blog-content" style={{ borderRadius: "15px" }}>
                  <Link href="/motor-accident">
                    <h3 style={{ fontSize: 16 }}>Motor Accident Insurance</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Claims;
