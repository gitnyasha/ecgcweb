import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const designs = () => {
  const registeredcompanyname = "doucetech";
  return (
    <>
      <Container style={{ padding: 10, border: "1px solid grey" }}>
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
            PUBLIC LIABLITY CLAIM FORM
          </h5>
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>BROKER</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Policy Number</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          1.Insured
        </div>
        <small>
          ECGC are committed to resolving your claim within the shortest
          possible time and in order to assist in expediting this process kindly
          ensure that this form is completed in detail.
        </small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Insured:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Business address:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Telephone No:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Email Address</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Cellphone No:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          2. Details of loss/Damage
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Time</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Place where accident occurred:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Did the loss occur in connection with your business?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Detailed and comprehensive statement setting out circumstances
                surrounding the loss:
              </b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Do you believe you were negligent, if so why?</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>What measures were taken to prevent loss or damage?</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          3. Third Party Details
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name, address and age of injured person or claimant 1:</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Tel / Cell No:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Details of injury or loss:</b>
            </label>
            <input
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name, address and age of injured person or claimant 2:</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Tel / Cell No:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Details of injury or loss:</b>
            </label>
            <input
              style={{ width: "100%", height: "100px", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          4. Witnesses
        </div>
        <h6>Witness 1</h6>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Relationship to Insured</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <h6>Witness 2</h6>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Relationship to Insured</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          5. Declaration
        </div>

        <small>
          I / We warrant that the foregoing information provided is true and
          correct, and that no information has been withheld in respect of the
          loss / damage. I / We undertake to advise Hollard in writing in the
          event of any changes to supplied information, and in the event of the
          recovery of any part of the property forming the subject of this
          claim.
        </small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Insured’s full name:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Capacity:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: 10, border: "1px solid grey" }}>
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
            CLAIM UNDER-DOMESTIC PAYMENTSINSURANCE POLICY
          </h5>
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name of Client:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Policy Number</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Physical Address:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Maximum Liability:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <h6>
          We declare that the under-mentioned buyer is indebted to us to the
          extent of US$____________________ and that the amount is now
          __________ months overdue and we hereby claim the amount in terms of
          the captioned Domestic Payment Insurance Policy.
        </h6>
        <h6>
          We furnish the following information to enable you to admit and pay
          our claim.
        </h6>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          1. EVENTS WHICH IS THE CAUSE OF LOSS (PLEASE MARK ‘X’ AGAINST THE
          APPROPRIATE ITEM)
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Insolvency of buyer:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Failure of buyer to pay for accepted goods:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          2) PARTICULARS OF CREDIT LIMIT APPROVED BY THE CORPORATION ON THE
          BUYER
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Amounts</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Terms of Payment</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Effective Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          3) PARTICULARS OF SALE(S) FOR WHICH PAYMENT(S) IS OVERDUE AND WHICH
          FORM THE SUBJECT OF THIS CLAIM
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid #00ace6", padding: 5 }}>
                    Date of Sales
                  </th>
                  <th style={{ border: "1px solid #00ace6", padding: 5 }}>
                    Item Sold
                  </th>
                  <th style={{ border: "1px solid #00ace6", padding: 5 }}>
                    Gross Invoice Value Finance (US$)
                  </th>
                  <th style={{ border: "1px solid #00ace6", padding: 5 }}>
                    Due Date
                  </th>
                  <th style={{ border: "1px solid #00ace6", padding: 5 }}>
                    Date on which declared to the Corporation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                </tr>
                <tr>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                  <td style={{ border: "1px solid #00ace6", padding: 5 }}></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Date(s) on which the overdueswere notified to the Corporation
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Date(s) on which Default Declaration was submitted to the
                Corporation
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Particulars of the amount of loss Gross Invoice Value of sales:
                $
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <h6>LESS</h6>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Payment received, if any:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Payment saved by non-fulfillment of contract: US$ e.g. Agent
                Commission)
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Proceeds of resale of goods:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Any credit, set-off or counterclaim, which can: US$ be adjusted
                against the payment(s) due
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Total</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <h6>PLUS</h6>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              Expenses incurred for recovery with the approval of the
              Corporation:
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Net Amount Loss:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <small>
          Documents attached in support of the claim (please place ‘x’ against
          the appropriate items)
        </small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Copies of the sales contract(s) / orders</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b> Proof of delivery</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Any other relevant documents</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <small> If the cause of loss is insolvency of buyer</small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Evidence of insolvency</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Copy of the claim filed with the liquidator</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Copy of the letter from liquidator receiving/admiting the claim:
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <small>If the cause of loss is failure to pay for accepted goods</small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Copy of all correspondence with buyer</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>

        <small>
          We declare that the information given herein are true and correct in
          every particular and that wehave not omitted to state any information
          relating to the claim.
          <br />
          <br />
          We undertake to pursue all steps, including institution of legal
          proceedings, which may be advisedby the Corporation to effect recovery
          of the debt to which this claim relates.
          <br />
          <br />
          Upon payment of this claim, we shall forth with pay to the Corporation
          any and all amounts that weour agents or any other persons acting on
          our behalf may receive from the buyer or from any othersource in
          respect of the debt to which this claim relates and we acknowledge and
          declare that allsuch amounts are moneys to which the Corporation alone
          is beneficially entitled and that, until payment to the Corporation is
          made as aforesaid, the said amounts will be held by us in trust for
          the Corporation.
        </small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Place</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ padding: 10, border: "1px solid grey" }}>
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
            GOODS IN TRANSIT CLAIM FORM
          </h5>
        </div>
        <small>TO BE COMPLETED AND SIGNED BY CLAIMANT</small>

        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Insured Name:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Insured Address:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Agent Name & Number:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Policy Number:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Contact Number:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Agent Reference</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          DATE, TIME AND PLACE OF OCCURENCE
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Time</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Place</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          DESCRIPTION OF MERCHANDISE AND GOODS
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Details of Load:</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Number of Packages or Articles:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Total Weight:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Total Value:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          DETAILS OF MERCHANDISE AND GOODS LOST OR DAMAGED
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Description:</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Number of Packages or Articles:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Total Weight:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Value of lost / damaged goods:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Salvage (if any):</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Gross Amount of Claim:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Less Excess under Policy (if any)</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>

          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Net Amount of claim:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          WHERE AVAILABLE THE FOLLOWING SHOULD BE ATTACHED TO THIS CLAIM FORM:
        </div>
        <h6>Invoice or Account in respect of Loss or Damage</h6>
        <ul>
          <li>
            - True copy of Receipt given for the merchandise and goods after
            loading
          </li>
          <li>
            - Signed Delivery Note obtained when delivering the merchandise and
            goods
          </li>
          <li>- Any other Documents or Correspondence received</li>
        </ul>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          IF LOSS IS DUE TO THEFT, PILFERAGE OR SHORT DELIVERY, STATE:
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Name and address of Police Station to which is was reported:
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date and time of making such a report</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          IF LOSS OR DAMAGE WAS CAUSED BY AN ACCIDENT TO THE VEHICLE, STATE:
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Names and addresses of owners of any other vehicles involved
              </b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Names and addresses of any witnesses</b>
            </label>
            <textarea
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Were particulars taken by a Police Officer at the scene? Yes /
                No
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Was he a witness? Yes / No</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>If YES, give Reference Number:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>If NO, where & when was the occurrence reported?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Address of the Police Station:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Was any warning given by the Police that you, your driver or any
                other person might be prosecuted? Yes / No
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          DETAIL OF CONSIGNORS / CONSIGNEES
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Name of Consignors:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Address of Consignors:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Address of Consignees:</b>
            </label>
            <input
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          CIRCUMSTANCES OF LOSS OR DAMAGE
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>When and Where were he goods loaded?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Who loaded the goods onto the vehicle?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Did driver count or check the consignment? Yes / No</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>

          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>What receipt was given at time of loading?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>How were the goods packed, stowed and sheeted?</label>
            <input
              style={{ width: "100%", height: "100px" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Were above done in accordance Trade Custom? Yes / No</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              Give full details of the journey from the time of loading until
              the happening of the loss or damage and describe the event giving
              rise to the loss or damage:
            </label>
            <input
              style={{ width: "100%", height: "150px" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              What action did the driver take immediately after the happening of
              the loss or damage?
            </label>
            <input
              style={{ width: "100%", height: "150px" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          IF LOSS OR DAMAGE WAS CAUSED BY AN ACCIDENT TO THE VEHICLE, STATE:
        </div>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Have Consignees accepted Delivery? Yes / No</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Where can the goods be inspected?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Are you the Owner or Carrier of the Goods?</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Was this load carried by you as Principal Contractor, Sub-
                Contractor or Any Sub-Contractor employed by you
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                If 2. Sub-Contractor, were you charged premium for insurance of
                this load? Yes / No
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                If 3. Any Sub-Contractor employed by you, state Name and Address
                of Sub-Contractor
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Did you charge the Sub-Contractor premium for insurance for this
                load? Yes / No
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Give Registered Letters and Number of vehicle on which the goods
                were being carried
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Do you own the vehicle? Yes / No</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>If not, state Name and Address of Owner:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>
                Has the driver, to your knowledge been involved in any other
                accidents? Yes / No
              </b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>If YES, give brief details.</b>
            </label>
            <input
              style={{ width: "100%", height: "150px" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#ffbf00", padding: 5, color: "#fff" }}>
          DECLARATION
        </div>
        <small>
          I/we warrant and declare that the particulars given above are true in
          every respect and that I/we have not withheld any informa�on
          whatsoever in connection with the claim.
        </small>
        <Row>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Capacity</b>
            </label>
            <textarea
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <small>
          This form should be completed fully without delay and forwarded to the
          Company at one of the above addresses or your broker / agent. The
          company does not admit liability by the issue of this form.
        </small>
      </Container>

      <Container style={{ padding: 10, border: "1px solid grey" }}>
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Policy Number</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Position</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Mobile</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Email</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>National ID / Company</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Physical Address</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Loan Amount:</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
        <div style={{ backgroundColor: "#999999", padding: 5, color: "#fff" }}>
          5. CHECKLIST OF SUPPORTING DOCUMENTATION
        </div>
        <small style={{ fontSize: "12px" }}>
          You must include the following: Summary of circumstances giving rise
          to the loss.
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
              Contract with the borrower including terms and conditions of
              credit.
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
          We (the insured entity) authorize Export Credit Guarantee Corporation
          of Zimbabwe P/L (ECGC) to contact the buyer and any other party ECGC
          considers relevant to check our claim. Further, should it be required,
          we will allow ECGC to come onto our property, during normal business
          hours, to examine and take copies of any books and records required
          for the assessment of this claim.
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
                We have not withheld any information which might affect our
                claim.
              </li>
              <li>
                We understand that if we discounted the documents with a
                financier on a without recourse basis, we cannot claim from
                ECGC. At the date of this claim we own all of the debt.
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
              placeholder={registeredcompanyname}
            />
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Position</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
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
              placeholder={registeredcompanyname}
            ></textarea>
          </Col>
          <Col style={{ marginTop: 5, marginBottom: 5 }}>
            <label>
              <b>Date</b>
            </label>
            <input
              style={{ width: "100%", borderColor: "#00ace6" }}
              placeholder={registeredcompanyname}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default designs;
