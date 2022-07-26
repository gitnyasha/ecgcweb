import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";

const MotorGlass = () => {
  const [policynumber, setPolicynumber] = React.useState("");
  const [claimnumber, setClaimNumber] = React.useState("");
  const [nameofinsured, setNameofinsured] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [dateofbirth, setDateofbirth] = React.useState("");
  const [nameofdriver, setNameofdriver] = React.useState("");
  const [addressofdriver, setAddressofdriver] = React.useState("");
  const [drrelation, setDrrelation] = React.useState("");
  const [drlicence, setDrlicence] = React.useState("");
  const [offense, setOffense] = React.useState("");
  const [regnumber, setRegNumber] = React.useState("");
  const [vehiclemake, setVehicleMake] = React.useState("");
  const [typeofbody, setTypeofbody] = React.useState("");
  const [yearofmake, setYearofmake] = React.useState("");
  const [suminsured, setSuminsured] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [dateofoccurence, setDateOfOccurence] = React.useState("");
  const [occurencetime, setOccurencetime] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [wasanydamage, setWasanydamage] = React.useState("");
  const [windscreen, setWindscreen] = React.useState("");
  const [formdate, setFormdate] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/motor-glass", {
        policynumber,
        claimnumber,
        nameofinsured,
        occupation,
        address,
        email,
        mobile,
        dateofbirth,
        nameofdriver,
        addressofdriver,
        drrelation,
        drlicence,
        offense,
        regnumber,
        vehiclemake,
        typeofbody,
        yearofmake,
        suminsured,
        purpose,
        dateofoccurence,
        occurencetime,
        place,
        wasanydamage,
        windscreen,
        formdate,
      })
      .then((res) => {
        console.log(res);
        alert("Form submitted successfully");
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
        <h1 className="mt-5 pt-5 text-center">Motor Glass Claim Form</h1>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputRC4">Policy Number</label>
                  <input
                    type="text"
                    value={policynumber}
                    onChange={(e) => setPolicynumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputPN4">Claim Number</label>
                  <input
                    type="text"
                    value={claimnumber}
                    onChange={(e) => setClaimNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-lg-12">
                  <label for="inputPositon4">Name of Insured</label>
                  <input
                    type="text"
                    value={nameofinsured}
                    onChange={(e) => setNameofinsured(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputNum4">Occupation</label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputMobile4">Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputNum4">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputMobile4">Contact Numbers</label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-header my-3">PARTICULARS OF DRIVER</div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Name of driver at time of occurrence
                  </label>
                  <input
                    type="text"
                    value={nameofdriver}
                    onChange={(e) => setNameofdriver(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputNID2">Date of Birth</label>
                  <input
                    type="date"
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">Address of driver</label>
                  <input
                    type="text"
                    value={addressofdriver}
                    onChange={(e) => setAddressofdriver(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Is the driver the owner, owner's employee, owner's relative
                    or friend?
                  </label>
                  <input
                    type="text"
                    value={drrelation}
                    onChange={(e) => setDrrelation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputNID2">Drivers Licence No</label>
                  <input
                    type="text"
                    value={drlicence}
                    onChange={(e) => setDrlicence(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">
                    Has driver ever been convicted of a driving offence? If so,
                    give brief details and dates
                  </label>
                  <input
                    type="text"
                    value={offense}
                    onChange={(e) => setOffense(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="card-header my-3">
                PARTICULARS OF INSURED VEHICLE
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label for="inputDate4">
                    <small>Registration Number</small>
                  </label>
                  <input
                    type="text"
                    value={regnumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPe4">
                    <small>Make of Vehicle</small>
                  </label>
                  <input
                    type="text"
                    value={vehiclemake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputName4">
                    <small>Type of Body (lorry, sedan)</small>
                  </label>
                  <input
                    type="text"
                    value={typeofbody}
                    onChange={(e) => setTypeofbody(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputSig4">
                    <small>Year of Make</small>
                  </label>
                  <input
                    type="date"
                    value={yearofmake}
                    onChange={(e) => setYearofmake(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputDate4">
                    <small>Sum Insured</small>
                  </label>
                  <input
                    type="text"
                    value={suminsured}
                    onChange={(e) => setSuminsured(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    For what exact purpose was vehicle being used?
                  </label>
                  <input
                    type="text"
                    value={purpose}
                    onChange={(e) => setPurpose(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="card-header my-3">PARTICULARS OF DAMAGE</div>
              <Row>
                <Col>
                  <label for="inputNID2">Date of occurrence</label>
                  <input
                    type="date"
                    value={dateofoccurence}
                    onChange={(e) => setDateOfOccurence(e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col>
                  <label for="inputCD2">Time</label>
                  <input
                    type="text"
                    value={occurencetime}
                    onChange={(e) => setOccurencetime(e.target.value)}
                    className="form-control"
                  />
                </Col>
                <Col>
                  <label for="inputCD2">Place</label>
                  <input
                    type="text"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    className="form-control"
                  />
                </Col>
              </Row>

              <div className="form-row my-3">
                <div className="col-sm-12">
                  <label for="inputNID2">
                    Was there any other damage to the vehicle?
                  </label>
                  <input
                    type="text"
                    value={wasanydamage}
                    onChange={(e) => setWasanydamage(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputCD2">
                    Was the windscreen or glass in the car clear, tinted or
                    shaded?
                  </label>
                  <input
                    type="text"
                    value={windscreen}
                    onChange={(e) => setWindscreen(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputCD2">Was it already damaged?</label>
                  <input
                    type="text"
                    value={wasanydamage}
                    onChange={(e) => setWasanydamage(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="col-sm-12">
                  <label for="inputNID2">Date</label>
                  <input
                    type="date"
                    value={formdate}
                    onChange={(e) => setFormdate(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <small>
                  I / We declare that, to the best of my/our knowledge and
                  belief, these statements are true.
                </small>
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

export default MotorGlass;
