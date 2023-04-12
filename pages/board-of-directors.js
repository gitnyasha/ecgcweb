import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import BoardOfDirectors from "../components/Common/BoardOfDirectors";

const Board = () => {
  return (
    <>
      <Navbar />

      <div className="page-board">
        <div className="container">
          <div className="page-board-content">
            <h2>Our Board</h2>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="blog-details-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <BoardOfDirectors />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Board;
