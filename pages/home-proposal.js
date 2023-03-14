import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const HomeProposal = () => {
  const [show, setShow] = React.useState(false);
  const [insured, setInsured] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [homeaddress, setHomeAddress] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [riskaddress, setRiskAddress] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [residence, setResidence] = React.useState("");
  const [roof, setRoof] = React.useState("");
  const [periodfrom, setPeriodFrom] = React.useState("");
  const [periodto, setPeriodTo] = React.useState("");
  const [renewaldate, setRenewalDate] = React.useState("");
  const [building, setBuilding] = React.useState("");
  const [bsum, setBsum] = React.useState("");
  const [mortgage, setMorgage] = React.useState("");
  const [msum, setMsum] = React.useState("");
  const [riskadd, setRiskAdd] = React.useState("");
  const [risksum, setRiskSum] = React.useState("");
  const [allrisk, setAllRisk] = React.useState("");
  const [allsum, setAllSum] = React.useState("");
  const [liability, setLiability] = React.useState("");
  const [accident, setAccident] = React.useState("");
  const [bmaterials, setBmaterials] = React.useState("");
  const [signature, setSignture] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/home-proposal", {
        insured,
        telephone,
        postal,
        homeaddress,
        riskaddress,
        business,
        residence,
        roof,
        periodfrom,
        periodto,
        renewaldate,
        building,
        bsum,
        mortgage,
        msum,
        riskadd,
        risksum,
        allrisk,
        allsum,
        liability,
        accident,
        bmaterials,
        date: new Date(),
        signature,
      })
      .then((res) => {
        if (res.status === 201) {
          setShow(true);
          setInsured("");
          setPostal("");
          setHomeAddress("");
          setTelephone("");
          setRiskAddress("");
          setBusiness("");
          setResidence("");
          setRoof("");
          setPeriodFrom("");
          setPeriodTo("");
          setRenewalDate("");
          setBuilding("");
          setBsum("");
          setMorgage("");
          setMsum("");
          setRiskAdd("");
          setRiskSum("");
          setAllRisk("");
          setAllSum("");
          setLiability("");
          setAccident("");
          setSignture("");
          setBmaterials("");
        }
      })
      .catch((err) => {
        alert("Error submitting the form");
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
          PERSONAL INSURANCE PROPOSAL FORM
        </h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Insured:</b>
                  </label>
                  <input
                    type="text"
                    value={insured}
                    onChange={(e) => setInsured(e.target.value)}
                    className="form-control"
                    maxLength={200}
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Postal Address:</b>
                  </label>
                  <input
                    type="text"
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                    className="form-control"
                    maxLength={500}
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Home Address:</b>
                  </label>
                  <input
                    type="text"
                    value={homeaddress}
                    onChange={(e) => setHomeAddress(e.target.value)}
                    className="form-control"
                    maxLength={500}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Telephone Number:</b>
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
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Risk Address:</b>
                  </label>
                  <input
                    type="text"
                    value={riskaddress}
                    onChange={(e) => setRiskAddress(e.target.value)}
                    className="form-control"
                    maxLength={200}
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Business Address:</b>
                  </label>
                  <input
                    type="text"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Construction of Residence: Walls</b>
                  </label>
                  <input
                    type="text"
                    value={residence}
                    onChange={(e) => setResidence(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Roof:</b>
                  </label>
                  <input
                    type="text"
                    value={roof}
                    onChange={(e) => setRoof(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Period of insurance From:</b>
                  </label>
                  <input
                    type="date"
                    value={periodfrom}
                    onChange={(e) => setPeriodFrom(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Period of insurance To:</b>
                  </label>
                  <input
                    type="date"
                    value={periodto}
                    onChange={(e) => setPeriodTo(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Renewal date:</b>
                  </label>
                  <input
                    type="date"
                    value={renewaldate}
                    onChange={(e) => setRenewalDate(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      House owners comprehensive: Building of the private
                      residence at the risk address in the Section including
                      garages, outbuildings landlords ` fixture and fittings
                      walls, gates, hedges fences courts and swimming pools:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={building}
                    onChange={(e) => setBuilding(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>House owners comprehensive sum:</b>
                  </label>
                  <input
                    type="number"
                    value={bsum}
                    onChange={(e) => setBsum(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Name of mortgagee:</b>
                  </label>
                  <input
                    type="text"
                    value={mortgage}
                    onChange={(e) => setMorgage(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Mortgage Sum</b>
                  </label>
                  <input
                    type="number"
                    value={msum}
                    onChange={(e) => setMsum(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Householders Comprehensive: Household goods personal
                      effects of every description at Risk address:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={riskadd}
                    onChange={(e) => setRiskAdd(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>Householders Comprehensive:</b>
                </label>
                <input
                  type="number"
                  value={risksum}
                  onChange={(e) => setRiskSum(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Please specify Colour Televisions, radios etc and security
                      Arrangements All Risks- Anywhere in the world (Please
                      specify):
                    </b>
                  </label>
                  <input
                    type="text"
                    value={allrisk}
                    onChange={(e) => setAllRisk(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>All Risk Sum:</b>
                  </label>
                  <input
                    type="number"
                    value={allsum}
                    onChange={(e) => setAllSum(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Public Liability:</b>
                  </label>
                  <input
                    type="text"
                    value={liability}
                    onChange={(e) => setLiability(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Personal accident:</b>
                  </label>
                  <input
                    type="text"
                    value={accident}
                    onChange={(e) => setAccident(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <small>
                Insured's Declaration
                <br />I apply for the Insurance summarized above, it being
                understood that where no sum insured is shown against a Section,
                no insurance is required under that Section. I declare that I
                have not withheld any material information.
              </small>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Proposer's Signature:</b>
                  </label>
                  <input
                    type="text"
                    value={signature}
                    onChange={(e) => setSignture(e.target.value)}
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

export default HomeProposal;
