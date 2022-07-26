import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import { backend } from "./api/api";

const PropertyClaim = () => {
  const [policynumber, setPolicynumber] = useState("");
  const [policyholder, setpolicyholder] = useState("");
  const [insurer, setInsurer] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [dateofdamage, setDateofdamage] = useState("");
  const [timeofdamage, setTimeofdamage] = useState("");
  const [placeofdamage, setPlaceofdamage] = useState("");
  const [premisesoccupied, setpremisesoccupied] = useState("");
  const [typeofpremise, settypeofpremise] = useState("");
  const [causeofdamage, setcauseofdamage] = useState("");
  const [other, setother] = useState("");
  const [criminal, setcriminal] = useState("");
  const [policestation, setpolicestation] = useState("");
  const [brigade, setbrigade] = useState("");
  const [circumstances, setcircumstances] = useState("");
  const [interested, setinterested] = useState("");
  const [anotherinsuarnce, setanotherinsuarnce] = useState("");
  const [replacement, setreplacement] = useState("");
  const [totalcost, settotalcost] = useState("");
  const [amountclaimed, setamountclaimed] = useState("");
  const [authorized, setauthorized] = useState("");
  const [witness, setwitness] = useState("");
  const [datesigned, setDateSigned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/property-claim", {
        policynumber,
        policyholder,
        insurer,
        address,
        telephone,
        dateofdamage,
        timeofdamage,
        placeofdamage,
        premisesoccupied,
        typeofpremise,
        causeofdamage,
        other,
        criminal,
        policestation,
        brigade,
        circumstances,
        interested,
        anotherinsuarnce,
        replacement,
        totalcost,
        amountclaimed,
        authorized,
        witness,
        datesigned,
      })
      .then((res) => {
        console.log(res);
        alert("Successfully submitted");
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
        <h1 className="mt-5 pt-5 text-center">Property Claim</h1>
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
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Policyholder:</label>
                  <input
                    type="text"
                    value={policyholder}
                    onChange={(e) => setpolicyholder(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Insurer</label>
                  <input
                    type="text"
                    value={insurer}
                    onChange={(e) => setInsurer(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Address where damage occurred:</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Contact name and Telephone No:</label>
                  <input
                    type="text"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="card-header bg-secondary text-white py-5 my-5">
                  Loss or damage occurred at:
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Date </label>
                  <input
                    type="date"
                    value={dateofdamage}
                    onChange={(e) => setDateofdamage(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Time</label>
                  <input
                    type="text"
                    value={timeofdamage}
                    onChange={(e) => setTimeofdamage(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Place where accident occurred:</label>
                  <input
                    type="text"
                    value={placeofdamage}
                    onChange={(e) => setPlaceofdamage(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    At the time of the incident were the premises:
                  </label>
                  <select
                    className="form-control"
                    value={premisesoccupied}
                    onChange={(e) => setpremisesoccupied(e.target.value)}
                  >
                    <option>Occupied</option>
                    <option>Unoccupied</option>
                    <option>Let</option>
                    <option>Unlet</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Type of premises:</label>
                  <select
                    className="form-control"
                    value={typeofpremise}
                    onChange={(e) => settypeofpremise(e.target.value)}
                  >
                    <option>Commercial</option>
                    <option>Residential</option>
                    <option>Block of Flats</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Cause of Loss or Damage:</label>
                  <select
                    className="form-control"
                    value={causeofdamage}
                    onChange={(e) => setcauseofdamage(e.target.value)}
                  >
                    <option>Fire</option>
                    <option>Storm</option>
                    <option>Theft</option>
                    <option>Burst Pipes</option>
                    <option>Malicious Damage</option>
                    <option>Glass</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Other (please specify)</label>
                  <textarea
                    value={other}
                    onChange={(e) => setother(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    If criminal damage, please state Police Crime Reference No:
                  </label>
                  <input
                    type="text"
                    value={criminal}
                    onChange={(e) => setcriminal(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Police Station:</label>
                  <input
                    type="text"
                    value={policestation}
                    onChange={(e) => setpolicestation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    If Fire Brigade attended state Station name and address:
                  </label>
                  <input
                    type="text"
                    value={brigade}
                    onChange={(e) => setbrigade(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Circumstances of Loss and extent of damage:
                  </label>
                  <input
                    type="text"
                    value={circumstances}
                    onChange={(e) => setcircumstances(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Are there any other persons interested in the property?
                  </label>
                  <input
                    type="text"
                    value={interested}
                    onChange={(e) => setinterested(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">
                    Are there any other insurances in force covering the
                    property? If Yes please state Insurers name, Address, Policy
                    No:
                  </label>
                  <input
                    type="text"
                    value={anotherinsuarnce}
                    onChange={(e) => setanotherinsuarnce(e.target.value)}
                    className="form-control"
                  />
                </div>
                <small>
                  Note: Claim Forms relating to Loss or Damage involving repairs
                  or rebuilding work should be supported by three comparative
                  estimates, which can be forwarded later if not available
                  immediately. The original invoices and receipts for any work
                  carried out should also be forwarded
                </small>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Details of repair/replacement:</label>
                  <textarea
                    value={replacement}
                    onChange={(e) => setreplacement(e.target.value)}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Total Cost $</label>
                  <input
                    type="number"
                    value={totalcost}
                    onChange={(e) => settotalcost(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Amount Claimed $</label>
                  <input
                    type="number"
                    value={amountclaimed}
                    onChange={(e) => setamountclaimed(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Has the work been authorised?</label>
                  <input
                    type="text"
                    value={authorized}
                    onChange={(e) => setauthorized(e.target.value)}
                    className="form-control"
                  />
                </div>
                <small>
                  I/We declare that the information given on this form is true
                  to the best of my/our knowledge and belief.
                </small>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Witness:</label>
                  <input
                    type="text"
                    value={witness}
                    onChange={(e) => setwitness(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPN4">Date:</label>
                  <input
                    type="date"
                    value={datesigned}
                    onChange={(e) => setDateSigned(e.target.value)}
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
      </Container>

      <Footer />
    </div>
  );
};

export default PropertyClaim;
