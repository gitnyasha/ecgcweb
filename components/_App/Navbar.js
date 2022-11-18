import React from "react";
import Link from "../../utils/ActiveLink";
import TopHeader from "./TopHeader";
import dynamic from "next/dynamic";
import { Top } from "./style";
import FloatingWhatsApp from "react-floating-whatsapp";

// const ChatBot = dynamic(import("../chatbot"), { ssr: false });
const Navbar = () => {
  const [menu, setMenu] = React.useState(true);
  const [sidebarModal, setSidebar] = React.useState(false);
  const [searchModal, setSearch] = React.useState(false);
  const toggleSidebarModal = () => {
    setSidebar(!sidebarModal);
  };
  const toggleSearchModal = () => {
    setSearch(!searchModal);
  };

  const config = {
    right: "8%",
    bottom: "5%",
    position: "fixed",
  };

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area fixed-top">
        {/* TopHeader */}
        <TopHeader />
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link href="/">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <img src="/images/logo3.png" alt="logo" />
                </a>
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar" />
                <span className="icon-bar middle-bar" />
                <span className="icon-bar bottom-bar" />
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="/" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Products <i className="bx bx-chevron-down" />
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/export-and-domestic-credit-insurance"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Export & Domestic Credit Insurance
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/bonds-and-financial-guarantees"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Bonds & Guarantees
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/products/msme-credit-guarantee-scheme"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            MSME Credit & Financial Guarantees
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/general-insurance"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            General Insurance
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="/claims" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Claims
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/tenders-and-rfqs" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Tenders and RFQ
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        About Us <i className="bx bx-chevron-down" />
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/about" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            About Us
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/news-and-events" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            News & Events
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/careers" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Careers
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/memorandum-and-articles-of-association"
                          activeClassName="active"
                        >
                          <a onClick={toggleNavbar} className="nav-link">
                            Memorandum & Articles of Association
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" activeClassName="active">
                      <a onClick={toggleNavbar} className="nav-link">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <div className="option-item">
                  <i
                    className="search-btn bx bx-search"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleSearchModal();
                    }}
                  />
                </div>

                <div className="subscribe mx-1">
                  <Link href="https://dev.jorkshield.co.zw/" passHref>
                    <a className="default-btn" rel="noreferrer">
                      Login
                    </a>
                  </Link>
                </div>

                <div className="subscribe">
                  <Link href="https://www.paynow.co.zw/ecgc" passHref>
                    <a className="default-btn" target="_blank" rel="noreferrer">
                      Pay Online
                    </a>
                  </Link>
                </div>

                <div className="sidebar-menu">
                  <Link href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSidebarModal();
                      }}
                    >
                      <i className="bx bx-grid-alt"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* phoneNumber="263719745452" */}
        <FloatingWhatsApp
          phoneNumber="263773662924"
          accountName="ECGC"
          allowClickAway
          notification
          notificationDelay={60000} // 1 minute
          notificationSound={false}
          styles={config}
          height={450}
          zIndex={9999}
          avatar={"/images/profile.png"}
          chatMessage={
            "Hi, thank you for contacting ECGC.\n" + "\n" + "How can we assist?"
          }
        />
      </header>

      {/* <ChatBot /> */}
      {/* Search Overlay */}
      <div
        className={`search-overlay ${
          searchModal ? "search-overlay-active" : null
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />
            <div className="search-overlay-layer" />

            <div
              className="search-overlay-close"
              onClick={(e) => {
                e.preventDefault();
                toggleSearchModal();
              }}
            >
              <span className="search-overlay-close-line" />
              <span className="search-overlay-close-line" />
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${sidebarModal ? "active" : null}`}>
        <div className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">
                  <Link href="/">
                    <a>
                      <img src="/images/logo-white.png" alt="Logo" />
                    </a>
                  </Link>
                </h2>

                <button
                  type="button"
                  className="close"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSidebarModal();
                  }}
                >
                  <span aria-hidden="true">
                    <i className="bx bx-x" />
                  </span>
                </button>
              </div>

              <div className="modal-body">
                <div className="sidebar-modal-widget">
                  <h3 className="title">About Us</h3>
                  <p style={{ textAlign: "justify" }}>
                    Incorporated in 1999 and commencing operations in 2000,
                    Export Credit Guarantee Corporation of Zimbabwe (PVT) LTD
                    (ECGC) is a wholly owned subsidiary of the Reserve Bank of
                    Zimbabwe and a duly registered short-term insurer. ECGC is
                    regulated and supervised by the Commissioner of Insurance in
                    terms of the Insurance Act and has complied with capital
                    requirements as set out by the Insurance and Pensions
                    Commission (IPEC).
                  </p>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Additional Links</h3>

                  <ul>
                    <li>
                      <Link href="/careers">
                        <a>Careers</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/news-and-events">
                        <a>News & Events</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/memorandum-and-articles-of-association">
                        <a>Memorandum and Articles Of Association</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tenders-and-rfqs">
                        <a>RFQs</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Contact Info</h3>

                  <ul className="contact-info">
                    <li>
                      <i className="bx bx-location-plus"></i>
                      Address
                      <span>6 Earls Rd, Alexandra Park, Harare, Zimbabwe</span>
                    </li>
                    <li>
                      <i className="bx bx-envelope"></i>
                      Email
                      <a href="mailto:info@ecgc.co.zw">info@ecgc.co.zw</a>
                    </li>
                    <li>
                      <i className="bx bxs-phone-call"></i>
                      Phone
                      <a href="tel:+263 867 700 8110">+263 867 700 8110</a>
                    </li>
                  </ul>
                </div>

                <div className="sidebar-modal-widget">
                  <h3 className="title">Connect With Us</h3>

                  <ul className="social-list">
                    <li>
                      <a
                        href="https://twitter.com/credit_export"
                        target={"_blank"}
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/Export-Credit-Guarantee-Corporation-of-Zimbabwe-103987944898662"
                        target={"_blank"}
                      >
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/exportcreditguaranteecorporationofzimbabwe/?viewAsMember=true"
                        target={"_blank"}
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
