import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const MarineCargo = () => {
  const [show, setShow] = React.useState(false);
  const [signame, setSigname] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [physical, setPhysical] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [contactperson, setContactPerson] = React.useState("");
  const [fax, setFax] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [established, setEstablished] = React.useState("");
  const [vat, setVat] = React.useState("");
  const [traded, setTraded] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [maximumload, setMaximumLoad] = React.useState("");
  const [driverscrew, setDriverScrew] = React.useState("");
  const [antihijack, setAntihijack] = React.useState("");
  const [crewpervehicle, setCrewPerVehicle] = React.useState("");
  const [tachograph, setTachograph] = React.useState("");
  const [alarm, setAlarm] = React.useState("");
  const [immobiliser, setImmobiliser] = React.useState("");
  const [twowayradio, setTwoWayRadio] = React.useState("");
  const [trackdevice, setTrackDevice] = React.useState("");
  const [territorial, setTerritorial] = React.useState("");
  const [currentinsurer, setCurrentInsurer] = React.useState("");
  const [previnsurer, setPrevInsurer] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [dateofloss, setDateOfLoss] = React.useState("");
  const [grossamountloss, setGrossAmountLoss] = React.useState("");
  const [commodity, setCommodity] = React.useState("");
  const [allrisk, setAllRisk] = React.useState("");
  const [nameofsig, setNameOfSig] = React.useState("");
  const [positionheld, setPositionHeld] = React.useState("");
  const [proposer, setProposer] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/marine-cargos", {
        signame,
        physical,
        postal,
        contactperson,
        telephone,
        fax,
        email,
        established,
        vat,
        traded,
        description,
        maximumload,
        driverscrew,
        antihijack,
        crewpervehicle,
        tachograph,
        alarm,
        immobiliser,
        twowayradio,
        trackdevice,
        territorial,
        currentinsurer,
        previnsurer,
        details,
        dateofloss,
        grossamountloss,
        commodity,
        allrisk,
        nameofsig,
        positionheld,
        datesigned: new Date(),
        proposer,
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
        <h1 className="mt-5 pt-5 text-center">Marine Cargo Insurance Form</h1>
        <small>
          IMPORTANT: This proposal forms the basis of the Insurance contract
          between the Insured and the Insurer once completed by the Insured and
          accepted by the Insurer. Making a false statement or withholding any
          material fact may give the Insurer the right to repudiate any claim
          made under the policy or may result in the policy being declared null
          and void from inception. A material fact is any fact, which influences
          the acceptance of the risk or conditions, and premiums on which it is
          accepted. This proposal must therefore be fully/accurately completed
          and signed by the proposer.
        </small>
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
                    value={signame}
                    onChange={(e) => setSigname(e.target.value)}
                    className="form-control"
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
                    value={physical}
                    onChange={(e) => setPhysical(e.target.value)}
                    className="form-control"
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
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Contact Person:</b>
                  </label>
                  <input
                    type="text"
                    value={contactperson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Fax:</b>
                  </label>
                  <input
                    type="text"
                    value={fax}
                    onChange={(e) => setFax(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Date business was established:</b>
                  </label>
                  <input
                    type="text"
                    value={established}
                    onChange={(e) => setEstablished(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Vat Number:</b>
                  </label>
                  <input
                    type="number"
                    value={vat}
                    onChange={(e) => setVat(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Have you traded under a different name: Yes/No (if Yes,
                      specify):
                    </b>
                  </label>
                  <input
                    type="text"
                    value={traded}
                    onChange={(e) => setTraded(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>
                      Description of goods carried requiring insurance cover:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputRC4">
                    <b>Maximum load limit required in respect of Cargo</b>
                  </label>
                  <input
                    type="text"
                    value={maximumload}
                    onChange={(e) => setMaximumLoad(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      What pre-employment investigations are carried out on
                      Drivers and Crew:
                    </b>
                  </label>
                  <input
                    type="text"
                    value={driverscrew}
                    onChange={(e) => setDriverScrew(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What anti-hijack/theft precautions do you enforce:</b>
                  </label>
                  <input
                    type="text"
                    value={antihijack}
                    onChange={(e) => setAntihijack(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>How many drivers/crew per vehicle</b>
                  </label>
                  <input
                    type="number"
                    value={crewpervehicle}
                    onChange={(e) => setCrewPerVehicle(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <h3>Are your vehicles fitted with any of the following?</h3>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>Number of Vehicles fitted with tachograph:</b>
                </label>
                <input
                  type="number"
                  value={tachograph}
                  onChange={(e) => setTachograph(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>Number of Vehicles fitted with alarm system:</b>
                </label>
                <input
                  type="number"
                  value={alarm}
                  onChange={(e) => setAlarm(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>Number of Vehicles fitted with immobiliser:</b>
                </label>
                <input
                  type="number"
                  value={immobiliser}
                  onChange={(e) => setImmobiliser(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>
                    Number of Vehicles fitted with two way radio / cellphone:
                  </b>
                </label>
                <input
                  type="number"
                  value={twowayradio}
                  onChange={(e) => setTwoWayRadio(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="inputRC4">
                  <b>
                    Number of Vehicles fitted with tracking device (specify
                    type):
                  </b>
                </label>
                <input
                  type="text"
                  value={trackdevice}
                  onChange={(e) => setTrackDevice(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Please provide Territorial Limits Required:</b>
                  </label>
                  <input
                    type="text"
                    value={territorial}
                    onChange={(e) => setTerritorial(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Are your loads currently insured? Name of Insurer:</b>
                  </label>
                  <input
                    type="text"
                    value={currentinsurer}
                    onChange={(e) => setCurrentInsurer(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Have you previously had this cover? Name of Insurer:</b>
                  </label>
                  <input
                    type="text"
                    value={previnsurer}
                    onChange={(e) => setPrevInsurer(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Provide details on the security used:</b>
                  </label>
                  <input
                    type="text"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Cargo Claims (3 Years) Date of Loss:</b>
                  </label>
                  <input
                    type="date"
                    value={dateofloss}
                    onChange={(e) => setDateOfLoss(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Gross Amount of Loss:</b>
                  </label>
                  <input
                    type="number"
                    value={grossamountloss}
                    onChange={(e) => setGrossAmountLoss(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Cause and Commodity:</b>
                  </label>
                  <input
                    type="text"
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Cover Required 11.1 All Risks:</b>
                  </label>
                  <input
                    type="text"
                    value={allrisk}
                    onChange={(e) => setAllRisk(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <small>
                <b>DECLARATION OF THE PROPOSER:</b> <br />
                <br />
                I hereby declare that the above particulars and answers are true
                and complete in every respect, and that no material fact has
                been suppressed or withheld, and I undertake to exercise all
                ordinary and reasonable precautions for the safety of the
                property, and I further declare that if such statements and
                particulars are in the writing of any person other than myself,
                such person shall be deemed to have been my agent for the
                purpose, and I agree that this declaration and the answers given
                above shall be the basis of the contract between me and the
                Company, and I further agree to accept a Policy subject to the
                usual conditions prescribed by the Company and endorsed on their
                Policy, and to pay the premium thereunder when called upon to do
                so.
                <br />
                <br />
                Signing this form does not bind the Proposer to effect this
                insurance, but is it agreed that this form shall be that basis
                of the contract should a policy be issued.
              </small>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Name:</b>
                  </label>
                  <input
                    type="text"
                    value={nameofsig}
                    onChange={(e) => setNameOfSig(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Position Held at Company:</b>
                  </label>
                  <input
                    type="text"
                    value={positionheld}
                    onChange={(e) => setPositionHeld(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Proposer's Signature:</b>
                  </label>
                  <input
                    type="text"
                    value={proposer}
                    onChange={(e) => setProposer(e.target.value)}
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

export default MarineCargo;
