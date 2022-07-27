import React, { useState, useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import axios from "axios";
import Topbar from "./Topbar";
import { uri } from "../api/api";
import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";

const doc = new jsPDF();

const PropertyClaim = () => {
  const [post, setPosts] = useState([]);

  const pdf = post?.map((p) => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{p.policynumber}</td>
            <td>{p.policyholder}</td>
            <td>{p.insurer}</td>
            <td>{p.telephone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(pdf), {
      callback: () => {
        doc.save("property-claim.pdf");
      },
    });
  };

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/forms/property-claims",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios
      .request(reqOptions)
      .then(function(response) {
        if (response.status === 200) {
          console.log(response.data);
          setPosts(response.data.PropertyClaims);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const posts = post.map((p) => (
    <tr key={p.id}>
      <td>{p.policynumber}</td>
      <td>{p.policyholder}</td>
      <td>{p.insurer}</td>
      <td>{p.telephone}</td>
      <td>
        <button onClick={save}>download pdf</button>
      </td>
    </tr>
  ));

  return (
    <Container fluid>
      <Row>
        <Topbar />
      </Row>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <SSRProvider>
            <h3>Property Claims</h3>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Policy Number</th>
                    <th>Policy Holder</th>
                    <th>Insurer</th>
                    <th>Telephone</th>
                  </tr>
                </thead>
                <tbody>{posts}</tbody>
              </table>
            </div>
          </SSRProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyClaim;
