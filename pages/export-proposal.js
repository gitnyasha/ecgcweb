import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const ExportProposal = () => {
  const [show, setShow] = React.useState(false);
  const [from, setFrom] = React.useState("");
  const [fax, setFax] = React.useState("");
  const [date, setDate] = React.useState("");
  const [commence, setCommerce] = React.useState("");
  const [statusofapplicant, setStatusOfApplicant] = React.useState("");
  const [partners, setPartners] = React.useState("");
  const [bankersaddress, setBankersAddress] = React.useState("");
  const [established, setEstablished] = React.useState("");
  const [exportsales, setExportSales] = React.useState("");
  const [domesticsales, setDomesticSales] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [country1, setCountry1] = React.useState("");
  const [country1against, setCountry1Against] = React.useState("");
  const [country1cad, setCountry1Cad] = React.useState("");
  const [country1account, setCountry1Account] = React.useState("");
  const [country1other, setCountry1Other] = React.useState("");
  const [country1total, setCountry1total] = React.useState("");
  const [country2, setCountry2] = React.useState("");
  const [country2against, setCountry2Against] = React.useState("");
  const [country2cad, setCountry2Cad] = React.useState("");
  const [country2account, setCountry2Account] = React.useState("");
  const [country2other, setCountry2Other] = React.useState("");
  const [country2total, setCountry2total] = React.useState("");
  const [country3, setCountry3] = React.useState("");
  const [country3against, setCountry3Against] = React.useState("");
  const [country3cad, setCountry3Cad] = React.useState("");
  const [country3account, setCountry3Account] = React.useState("");
  const [country3other, setCountry3Other] = React.useState("");
  const [country3total, setCountry3total] = React.useState("");
  const [country4, setCountry4] = React.useState("");
  const [country4against, setCountry4Against] = React.useState("");
  const [country4cad, setCountry4Cad] = React.useState("");
  const [country4account, setCountry4Account] = React.useState("");
  const [country4other, setCountry4Other] = React.useState("");
  const [country4total, setCountry4total] = React.useState("");
  const [cntry1, setCntry1] = React.useState("");
  const [cntry1cad1, setCntry1Cad1] = React.useState("");
  const [cntry1within, setCntry1Within] = React.useState("");
  const [cntry1days1, setCntry1Days1] = React.useState("");
  const [cntry1cad2, setCntry1Cad2] = React.useState("");
  const [cntry1upto, setCntry1Upto] = React.useState("");
  const [cntry1days2, setCntry1Days2] = React.useState("");
  const [cntry1total, setCntry1Total] = React.useState("");
  const [cntry2, setCntry2] = React.useState("");
  const [cntry2cad1, setCntry2Cad1] = React.useState("");
  const [cntry2within, setCntry2Within] = React.useState("");
  const [cntry2days1, setCntry2Days1] = React.useState("");
  const [cntry2cad2, setCntry2Cad2] = React.useState("");
  const [cntry2upto, setCntry2Upto] = React.useState("");
  const [cntry2days2, setCntry2Days2] = React.useState("");
  const [cntry2total, setCntry2Total] = React.useState("");
  const [cntry3, setCntry3] = React.useState("");
  const [cntry3cad1, setCntry3Cad1] = React.useState("");
  const [cntry3within, setCntry3Within] = React.useState("");
  const [cntry3days1, setCntry3Days1] = React.useState("");
  const [cntry3cad2, setCntry3Cad2] = React.useState("");
  const [cntry3upto, setCntry3Upto] = React.useState("");
  const [cntry3days2, setCntry3Days2] = React.useState("");
  const [cntry3total, setCntry3Total] = React.useState("");
  const [quotation, setQuotation] = React.useState("");
  const [collateral, setCollateral] = React.useState("");
  const [shipments, setShipments] = React.useState("");
  const [opendelivery, setOpenDelivery] = React.useState("");
  const [associates, setAssociates] = React.useState("");
  const [shipmentvalue, setShipmentValue] = React.useState("");
  const [politicalrisk, setPoliticalRisk] = React.useState("");
  const [consignees, setConsignees] = React.useState("");
  const [shipmentsvalue2, setShipmentsValue2] = React.useState("");
  const [politicalrisk2, setPoliticalRisk2] = React.useState("");
  const [comprerisk, setCompreRisk] = React.useState("");
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
  const [foreignbuyers, setForeignBuyers] = React.useState("");
  const [satisfy, setSatisfy] = React.useState("");
  const [checking, setChecking] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [signture, setSignture] = React.useState("");
  const [signame, setSigname] = React.useState("");
  const [designation, setDesignation] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/export-proposal", {
        from,
        phone,
        fax,
        date,
        commence,
        statusofapplicant,
        partners,
        bankersaddress,
        established,
        exportsales,
        description,
        country1,
        country1against,
        country1cad,
        country1account,
        country1other,
        country1total,
        country2,
        country2against,
        country2cad,
        country2account,
        country2other,
        country2total,
        country3,
        country3against,
        country3cad,
        country3account,
        country3other,
        country3total,
        country4,
        country4against,
        country4cad,
        country4account,
        country4other,
        country4total,
        cntry1,
        cntry1cad1,
        cntry1within,
        cntry1days1,
        cntry1cad2,
        cntry1upto,
        cntry1days2,
        cntry1total,
        cntry2,
        cntry2cad1,
        cntry2within,
        cntry2days1,
        cntry2cad2,
        cntry2upto,
        cntry2days2,
        cntry2total,
        cntry3,
        cntry3cad1,
        cntry3within,
        cntry3days1,
        cntry3cad2,
        cntry3upto,
        cntry3days2,
        cntry3total,
        quotation,
        collateral,
        shipments,
        opendelivery,
        associates,
        shipmentvalue,
        politicalrisk,
        consignees,
        shipmentsvalue2,
        politicalrisk2,
        comprerisk,
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
        foreignbuyers,
        satisfy,
        checking,
        place,
        sigdate: new Date(),
        signture,
        signame,
        designation,
      })
      .then((res) => {
        if (res.status === 201) {
          setShow(true);
          setFrom("");
          setFax("");
          setDate("");
          setStatusOfApplicant("");
          setPartners("");
          setBankersAddress("");
          setEstablished("");
          setExportSales("");
          setDomesticSales("");
          setDescription("");
          setCommerce("");
          setCountry1("");
          setCountry1Against("");
          setCountry1Cad("");
          setCountry1Account("");
          setCountry1Other("");
          setCountry1total("");
          setCountry2("");
          setCountry2Against("");
          setCountry2Cad("");
          setCountry2Account("");
          setCountry2Other("");
          setCountry2total("");
          setCountry3("");
          setCountry3Against("");
          setCountry3Cad("");
          setCountry3Account("");
          setCountry3Other("");
          setCountry3total("");
          setCountry4("");
          setCountry4Against("");
          setCountry4Cad("");
          setCountry4Account("");
          setCountry4Other("");
          setCountry4total("");
          setCntry1("");
          setCntry1Cad1("");
          setCntry1Within("");
          setCntry1Days1("");
          setCntry1Cad2("");
          setCntry1Upto("");
          setCntry1Days2("");
          setCntry1Total("");
          setCntry2("");
          setCntry2Cad1("");
          setCntry2Within("");
          setCntry2Days1("");
          setCntry2Cad2("");
          setCntry2Upto("");
          setCntry2Days2("");
          setCntry2Total("");
          setCntry3("");
          setCntry3Cad1("");
          setCntry3Within("");
          setCntry3Days1("");
          setCntry3Cad2("");
          setCntry3Upto("");
          setCntry3Days2("");
          setCntry3Total("");
          setQuotation("");
          setCollateral("");
          setShipments("");
          setOpenDelivery("");
          setAssociates("");
          setShipmentValue("");
          setPoliticalRisk("");
          setConsignees("");
          setShipmentsValue2("");
          setPoliticalRisk2("");
          setCompreRisk("");
          setDebtsyear1("");
          setDebtsbuyer1("");
          setDebtsAmount1("");
          setDebtsCause1("");
          setDebtsRemarks1("");
          setDebtsyear2("");
          setDebtsbuyer2("");
          setDebtsAmount2("");
          setDebtsCause2("");
          setDebtsRemarks2("");
          setDebtsyear4("");
          setDebtsbuyer4("");
          setDebtsAmount4("");
          setDebtsCause4("");
          setDebtsRemarks4("");
          setOverDueName1("");
          setOverDueAmount1("");
          setOverDueReason1("");
          setOverDueName2("");
          setOverDueAmount2("");
          setOverDueReason2("");
          setOverDueName3("");
          setOverDueAmount3("");
          setOverDueReason3("");
          setOverDueName4("");
          setOverDueAmount4("");
          setOverDueReason4("");
          setBuyersNumber("");
          setSatisfy("");
          setChecking("");
          setPlace("");
          setSigname("");
          setDesignation("");
        }
      })
      .catch((err) => {
        alert("Error: Form submission not successful");
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="mt-5 pt-5 text-center">Export Proposal Form</h1>
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
                    maxLength={200}
                    required
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
                    required
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
                    maxLength={5000}
                    required
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
                    maxLength={5000}
                    required
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
                    required
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
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>4. c) Domestic Sales (US$)</b>
                  </label>
                  <input
                    type="number"
                    value={domesticsales}
                    onChange={(e) => setDomesticSales(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>5. Description of goods exported:</b>
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                    required
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
                    <b>Country 1:</b>
                  </label>
                  <input
                    type="text"
                    value={country1}
                    onChange={(e) => setCountry1(e.target.value)}
                    className="form-control"
                    maxLength={100}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 1 CAD:</b>
                  </label>
                  <input
                    type="text"
                    value={country1cad}
                    onChange={(e) => setCountry1Cad(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Against L/Cs 1</b>
                  </label>
                  <input
                    type="text"
                    value={country1against}
                    onChange={(e) => setCountry1Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> On CAD Terms 1</b>
                  </label>
                  <input
                    type="text"
                    value={country1cad}
                    onChange={(e) => setCountry1Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On Open Account 1</b>
                  </label>
                  <input
                    type="text"
                    value={country1account}
                    onChange={(e) => setCountry1Account(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Other 1</b>
                  </label>
                  <input
                    type="text"
                    value={country1other}
                    onChange={(e) => setCountry1Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total 1</b>
                  </label>
                  <input
                    type="number"
                    value={country1total}
                    onChange={(e) => setCountry1total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 2:</b>
                  </label>
                  <input
                    type="text"
                    value={country2}
                    onChange={(e) => setCountry2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 2 CAD:</b>
                  </label>
                  <input
                    type="text"
                    value={country2cad}
                    onChange={(e) => setCountry2Cad(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Against L/Cs 2</b>
                  </label>
                  <input
                    type="text"
                    value={country2against}
                    onChange={(e) => setCountry2Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> On CAD Terms 1</b>
                  </label>
                  <input
                    type="text"
                    value={country2cad}
                    onChange={(e) => setCountry2Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On Open Account 2</b>
                  </label>
                  <input
                    type="text"
                    value={country2account}
                    onChange={(e) => setCountry2Account(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Other 2</b>
                  </label>
                  <input
                    type="text"
                    value={country2other}
                    onChange={(e) => setCountry2Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total 2</b>
                  </label>
                  <input
                    type="number"
                    value={country2total}
                    onChange={(e) => setCountry2total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 3:</b>
                  </label>
                  <input
                    type="text"
                    value={country3}
                    onChange={(e) => setCountry3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 3 CAD:</b>
                  </label>
                  <input
                    type="text"
                    value={country3cad}
                    onChange={(e) => setCountry3Cad(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Against L/Cs 3</b>
                  </label>
                  <input
                    type="text"
                    value={country3against}
                    onChange={(e) => setCountry3Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> On CAD Terms 3</b>
                  </label>
                  <input
                    type="text"
                    value={country3cad}
                    onChange={(e) => setCountry3Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On Open Account 3</b>
                  </label>
                  <input
                    type="text"
                    value={country3account}
                    onChange={(e) => setCountry3Account(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Other 3</b>
                  </label>
                  <input
                    type="text"
                    value={country3other}
                    onChange={(e) => setCountry3Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total 3</b>
                  </label>
                  <input
                    type="number"
                    value={country3total}
                    onChange={(e) => setCountry3total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 4:</b>
                  </label>
                  <input
                    type="text"
                    value={country4}
                    onChange={(e) => setCountry4(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 4 CAD:</b>
                  </label>
                  <input
                    type="text"
                    value={country4cad}
                    onChange={(e) => setCountry4Cad(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Against L/Cs 4</b>
                  </label>
                  <input
                    type="text"
                    value={country4against}
                    onChange={(e) => setCountry4Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b> On CAD Terms 4</b>
                  </label>
                  <input
                    type="text"
                    value={country4cad}
                    onChange={(e) => setCountry4Against(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On Open Account 4</b>
                  </label>
                  <input
                    type="text"
                    value={country4account}
                    onChange={(e) => setCountry4Account(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Other 4</b>
                  </label>
                  <input
                    type="text"
                    value={country4other}
                    onChange={(e) => setCountry4Other(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total 4</b>
                  </label>
                  <input
                    type="number"
                    value={country4total}
                    onChange={(e) => setCountry4total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>
                Our anticipated sales to principal buyers for the next 12 months
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 1:</b>
                  </label>
                  <input
                    type="text"
                    value={cntry1}
                    onChange={(e) => setCntry1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="text"
                    value={cntry1cad1}
                    onChange={(e) => setCntry1Cad1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Within 90 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry1within}
                    onChange={(e) => setCntry1Within(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry1days1}
                    onChange={(e) => setCntry1Days1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="number"
                    value={cntry1cad2}
                    onChange={(e) => setCntry1Cad2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Up To 90 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry1upto}
                    onChange={(e) => setCntry1Upto(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry1days2}
                    onChange={(e) => setCntry1Days2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Total 1</b>
                  </label>
                  <input
                    type="number"
                    value={cntry1total}
                    onChange={(e) => setCntry1Total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 2:</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2}
                    onChange={(e) => setCntry2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2cad1}
                    onChange={(e) => setCntry2Cad1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Within 90 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2within}
                    onChange={(e) => setCntry2Within(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2days1}
                    onChange={(e) => setCntry2Days1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2cad2}
                    onChange={(e) => setCntry2Cad2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Up To 90 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2upto}
                    onChange={(e) => setCntry2Upto(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2days2}
                    onChange={(e) => setCntry2Days2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 2 Total</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2total}
                    onChange={(e) => setCntry2Total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 2:</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2}
                    onChange={(e) => setCntry2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2cad1}
                    onChange={(e) => setCntry2Cad1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Within 90 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2within}
                    onChange={(e) => setCntry2Within(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2days1}
                    onChange={(e) => setCntry2Days1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2cad2}
                    onChange={(e) => setCntry2Cad2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Up To 90 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2upto}
                    onChange={(e) => setCntry2Upto(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry2days2}
                    onChange={(e) => setCntry2Days2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country Total 1</b>
                  </label>
                  <input
                    type="number"
                    value={cntry2total}
                    onChange={(e) => setCntry2Total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country 3:</b>
                  </label>
                  <input
                    type="text"
                    value={cntry3}
                    onChange={(e) => setCntry3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="text"
                    value={cntry3cad1}
                    onChange={(e) => setCntry3Cad1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Within 90 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry3within}
                    onChange={(e) => setCntry3Within(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="number"
                    value={cntry3days1}
                    onChange={(e) => setCntry3Days1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>On CAD Terms</b>
                  </label>
                  <input
                    type="number"
                    value={cntry3cad2}
                    onChange={(e) => setCntry3Cad2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Up To 90 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry3upto}
                    onChange={(e) => setCntry3Upto(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>120-180 Days</b>
                  </label>
                  <input
                    type="text"
                    value={cntry3days2}
                    onChange={(e) => setCntry3Days2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Country Total 3</b>
                  </label>
                  <input
                    type="number"
                    value={cntry3total}
                    onChange={(e) => setCntry3Total(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Do you wish to obtain a quotation for cover of All Markets
                      or Selected Markets? If Selected Markets, the following
                      markets are to be covered only
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
                      Do you wish the Policy to be ceded to any financial or
                      other institution as collateral security? Yes/No If yes,
                      please give details of such institution i.e. full name and
                      address.
                    </b>
                  </label>
                  <input
                    type="text"
                    value={collateral}
                    onChange={(e) => setCollateral(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Do you make shipments by air on CAD terms of payment</b>
                  </label>
                  <input
                    type="text"
                    value={shipments}
                    onChange={(e) => setShipments(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If so, do you wish to consider them as Open Delivery terms
                      and get them covered for Open Delivery terms? (Please see
                      footnote
                    </b>
                  </label>
                  <input
                    type="text"
                    value={opendelivery}
                    onChange={(e) => setOpenDelivery(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting to Associate concerns abroad, (i) Number of
                      such associates
                    </b>
                  </label>
                  <input
                    type="text"
                    value={associates}
                    onChange={(e) => setAssociates(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting to Associate concerns abroad, (ii) Total
                      value of shipments in the last 12 months
                    </b>
                  </label>
                  <input
                    type="text"
                    value={shipmentvalue}
                    onChange={(e) => setShipmentValue(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting to Associate concerns abroad, (iii) Would you
                      like to get them covered against political risks?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={politicalrisk}
                    onChange={(e) => setPoliticalRisk(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting goods on consignment basis to self or agents
                      abroad (for sale from stocks), Number of consignees
                    </b>
                  </label>
                  <input
                    type="text"
                    value={consignees}
                    onChange={(e) => setConsignees(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting goods on consignment basis to self or agents
                      abroad (for sale from stocks), (ii) Total value of
                      shipments in the last 12 months
                    </b>
                  </label>
                  <input
                    type="text"
                    value={shipmentsvalue2}
                    onChange={(e) => setShipmentsValue2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting goods on consignment basis to self or agents
                      abroad (for sale from stocks), Would you like to get
                      cover: (a) for stocks against political risks?:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={politicalrisk2}
                    onChange={(e) => setPoliticalRisk2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      If exporting goods on consignment basis to self or agents
                      abroad (for sale from stocks), Would you like to get
                      cover: (b) also for sales made to ultimate buyers against
                      comprehensive risks?:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={comprerisk}
                    onChange={(e) => setCompreRisk(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <small>
                **Note** Where shipments are made by air, buyers will be able to
                take delivery of the goods from the airline without making
                payment in the case of CAD transactions. In such cases, the
                Policy will not cover losses arising from non-payment by the
                buyer, since the buyer is not supposed to get delivery of the
                goods before payment. If you wish to have cover for this risk
                also, you can get it if (a) you get Credit Limit approved on the
                buyer on Open Delivery terms (even though bills may be drawn on
                CAD terms) and (b) paying premium on such shipments at rates
                applicable to Open Delivery terms. Such cover can be obtained on
                selected buyers, if you wish to do so.
              </small>

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
                    <b>Country 1</b>
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
                    <b>Country 2</b>
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
                    <b>Country 3</b>
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
                    <b>Country 4</b>
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
                      The number of foreign buyers to whom you are regularly
                      making shipments at present:
                    </b>
                  </label>
                  <input
                    type="number"
                    value={foreignbuyers}
                    onChange={(e) => setForeignBuyers(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      How do you satisfy yourselves about the credit- worthiness
                      of buyers before you conclude export contracts?
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
                  relating to any particular buyer or shipment which might
                  adversely influence your acceptance of any of the risks
                  against which we are hereby requesting insurance. We further
                  declare that in the event of this Proposal being accepted and
                  a Policy issued, we shall at all times during the currency of
                  the Policy forthwith notify you of any circumstances which
                  might adversely affect the risks against which we are seeking
                  insurance.
                  <br />
                  <br />
                  (ii) We declare that we have not assigned or pledged or
                  transferred any part of payment due for shipments to be
                  covered under the Policy or any right or interest acquired by
                  virtue thereof or received any indemnity or security
                  whatsoever in respect thereof and we shall not effect any such
                  assignment or pledge or receive any such indemnity or security
                  without your prior consent in writing.
                  <br />
                  <br />
                  (iii) We undertake that the shipments to be covered under the
                  Policy shall be of goods wholly or partly produced, processed
                  or manufactured in Zimbabwe.
                  <br />
                  <br />
                  (iv) We undertake that we shall carry on our business with due
                  care in the selection of the buyers and that the contracts
                  entered into shall adequately safeguard our interests and we
                  shall despatch and deliver the goods in accordance with such
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
                    maxLength={200}
                    required
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
                    maxLength={200}
                    required
                  />
                </div>
              </div>

              <div className="height: 80px; margin-top: 20px;">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Designation</b>
                  </label>
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    className="form-control"
                    maxLength={200}
                    required
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

export default ExportProposal;
