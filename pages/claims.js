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
      <div className="container">
        <div className="my-3 p-3 bg-white rounded shadow-sm">
          <h2 className="border-bottom text-center border-gray pb-2 mb-0">
            Claim Forms
          </h2>
          <div className="media text-muted pt-3">
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong className="text-gray-dark">
                  Export Payment Insuarance
                </strong>
                <Link href="/export-payment-insuarance-form">Apply Online</Link>
              </div>
            </div>
          </div>
          <div className="media text-muted pt-3">
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong className="text-gray-dark">
                  Domestic Payment Insuarance
                </strong>
                <Link href="/domestic-payment-insuarance-form">
                  Apply Online
                </Link>
              </div>
            </div>
          </div>
          <div className="media text-muted pt-3">
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong className="text-gray-dark">
                  Claim Form Goods In Transit
                </strong>
                <Link href="/transit-form">Apply Online</Link>
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
