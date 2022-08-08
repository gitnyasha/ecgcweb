import React, { useState, useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import axios from "axios";
import Topbar from "./Topbar";
import { uri } from "../api/api";

const DomesticPayment = () => {
  const [post, setPosts] = useState([]);

  const pdf = post?.map((p) => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{p.clientname}</td>
            <td>{p.policynumber}</td>
            <td>{p.amount}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/forms/domestic-payment-insuarances",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.DomesticPayments);
      }
    });
  }, []);

  const posts = post?.map((p) => (
    <tr key={p.id}>
      <td>{p.clientname}</td>
      <td>{p.policynumber}</td>
      <td>{p.amount}</td>
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
            <h3>Domestic Payment Insuarances</h3>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Client Name</th>
                    <th>Policy Number</th>
                    <th>Amount</th>
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

export default DomesticPayment;
