import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <Link href="/">
                  <a>
                    <img src="/images/logo-white.png" alt="Image" />
                  </a>
                </Link>

                <p style={{ textAlign: "justify" }}>
                  Incorporated in 1999 and commencing operations in 2000, Export
                  Credit Guarantee Corporation of Zimbabwe (PVT) LTD (ECGC) is a
                  wholly owned subsidiary of the Reserve Bank of Zimbabwe and a
                  duly registered short-term insurer.
                </p>

                <div className="social-area">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/Export-Credit-Guarantee-Corporation-of-Zimbabwe-103987944898662"
                        target={"_blank"}
                      >
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/credit_export"
                        target={"_blank"}
                      >
                        <i className="bx bxl-twitter" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/exportcreditguaranteecorporationofzimbabwe/?viewAsMember=true"
                        target={"_blank"}
                      >
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget contact">
                <h3>Contact Us</h3>

                <ul>
                  <li>
                    <i className="flaticon-call"></i>
                    <span>Hotline:</span>
                    <a href="tel:+263 867 700 8110">Phone: +263 867 700 8110</a>
                  </li>

                  <li>
                    <i className="flaticon-call"></i>
                    <span>Telephone:</span>
                    <a href="tel:+263 867 710 7930">
                      Phone 1: +263 867 710 7930/2
                    </a>
                    <a href="tel:+263 867 710 7930">
                      Phone 2: +263 242 745 452/565/869
                    </a>
                  </li>

                  <li>
                    <i className="flaticon-email"></i>
                    <span>Email:</span>
                    <a href="mailto:info@ecgc.co.zw">info@ecgc.co.zw</a>
                  </li>

                  <li>
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address:</span>6 Earls Rd, Alexandra Park, Harare,
                    Zimbabwe
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Information Links</h3>

                <ul>
                  <li>
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/news-and-events">
                      <a>News and Events</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/files/Memorandum%20&%20Articles%20of%20Association.pdf">
                      <a>Memorandum and Articles</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tenders-and-rfqs">
                      <a>RFQs</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-widget">
                <h3>Newsletter</h3>

                <p className="newsletter-p" style={{ textAlign: "justify" }}>
                  Subscribe to receive Newsletters.
                </p>

                <div className="subscribe-wrap">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      name="email"
                      required
                    />
                    <button className="default-btn" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area footer-bottom-electronics-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy;{currentYear} Designed By{" "}
              <a href="#" target="blank">
                Jorkshield
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
