import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const MemorandumAndArticlesOfAssociation = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <nav>
              <button onClick={goToPrevPage}>Prev</button>
              <button onClick={goToNextPage}>Next</button>
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemorandumAndArticlesOfAssociation;
