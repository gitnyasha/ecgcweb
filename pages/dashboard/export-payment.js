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
    <Container style={{ padding: 10 }}>
      <Row>
        <Col>
          <img src="/images/logopdf.png" alt="logo" />
        </Col>
        <Col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ul>
            <li>
              <h6>6 Earls Road Alexandra Park, Harare, Zimbabwe</h6>
            </li>
            <li>
              <h6>0242 745452 / 565 / 869 / 086 771 07930/32</h6>
            </li>
            <li>
              <h6>
                info@ecgc.co.zw{" "}
                <a style={{ color: "blue" }} href="https://ecgc.co.zw">
                  www.ecgc.co.zw
                </a>
              </h6>
            </li>
          </ul>
        </Col>
      </Row>
      <div
        style={{
          backgroundColor: "#0086b3",
          padding: 2,
          borderRadius: 10,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <h5 style={{ color: "#fff", textAlign: "center" }}>
          CREDIT INSURANCE CLAIM FORM
        </h5>
      </div>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        1. POLICYHOLDER DETAILS
      </div>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Registered Company Name</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.registeredcompanyname}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Policy Number</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.policynumber}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Contact Person</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.contactperson}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Position</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.position}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Phone</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.phone}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Mobile</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.mobile}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Email</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.email}
          />
        </Col>
      </Row>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        2. BORROWER’S DETAILS
      </div>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Full Names</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.fullname}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>National ID / Company</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.idnumber}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Contact Number / Email</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.contactdetails}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Physical Address</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.address}
          />
        </Col>
      </Row>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        3. CLAIM DETAILS
      </div>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>
              Cause of loss: (Death; Sickness; Absconsion) (Brief explanation
              where applicable)
            </b>
          </label>
          <textarea
            style={{ width: "100%", height: "300px" }}
            placeholder={pd.causeofloss}
          ></textarea>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Total amount owed by the debtor:</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.amountowed}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Loan Amount:</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.loanamount}
          />
        </Col>
      </Row>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        4. PURPOSE OF LOAN
      </div>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Purpose of loan:</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.purposeOfloan}
          />
        </Col>
      </Row>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        5. CHECKLIST OF SUPPORTING DOCUMENTATION
      </div>
      <small style={{ fontSize: "12px" }}>
        You must include the following: Summary of circumstances giving rise to
        the loss.
      </small>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check1">
            Details of, and all correspondence in relation to your loss and
            attempts to minimize the loss.
          </label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check2">
            Contract with the borrower including terms and conditions of credit.
          </label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check3"> The Invoices where applicable</label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check4">
            Copies and/or details of any guarantees and securities or
            information relating to a retention of title which are held in
            relation to the debt together with details of action taken to
            enforce your security.
          </label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check5">
            If the cause of loss is insolvency then we require evidence of the
            insolvency, including that the debt has been registered.
          </label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check6">
            If you have re-sold the goods, then we require invoices and
            correspondence relating to the resale of the goods.
          </label>
          <br />
          <input type="checkbox" style={{ margin: "5px" }} />
          <label for="check7">
            Statement of Account for the outstanding balances subject to the
            claim.
          </label>
        </Col>
      </Row>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        6. AUTHORITY
      </div>
      <small style={{ fontSize: "12px" }}>
        We (the insured entity) authorize Export Credit Guarantee Corporation of
        Zimbabwe P/L (ECGC) to contact the buyer and any other party ECGC
        considers relevant to check our claim. Further, should it be required,
        we will allow ECGC to come onto our property, during normal business
        hours, to examine and take copies of any books and records required for
        the assessment of this claim.
      </small>
      <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
        7. DECLARATION
      </div>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <small style={{ fontSize: "12px" }}>
            On behalf of the insured entity whose details are set out above, I
            declare that:
          </small>
          <ol>
            <li>
              All the information we have given ECGC is accurate and complete.
            </li>
            <li>
              We have not withheld any information which might affect our claim.
            </li>
            <li>
              We understand that if we discounted the documents with a financier
              on a without recourse basis, we cannot claim from ECGC. At the
              date of this claim we own all of the debt.
            </li>
            <li>
              If ECGC pays this claim, we will ensure that ECGC promptly
              receives all funds and anything else received from anyone in
              relation to this claim and the debt to which this claim relates.
            </li>
            <li>
              We attach to this form related claim documentation. The
              information contained is accurate and complete.
            </li>
            <li>
              We have no interest, including financial interest, in the buyer
              nor have they any such interest in our business.
            </li>
            <li>I have authority to complete and sign this claim form.</li>
            <li>I have authority to make this declaration.</li>
          </ol>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Name</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.applyname}
          />
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Position</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.applyposition}
          />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Signature</b>
          </label>
          <textarea
            style={{ width: "100%", height: "100px" }}
            placeholder=""
          ></textarea>
        </Col>
        <Col style={{ marginTop: 5, marginBottom: 5 }}>
          <label>
            <b>Date</b>
          </label>
          <input
            style={{ width: "100%", borderColor: "#00ace6" }}
            placeholder={pd.datesigned}
          />
        </Col>
      </Row>
    </Container>
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
            <h3 className="py-3">Credit Insuarance Claim</h3>
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
