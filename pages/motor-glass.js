import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const MotorGlass = () => {
  const [show, setShow] = React.useState(false);

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
  const [dateofissue, setDateofissue] = React.useState("");
  const [regnumber, setRegNumber] = React.useState("");
  const [vehiclemake, setVehicleMake] = React.useState("");
  const [typeofbody, setTypeofbody] = React.useState("");
  const [yearofmake, setYearofmake] = React.useState("");
  const [suminsured, setSuminsured] = React.useState("");
  const [purpose, setPurpose] = React.useState("");
  const [dateofoccurence, setDateOfOccurence] = React.useState("");
  const [occurencetime, setOccurencetime] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [causeofdamage, setCauseofdamage] = React.useState("");
  const [wasanydamage, setWasanydamage] = React.useState("");
  const [windscreen, setWindscreen] = React.useState("");
  const [alreadydamaged, setAlreadydamaged] = React.useState("");
  const [placeseen, setPlaceseen] = React.useState("");
  const [fitted, setFitted] = React.useState("");
  const [estimation, setEstimation] = React.useState("");
  const [signature, setSignature] = React.useState("");

  function isValidEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }

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
        dateofissue,
        regnumber,
        vehiclemake,
        typeofbody,
        yearofmake,
        suminsured,
        purpose,
        dateofoccurence,
        occurencetime,
        place,
        causeofdamage,
        wasanydamage,
        windscreen,
        alreadydamaged,
        placeseen,
        fitted,
        estimation,
        signature,
        formdate: new Date(),
      })
      .then((res) => {
        if (res.status === 201) {
          setShow(true);
          setPolicynumber("");
          setClaimNumber("");
          setNameofinsured("");
          setOccupation("");
          setAddress("");
          setEmail("");
          setMobile("");
          setDateofbirth("");
          setNameofdriver("");
          setAddressofdriver("");
          setDrrelation("");
          setDrlicence("");
          setOffense("");
          setDateofissue("");
          setRegNumber("");
          setVehicleMake("");
          setTypeofbody("");
          setYearofmake("");
          setSuminsured("");
          setPurpose("");
          setDateOfOccurence("");
          setOccurencetime("");
          setPlace("");
          setCauseofdamage("");
          setWasanydamage("");
          setWindscreen("");
          setAlreadydamaged("");
          setPlaceseen("");
          setFitted("");
          setEstimation("");
          setSignature("");
        }
      })
      .catch((err) => {
        alert("Error submitting");
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
                    maxLength={25}
                    required
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputPN4">Claim Number</label>
                  <input
                    type="text"
                    value={claimnumber}
                    onChange={(e) => setClaimNumber(e.target.value)}
                    className="form-control"
                    maxLength={25}
                    required
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
                    maxLength={250}
                    required
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
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputMobile4">Contact Numbers</label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="form-control"
                    required
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
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputNID2">Date of Birth</label>
                  <input
                    type="date"
                    value={dateofbirth}
                    onChange={(e) => setDateofbirth(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">Address of driver</label>
                  <input
                    type="text"
                    value={addressofdriver}
                    onChange={(e) => setAddressofdriver(e.target.value)}
                    className="form-control"
                    required
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
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputNID2">Drivers Licence No</label>
                  <input
                    type="text"
                    value={drlicence}
                    onChange={(e) => setDrlicence(e.target.value)}
                    className="form-control"
                    maxLength={25}
                    required
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">Date of issue of Drivers Licence</label>
                  <input
                    type="date"
                    value={dateofissue}
                    onChange={(e) => setDateofissue(e.target.value)}
                    className="form-control"
                    required
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
                  <label for="inputDate4">Registration Number</label>
                  <input
                    type="text"
                    value={regnumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    className="form-control"
                    maxLength={25}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPe4">Make of Vehicle</label>
                  <input
                    type="text"
                    value={vehiclemake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputName4">Type of Body (lorry, sedan)</label>
                  <input
                    type="text"
                    value={typeofbody}
                    onChange={(e) => setTypeofbody(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputSig4">Year of Make</label>
                  <input
                    type="date"
                    value={yearofmake}
                    onChange={(e) => setYearofmake(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputDate4">Sum Insured</label>
                  <input
                    type="number"
                    value={suminsured}
                    onChange={(e) => setSuminsured(e.target.value)}
                    className="form-control"
                    maxLength={20}
                    required
                    step="0.01"
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
                    required
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
                    required
                  />
                </Col>
                <Col>
                  <label for="inputCD2">Time</label>
                  <input
                    type="time"
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
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Cause of Breakage Add if yes give details after Any other
                    damage?
                  </label>
                  <input
                    type="text"
                    value={causeofdamage}
                    onChange={(e) => setCauseofdamage(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
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
                    required
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
                    value={alreadydamaged}
                    onChange={(e) => setAlreadydamaged(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputCD2">
                    Place where damaged vehicle can be seen
                  </label>
                  <input
                    type="text"
                    value={placeseen}
                    onChange={(e) => setPlaceseen(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="col-sm-12">
                  <label for="inputCD2">
                    Have you given instructions for a replacement to be fitted?
                  </label>
                  <input
                    type="text"
                    value={fitted}
                    onChange={(e) => setFitted(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-12">
                  <label for="inputCD2">Estimated Cost $</label>
                  <input
                    type="number"
                    value={estimation}
                    onChange={(e) => setEstimation(e.target.value)}
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
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">Name</label>
                  <input
                    type="text"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
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

export default MotorGlass;
