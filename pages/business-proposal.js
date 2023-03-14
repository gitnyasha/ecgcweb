import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const BusinessProposal = () => {
  const [show, setShow] = React.useState(false);
  const [nameofproposer, setNameOfProposer] = React.useState("");
  const [directors, setDirectors] = React.useState("");
  const [postaladdress, setPostalAddress] = React.useState("");
  const [physicaladdress, setPhysicalAddress] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [natureofbusiness, setNatureOfBusiness] = React.useState("");
  const [begininsurance, setBeginInsurance] = React.useState("");
  const [endinsurance, setEndInsurance] = React.useState("");
  const [buildingssum, setBuildingsSum] = React.useState("");
  const [buildingrate, setBuildingRate] = React.useState("");
  const [buildingannual, setBuildingAnnual] = React.useState("");
  const [stocksum, setStockSum] = React.useState("");
  const [stockrate, setStockRate] = React.useState("");
  const [stockannual, setStockAnnual] = React.useState("");
  const [rawsum, setRawSum] = React.useState("");
  const [rawrate, setRawRate] = React.useState("");
  const [rawannual, setRawAnnual] = React.useState("");
  const [othersum, setOtherSum] = React.useState("");
  const [otherrate, setOtherRate] = React.useState("");
  const [otherannual, setOtherAnnual] = React.useState("");
  const [plantsum, setPlantSum] = React.useState("");
  const [plantrate, setPlantRate] = React.useState("");
  const [plantannual, setPlantAnnual] = React.useState("");
  const [totalsum, setTotalSum] = React.useState("");
  const [totalannual, setTotalAnnual] = React.useState("");
  const [theftsum, setTheftSum] = React.useState("");
  const [theftannual, setTheftAnnual] = React.useState("");
  const [safesum, setSafeSum] = React.useState("");
  const [safeannual, setSafeAnnual] = React.useState("");
  const [directorsum, setDirectorSum] = React.useState("");
  const [employeesum, setEmployeeSum] = React.useState("");
  const [strongroomsum, setStrongroomSum] = React.useState("");
  const [strongannual, setStrongAnnual] = React.useState("");
  const [seasonalsum, setSeasonalSum] = React.useState("");
  const [seasonalannual, setSeasonalAnnual] = React.useState("");
  const [worldwidesum, setWorldwideSum] = React.useState("");
  const [chequesum, setChequeSum] = React.useState("");
  const [goodsum, setGoodSum] = React.useState("");
  const [goodannual, setGoodAnnual] = React.useState("");
  const [glasssum, setGlassSum] = React.useState("");
  const [glassannual, setGlassAnnual] = React.useState("");
  const [equipsum, setEquipSum] = React.useState("");
  const [equipannual, setEquipAnnual] = React.useState("");
  const [cellularsum, setCellularSum] = React.useState("");
  const [cellularannual, setCellularAnnual] = React.useState("");
  const [pedalsum, setPedalSum] = React.useState("");
  const [pedalannual, setPedalAnnual] = React.useState("");
  const [busiothersum, setBusiOtherSum] = React.useState("");
  const [busiotherannual, setBusiOtherAnnual] = React.useState("");
  const [generalsum, setGeneralSum] = React.useState("");
  const [generalannual, setGeneralAnnual] = React.useState("");
  const [propertysum, setPropertySum] = React.useState("");
  const [propertyannual, setPropertyAnnual] = React.useState("");
  const [tenantsum, setTenantSum] = React.useState("");
  const [tenantannual, setTenantAnnual] = React.useState("");
  const [compsum, setCompSum] = React.useState("");
  const [compannual, setCompAnnual] = React.useState("");
  const [laptopsum, setLaptopSum] = React.useState("");
  const [laptopannual, setLaptopAnnual] = React.useState("");
  const [mediasum, setMediaSum] = React.useState("");
  const [mediaannual, setMediaAnnual] = React.useState("");
  const [reconstructsum, setReconstructSum] = React.useState("");
  const [reconstructannual, setReconstructAnnual] = React.useState("");
  const [costofworksum, setCostOfWorkSum] = React.useState("");
  const [costofworkannual, setCostOfWorkAnnual] = React.useState("");
  const [idemnity, setIdemnity] = React.useState("");
  const [proposer, setProposer] = React.useState("");
  const [signature, setSignature] = React.useState("");

  function isValidEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/business-proposal", {
        nameofproposer,
        directors,
        postaladdress,
        physicaladdress,
        telephone,
        email,
        natureofbusiness,
        begininsurance,
        endinsurance,
        buildingssum,
        buildingrate,
        buildingannual,
        stocksum,
        stockrate,
        stockannual,
        rawsum,
        rawrate,
        rawannual,
        othersum,
        otherrate,
        otherannual,
        plantsum,
        plantrate,
        plantannual,
        totalsum,
        totalannual,
        theftsum,
        theftannual,
        safesum,
        safeannual,
        directorsum,
        employeesum,
        strongroomsum,
        strongannual,
        seasonalsum,
        seasonalannual,
        worldwidesum,
        chequesum,
        goodsum,
        goodannual,
        glasssum,
        glassannual,
        equipsum,
        equipannual,
        cellularsum,
        cellularannual,
        pedalsum,
        pedalannual,
        busiothersum,
        busiotherannual,
        generalsum,
        generalannual,
        propertysum,
        propertyannual,
        tenantsum,
        tenantannual,
        compsum,
        compannual,
        laptopsum,
        laptopannual,
        mediasum,
        mediaannual,
        reconstructsum,
        reconstructannual,
        costofworksum,
        costofworkannual,
        idemnity,
        proposer,
        signdate: new Date(),
        signature,
      })
      .then((res) => {
        if (res.status === 201) {
          setShow(true);
          setNameOfProposer("");
          setDirectors("");
          setPostalAddress("");
          setPhysicalAddress("");
          setTelephone("");
          setEmail("");
          setNatureOfBusiness("");
          setBeginInsurance("");
          setEndInsurance("");
          setBuildingsSum("");
          setBuildingRate("");
          setBuildingAnnual("");
          setStockSum("");
          setStockRate("");
          setStockAnnual("");
          setRawSum("");
          setRawRate("");
          setRawAnnual("");
          setOtherSum("");
          setOtherRate("");
          setOtherAnnual("");
          setPlantSum("");
          setPlantRate("");
          setPlantAnnual("");
          setTotalSum("");
          setTotalAnnual("");
          setTheftSum("");
          setTheftAnnual("");
          setSafeSum("");
          setSafeAnnual("");
          setDirectorSum("");
          setEmployeeSum("");
          setStrongroomSum("");
          setStrongAnnual("");
          setSeasonalSum("");
          setSeasonalAnnual("");
          setWorldwideSum("");
          setChequeSum("");
          setGoodSum("");
          setGoodAnnual("");
          setGlassSum("");
          setGlassAnnual("");
          setEquipSum("");
          setEquipAnnual("");
          setCellularSum("");
          setCellularAnnual("");
          setPedalSum("");
          setPedalAnnual("");
          setBusiOtherSum("");
          setBusiOtherAnnual("");
          setGeneralSum("");
          setGeneralAnnual("");
          setPropertySum("");
          setPropertyAnnual("");
          setTenantSum("");
          setTenantAnnual("");
          setCompSum("");
          setCompAnnual("");
          setLaptopSum("");
          setLaptopAnnual("");
          setMediaSum("");
          setMediaAnnual("");
          setReconstructSum("");
          setReconstructAnnual("");
          setCostOfWorkSum("");
          setCostOfWorkAnnual("");
          setIdemnity("");
          setProposer("");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="mt-5 pt-5 text-center">Business Proposal Form</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Name of Proposer:</b>
                  </label>
                  <input
                    type="text"
                    value={nameofproposer}
                    onChange={(e) => setNameOfProposer(e.target.value)}
                    className="form-control"
                    maxLength={200}
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Names of Directors</b>
                  </label>
                  <input
                    type="text"
                    value={directors}
                    onChange={(e) => setDirectors(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Physical Address:</b>
                  </label>
                  <input
                    type="text"
                    value={physicaladdress}
                    onChange={(e) => setPhysicalAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Postal Address:</b>
                  </label>
                  <input
                    type="text"
                    value={postaladdress}
                    onChange={(e) => setPostalAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Email Address:</b>
                  </label>
                  <input
                    type="email"
                    id="inputEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`form-control ${
                      email.length > 0 && !isValidEmail(email)
                        ? "is-invalid"
                        : ""
                    }`}
                    maxLength={100}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                  {email.length > 0 && !isValidEmail(email) && (
                    <div className="invalid-feedback">
                      Please enter a valid email address.
                    </div>
                  )}
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Telephone:</b>
                  </label>
                  <input
                    type="number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control"
                    maxLength={15}
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label for="inputRC4">
                    <b>Nature of Business:</b>
                  </label>
                  <input
                    type="text"
                    value={natureofbusiness}
                    onChange={(e) => setNatureOfBusiness(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Period of Insurance - From:</b>
                  </label>
                  <input
                    type="text"
                    value={begininsurance}
                    onChange={(e) => setBeginInsurance(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Period of Insurance - To:</b>
                  </label>
                  <input
                    type="text"
                    value={endinsurance}
                    onChange={(e) => setEndInsurance(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <h3>Building</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={buildingssum}
                    onChange={(e) => setBuildingsSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input
                    type="number"
                    value={buildingrate}
                    onChange={(e) => setBuildingRate(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={buildingannual}
                    onChange={(e) => setBuildingAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Stock In Trade</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={stocksum}
                    onChange={(e) => setStockSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input
                    type="number"
                    value={stockrate}
                    onChange={(e) => setStockRate(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={stockannual}
                    onChange={(e) => setStockAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Raw Materials</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={rawsum}
                    onChange={(e) => setRawSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input
                    type="number"
                    value={rawrate}
                    onChange={(e) => setRawRate(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={rawannual}
                    onChange={(e) => setRawAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Other Contents</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={othersum}
                    onChange={(e) => setOtherSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input
                    type="number"
                    value={otherrate}
                    onChange={(e) => setOtherRate(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={otherannual}
                    onChange={(e) => setOtherAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Plant/Machinery</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={plantsum}
                    onChange={(e) => setPlantSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input
                    type="number"
                    value={plantrate}
                    onChange={(e) => setPlantRate(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={plantannual}
                    onChange={(e) => setPlantAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Totals</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={totalsum}
                    onChange={(e) => setTotalSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={totalannual}
                    onChange={(e) => setTotalAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-1">
                <h5>
                  <b>THEFT/BURGLARY SECTION</b>
                </h5>
              </div>
              <h3>Qualified Theft</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={theftsum}
                    onChange={(e) => setTheftSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Rate:</b>
                  </label>
                  <input type="text" className="form-control" disabled />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={theftannual}
                    onChange={(e) => setTheftAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="form-row my-1">
                <h5>
                  <b>MONEY SECTION</b>
                </h5>
              </div>
              <h3>Not contained in a locked safe/strongroom (petty cash)</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={safesum}
                    onChange={(e) => setSafeSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={safeannual}
                    onChange={(e) => setSafeAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>At the residence of directors or Employees</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={directorsum}
                    onChange={(e) => setDirectorSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={employeesum}
                    onChange={(e) => setEmployeeSum(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>
                In a locked safe/strongroom or In transit to or from the bank
              </h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={strongroomsum}
                    onChange={(e) => setStrongroomSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={strongannual}
                    onChange={(e) => setStrongAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>

              <h3>Seasonal increase</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={seasonalsum}
                    onChange={(e) => setSeasonalSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={seasonalannual}
                    onChange={(e) => setSeasonalAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Worldwide business travel</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={worldwidesum}
                    onChange={(e) => setWorldwideSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <h3>Crossed cheques</h3>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={chequesum}
                    onChange={(e) => setChequeSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="form-row my-1">
                <h5>
                  <b>GOODS IN TRANSIT SECTION</b>
                </h5>
              </div>
              <h3>Goods carried on Insured’s own vehicles</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={goodsum}
                    onChange={(e) => setGoodSum(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={goodannual}
                    onChange={(e) => setGoodAnnual(e.target.value)}
                    className="form-control"
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="form-row my-1">
                <h5>
                  <b>GLASS SECTION</b>
                </h5>
              </div>
              <h3>
                Internal and external glass including lettering and
                ornamentation
              </h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={glasssum}
                    onChange={(e) => setGlassSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={glassannual}
                    onChange={(e) => setGlassAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-1">
                <h5>
                  <b>BUSINESS ALL RISKS SECTION</b>
                </h5>
              </div>
              <h3>Office equipment and machines </h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={equipsum}
                    onChange={(e) => setEquipSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={equipannual}
                    onChange={(e) => setEquipAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Cellular telephones</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={cellularsum}
                    onChange={(e) => setCellularSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={cellularannual}
                    onChange={(e) => setCellularAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Pedal cycles</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={pedalsum}
                    onChange={(e) => setPedalSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={pedalannual}
                    onChange={(e) => setPedalAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Other</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={busiothersum}
                    onChange={(e) => setBusiOtherSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={busiotherannual}
                    onChange={(e) => setBusiOtherAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-1">
                <h5>
                  <b>PUBLIC LIABILITY SECTION</b>
                </h5>
              </div>
              <h3>General Liability</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={generalsum}
                    onChange={(e) => setGeneralSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={generalannual}
                    onChange={(e) => setGeneralAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Property Owner’s Liability</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={propertysum}
                    onChange={(e) => setPropertySum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={propertyannual}
                    onChange={(e) => setPropertyAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Tenant’s Liability</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={tenantsum}
                    onChange={(e) => setTenantSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={tenantannual}
                    onChange={(e) => setTenantAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-1">
                <h5>
                  <b>ELECTRONIC EQUIPMENT SECTION</b>
                </h5>
              </div>
              <h3>All computers, printers, faxes, and ancillary equipment</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={compsum}
                    onChange={(e) => setCompSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={compannual}
                    onChange={(e) => setCompAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Laptop computers</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={laptopsum}
                    onChange={(e) => setLaptopSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={laptopannual}
                    onChange={(e) => setLaptopAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>External Data Media</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={mediasum}
                    onChange={(e) => setMediaSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={mediaannual}
                    onChange={(e) => setMediaAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <h3>Reconstitution of Data</h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={reconstructsum}
                    onChange={(e) => setReconstructSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={reconstructannual}
                    onChange={(e) => setReconstructAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <h3>Increased Cost of Working </h3>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Sum Insured:</b>
                  </label>
                  <input
                    type="number"
                    value={costofworksum}
                    onChange={(e) => setCostOfWorkSum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Annual Premium:</b>
                  </label>
                  <input
                    type="number"
                    value={costofworkannual}
                    onChange={(e) => setCostOfWorkAnnual(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label for="inputRC4">
                    <b>Indemnity Period</b>
                  </label>
                  <input
                    type="text"
                    value={idemnity}
                    onChange={(e) => setIdemnity(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <small>
                  I/We signature declare that the information contained in this
                  proposal is true to the best of our knowledge, and forms the
                  basis of the contract of insurance between ourselves and the
                  Company.
                </small>
              </div>
              <div className="row">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Proposer</b>
                  </label>
                  <input
                    type="text"
                    value={proposer}
                    onChange={(e) => setProposer(e.target.value)}
                    className="form-control"
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

export default BusinessProposal;
