import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { backend, uri } from "./api/api";
import Moment from "moment";

const ContactPersonnel = () => {
  const [personnels, setPersonnels] = React.useState([]);

  React.useEffect(() => {
    backend
      .get("/api/personnels")
      .then((response) => {
        setPersonnels(response.data.personnels);
      })
      .catch((error) => console.error(error));
  }, []);

  const mypersonnels = personnels.map((p) => (
    <div className="client-area">
      <div className="container">
        <div className="row">
          <div className="table-responsive">
            <table className="table top-selling-table" id="datatablesSimple">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Contact Details</th>
                </tr>
              </thead>
              <tbody>
                <tr key={p.id}>
                  <td>{p.fullname}</td>
                  <td>{p.title}</td>
                  <td>{p.contacts}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />

      <div className="page-personnel">
        <div className="container">
          <div className="page-personnel-content">
            <h2>Contact Personnel</h2>
          </div>
        </div>
      </div>

      <div className="client-area ptb-100">
        <div className="container">
          {mypersonnels.length > 0 ? (
            <>
              <h3>Key Contact Personnel</h3>
              {mypersonnels}
            </>
          ) : (
            <h3>Coming Soon!</h3>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPersonnel;
