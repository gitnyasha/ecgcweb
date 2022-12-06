import React from "react";
import Link from "next/link";
import ReadMore from "../../utils/ReadMore";

const CHARACTERS_LIMIT = 100;
const TendersAndRfqs = () => {
  return (
    <div className="service-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2> Tenders And Rfqs </h2>
        </div>

        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="single-service">
              <img
                src="/images/ecgc/export-credit.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <h3>Tenders</h3>

                <div className={"row"}>
                  <div className={"col-lg-12 subscribe"}>
                    <Link href="/tenders">
                      <a className="default-btn">Check...</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-service">
              <img
                src="/images/ecgc/domestic-payment.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <h3>Rfqs</h3>

                <div className={"row"}>
                  <div className="subscribe col-lg-12">
                    <Link href="/rfqs">
                      <a className={"default-btn"}>Check...</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TendersAndRfqs;
