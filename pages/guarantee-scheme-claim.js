import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import { backend } from "./api/api";

const GuaranteeSchemeClaim = () => {
  const [guaranteeno, setGuaranteeNo] = useState("");
  const [leadingbankname, setLeadingBankName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactofficer, setContactOfficer] = useState("");
  const [borrowername, setBorrowerName] = useState("");
  const [borroweraddress, setBorrowerAddress] = useState("");
  const [classifieddate, setClassifiedDate] = useState("");
  const [wilfuldefaulter, setWilfulDefaulter] = useState("");
  const [classifiedfraud, setClassifiedFraud] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [reasons, setReasons] = useState("");
  const [issuedate, setIssueDate] = useState("");
  const [recallnotice, setRecallNotice] = useState("");
  const [forum, setForum] = useState("");
  const [filingsuit, setFileSuit] = useState("");
  const [dateofpossession, setDateOfPossession] = useState("");
  const [amountclaimed, setAmountClaimed] = useState("");
  const [anyattchment, setAnyAttachment] = useState("");
  const [compositeguaranteeno, setCompositeGuaranteeNo] = useState("");
  const [dateofdisbursement, setDateOfDisbursement] = useState("");
  const [totalamountdisbursed, setTotalAmountDisbursed] = useState("");
  const [repayments, setRepayments] = useState("");
  const [outstandingdateofnpa, setOutstandingDateOfNPA] = useState("");
  const [outstandingcivil, setOutstandingCivil] = useState("");
  const [datelodgement, setDateLodgement] = useState("");
  const [borrowerguaranteeno, setBorrowerGuaranteeNo] = useState("");
  const [capital, setCapital] = useState("");
  const [interestcharges, setInterestCharges] = useState("");
  const [amountinterest, setAmountInterest] = useState("");
  const [modeofrecovery, setModeOfRecovery] = useState("");
  const [fpb, setFPB] = useState("");
  const [finassist, setFinAssist] = useState("");
  const [creditsupport, setCreditSupport] = useState("");
  const [bankfacilities, setBankFacilities] = useState("");
  const [watchlist, setWatchList] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/guarantee-scheme", {
        guaranteeno,
        leadingbankname,
        address,
        email,
        phone,
        contactofficer,
        borrowername,
        borroweraddress,
        classifieddate,
        wilfuldefaulter,
        classifiedfraud,
        enquiry,
        reasons,
        issuedate,
        recallnotice,
        forum,
        filingsuit,
        dateofpossession,
        amountclaimed,
        anyattchment,
        compositeguaranteeno,
        dateofdisbursement,
        totalamountdisbursed,
        repayments,
        outstandingdateofnpa,
        outstandingcivil,
        datelodgement,
        borrowerguaranteeno,
        capital,
        interestcharges,
        amountinterest,
        modeofrecovery,
        fpb,
        finassist,
        creditsupport,
        bankfacilities,
        watchlist,
        remarks,
      })
      .then((res) => {
        console.log(res);
        alert("Successfully submitted");
      })
      .catch((err) => {
        console.log(err);
        alert("Error submitting: ", err);
      });
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="mt-5 pt-5 text-center">Guarantee Scheme Claim</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputG">Guarantee Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={guaranteeno}
                  onChange={(e) => setGuaranteeNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPhone">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputLeadingBankName">
                  Lending Bank Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={leadingbankname}
                  onChange={(e) => setLeadingBankName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputContactOfficer">
                  Contact Officer Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={contactofficer}
                  onChange={(e) => setContactOfficer(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputBorrowerName">Borrower Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={borrowername}
                  onChange={(e) => setBorrowerName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputBorrowerAddress">
                  Borrower Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={borroweraddress}
                  onChange={(e) => setBorrowerAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputClassifiedDate">
                  Date on which Account was Classified as NPA
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={classifieddate}
                  onChange={(e) => setClassifiedDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputWilfulDefaulter">
                  Wilful Defaulter
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={wilfuldefaulter}
                  onChange={(e) => setWilfulDefaulter(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputClassifiedFraud">
                  Has the account been classified as fraud*
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={classifiedfraud}
                  onChange={(e) => setClassifiedFraud(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEnquiry">
                  Internal and/or external enquiry has been concluded
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputReasons">
                  Reasons for Account turning NPA
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={reasons}
                  onChange={(e) => setReasons(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputIssuedDate">
                  *Date of issue of Recall Notice
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={issuedate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputRecallNotice">
                  Provide satisfactory reason for issuing recall notice prior to
                  NPA date
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={recallnotice}
                  onChange={(e) => setRecallNotice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputForum">
                  Forum through which legal proceedings were initiated against
                  borrower *
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={forum}
                  onChange={(e) => setForum(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputFilingSuit">Suit / Case No.*</label>
                <input
                  type="text"
                  className="form-control"
                  value={filingsuit}
                  onChange={(e) => setFileSuit(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date Of Possession">
                  Provide satisfactory reason for filing suit before NPA date
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={dateofpossession}
                  onChange={(e) => setDateOfPossession(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amountClaimed">
                  Amount Claimed in the Suit *
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={amountclaimed}
                  onChange={(e) => setAmountClaimed(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Any Attachments *</label>
                <input
                  type="text"
                  className="form-control"
                  value={anyattchment}
                  onChange={(e) => setAnyAttachment(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Composite Guarantee Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={compositeguaranteeno}
                  onChange={(e) => setCompositeGuaranteeNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Date of Disbursement</label>
                <input
                  type="date"
                  className="form-control"
                  value={dateofdisbursement}
                  onChange={(e) => setDateOfDisbursement(e.target.value)}
                />
              </div>
              <div className="form-group">
                <lable>Total Amount Disbursed</lable>
                <input
                  type="number"
                  className="form-control"
                  value={totalamountdisbursed}
                  onChange={(e) => setTotalAmountDisbursed(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Repayments</label>
                <input
                  type="number"
                  className="form-control"
                  value={repayments}
                  onChange={(e) => setRepayments(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Set outstanding date of npa</label>
                <input
                  type="date"
                  className="form-control"
                  value={outstandingdateofnpa}
                  onChange={(e) => setOutstandingDateOfNPA(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Outstanding Civil</label>
                <input
                  type="text"
                  className="form-control"
                  value={outstandingcivil}
                  onChange={(e) => setOutstandingCivil(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Date lodgement</label>
                <input
                  type="date"
                  className="form-control"
                  value={datelodgement}
                  onChange={(e) => setDateLodgement(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Borrower Guarantee No</label>
                <input
                  type="text"
                  className="form-control"
                  value={borrowerguaranteeno}
                  onChange={(e) => setBorrowerGuaranteeNo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Capital</label>
                <input
                  type="text"
                  className="form-control"
                  value={capital}
                  onChange={(e) => setCapital(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Interest Charges</label>
                <input
                  type="date"
                  className="form-control"
                  value={interestcharges}
                  onChange={(e) => setInterestCharges(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Amount Interest</label>
                <input
                  type="number"
                  className="form-control"
                  value={amountinterest}
                  onChange={(e) => setAmountInterest(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Mode of Recovery</label>
                <input
                  type="text"
                  className="form-control"
                  value={modeofrecovery}
                  onChange={(e) => setModeOfRecovery(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LI's Comment on financial position of Borrower</label>
                <input
                  type="text"
                  className="form-control"
                  value={fpb}
                  onChange={(e) => setFPB(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  Details of Financial Assistance provided/being considered by
                  MLI to minimize default
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={finassist}
                  onChange={(e) => setFinAssist(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  Does the LI propose to provide credit support to
                  Shareholder/Borrower for any other project
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={creditsupport}
                  onChange={(e) => setCreditSupport(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  Details of Bank Facility already provided to Borrower
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={bankfacilities}
                  onChange={(e) => setBankFacilities(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>
                  Does the MLI advise placing the Borrower and/or Chief Promoter
                  under Watch-List of MSME CGS
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={watchlist}
                  onChange={(e) => setWatchList(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary my-4">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default GuaranteeSchemeClaim;
