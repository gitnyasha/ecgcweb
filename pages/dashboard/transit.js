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

const transit = () => {
  const [post, setPosts] = useState([]);

  const pdf = post?.map((p) => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{p.insuredname}</td>
            <td>{p.contactnumber}</td>
            <td>{p.occurencedate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(pdf), {
      callback: () => {
        doc.save("transit.pdf");
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
      url: uri + "/api/forms/goods-in-transit",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };
    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.Transits);
      }
    });
  }, []);

  const posts = post?.map((p) => (
    <tr key={p.id}>
      <td>{p.insuredname}</td>
      <td>{p.contactnumber}</td>
      <td>{p.occurencedate}</td>
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
            <h3>Goods in Transit</h3>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Insured Name</th>
                    <th>Contact Number</th>
                    <th>Occurance Date</th>
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

export default transit;
