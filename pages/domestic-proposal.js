import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const DomesticProposal = () => {
  const [show, setShow] = React.useState(false);
  const [from, setFrom] = React.useState("");
  const [fax, setFax] = React.useState("");
  const [date, setDate] = React.useState("");
  const [statusofapplicant, setStatusOfApplicant] = React.useState("");
  const [partners, setPartners] = React.useState("");
  const [bankersaddress, setBankersAddress] = React.useState("");
  const [established, setEstablished] = React.useState("");
  const [exportsales, setExportSales] = React.useState("");
  const [domesticsales, setDomesticSales] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [buyer1, setBuyer1] = React.useState("");
  const [buyer1cod, setBuyer1Cod] = React.useState("");
  const [buyer130days, setBuyer130Days] = React.useState("");
  const [buyer160days, setBuyer160Days] = React.useState("");
  const [buyer190days, setBuyer190Days] = React.useState("");
  const [buyer1other, setBuyer1Other] = React.useState("");
  const [buyer1total, setBuyer1total] = React.useState("");
  const [buyer2, setBuyer2] = React.useState("");
  const [buyer2cod, setBuyer2Cod] = React.useState("");
  const [buyer230days, setBuyer230Days] = React.useState("");
  const [buyer260days, setBuyer260Days] = React.useState("");
  const [buyer290days, setBuyer290Days] = React.useState("");
  const [buyer2other, setBuyer2Other] = React.useState("");
  const [buyer2total, setBuyer2total] = React.useState("");
  const [buyer3, setBuyer3] = React.useState("");
  const [buyer3cod, setBuyer3Cod] = React.useState("");
  const [buyer330days, setBuyer330Days] = React.useState("");
  const [buyer360days, setBuyer360Days] = React.useState("");
  const [buyer390days, setBuyer390Days] = React.useState("");
  const [buyer3other, setBuyer3Other] = React.useState("");
  const [buyer3total, setBuyer3total] = React.useState("");
  const [buyer4, setBuyer4] = React.useState("");
  const [buyer4cod, setBuyer4Cod] = React.useState("");
  const [buyer430days, setBuyer430Days] = React.useState("");
  const [buyer460days, setBuyer460Days] = React.useState("");
  const [buyer490days, setBuyer490Days] = React.useState("");
  const [buyer4other, setBuyer4Other] = React.useState("");
  const [buyer4total, setBuyer4total] = React.useState("");
  const [twobuyer1, setTwoBuyer1] = React.useState("");
  const [twobuyer1cod, setTwoBuyer1Cod] = React.useState("");
  const [twobuyer130days, setTwoBuyer130Days] = React.useState("");
  const [twobuyer160days, setTwoBuyer160Days] = React.useState("");
  const [twobuyer190days, setTwoBuyer190Days] = React.useState("");
  const [twobuyer1other, setTwoBuyer1Other] = React.useState("");
  const [twobuyer1total, setTwoBuyer1Total] = React.useState("");
  const [twobuyer2, setTwoBuyer2] = React.useState("");
  const [twobuyer2cod, setTwoBuyer2Cod] = React.useState("");
  const [twobuyer230days, setTwoBuyer230Days] = React.useState("");
  const [twobuyer260days, setTwoBuyer260Days] = React.useState("");
  const [twobuyer290days, setTwoBuyer290Days] = React.useState("");
  const [twobuyer2other, setTwoBuyer2Other] = React.useState("");
  const [twobuyer2total, setTwoBuyer2Total] = React.useState("");
  const [twobuyer3, setTwoBuyer3] = React.useState("");
  const [twobuyer3cod, setTwoBuyer3Cod] = React.useState("");
  const [twobuyer330days, setTwoBuyer330Days] = React.useState("");
  const [twobuyer360days, setTwoBuyer360Days] = React.useState("");
  const [twobuyer390days, setTwoBuyer390Days] = React.useState("");
  const [twobuyer3other, setTwoBuyer3Other] = React.useState("");
  const [twobuyer3total, setTwoBuyer3Total] = React.useState("");
  const [twobuyer4, setTwoBuyer4] = React.useState("");
  const [twobuyer4cod, setTwoBuyer4Cod] = React.useState("");
  const [twobuyer430days, setTwoBuyer430Days] = React.useState("");
  const [twobuyer460days, setTwoBuyer460Days] = React.useState("");
  const [twobuyer490days, setTwoBuyer490Days] = React.useState("");
  const [twobuyer4other, setTwoBuyer4Other] = React.useState("");
  const [twobuyer4total, setTwoBuyer4Total] = React.useState("");
  const [quotation, setQuotation] = React.useState("");
  const [debtors, setDebtors] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [turnover2006, setTurnover2006] = React.useState("");
  const [debt2006, setDebt2006] = React.useState("");
  const [turnover2007, setTurnover2007] = React.useState("");
  const [debt2007, setDebt2007] = React.useState("");
  const [turnover2008, setTurnover2008] = React.useState("");
  const [debt2008, setDebt2008] = React.useState("");
  const [turnovertotal, setTurnOverTotal] = React.useState("");
  const [debttotal, setDebtTotal] = React.useState("");
  const [debtsyear1, setDebtsyear1] = React.useState("");
  const [debtsbuyer1, setDebtsbuyer1] = React.useState("");
  const [debtsamount1, setDebtsAmount1] = React.useState("");
  const [debtscause1, setDebtsCause1] = React.useState("");
  const [debtsremarks1, setDebtsRemarks1] = React.useState("");
  const [debtsyear2, setDebtsyear2] = React.useState("");
  const [debtsbuyer2, setDebtsbuyer2] = React.useState("");
  const [debtsamount2, setDebtsAmount2] = React.useState("");
  const [debtscause2, setDebtsCause2] = React.useState("");
  const [debtsremarks2, setDebtsRemarks2] = React.useState("");
  const [debtsyear3, setDebtsyear3] = React.useState("");
  const [debtsbuyer3, setDebtsbuyer3] = React.useState("");
  const [debtsamount3, setDebtsAmount3] = React.useState("");
  const [debtscause3, setDebtsCause3] = React.useState("");
  const [debtsremarks3, setDebtsRemarks3] = React.useState("");
  const [debtsyear4, setDebtsyear4] = React.useState("");
  const [debtsbuyer4, setDebtsbuyer4] = React.useState("");
  const [debtsamount4, setDebtsAmount4] = React.useState("");
  const [debtscause4, setDebtsCause4] = React.useState("");
  const [debtsremarks4, setDebtsRemarks4] = React.useState("");
  const [overduename1, setOverDueName1] = React.useState("");
  const [overdueamount1, setOverDueAmount1] = React.useState("");
  const [overduereason1, setOverDueReason1] = React.useState("");
  const [overduename2, setOverDueName2] = React.useState("");
  const [overdueamount2, setOverDueAmount2] = React.useState("");
  const [overduereason2, setOverDueReason2] = React.useState("");
  const [overduename3, setOverDueName3] = React.useState("");
  const [overdueamount3, setOverDueAmount3] = React.useState("");
  const [overduereason3, setOverDueReason3] = React.useState("");
  const [overduename4, setOverDueName4] = React.useState("");
  const [overdueamount4, setOverDueAmount4] = React.useState("");
  const [overduereason4, setOverDueReason4] = React.useState("");
  const [buyersnumber, setBuyersNumber] = React.useState("");
  const [satisfy, setSatisfy] = React.useState("");
  const [checking, setChecking] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [signture, setSignture] = React.useState("");
  const [signame, setSigname] = React.useState("");
  const [designation, setDesignation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/domestic-proposal", {
        from,
        phone,
        fax,
        date,
        statusofapplicant,
        partners,
        bankersaddress,
        established,
        exportsales,
        domesticsales,
        description,
        buyer1,
        buyer1cod,
        buyer130days,
        buyer160days,
        buyer190days,
        buyer1other,
        buyer1total,
        buyer2,
        buyer2cod,
        buyer230days,
        buyer260days,
        buyer290days,
        buyer2other,
        buyer2total,
        buyer3,
        buyer3cod,
        buyer330days,
        buyer360days,
        buyer390days,
        buyer3other,
        buyer3total,
        buyer4,
        buyer4cod,
        buyer430days,
        buyer460days,
        buyer490days,
        buyer4other,
        buyer4total,
        twobuyer1,
        twobuyer1cod,
        twobuyer130days,
        twobuyer160days,
        twobuyer190days,
        twobuyer1other,
        twobuyer1total,
        twobuyer2,
        twobuyer2cod,
        twobuyer230days,
        twobuyer260days,
        twobuyer290days,
        twobuyer2other,
        twobuyer2total,
        twobuyer3,
        twobuyer3cod,
        twobuyer330days,
        twobuyer360days,
        twobuyer390days,
        twobuyer3other,
        twobuyer3total,
        twobuyer4,
        twobuyer4cod,
        twobuyer430days,
        twobuyer460days,
        twobuyer490days,
        twobuyer4other,
        twobuyer4total,
        quotation,
        debtors,
        institution,
        turnover2006,
        debt2006,
        turnover2007,
        debt2007,
        turnover2008,
        debt2008,
        turnovertotal,
        debttotal,
        debtsyear1,
        debtsbuyer1,
        debtsamount1,
        debtscause1,
        debtsremarks1,
        debtsyear2,
        debtsbuyer2,
        debtsamount2,
        debtscause2,
        debtsremarks2,
        debtsyear3,
        debtsbuyer3,
        debtsamount3,
        debtscause3,
        debtsremarks3,
        debtsyear4,
        debtsbuyer4,
        debtsamount4,
        debtscause4,
        debtsremarks4,
        overduename1,
        overdueamount1,
        overduereason1,
        overduename2,
        overdueamount2,
        overduereason2,
        overduename3,
        overdueamount3,
        overduereason3,
        overduename4,
        overdueamount4,
        overduereason4,
        buyersnumber,
        satisfy,
        checking,
        place,
        sigdate: new Date(),
        signture,
        signame,
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
        <h1 className="mt-5 pt-5 text-center">Domestic Proposal Form</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>From:</b>
                  </label>
                  <input
                    type="text"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Fax Number:</b>
                  </label>
                  <input
                    type="number"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      We hereby apply for a Domestic Credit Insurance Policy to
                      cover outstanding debtors for a period of one year
                      commencing from:
                    </b>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      1. Status of the applicant (state whether individual,
                      partnership, private limited company, or public limited
                      company):
                    </b>
                  </label>
                  <input
                    type="text"
                    value={statusofapplicant}
                    onChange={(e) => setStatusOfApplicant(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      2. Name and address of proprietor/ partners/directors:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={partners}
                    onChange={(e) => setPartners(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>3. Name & Address of our bankers:</b>
                  </label>
                  <input
                    type="text"
                    value={bankersaddress}
                    onChange={(e) => setBankersAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>4. a) Year of establishment</b>
                  </label>
                  <input
                    type="number"
                    value={established}
                    onChange={(e) => setEstablished(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>4. b) Total sales turnover Export Sales (US$)</b>
                  </label>
                  <input
                    type="number"
                    value={exportsales}
                    onChange={(e) => setExportSales(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>4. c) Domestic Sales (US$)</b>
                  </label>
                  <input
                    type="text"
                    value={domesticsales}
                    onChange={(e) => setDomesticSales(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>5. Description of goods:</b>
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                Details of sales to principal buyers in the last 12 months
                (Please enter N/A in appropriate columns, if not applicable)
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1:</b>
                  </label>
                  <input
                    type="text"
                    value={buyer1}
                    onChange={(e) => setBuyer1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 COD</b>
                  </label>
                  <input
                    type="text"
                    value={buyer1cod}
                    onChange={(e) => setBuyer1Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 30 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer130days}
                    onChange={(e) => setBuyer130Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 60 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer160days}
                    onChange={(e) => setBuyer160Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 90 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer190days}
                    onChange={(e) => setBuyer190Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 Other</b>
                  </label>
                  <input
                    type="text"
                    value={buyer1other}
                    onChange={(e) => setBuyer1Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 Total</b>
                  </label>
                  <input
                    type="text"
                    value={buyer1total}
                    onChange={(e) => setBuyer1total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2:</b>
                  </label>
                  <input
                    type="text"
                    value={buyer2}
                    onChange={(e) => setBuyer2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 COD</b>
                  </label>
                  <input
                    type="text"
                    value={buyer2cod}
                    onChange={(e) => setBuyer2Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 30 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer230days}
                    onChange={(e) => setBuyer230Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 60 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer260days}
                    onChange={(e) => setBuyer260Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 90 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer290days}
                    onChange={(e) => setBuyer290Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 Other</b>
                  </label>
                  <input
                    type="text"
                    value={buyer2other}
                    onChange={(e) => setBuyer2Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 Total</b>
                  </label>
                  <input
                    type="text"
                    value={buyer2total}
                    onChange={(e) => setBuyer2total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3:</b>
                  </label>
                  <input
                    type="text"
                    value={buyer3}
                    onChange={(e) => setBuyer3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 COD</b>
                  </label>
                  <input
                    type="text"
                    value={buyer3cod}
                    onChange={(e) => setBuyer3Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 30 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer330days}
                    onChange={(e) => setBuyer330Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 60 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer360days}
                    onChange={(e) => setBuyer360Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 90 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer390days}
                    onChange={(e) => setBuyer390Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 Other</b>
                  </label>
                  <input
                    type="text"
                    value={buyer3other}
                    onChange={(e) => setBuyer3Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 Total</b>
                  </label>
                  <input
                    type="text"
                    value={buyer3total}
                    onChange={(e) => setBuyer3total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4:</b>
                  </label>
                  <input
                    type="text"
                    value={buyer4}
                    onChange={(e) => setBuyer4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 COD</b>
                  </label>
                  <input
                    type="text"
                    value={buyer4cod}
                    onChange={(e) => setBuyer4Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 30 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer430days}
                    onChange={(e) => setBuyer430Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 60 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer460days}
                    onChange={(e) => setBuyer460Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 90 days</b>
                  </label>
                  <input
                    type="text"
                    value={buyer490days}
                    onChange={(e) => setBuyer490Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 Other</b>
                  </label>
                  <input
                    type="text"
                    value={buyer4other}
                    onChange={(e) => setBuyer4Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 Total</b>
                  </label>
                  <input
                    type="text"
                    value={buyer4total}
                    onChange={(e) => setBuyer4total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                Our anticipated sales to principal buyers for the next 12 months
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1:</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer1}
                    onChange={(e) => setTwoBuyer1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 COD</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer1cod}
                    onChange={(e) => setTwoBuyer1Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 30 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer130days}
                    onChange={(e) => setTwoBuyer130Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 60 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer160days}
                    onChange={(e) => setTwoBuyer160Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 90 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer190days}
                    onChange={(e) => setTwoBuyer190Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 Other</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer1other}
                    onChange={(e) => setTwoBuyer1Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1 Total</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer1total}
                    onChange={(e) => setTwoBuyer1total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2:</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer2}
                    onChange={(e) => setTwoBuyer2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 COD</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer2cod}
                    onChange={(e) => setTwoBuyer2Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 30 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer230days}
                    onChange={(e) => setTwoBuyer230Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 60 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer260days}
                    onChange={(e) => setTwoBuyer260Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 90 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer290days}
                    onChange={(e) => setTwoBuyer290Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 Other</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer2other}
                    onChange={(e) => setTwoBuyer2Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2 Total</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer2total}
                    onChange={(e) => setTwoBuyer2total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3:</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer3}
                    onChange={(e) => setTwoBuyer3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 COD</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer3cod}
                    onChange={(e) => setTwoBuyer3Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 30 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer330days}
                    onChange={(e) => setTwoBuyer330Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 60 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer360days}
                    onChange={(e) => setTwoBuyer360Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 90 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer390days}
                    onChange={(e) => setTwoBuyer390Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 Other</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer3other}
                    onChange={(e) => setTwoBuyer3Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3 Total</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer3total}
                    onChange={(e) => setTwoBuyer3total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4:</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer4}
                    onChange={(e) => setTwoBuyer4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 COD</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer4cod}
                    onChange={(e) => setTwoBuyer4Cod(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 30 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer430days}
                    onChange={(e) => setTwoBuyer430Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 60 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer460days}
                    onChange={(e) => setTwoBuyer460Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 90 days</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer490days}
                    onChange={(e) => setTwoBuyer490Days(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 Other</b>
                  </label>
                  <input
                    type="text"
                    value={twobuyer4other}
                    onChange={(e) => setTwoBuyer4Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4 Total</b>
                  </label>
                  <input
                    type="number"
                    value={twobuyer4total}
                    onChange={(e) => setTwoBuyer4Total(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Do you wish to obtain a quotation for cover of All Buyers
                      or Selected Buyers? If Selected Buyers, the following
                      buyers are to be covered only
                    </b>
                  </label>
                  <input
                    type="text"
                    value={quotation}
                    onChange={(e) => setQuotation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Are your debtors ceded to any financial institution? If
                      yes, please give details of such institution i.e. full
                      name and address.
                    </b>
                  </label>
                  <input
                    type="text"
                    value={debtors}
                    onChange={(e) => setDebtors(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Do you wish the Policy to be ceded to any financial or
                      other institution as collateral security? Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                Details of turnover in the last three years and the net bad debt
                losses incurred in each of the three years;
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2006 Turnover – US$</b>
                  </label>
                  <input
                    type="number"
                    value={turnover2006}
                    onChange={(e) => setTurnover2006(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2006 Bad Debts – US$</b>
                  </label>
                  <input
                    type="number"
                    value={debt2006}
                    onChange={(e) => setDebt2006(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2007 Turnover – US$</b>
                  </label>
                  <input
                    type="number"
                    value={turnover2007}
                    onChange={(e) => setTurnover2007(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2007 Bad Debts – US$</b>
                  </label>
                  <input
                    type="number"
                    value={debt2007}
                    onChange={(e) => setDebt2007(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2008 Turnover – US$</b>
                  </label>
                  <input
                    type="number"
                    value={turnover2008}
                    onChange={(e) => setTurnover2008(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>2008 Bad Debts – US$</b>
                  </label>
                  <input
                    type="number"
                    value={debt2008}
                    onChange={(e) => setDebt2008(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total Turnover</b>
                  </label>
                  <input
                    type="number"
                    value={turnovertotal}
                    onChange={(e) => setTurnOverTotal(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total Bad Debt</b>
                  </label>
                  <input
                    type="number"
                    value={debttotal}
                    onChange={(e) => setDebtTotal(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                Bad debts suffered by us in the last 3 years (buyer-wise) –
                Detailed Report
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Year 1</b>
                  </label>
                  <input
                    type="number"
                    value={debtsyear1}
                    onChange={(e) => setDebtsyear1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 1</b>
                  </label>
                  <input
                    type="text"
                    value={debtsbuyer1}
                    onChange={(e) => setDebtsbuyer1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Amount Of Bad Debt (US$) 1</b>
                  </label>
                  <input
                    type="number"
                    value={debtsamount1}
                    onChange={(e) => setDebtsAmount1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Cause Of Loss 1</b>
                  </label>
                  <input
                    type="text"
                    value={debtscause1}
                    onChange={(e) => setDebtsCause1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Remarks 1</b>
                  </label>
                  <input
                    type="text"
                    value={debtsremarks1}
                    onChange={(e) => setDebtsRemarks1(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Year 2</b>
                  </label>
                  <input
                    type="number"
                    value={debtsyear2}
                    onChange={(e) => setDebtsyear2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 2</b>
                  </label>
                  <input
                    type="text"
                    value={debtsbuyer2}
                    onChange={(e) => setDebtsbuyer2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Amount Of Bad Debt (US$) 2</b>
                  </label>
                  <input
                    type="number"
                    value={debtsamount2}
                    onChange={(e) => setDebtsAmount2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Cause Of Loss 2</b>
                  </label>
                  <input
                    type="text"
                    value={debtscause2}
                    onChange={(e) => setDebtsCause2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Remarks 2</b>
                  </label>
                  <input
                    type="text"
                    value={debtsremarks2}
                    onChange={(e) => setDebtsRemarks2(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Year 3</b>
                  </label>
                  <input
                    type="number"
                    value={debtsyear3}
                    onChange={(e) => setDebtsyear3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 3</b>
                  </label>
                  <input
                    type="text"
                    value={debtsbuyer3}
                    onChange={(e) => setDebtsbuyer3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Amount Of Bad Debt (US$) 3</b>
                  </label>
                  <input
                    type="number"
                    value={debtsamount3}
                    onChange={(e) => setDebtsAmount3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Cause Of Loss 3</b>
                  </label>
                  <input
                    type="text"
                    value={debtscause3}
                    onChange={(e) => setDebtsCause3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Remarks 3</b>
                  </label>
                  <input
                    type="text"
                    value={debtsremarks3}
                    onChange={(e) => setDebtsRemarks3(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Year 4</b>
                  </label>
                  <input
                    type="number"
                    value={debtsyear4}
                    onChange={(e) => setDebtsyear4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Buyer 4</b>
                  </label>
                  <input
                    type="text"
                    value={debtsbuyer4}
                    onChange={(e) => setDebtsbuyer4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Amount Of Bad Debt (US$) 4</b>
                  </label>
                  <input
                    type="number"
                    value={debtsamount4}
                    onChange={(e) => setDebtsAmount4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Cause Of Loss 4</b>
                  </label>
                  <input
                    type="text"
                    value={debtscause4}
                    onChange={(e) => setDebtsCause4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> Remarks 4</b>
                  </label>
                  <input
                    type="text"
                    value={debtsremarks4}
                    onChange={(e) => setDebtsRemarks4(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                Particulars of payments overdue by more than 3 months as on date
                of this Proposal
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name & Address of Buyer 1</b>
                  </label>
                  <input
                    type="text"
                    value={overduename1}
                    onChange={(e) => setOverDueName1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Amount (US$) 1</b>
                  </label>
                  <input
                    type="number"
                    value={overdueamount1}
                    onChange={(e) => setOverDueAmount1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Reason for Delay 1</b>
                  </label>
                  <input
                    type="text"
                    value={overduereason1}
                    onChange={(e) => setOverDueReason1(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name & Address of Buyer 2</b>
                  </label>
                  <input
                    type="text"
                    value={overduename2}
                    onChange={(e) => setOverDueName2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Amount (US$) 2</b>
                  </label>
                  <input
                    type="number"
                    value={overdueamount2}
                    onChange={(e) => setOverDueAmount2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Reason for Delay 2</b>
                  </label>
                  <input
                    type="text"
                    value={overduereason2}
                    onChange={(e) => setOverDueReason2(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name & Address of Buyer 3</b>
                  </label>
                  <input
                    type="text"
                    value={overduename3}
                    onChange={(e) => setOverDueName3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Amount (US$) 3</b>
                  </label>
                  <input
                    type="number"
                    value={overdueamount3}
                    onChange={(e) => setOverDueAmount3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Reason for Delay 3</b>
                  </label>
                  <input
                    type="text"
                    value={overduereason3}
                    onChange={(e) => setOverDueReason3(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name & Address of Buyer 4</b>
                  </label>
                  <input
                    type="text"
                    value={overduename4}
                    onChange={(e) => setOverDueName4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Amount (US$) 4</b>
                  </label>
                  <input
                    type="number"
                    value={overdueamount4}
                    onChange={(e) => setOverDueAmount4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Reason for Delay 4</b>
                  </label>
                  <input
                    type="text"
                    value={overduereason4}
                    onChange={(e) => setOverDueReason4(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Credit Control</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      The number of buyers to whom you are regularly selling to
                      at present:
                    </b>
                  </label>
                  <input
                    type="number"
                    value={buyersnumber}
                    onChange={(e) => setBuyersNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      How do you satisfy yourselves about the credit- worthiness
                      of buyers before you conclude sales contracts?
                    </b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={satisfy}
                    onChange={(e) => setSatisfy(e.target.value)}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Do you have a system of checking the credit- worthiness of
                      your regular buyers at periodical intervals?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={checking}
                    onChange={(e) => setChecking(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-1">
                <small>
                  (i) We declare that we are not aware of any circumstances
                  relating to any particular buyer which might adversely
                  influence your acceptance of any of the risks against which we
                  are hereby requesting insurance. We further declare that in
                  the event of this Proposal being accepted and a Policy issued,
                  we shall at all times during the currency of the Policy
                  forthwith notify you of any circumstances which might
                  adversely affect the risks against which we are seeking
                  insurance.
                  <br />
                  <br />
                  (ii) We declare that we have not assigned or pledged or
                  transferred any part of payment due to be covered under the
                  Policy or any right or interest acquired by virtue thereof or
                  received any indemnity or security whatsoever in respect
                  thereof and we shall not effect any such assignment or pledge
                  or receive any such indemnity or security without your prior
                  consent in writing.
                  <br />
                  <br />
                  (iii) We undertake that the credit sales to be covered under
                  the Policy shall be of goods wholly or partly produced,
                  processed or manufactured in Zimbabwe.
                  <br />
                  <br />
                  (iv) We undertake that we shall carry on our business with due
                  care in the selection of the buyers and that the contracts
                  entered into shall adequately safeguard our interests and we
                  shall dispatch and deliver the goods in accordance with such
                  contracts.
                  <br />
                  <br />
                  (v) We undertake that all discussions and correspondence in
                  connection with this Proposal and with any Policy arising
                  therefrom are to be treated by both sides as confidential
                  (except to the extent necessary to our bankers) and we shall
                  not, without your prior consent in writing, disclose either
                  the existence of the Policy or any of the details to our
                  agents or to our buyers or to any other persons or firms other
                  than our bankers.
                  <br />
                  <br />
                  (vi) We hereby declare and certify that all representations
                  made and facts stated by us are true and that we have not
                  misrepresented or omitted any material fact which might have a
                  bearing on the Policy, and we agree that such representations
                  and facts and due performance of each and every undertaking
                  contained herein or in the Policy shall be a condition
                  precedent to any liability of the Corporation hereunder and to
                  the enforcement thereof by us.
                </small>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Place</b>
                  </label>
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name:</b>
                  </label>
                  <input
                    type="text"
                    value={signame}
                    onChange={(e) => setSigname(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Designation</b>
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

export default DomesticProposal;
