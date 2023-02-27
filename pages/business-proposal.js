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
const [signdate, setSignDate] = React.useState("");
const [signature, setSignature] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/motor-proposal", {
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
        signdate,
        signature: new Date(),
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
        <h1 className="mt-5 pt-5 text-center">Motor Proposal Form</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>


  <div className="form-row my-3">
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Name of Proposer:</b>
                                  </label>
                                  <input
                    type="text"
                    value={nameofproposer}
                    onChange={(e) => setNameOfProposer(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-6 col-sm-12">
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
            <div className="form-group col-md-6 col-sm-12">
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
            <div className="form-group col-md-6 col-sm-12">
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
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Email Address:</b>
                                  </label>
                                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Telephone:</b>
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
            <div style="float: left; width: 100%;">
                <label for="inputRC4">
                    <b>Nature of Business:</b>
                                  </label>
                                  <input
                    type="text"
                    value={natureofbusiness}
                    onChange={(e) => setNatureOfBusiness(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>
        <div className="form-row my-3">
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Period of Insurance - From:</b>
                                  </label>
                                  <input
                    type="text"
                    value={begininsurance}
                    onChange={(e) => setBeginInsurance(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Period of Insurance - To:</b>
                                  </label>
                                  <input
                    type="text"
                    value={endinsurance}
                    onChange={(e) => setEndInsurance(e.target.value)}
                    className="form-control"

                  />
            </div>
                          </div>
                          <h3>Building</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={buildingssum}
                    onChange={(e) => setBuildingsSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    value={buildingrate}
                    onChange={(e) => setBuildingRate(e.target.value)}
                    className="form-control"

                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={buildingannual}
                    onChange={(e) => setBuildingAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
                          </div>
                          <h3>Stock In Trade</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={stocksum}
                    onChange={(e) => setStockSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    value={stockrate}
                    onChange={(e) => setStockRate(e.target.value)}
                    className="form-control"

                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={stockannual}
                    onChange={(e) => setStockAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
                          </div>
                          <h3>Raw Materials</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={rawsum}
                    onChange={(e) => setRawSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    value={rawrate}
                    onChange={(e) => setRawRate(e.target.value)}
                    className="form-control"

                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={rawannual}
                    onChange={(e) => setRawAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>
       <h3>Other Contents</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={othersum}
                    onChange={(e) => setOtherSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    value={otherrate}
                    onChange={(e) => setOtherRate(e.target.value)}
                    className="form-control"

                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={otherannual}
                    onChange={(e) => setOtherAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>
<h3>Plant/Machinery</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={plantsum}
                    onChange={(e) => setPlantSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    value={plantrate}
                    onChange={(e) => setPlantRate(e.target.value)}
                    className="form-control"

                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={plantannual}
                    onChange={(e) => setPlantAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>
<h3>Totals</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="text"
                    value={totalsum}
                    onChange={(e) => setTotalSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    className="form-control"
disabled
                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="text"
                    value={totalannual}
                    onChange={(e) => setTotalAnnual(e.target.value)}
                    className="form-control"

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
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="number"
                    value={theftsum}
                    onChange={(e) => setTheftSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    className="form-control"
disabled
                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="number"
                    value={theftannual}
                    onChange={(e) => setTheftAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>

        <div className="form-row my-1">
            <h5>
                <b>MONEY SECTION</b>
            </h5>
                          </div>
                          <h3>Not contained in a locked safe/strongroom (petty
                                cash)</h3>
                           <div className="form-row my-3">
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="number"
                    value={safesum}
                    onChange={(e) => setSafeSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    className="form-control"
disabled
                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
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
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Sum Insured:</b>
                                  </label>
                                  <input
                    type="number"
                    value={directorsum}
                    onChange={(e) => setDirectorSum(e.target.value)}
                    className="form-control"

                  />
            </div>
            <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Rate:</b>
                                  </label>
                                  <input
                    type="text"
                    className="form-control"
disabled
                  />
                              </div>
                               <div className="form-group col-md-4 col-sm-12">
                <label for="inputRC4">
                    <b>Annual Premium:</b>
                                  </label>
                                  <input
                    type="number"
                    value={directorannual}
                    onChange={(e) => setDirectorAnnual(e.target.value)}
                    className="form-control"

                  />
            </div>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">

                    <tbody>

                        <tr>
                            <td>In a locked safe/strongroom or In transit to or
                                from the bank </td>
                            <td>${{ $data->strongroomsum }}</td>
                            <td>____</td>
                            <td>${{ $data->strongannual }}</td>
                        </tr>
                        <tr>
                            <td>Seasonal increase</td>
                            <td>${{ $data->seasonalsum }}</td>
                            <td>____</td>
                            <td>${{ $data->seasonalannual }}</td>
                        </tr>
                        <tr>
                            <td>Worldwide business travel</td>
                            <td>${{ $data->worldwidesum }}</td>
                            <td>____</td>
                            <td>____</td>
                        </tr>
                        <tr>
                            <td>Crossed cheques</td>
                            <td>${{ $data->chequesum }}</td>
                            <td>____</td>
                            <td>____</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-1">
            <h5>
                <b>GOODS IN TRANSIT SECTION</b>
            </h5>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Sum Insured
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Annual Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Goods carried on Insured’s own vehicles</td>
                            <td>${{ $data->goodsum }}</td>
                            <td>____</td>
                            <td>${{ $data->goodannual }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-1">
            <h5>
                <b>GLASS SECTION</b>
            </h5>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Sum Insured
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Annual Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Internal and external glass including lettering and
                                ornamentation</td>
                            <td>${{ $data->glasssum }}</td>
                            <td>____</td>
                            <td>${{ $data->glassannual }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-1">
            <h5>
                <b>BUSINESS ALL RISKS SECTION</b>
            </h5>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Sum Insured
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Annual Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Office equipment and machines </td>
                            <td>${{ $data->equipsum }}</td>
                            <td>____</td>
                            <td>${{ $data->equipannual }}</td>
                        </tr>
                        <tr>
                            <td>Cellular telephones</td>
                            <td>${{ $data->cellularsum }}</td>
                            <td>____</td>
                            <td>${{ $data->cellularannual }}</td>
                        </tr>
                        <tr>
                            <td>Pedal cycles</td>
                            <td>${{ $data->pedalsum }}</td>
                            <td>____</td>
                            <td>${{ $data->pedalannual }}</td>
                        </tr>
                        <tr>
                            <td>Other</td>
                            <td>${{ $data->busiothersum }}</td>
                            <td>____</td>
                            <td>${{ $data->busiotherannual }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-1">
            <h5>
                <b>PUBLIC LIABILITY SECTION</b>
            </h5>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Sum Insured
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Annual Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>General Liability</td>
                            <td>${{ $data->generalsum }}</td>
                            <td>____</td>
                            <td>${{ $data->generalannual }}</td>
                        </tr>
                        <tr>
                            <td>Property Owner’s Liability</td>
                            <td>${{ $data->propertysum }}</td>
                            <td>____</td>
                            <td>${{ $data->propertyannual }}</td>
                        </tr>
                        <tr>
                            <td>Tenant’s Liability</td>
                            <td>${{ $data->tenantsum }}</td>
                            <td>____</td>
                            <td>${{ $data->tenantannual }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-1">
            <h5>
                <b>ELECTRONIC EQUIPMENT SECTION</b>
            </h5>
        </div>
        <div className="form-row my-3">
            <div class="col-md-12">
                <table class="table top-selling-table">
                    <thead>
                        <tr>
                            <th>
                                Description
                            </th>
                            <th>
                                Sum Insured
                            </th>
                            <th>
                                Rate
                            </th>
                            <th>
                                Annual Premium
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>All computers, printers, faxes, and ancillary
                                equipment</td>
                            <td>${{ $data->compsum }}</td>
                            <td>____</td>
                            <td>${{ $data->compannual }}</td>
                        </tr>
                        <tr>
                            <td>Laptop computers</td>
                            <td>${{ $data->laptopsum }}</td>
                            <td>____</td>
                            <td>${{ $data->laptopannual }}</td>
                        </tr>
                        <tr>
                            <td>External Data Media</td>
                            <td>${{ $data->mediasum }}</td>
                            <td>____</td>
                            <td>${{ $data->mediaannual }}</td>
                        </tr>
                        <tr>
                            <td>Reconstitution of Data</td>
                            <td>${{ $data->reconstructsum }}</td>
                            <td>____</td>
                            <td>${{ $data->reconstructannual }}</td>
                        </tr>
                        <tr>
                            <td>Increased Cost of Working </td>
                            <td>${{ $data->costofworksum }}</td>
                            <td>____</td>
                            <td>${{ $data->costofworkannual }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="form-row my-3">
            <div style="float: left; width: 100%;">
                <label for="inputRC4">
                    <b>Indemnity Period</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ $data->idemnity }}</div>
            </div>
        </div>
        <div>
            <small>
                I/We {{ $data->signature }} declare that the information contained in this proposal is true to the best
                of our knowledge, and forms the basis of the contract of insurance between ourselves and the Company.
            </small>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Proposer</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ $data->proposer }}</div>
            </div>
            <div className="form-group col-md-6 col-sm-12">
                <label for="inputRC4">
                    <b>Date</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">
                    {{ date('F d Y', strtotime($data->signdate)) }}</div>
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

export default MotorProposal;
