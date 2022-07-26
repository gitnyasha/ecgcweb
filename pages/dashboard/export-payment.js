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

const ExportPayment = () => {
  const [post, setPosts] = useState([]);

  const pdf = post?.map((pd) => (
    <div className="table-responsive">
      <h3 className="py-3">Export Payment Insuarances</h3>
      <table className="table top-selling-table" id="datatablesSimple">
        <thead>
          <tr>
            <th>Registered Company:</th>
            <th>Policy Number:</th>
            <th>Contact Person:</th>
            <th>Position:</th>
            <th>Phone:</th>
            <th>Mobile:</th>
            <th>Email:</th>
            <th>Full Names:</th>
            <th>National ID/ Company:</th>
            <th>Contact Number / Email:</th>
            <th>Address:</th>
            <th>
              Cause of loss: (Death; Sickness; Absconsion) (Brief explanation
              where applicable):
            </th>
            <th>Total amount owed by the debtor $:</th>
            <th>Loan Amount:</th>
            <th>Purpose of loan:</th>
            <th>
              Details of, and all correspondence in relation to your loss and
              attempts to minimize the loss
            </th>
            <th>
              Contract with the borrower including terms and conditions of
              credit.
            </th>
            <th>The Invoices where applicable</th>
            <th>
              Copies and/or details of any guarantees and securities or
              information relating to a retention of title which are held in
              relation to the debt together with details of action taken to
              enforce your security.
            </th>
            <th>
              If you have re-sold the goods, then we require invoices and
              correspondence relating to the resale of the goods.
            </th>
            <th>
              Statement of Account for the outstanding balances subject to the
              claim.
            </th>
            <th>Name:</th>
            <th>Position:</th>
            <th>Date:</th>
            <th>Depart:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{pd.registeredcompany}</td>
            <td>{pd.policynumber}</td>
            <td>{pd.contactperson}</td>
            <td>{pd.position}</td>
            <td>{pd.phone}</td>
            <td>{pd.mobile}</td>
            <td>{pd.email}</td>
            <td>{pd.fullname}</td>
            <td>{pd.idnumber}</td>
            <td>{pd.contactdetails}</td>
            <td>{pd.address}</td>
            <td>{pd.causeofloss}</td>
            <td>{pd.amountowed}</td>
            <td>{pd.loanamount}</td>
            <td>{pd.purposeOfloan}</td>
            <td>{pd.check1}</td>
            <td>{pd.check2}</td>
            <td>{pd.check3}</td>
            <td>{pd.check4}</td>
            <td> {pd.check5}</td>
            <td> {pd.check6}</td>
            <td> {pd.check7}</td>
            <td> {pd.applyname}</td>
            <td> {pd.applyposition}</td>
            <td> {pd.datesigned}</td>
            <td> {pd.datesigned}</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));

  const save = () => {
    doc.html(ReactDOMServer.renderToStaticMarkup(pdf), {
      callback: () => {
        doc.save("export-payment-insuarances.pdf");
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
      url: uri + "/api/forms/export-payment-insuarances",
      method: "GET",
      headers: headersList,
      data: bodyContent,
    };

    axios.request(reqOptions).then(function(response) {
      if (response.status === 200) {
        console.log(response.data);
        setPosts(response.data.ExportPayments);
      }
    });
  }, []);

  const posts = post?.map((p) => (
    <tr key={p.id}>
      <td>{p.registeredcompany}</td>
      <td>{p.policynumber}</td>
      <td>{p.fullname}</td>
      <td>
        <button onClick={save}>download pdf</button>
      </td>
    </tr>
  ));

  return (
    <Container fluid expand="lg">
      <Row>
        <Topbar />
      </Row>
      <Row>
        <Col sm={3}>
          <Sidebar />
        </Col>
        <Col sm={9}>
          <SSRProvider>
            <h3 className="py-3">Export Payment Insuarances</h3>
            <div className="table-responsive">
              <table className="table top-selling-table" id="datatablesSimple">
                <thead>
                  <tr>
                    <th>Registered Company Name</th>
                    <th>Policy Number</th>
                    <th>Full Name</th>
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

export default ExportPayment;
