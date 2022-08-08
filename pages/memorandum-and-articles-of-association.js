import React, { useEffect, useRef } from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";

const MemorandumAndArticlesOfAssociation = () => {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/webviewer/lib",
          initialDoc: "/files/memorandum-and-articles-of-association.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              Memorandum And Articles Of Association
            </h1>
            <div
              className="webviewer"
              ref={viewer}
              style={{ height: "100vh" }}
            ></div>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
};

export default MemorandumAndArticlesOfAssociation;
