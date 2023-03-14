import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const PublicLiability = () => {
  const [policynumber, setPolicynumber] = useState("");
  const [broker, setBroker] = useState("");
  const [insured, setInsured] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [dateofdamage, setDateofdamage] = useState("");
  const [timeofdamage, setTimeofdamage] = useState("");
  const [placeofdamage, setPlaceofdamage] = useState("");
  const [connectedtobusiness, setConnectedtobusiness] = useState("");
  const [circumstances, setCircumstances] = useState("");
  const [negligence, setNegligence] = useState("");
  const [declaration, setDeclaration] = useState("");
  const [prevent, setPrevent] = useState("");
  const [thirdpartydetails1, setThirdpartydetails1] = useState("");
  const [thirdpartyphone1, setThirdpartyphone1] = useState("");
  const [thirdpartyloss1, setThirdpartyloss1] = useState("");
  const [thirdpartydetails2, setThirdpartydetails2] = useState("");
  const [thirdpartyphone2, setThirdpartyphone2] = useState("");
  const [thirdpartyloss2, setThirdpartyloss2] = useState("");
  const [witness1name, setWitness1name] = useState("");
  const [witness1relation, setWitness1relation] = useState("");
  const [witness1contact, setWitness1contact] = useState("");
  const [witness2name, setWitness2name] = useState("");
  const [witness2relation, setWitness2relation] = useState("");
  const [witness2contact, setWitness2contact] = useState("");
  const [insuredfullname, setInsuredfullname] = useState("");
  const [insuredcapacity, setInsuredcapacity] = useState("");
  const [datesigned, setDateSigned] = useState("");
  const [show, setShow] = React.useState(false);

  function isValidEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/public-liability", {
        policynumber,
        broker,
        insured,
        address,
        telephone,
        email,
        dateofdamage,
        timeofdamage,
        placeofdamage,
        connectedtobusiness,
        circumstances,
        negligence,
        declaration,
        prevent,
        thirdpartydetails1,
        thirdpartyphone1,
        thirdpartyloss1,
        thirdpartydetails2,
        thirdpartyphone2,
        thirdpartyloss2,
        witness1name,
        witness1relation,
        witness1contact,
        witness2name,
        witness2relation,
        witness2contact,
        insuredfullname,
        insuredcapacity,
        datesigned: new Date(),
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setShow(true);
          setBroker("");
          setInsured("");
          setPolicynumber("");
          setAddress("");
          setTelephone("");
          setEmail("");
          setDateofdamage("");
          setTimeofdamage("");
          setPlaceofdamage("");
          setConnectedtobusiness("");
          setCircumstances("");
          setNegligence("");
          setDeclaration("");
          setPrevent("");
          setThirdpartydetails1("");
          setThirdpartyphone1("");
          setThirdpartyloss1("");
          setThirdpartydetails2("");
          setThirdpartyphone2("");
          setThirdpartyloss2("");
          setWitness1name("");
          setWitness1relation("");
          setWitness1contact("");
          setWitness2name("");
          setWitness2relation("");
          setWitness2contact("");
          setInsuredfullname("");
          setInsuredcapacity("");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error submitting");
      });
  };
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <Container>
        <h1 className="mt-5 pt-5 text-center">Public Liability</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label for="inputRC4">Policy Number</label>
                  <input
                    type="text"
                    value={policynumber}
                    onChange={(e) => setPolicynumber(e.target.value)}
                    className="form-control"
                    required
                    maxLength={30}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Broker</label>
                  <input
                    type="text"
                    value={broker}
                    onChange={(e) => setBroker(e.target.value)}
                    className="form-control"
                    maxLength={60}
                    required
                  />
                </div>
                <div className="card-header bg-secondary text-white py-1 my-5">
                  1. Insured
                </div>
                <small>
                  ECGC are committed to resolving your claim within the shortest
                  possible time and in order to assist in expediting this
                  process kindly ensure that this form is completed in detail.
                </small>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Insured</label>
                  <input
                    type="text"
                    value={insured}
                    onChange={(e) => setInsured(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Telephone</label>
                  <input
                    type="number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control"
                    maxLength={15}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Email</label>
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
                <div className="card-header bg-secondary text-white py-1 my-5">
                  2. Details of loss/Damage
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Date </label>
                  <input
                    type="date"
                    value={dateofdamage}
                    onChange={(e) => setDateofdamage(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Time</label>
                  <input
                    type="time"
                    value={timeofdamage}
                    onChange={(e) => setTimeofdamage(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Place where accident occurred:</label>
                  <input
                    type="text"
                    value={placeofdamage}
                    onChange={(e) => setPlaceofdamage(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Did the loss occur in connection with your business?
                  </label>
                  <input
                    type="text"
                    value={connectedtobusiness}
                    onChange={(e) => setConnectedtobusiness(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Detailed and comprehensive statement setting out
                    circumstances surrounding the loss:
                  </label>
                  <textarea
                    value={circumstances}
                    onChange={(e) => setCircumstances(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                    required
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Do you believe you were negligent, if so why?
                  </label>
                  <textarea
                    value={negligence}
                    onChange={(e) => setNegligence(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                    required
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    What measures were taken to prevent loss or damage?
                  </label>
                  <textarea
                    value={prevent}
                    onChange={(e) => setPrevent(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                    required
                  ></textarea>
                </div>
                <div className="card-header bg-secondary text-white py-1 my-5">
                  3. Third Party Details
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Name, address and age of injured person or claimant 1:
                  </label>
                  <input
                    type="text"
                    value={thirdpartydetails1}
                    onChange={(e) => setThirdpartydetails1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Tel / Cell No:</label>
                  <input
                    type="number"
                    value={thirdpartyphone1}
                    onChange={(e) => setThirdpartyphone1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Details of injury or loss:</label>
                  <input
                    type="text"
                    value={thirdpartyloss1}
                    onChange={(e) => setThirdpartyloss1(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Name, address and age of injured person or claimant 2:
                  </label>
                  <input
                    type="text"
                    value={thirdpartydetails2}
                    onChange={(e) => setThirdpartydetails2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Tel / Cell no:</label>
                  <input
                    type="number"
                    value={thirdpartyphone2}
                    onChange={(e) => setThirdpartyphone2(e.target.value)}
                    className="form-control"
                    maxLength={15}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Details of injury or loss:</label>
                  <input
                    type="text"
                    value={thirdpartyloss2}
                    onChange={(e) => setThirdpartyloss2(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                  />
                </div>
                <div className="card-header bg-secondary text-white py-1 my-5">
                  4. Witnesses
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Witness 1 Name:</label>
                  <input
                    type="text"
                    value={witness1name}
                    onChange={(e) => setWitness1name(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Relationship to Insured:</label>
                  <input
                    type="text"
                    value={witness1relation}
                    onChange={(e) => setWitness1relation(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Contact details:</label>
                  <input
                    type="number"
                    value={witness1contact}
                    onChange={(e) => setWitness1contact(e.target.value)}
                    className="form-control"
                    maxLength={15}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Witness 2 Name</label>
                  <input
                    type="text"
                    value={witness2name}
                    onChange={(e) => setWitness2name(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Relationship to Insured:</label>
                  <input
                    type="text"
                    value={witness2relation}
                    onChange={(e) => setWitness2relation(e.target.value)}
                    className="form-control"
                    maxLength={5000}
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Witness 2 Contact</label>
                  <input
                    type="number"
                    value={witness2contact}
                    onChange={(e) => setWitness2contact(e.target.value)}
                    className="form-control"
                    maxLength={15}
                  />
                </div>
                <div className="card-header bg-secondary text-white py-1 my-5">
                  5. Declaration
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    I / We warrant that the foregoing information provided is
                    true and correct, and that no information has been withheld
                    in respect of the loss / damage. I / We undertake to advise
                    Hollard in writing in the event of any changes to supplied
                    information, and in the event of the recovery of any part of
                    the property forming the subject of this claim.
                  </label>
                  <input
                    type="text"
                    value={declaration}
                    onChange={(e) => setDeclaration(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Insured’s full name:</label>
                  <input
                    type="text"
                    value={insuredfullname}
                    onChange={(e) => setInsuredfullname(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Capacity:</label>
                  <input
                    type="text"
                    value={insuredcapacity}
                    onChange={(e) => setInsuredcapacity(e.target.value)}
                    className="form-control"
                  />
                </div>
                <button type="submit" className="btn btn-primary my-4">
                  Submit
                </button>
              </div>
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
    </div>
  );
};

export default PublicLiability;
