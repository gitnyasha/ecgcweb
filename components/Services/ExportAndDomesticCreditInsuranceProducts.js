import React from "react";
import Link from "next/link";
import ReadMore from "../../utils/ReadMore";

const CHARACTERS_LIMIT = 100;
const ExportAndDomesticCreditInsuranceProducts = () => {
  return (
    <div className="service-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2> Credit Insurance </h2>
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
                <i className="icon-style flaticon-car-insurance" />
                <h3>Export Payments Insurance Policy</h3>
                <ReadMore
                  description={
                    "Export Credit Insurance is designed to protect Zimbabwe’s exporters from losses that may arise from a variety of commercial and political risks inherent in all export transactions. This protection will also enhance their capacity to compete in the international markets and enable them to break into new markets, introduce new products and take up new buyers."
                  }
                />

                <div className={"row"}>
                  <div className={"col-lg-6 subscribe"}>
                    <Link href="/products/export-payment-insurance">
                      <a className="default-btn">Read more...</a>
                    </Link>
                  </div>
                  <div className="col-lg-6 subscribe">
                    <Link href="/coming-soon">
                      <a className="default-btn">Apply Now</a>
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
                <i className="icon-style flaticon-insurance" />
                <h3>Domestic Payments Insurance Policy</h3>

                <ReadMore
                  description={
                    "The Domestic Insurance Policy (DPIP) is designed to provide protection to Companies against commercial credit risks inherent in local transactions."
                  }
                />

                <div className={"row"}>
                  <div className="subscribe col-lg-6">
                    <Link href="/products/domestic-payment-insurance">
                      <a className={"default-btn"}>Read more...</a>
                    </Link>
                  </div>

                  <div className="subscribe col-lg-6">
                    <Link href="/coming-soon">
                      <a className="default-btn">Apply Now</a>
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

export default ExportAndDomesticCreditInsuranceProducts;
