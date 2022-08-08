import React, { useState, useEffect } from "react";
import { SSRProvider } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./Sidebar";
import axios from "axios";
import Topbar from "./Topbar";
import { uri } from "../api/api";

const MotorGlass = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    let headersList = {
      Authorization: `Bearer ${JSON.parse(localStorage.user)}`,
    };

    let formdata = new FormData();

    let bodyContent = formdata;

    let reqOptions = {
      url: uri + "/api/forms/motor-glass",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios
      .request(reqOptions)
      .then(function(response) {
        if (response.status === 200) {
          console.log(response.data);
          setPosts(response.data.motorglasses);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const posts = post.map((p) => (
    <tr key={p.id}>
      <td>{p.policynumber}</td>
      <td>{p.claimnumber}</td>
      <td>{p.nameofinsured}</td>
      <td>{p.occupation}</td>
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
            <h3>Motor Glass</h3>

            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Policy Number</th>
                    <th>Claim Number</th>
                    <th>Name of Insured</th>
                    <th>Occupation</th>
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

export default MotorGlass;
