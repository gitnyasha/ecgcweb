import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Alert from "react-bootstrap/Alert";
import { backend } from "./api/api";

const ExportPaymentInsuaranceForm = () => {
  const [registeredcompanyname, setRegisteredCompanyName] = React.useState("");
  const [policynumber, setPolicyNumber] = React.useState("");
  const [contactperson, setContactPerson] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [fullname, setFullName] = React.useState("");
  const [idnumber, setIdNumber] = React.useState("");
  const [contactdetails, setContactDetails] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [cause, setCause] = React.useState("");
  const [amountowed, setAmountOwed] = React.useState("");
  const [loanamount, setLoanAmount] = React.useState("");
  const [purposeofloan, setPurposeOfLoan] = React.useState("");
  const [check1, setCheck1] = React.useState("");
  const [check2, setCheck2] = React.useState("");
  const [check3, setCheck3] = React.useState("");
  const [check4, setCheck4] = React.useState("");
  const [check5, setCheck5] = React.useState("");
  const [check6, setCheck6] = React.useState("");
  const [check7, setCheck7] = React.useState("");
  const [applyname, setApplyName] = React.useState("");
  const [applyposition, setApplyPosition] = React.useState("");
  const [datesigned, setDateSigned] = React.useState("");

  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/export-payment", {
        registeredcompanyname: registeredcompanyname,
        policynumber: policynumber,
        contactperson: contactperson,
        position: position,
        phone: phone,
        mobile: mobile,
        fullname: fullname,
        idnumber: idnumber,
        contactdetails: contactdetails,
        address: address,
        cause: cause,
        amountowed: amountowed,
        purposeofloan: purposeofloan,
        check1: check1,
        check2: check2,
        check3: check3,
        check4: check4,
        check5: check5,
        check6: check6,
        check7: check7,
        applyname: applyname,
        applyposition: applyposition,
        datesigned: datesigned,
      })
      .then((response) => {
        if (response.data.status === "201") {
          setShow(true);
          console.log(response);
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="container py-5 my-5">
        <h1 className="mt-5 pt-5 text-center">
          Export Payment Insuarance Form
        </h1>
        <div className="row my-2">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <div className="card-header bg-secondary text-white py-5 my-5">
                1. POLICYHOLDER DETAILS
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputRC4">Registered Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputRC4"
                    value={registeredcompanyname}
                    onChange={(e) => setRegisteredCompanyName(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPN4">Policy Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPN4"
                    value={policynumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                </div>
              </div>
              <small>
                Give details of the person who is authorised to provide us with
                any information we may request and to discuss this claim.
              </small>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputRC4">Contact Person</label>
                  <input
                    type="text"
                    value={contactperson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="form-control"
                    id="inputRC4"
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPositon4">Position</label>
                  <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="form-control"
                    id="inputPosition4"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputNum4">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputNum4"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputMobile4">Mobile</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputMobile4"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header bg-secondary text-white my-3">
                2. BORROWER’S DETAILS
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputFullNames">Full Names</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFullNames"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputNID2">National ID/ Company</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNID2"
                    value={idnumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputCD2">Contact Number / Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCD2"
                    value={contactdetails}
                    onChange={(e) => setContactDetails(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputAddress">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header bg-secondary text-white my-3">
                3. CLAIM DETAILS
              </div>
              <div className="form-row">
                <div className="form-group col-sm-12">
                  <label for="exampleFormControlTextarea1">
                    Cause of loss: (Death; Sickness; Absconsion) (Brief
                    explanation where applicable)
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    value={cause}
                    onChange={(e) => setCause(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputAm4">
                    Total amount owed by the debtor $
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAm4"
                    value={amountowed}
                    onChange={(e) => setAmountOwed(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputLN4">Loan Amount $</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLN4"
                    value={loanamount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header bg-secondary text-white my-3">
                4. PURPOSE OF LOAN
              </div>
              <div className="form-row">
                <div className="form-group col-sm-122">
                  <label for="inputPe4">Purpose of loan</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPe4"
                    value={purposeofloan}
                    onChange={(e) => setPurposeOfLoan(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header bg-secondary text-white my-3">
                5. CHECKLIST OF SUPPORTING DOCUMENTATION
              </div>
              <small>
                You must include the following: Summary of circumstances giving
                rise to the loss.
              </small>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={check1}
                  id="defaultCheck1"
                  onChange={(e) => setCheck1(e.target.value)}
                />
                <label className="form-check-label" for="defaultCheck1">
                  Details of, and all correspondence in relation to your loss
                  and attempts to minimize the loss.
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck2(e.target.value)}
                  type="checkbox"
                  value={check2}
                  id="defaultCheck2"
                />
                <label className="form-check-label" for="defaultCheck2">
                  Contract with the borrower including terms and conditions of
                  credit.
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck3(e.target.value)}
                  type="checkbox"
                  value={check3}
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  The Invoices where applicable
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck4(e.target.value)}
                  type="checkbox"
                  value={check4}
                  id="defaultCheck2"
                />
                <label className="form-check-label" for="defaultCheck2">
                  Copies and/or details of any guarantees and securities or
                  information relating to a retention of title which are held in
                  relation to the debt together with details of action taken to
                  enforce your security.
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck5(e.target.value)}
                  type="checkbox"
                  value={check5}
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  If the cause of loss is insolvency then we require evidence of
                  the insolvency, including that the debt has been registered.
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck6(e.target.value)}
                  type="checkbox"
                  value={check6}
                  id="defaultCheck2"
                />
                <label className="form-check-label" for="defaultCheck2">
                  If you have re-sold the goods, then we require invoices and
                  correspondence relating to the resale of the goods.
                </label>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  onChange={(e) => setCheck7(e.target.value)}
                  type="checkbox"
                  value={check7}
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Statement of Account for the outstanding balances subject to
                  the claim.
                </label>
              </div>
              <div className="card-header bg-secondary text-white my-3">
                6. AUTHORITY
              </div>
              <small>
                We (the insured entity) authorize Export Credit Guarantee
                Corporation of Zimbabwe P/L (ECGC) to contact the buyer and any
                other party ECGC considers relevant to check our claim. Further,
                should it be required, we will allow ECGC to come onto our
                property, during normal business hours, to examine and take
                copies of any books and records required for the assessment of
                this claim.
              </small>
              <div className="card-header bg-secondary text-white my-3">
                7. DECLARATION
              </div>
              <small>
                On behalf of the insured entity whose details are set out above,
                I declare that:
              </small>
              <ol>
                <li>
                  <small>
                    All the information we have given ECGC is accurate and
                    complete.
                  </small>
                </li>
                <li>
                  <small>
                    We have not withheld any information which might affect our
                    claim.
                  </small>
                </li>
                <li>
                  <small>
                    We understand that if we discounted the documents with a
                    financier on a without recourse basis, we cannot claim from
                    ECGC. At the date of this claim we own all of the debt.
                  </small>
                </li>
                <li>
                  <small>
                    If ECGC pays this claim, we will ensure that ECGC promptly
                    receives all funds and anything else received from anyone in
                    relation to this claim and the debt to which this claim
                    relates.
                  </small>
                </li>
                <li>
                  <small>
                    We attach to this form related claim documentation. The
                    information contained is accurate and complete.
                  </small>
                </li>
                <li>
                  <small>
                    We have no interest, including financial interest, in the
                    buyer nor have they any such interest in our business.
                  </small>
                </li>
                <li>
                  <small>
                    I have authority to complete and sign this claim form.
                  </small>
                </li>
                <li>
                  <small>I have authority to make this declaration.</small>
                </li>
              </ol>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputName4">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName4"
                    value={applyname}
                    onChange={(e) => setApplyName(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">Position</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPo4"
                    value={applyposition}
                    onChange={(e) => setApplyPosition(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputDate4">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputDate4"
                    value={datesigned}
                    onChange={(e) => setDateSigned(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Alert
          show={show}
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>Form has been successfully sent.</p>
        </Alert>
      </div>
      <Footer />
    </>
  );
};

export default ExportPaymentInsuaranceForm;
