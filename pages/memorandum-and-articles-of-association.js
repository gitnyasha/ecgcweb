import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const MemorandumAndArticlesOfAssociation = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
  };

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  };

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

            <Document
              file="/files/Memorandum & Articles of Association.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MemorandumAndArticlesOfAssociation;
