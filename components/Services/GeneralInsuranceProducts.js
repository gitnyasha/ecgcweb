import React from "react";
import Link from "next/link";
import ReadMore from "../../utils/ReadMore";

const GeneralInsuranceProducts = () => {
  return (
    <div className="service-area-two pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>General Insurance</h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <img
                src="/images/services/motor.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <i className="icon-style flaticon-car-insurance" />
                <h3>Motor Insurance</h3>
                <ReadMore
                  description={
                    "This insurance covers full third party, fire and theft plus accidental damage to the insured’s vehicle, medical expenses and towing charges. Covers could be third party only, third party fire and theft and comprehensive."
                  }
                />
                <div className={"row"}>
                  <div className={"subscribe col-lg-6"}>
                    <Link href="/products/motor-insurance">
                      <a className={"default-btn"}>Read more...</a>
                    </Link>
                  </div>
                  <div className="subscribe col-lg-6">
                    <Link href="/files/Motor Proposal Form New 2020.docx">
                      <a className="default-btn">Apply Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <img
                src="/images/services/home.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <i className="icon-style flaticon-insurance" />
                <h3>Home Protection Insurance</h3>
                <ReadMore
                  description={
                    "This policy covers your buildings and fixtures and fittings against damage caused by fire and allied perils, theft, impact by animals, accidental damage of water pipes, accidental breakage of windows and natural disasters."
                  }
                />

                <div className={"row"}>
                  <div className={"subscribe col-lg-6"}>
                    <Link href="/products/home-protection-insurance">
                      <a className={"default-btn"}>Read more...</a>
                    </Link>
                  </div>
                  <div className="subscribe col-lg-6">
                    <Link href="/files/Home plan proposal form.docx">
                      <a className="default-btn">Apply Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <img
                src="/images/services/marine-insurance.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <i className="icon-style flaticon-salesman" />
                <h3>Marine Insurance</h3>
                <ReadMore
                  description={
                    "Marine Insurance policy protects against accidental damage to goods or loss of the ship hull, boats and machinery and third-party liabilities arising from use or ownership of such equipment."
                  }
                />

                <div className={"row"}>
                  <div className={"subscribe col-lg-6"}>
                    <Link href="/products/marine-insurance">
                      <a className={"default-btn"}>Read more..</a>
                    </Link>
                  </div>
                  <div className="subscribe col-lg-6">
                    <Link href="/files/Marine Cargo Application.docx">
                      <a className="default-btn">Apply Now</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <img
                src="/images/services/golfers-insurance.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <i className="icon-style flaticon-insurance-1" />
                <h3>Golfers Insurance</h3>
                <ReadMore
                  description={
                    "This cover caters for golfers across the spectrum from amateurs, professionals and recreational golfers. This cover typically addresses loss or damage to golfing equipment and accessories, it also covers hole-in one allied expenses and many other golfing related losses and damages."
                  }
                />

                <div className={"row"}>
                  <div className={"subscribe col-lg-6"}>
                    <Link href="/products/golfers-insurance">
                      <a className={"default-btn"}>Read more..</a>
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

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <img
                src="/images/services/personal-accident.jpg"
                alt="Image"
                style={{ borderRadius: "15px" }}
              />

              <div className="service-content">
                <i className="icon-style flaticon-health-care" />
                <h3>Personal Accident Insurance</h3>
                <ReadMore
                  description={
                    "Covers against accidental death or bodily injury to employees caused by external violent and visible means. It includes covers for Death, Permanent Disability, Temporary Total Disablement and Medical expenses as a result of an insured accident."
                  }
                />

                <div className={"row"}>
                  <div className={"subscribe col-lg-6"}>
                    <Link href="/products/personal-accident-insurance">
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

export default GeneralInsuranceProducts;
