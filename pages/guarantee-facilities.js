import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const GuaranteeFacilities = () => {
  const [show, setShow] = React.useState(false);
  const [fullname, setFullName] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [physical, setPhysical] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [established, setEstablished] = React.useState("");
  const [typeoforg, setTypeOfOrg] = React.useState("");
  const [partner1surname, setPartner1Surname] = React.useState("");
  const [partner1names, setPartner1Names] = React.useState("");
  const [partner1shares, setPartner1Shares] = React.useState("");
  const [partner1birth, setPartner1Birth] = React.useState("");
  const [partner1address, setPartner1Address] = React.useState("");
  const [partner2surname, setPartner2Surname] = React.useState("");
  const [partner2names, setPartner2Names] = React.useState("");
  const [partner2shares, setPartner2Shares] = React.useState("");
  const [partner2birth, setPartner2Birth] = React.useState("");
  const [partner2address, setPartner2Address] = React.useState("");
  const [partner3surname, setPartner3Surname] = React.useState("");
  const [partner3names, setPartner3Names] = React.useState("");
  const [partner3shares, setPartner3Shares] = React.useState("");
  const [partner3birth, setPartner3Birth] = React.useState("");
  const [partner3address, setPartner3Address] = React.useState("");
  const [partner4surname, setPartner4Surname] = React.useState("");
  const [partner4names, setPartner4Names] = React.useState("");
  const [partner4shares, setPartner4Shares] = React.useState("");
  const [partner4birth, setPartner4Birth] = React.useState("");
  const [partner4address, setPartner4Address] = React.useState("");
  const [civiljudgement, setCivilJudgement] = React.useState("");
  const [personnel1name, setPersonnel1Name] = React.useState("");
  const [personnel1position, setPersonnel1Position] = React.useState("");
  const [personnel1period, setPersonnel1Period] = React.useState("");
  const [personnel1qualif, setPersonnel1Qualif] = React.useState("");
  const [personnel1prev, setPersonnel1Prev] = React.useState("");
  const [personnel2name, setPersonnel2Name] = React.useState("");
  const [personnel2position, setPersonnel2Position] = React.useState("");
  const [personnel2period, setPersonnel2Period] = React.useState("");
  const [personnel2qualif, setPersonnel2Qualif] = React.useState("");
  const [personnel2prev, setPersonnel2Prev] = React.useState("");
  const [personnel3name, setPersonnel3Name] = React.useState("");
  const [personnel3position, setPersonnel3Position] = React.useState("");
  const [personnel3period, setPersonnel3Period] = React.useState("");
  const [personnel3qualif, setPersonnel3Qualif] = React.useState("");
  const [personnel3prev, setPersonnel3Prev] = React.useState("");
  const [typeguarantee, setTypeGuarantee] = React.useState("");
  const [amountgurantee, setAmountGuarantee] = React.useState("");
  const [underwriters, setUnderwriters] = React.useState("");
  const [result, setResult] = React.useState("");
  const [bank1name, setBank1Name] = React.useState("");
  const [bank1branch, setBank1Branch] = React.useState("");
  const [bank1type, setBank1Type] = React.useState("");
  const [bank1accno, setBank1AccNo] = React.useState("");
  const [bank2name, setBank2Name] = React.useState("");
  const [bank2branch, setBank2Branch] = React.useState("");
  const [bank2type, setBank2Type] = React.useState("");
  const [bank2accno, setBank2AccNo] = React.useState("");
  const [bank3name, setBank3Name] = React.useState("");
  const [bank3branch, setBank3Branch] = React.useState("");
  const [bank3type, setBank3Type] = React.useState("");
  const [bank3accno, setBank3AccNo] = React.useState("");
  const [debt1whom, setDebt1Whom] = React.useState("");
  const [debt1amount, setDebt1Amount] = React.useState("");
  const [debt1purpose, setDebt1Purpose] = React.useState("");
  const [debt1repayment, setDebt1Repayment] = React.useState("");
  const [debt2whom, setDebt2Whom] = React.useState("");
  const [debt2amount, setDebt2Amount] = React.useState("");
  const [debt2purpose, setDebt2Purpose] = React.useState("");
  const [debt2repayment, setDebt2Repayment] = React.useState("");
  const [debt3whom, setDebt3Whom] = React.useState("");
  const [debt3amount, setDebt3Amount] = React.useState("");
  const [debt3purpose, setDebt3Purpose] = React.useState("");
  const [debt3repayment, setDebt3Repayment] = React.useState("");
  const [issuedguarantees, setIssuedGuarantees] = React.useState("");
  const [amountguarantees, setAmountGuarantees] = React.useState("");
  const [collateral, setCollateral] = React.useState("");
  const [turneddown, setTurnedDown] = React.useState("");
  const [calledup, setCalledUp] = React.useState("");
  const [proposed, setProposed] = React.useState("");
  const [indemnity, setIndemnity] = React.useState("");
  const [signedat, setSignedAt] = React.useState("");
  const [datestamp, setDateStamp] = React.useState("");
  const [signature, setSignature] = React.useState("");
  const [signatory, setSignatory] = React.useState("");
  const [designation, setDesignation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/guarantee-facilities", {
        fullname,
        postal,
        physical,
        telephone,
        established,
        typeoforg,
        partner1surname,
        partner1names,
        partner1shares,
        partner1birth,
        partner1address,
        partner2surname,
        partner2names,
        partner2shares,
        partner2birth,
        partner2address,
        partner3surname,
        partner3names,
        partner3shares,
        partner3birth,
        partner3address,
        partner4surname,
        partner4names,
        partner4shares,
        partner4birth,
        partner4address,
        civiljudgement,
        personnel1name,
        personnel1position,
        personnel1period,
        personnel1qualif,
        personnel1prev,
        personnel2name,
        personnel2position,
        personnel2period,
        personnel2qualif,
        personnel2prev,
        personnel3name,
        personnel3position,
        personnel3period,
        personnel3qualif,
        personnel3prev,
        typeguarantee,
        amountgurantee,
        underwriters,
        result,
        bank1name,
        bank1branch,
        bank1type,
        bank1accno,
        bank2name,
        bank2branch,
        bank2type,
        bank2accno,
        bank3name,
        bank3branch,
        bank3type,
        bank3accno,
        debt1whom,
        debt1amount,
        debt1purpose,
        debt1repayment,
        debt2whom,
        debt2amount,
        debt2purpose,
        debt2repayment,
        debt3whom,
        debt3amount,
        debt3purpose,
        debt3repayment,
        issuedguarantees,
        amountguarantees,
        collateral,
        turneddown,
        calledup,
        proposed,
        indemnity,
        signedat,
        datestamp,
        signature,
        signatory,
        designation,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setShow(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="mt-5 pt-5 text-center">
          GUARANTEE FACILITY APPLICATION FORM
        </h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Full Name:</b>
                  </label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Postal:</b>
                  </label>
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Physical Address:</b>
                  </label>
                  <input
                    type="text"
                    value={physical}
                    onChange={(e) => setPhysical(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Telephone Number:</b>
                  </label>
                  <input
                    type="number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Year of Establishment:</b>
                  </label>
                  <input
                    type="number"
                    value={established}
                    onChange={(e) => setEstablished(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Type of Organization (Sole Trader, Partnership, Limited
                      Company etc):
                    </b>
                  </label>
                  <input
                    type="text"
                    value={typeoforg}
                    onChange={(e) => setTypeOfOrg(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>DIRECTORS/SHAREHOLDERS/PARTNERS</h3>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 1 Surname:</b>
                  </label>
                  <input
                    type="text"
                    value={partner1surname}
                    onChange={(e) => setPartner1Surname(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 1 Other Names:</b>
                  </label>
                  <input
                    type="text"
                    value={partner1names}
                    onChange={(e) => setPartner1Names(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 1 % Shareholding:</b>
                  </label>
                  <input
                    type="number"
                    value={partner1shares}
                    onChange={(e) => setPartner1Shares(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 1 Date of Birth:</b>
                  </label>
                  <input
                    type="date"
                    value={partner1birth}
                    onChange={(e) => setPartner1Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 1 Residential Address:</b>
                  </label>
                  <input
                    type="text"
                    value={partner1address}
                    onChange={(e) => setPartner1Address(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 2 Surname:</b>
                  </label>
                  <input
                    type="text"
                    value={partner2surname}
                    onChange={(e) => setPartner2Surname(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 2 Surname:</b>
                  </label>
                  <input
                    type="text"
                    value={partner2surname}
                    onChange={(e) => setPartner2Surname(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 2 Names:</b>
                  </label>
                  <input
                    type="text"
                    value={partner2names}
                    onChange={(e) => setPartner2Names(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 2 % Shareholding</b>
                  </label>
                  <input
                    type="number"
                    value={partner2shares}
                    onChange={(e) => setPartner2Shares(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 2 Date of Birth:</b>
                  </label>
                  <input
                    type="date"
                    value={partner2birth}
                    onChange={(e) => setPartner2Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>Partner 2 Address:</b>
                </label>
                <input
                  type="text"
                  value={partner2address}
                  onChange={(e) => setPartner2Address(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 3 Surname:</b>
                  </label>
                  <input
                    type="text"
                    value={partner3surname}
                    onChange={(e) => setPartner3Surname(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 3 Names:</b>
                  </label>
                  <input
                    type="text"
                    value={partner3names}
                    onChange={(e) => setPartner3Names(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 3 % Shareholding:</b>
                  </label>
                  <input
                    type="number"
                    value={partner3shares}
                    onChange={(e) => setPartner3Shares(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Partner 3 Date of Birth:</b>
                  </label>
                  <input
                    type="date"
                    value={partner3birth}
                    onChange={(e) => setPartner3Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 3 Address:</b>
                  </label>
                  <input
                    type="text"
                    value={partner3address}
                    onChange={(e) => setPartner3Address(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 4 Surname:</b>
                  </label>
                  <input
                    type="text"
                    value={partner4surname}
                    onChange={(e) => setPartner4Surname(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 4 Names:</b>
                  </label>
                  <input
                    type="text"
                    value={partner4names}
                    onChange={(e) => setPartner4Names(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 4 % Shareholding:</b>
                  </label>
                  <input
                    type="text"
                    value={partner4shares}
                    onChange={(e) => setPartner4Shares(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 4 Date of Birth:</b>
                  </label>
                  <input
                    type="date"
                    value={partner4birth}
                    onChange={(e) => setPartner4Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Partner 4 Address:</b>
                  </label>
                  <input
                    type="text"
                    value={partner4address}
                    onChange={(e) => setPartner4Address(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Civil Judgement:</b>
                  </label>
                  <input
                    type="text"
                    value={civiljudgement}
                    onChange={(e) => setCivilJudgement(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC25">
                    <b>Personnel 1 - Name:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel1name}
                    onChange={(e) => setPersonnel1Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC26">
                    <b>Personnel 1 - Position:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel1position}
                    onChange={(e) => setPersonnel1Position(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC27">
                    <b>Personnel 1 - Period:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel1period}
                    onChange={(e) => setPersonnel1Period(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC28">
                    <b>Personnel 1 - Qualifications:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel1qualif}
                    onChange={(e) => setPersonnel1Qualif(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC29">
                    <b>Personnel 1 - Previous Employer:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel1prev}
                    onChange={(e) => setPersonnel1Prev(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC30">
                    <b>Personnel 2 - Name:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel2name}
                    onChange={(e) => setPersonnel2Name(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC31">
                    <b>Personnel 2 - Position:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel2position}
                    onChange={(e) => setPersonnel2Position(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC32">
                    <b>Personnel 2 - Period:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel2period}
                    onChange={(e) => setPersonnel2Period(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC32">
                    <b>Personnel 2 - Qualifications:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel2qualif}
                    onChange={(e) => setPersonnel2Qualif(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC32">
                    <b>Personnel 2 - Previous Employer:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel2prev}
                    onChange={(e) => setPersonnel2Prev(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personnel 3 Name:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel3name}
                    onChange={(e) => setPersonnel3Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personnel 3 Position:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel3position}
                    onChange={(e) => setPersonnel3Position(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personnel 3 Period:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel3period}
                    onChange={(e) => setPersonnel3Period(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personnel 3 Qualifications:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel3qualif}
                    onChange={(e) => setPersonnel3Qualif(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personnel 3 Previous Employer:</b>
                  </label>
                  <input
                    type="text"
                    value={personnel3prev}
                    onChange={(e) => setPersonnel3Prev(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>Type of Guarantee required:</b>
                </label>
                <input
                  type="text"
                  value={typeguarantee}
                  onChange={(e) => setTypeGuarantee(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>Amount of Guarantee required:</b>
                </label>
                <input
                  type="number"
                  value={amountgurantee}
                  onChange={(e) => setAmountGuarantee(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>
                    Have you proposed to or made enquiry to any other Company or
                    Underwriters or Private Individuals in respect of the
                    guarantee required. If so, state- The name of Company or
                    Underwriters or Private Individuals:
                  </b>
                </label>
                <input
                  type="text"
                  value={underwriters}
                  onChange={(e) => setUnderwriters(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>The result:</b>
                </label>
                <input
                  type="text"
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                  className="form-control"
                />
              </div>
              <h3>BANKING DETAILS</h3>
              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>Bank 1 Name:</b>
                </label>
                <input
                  type="text"
                  value={bank1name}
                  onChange={(e) => setBank1Name(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Bank 1 Branch:</b>
                  </label>
                  <input
                    type="text"
                    value={bank1branch}
                    onChange={(e) => setBank1Branch(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="inputRC4">
                    <b>Bank 1 Savings/Current:</b>
                  </label>
                  <input
                    type="text"
                    value={bank1type}
                    onChange={(e) => setBank1Type(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group my-3">
                <label for="inputRC1">
                  <b>Bank 1 Account Number:</b>
                </label>
                <input
                  type="number"
                  value={bank1accno}
                  onChange={(e) => setBank1AccNo(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank2name">
                    <b>Bank 2 Name:</b>
                  </label>
                  <input
                    type="text"
                    value={bank2name}
                    onChange={(e) => setBank2Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank2branch">
                    <b>Bank 2 Branch:</b>
                  </label>
                  <input
                    type="text"
                    value={bank2branch}
                    onChange={(e) => setBank2Branch(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank2type">
                    <b>Bank 2 Savings/Current:</b>
                  </label>
                  <input
                    type="text"
                    value={bank2type}
                    onChange={(e) => setBank2Type(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank2accno">
                    <b>Bank 2 Account Number:</b>
                  </label>
                  <input
                    type="text"
                    value={bank2accno}
                    onChange={(e) => setBank2AccNo(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank3name">
                    <b>Bank 3 Name:</b>
                  </label>
                  <input
                    type="text"
                    value={bank3name}
                    onChange={(e) => setBank3Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank3branch">
                    <b>Bank 3 Branch:</b>
                  </label>
                  <input
                    type="text"
                    value={bank3branch}
                    onChange={(e) => setBank3Branch(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank3type">
                    <b>Bank 3 Savings/Current:</b>
                  </label>
                  <input
                    type="text"
                    value={bank3type}
                    onChange={(e) => setBank3Type(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label for="bank3accno">
                    <b>Bank 3 Account Number:</b>
                  </label>
                  <input
                    type="text"
                    value={bank3accno}
                    onChange={(e) => setBank3AccNo(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>To whom Owed 1:</b>
                  </label>
                  <input
                    type="text"
                    value={debt1whom}
                    onChange={(e) => setDebt1Whom(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Amount Owed 1:</b>
                  </label>
                  <input
                    type="number"
                    value={debt1amount}
                    onChange={(e) => setDebt1Amount(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Purpose of Borrowing 1:</b>
                  </label>
                  <input
                    type="text"
                    value={debt1purpose}
                    onChange={(e) => setDebt1Purpose(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Monthly Repayment 1:</b>
                  </label>
                  <input
                    type="number"
                    value={debt1repayment}
                    onChange={(e) => setDebt1Repayment(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>To whom Owed 2:</b>
                  </label>
                  <input
                    type="text"
                    value={debt2whom}
                    onChange={(e) => setDebt2Whom(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Amount Owed 2:</b>
                  </label>
                  <input
                    type="number"
                    value={debt2amount}
                    onChange={(e) => setDebt2Amount(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Purpose of Borrowing 2:</b>
                  </label>
                  <input
                    type="text"
                    value={debt2purpose}
                    onChange={(e) => setDebt2Purpose(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Monthly Repayment 2:</b>
                  </label>
                  <input
                    type="number"
                    value={debt2repayment}
                    onChange={(e) => setDebt2Repayment(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>To whom Owed 3:</b>
                  </label>
                  <input
                    type="text"
                    value={debt3whom}
                    onChange={(e) => setDebt3Whom(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Amount Owed 3:</b>
                  </label>
                  <input
                    type="number"
                    value={debt3amount}
                    onChange={(e) => setDebt3Amount(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Purpose of Borrowing 3:</b>
                  </label>
                  <input
                    type="text"
                    value={debt3purpose}
                    onChange={(e) => setDebt3Purpose(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Monthly Repayment 3:</b>
                  </label>
                  <input
                    type="number"
                    value={debt3repayment}
                    onChange={(e) => setDebt3Repayment(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>GUARANTEE HISTORY</h3>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Who has issued guarantees for you previously?:</b>
                  </label>
                  <input
                    type="text"
                    value={issuedguarantees}
                    onChange={(e) => setIssuedGuarantees(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Total amount of guarantees outstanding US$:</b>
                  </label>
                  <input
                    type="number"
                    value={amountguarantees}
                    onChange={(e) => setAmountGuarantees(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      What collateral security has been provided and by who?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={collateral}
                    onChange={(e) => setCollateral(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has any application been turned down? YES/NO If Yes by
                      who? and Why?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={turneddown}
                    onChange={(e) => setTurnedDown(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has any guarantee issued to you been called up? YES/NO If
                      Yes, Supply details
                    </b>
                  </label>
                  <input
                    type="text"
                    value={calledup}
                    onChange={(e) => setCalledUp(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      What collateral security can be offered for the proposed
                      facility:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={proposed}
                    onChange={(e) => setProposed(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Are directors / shareholders / partners prepared to sign a
                      personal indemnity? YES/NO:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={indemnity}
                    onChange={(e) => setIndemnity(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <small>
                I/We hereby certify that all the foregoing are full, true and
                correct answers and that any falsification will prejudice this
                application. We attach the following documents:
                <br />
                <br />
                i) Copy of Certificate of Incorporation, CR 14 Form, Memorandum
                and Articles of Association.
                <br />
                <br />
                ii) Copies of audited financial statements for the last
                financial year and latest management accounts.
                <br />
                <br />
                iii) Company Profile
                <br />
                <br />
                iv) Bank Statements for the past six months
              </small>
              <div className="form-row my-3">
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Signed At:</b>
                  </label>
                  <input
                    type="text"
                    value={signedat}
                    onChange={(e) => setSignedAt(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Signatory:</b>
                  </label>
                  <input
                    type="text"
                    value={signatory}
                    onChange={(e) => setSignatory(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Designation:</b>
                  </label>
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary my-4">
                Submit
              </button>
            </form>
          </Col>
        </Row>
        <Alert
          show={show}
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>Form has been successfully sent.</p>
        </Alert>
      </Container>
      <Footer />
    </>
  );
};

export default GuaranteeFacilities;
