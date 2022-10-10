import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const MotorAccident = () => {
  const [show, setShow] = React.useState(false);

  const [policynumber, setPolicynumber] = React.useState("");
  const [dateofbirth1, setDateOfBirth1] = React.useState("");
  const [nameofinsured, setNameofinsured] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [dateofbirth, setDateofbirth] = React.useState("");
  const [nameofdriver, setNameofdriver] = React.useState("");
  const [addressofdriver, setAddressofdriver] = React.useState("");
  const [placeofissue, setplaceofissue] = React.useState("");
  const [drlicence, setDrlicence] = React.useState("");
  const [endorsed, setEndorsed] = React.useState("");
  const [dateofissue, setDateofissue] = React.useState("");
  const [regnumber, setRegNumber] = React.useState("");
  const [vehiclemake, setVehicleMake] = React.useState("");
  const [typeofbody, setTypeofbody] = React.useState("");
  const [yearofmake, setYearofmake] = React.useState("");
  const [engine, setEngineNumber] = React.useState("");
  const [chassis, setChassisNumber] = React.useState("");
  const [signature, setSignature] = React.useState("");
  const [ownedbyinsured, setOwnedByInsured] = React.useState("");
  const [ownedbyinsured2, setOwnedByInsured2] = React.useState("");
  const [vehiclemodified, setVehicleModified] = React.useState("");
  const [vehiclemodified2, setVehicleModified2] = React.useState("");
  const [vdescription, setVdescription] = React.useState("");
  const [vdescription2, setVdescription2] = React.useState("");
  const [vdescription3, setVdescription3] = React.useState("");
  const [estimatedcost, setEstimatedCost] = React.useState("");
  const [sidecar, setSidecar] = React.useState("");
  const [pillion, setPillion] = React.useState("");
  const [learner, setLearner] = React.useState("");
  const [telephonenumber, setTelephoneNumber] = React.useState("");
  const [driveroccupation, setDriverOccupation] = React.useState("");
  const [pobox, setPOBox] = React.useState("");
  const [reasonforuse, setReasonForUse] = React.useState("");
  const [insureddriver, setInsuredDriver] = React.useState("");
  const [insureddriverdetails, setInsuredDriverDetails] = React.useState("");
  const [employedbyinsured, setEmployedByInsured] = React.useState("");
  const [
    employedbyinsureddetails,
    setEmployedByInsuredDetails,
  ] = React.useState("");
  const [alcoholinfluence, setAlcoholInfluence] = React.useState("");
  const [alcoholinfluencedetails, setAlcoholInfluenceDetails] = React.useState(
    ""
  );
  const [dateofaccident, setDateofAccident] = React.useState("");
  const [timeofaccident, setTimeofAccident] = React.useState("");
  const [locationofaccident, setLocationofAccident] = React.useState("");
  const [alcoholtest, setAlcoholTest] = React.useState("");
  const [alcoholtestdetails, setAlcoholTestDetails] = React.useState("");
  const [mentalphysicaldefect, setMentalPhysicalDefect] = React.useState("");
  const [
    mentalphysicaldefectdetails,
    setMentalPhysicalDefectDetails,
  ] = React.useState("");
  const [motoringoffence, setMotoringOffence] = React.useState("");
  const [motoringoffencedetails, setMotoringOffenceDetails] = React.useState(
    ""
  );
  const [motoraccident, setMotorAccident] = React.useState("");
  const [motoraccidentdetails, setMotorAccidentDetails] = React.useState("");
  const [motorinsurance, setMotorInsurance] = React.useState("");
  const [motorinsurancedetails, setMotorInsuranceDetails] = React.useState("");
  const [specialterms, setSpecialTerms] = React.useState("");
  const [specialtermsdetails, setSpecialTermsDetails] = React.useState("");
  const [motorpolicy, setMotorPolicy] = React.useState("");
  const [motorpolicydetails, setMotorPolicyDetails] = React.useState("");
  const [charged, setCharged] = React.useState("");
  const [chargeddetails, setChargedDetails] = React.useState("");
  const [timeanddateofadvice, setTimeandDateofAdvice] = React.useState("");
  const [admitliability, setAdmitLiability] = React.useState("");
  const [admitliabilitydetails, setAdmitLiabilityDetails] = React.useState("");
  const [blamed, setBlamed] = React.useState("");
  const [passengers, setPassengers] = React.useState("");
  const [injured, setInjured] = React.useState("");
  const [injureddetails, setInjuredDetails] = React.useState("");
  const [employ, setEmploy] = React.useState("");
  const [witnesses, setWitnesses] = React.useState("");
  const [policeofficer, setPoliceOfficer] = React.useState("");
  const [otherdrivers, setOtherDrivers] = React.useState("");
  const [otherdriversinemploy, setOtherDriversInEmploy] = React.useState("");
  const [otherdriversinjured, setOtherDriversInjured] = React.useState("");
  const [othervehicles, setOtherVehicles] = React.useState("");
  const [otherinsurers, setOtherInsurers] = React.useState("");
  const [otherdamagedetails, setOtherDamageDetails] = React.useState("");
  const [otherclaims, setOtherClaims] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/motor-accident", {
        policynumber,
        dateofbirth1,
        nameofinsured,
        occupation,
        address,
        email,
        mobile,
        dateofbirth,
        nameofdriver,
        addressofdriver,
        placeofissue,
        drlicence,
        endorsed,
        dateofissue,
        regnumber,
        vehiclemake,
        typeofbody,
        yearofmake,
        engine,
        chassis,
        signature,
        formdate: new Date(),
        ownedbyinsured,
        ownedbyinsured2,
        vehiclemodified,
        vehiclemodified2,
        vdescription,
        vdescription2,
        vdescription3,
        estimatedcost,
        sidecar,
        pillion,
        learner,
        telephonenumber,
        driveroccupation,
        pobox,
        reasonforuse,
        insureddriver,
        insureddriverdetails,
        employedbyinsured,
        employedbyinsureddetails,
        alcoholinfluence,
        alcoholinfluencedetails,
        alcoholtest,
        alcoholtestdetails,
        mentalphysicaldefect,
        mentalphysicaldefectdetails,
        motoringoffence,
        motoringoffencedetails,
        motoraccident,
        motoraccidentdetails,
        motorinsurance,
        motorinsurancedetails,
        specialterms,
        specialtermsdetails,
        motorpolicy,
        motorpolicydetails,
        charged,
        chargeddetails,
        dateofaccident,
        timeofaccident,
        locationofaccident,
        timeanddateofadvice,
        admitliability,
        admitliabilitydetails,
        blamed,
        passengers,
        injured,
        injureddetails,
        employ,
        witnesses,
        policeofficer,
        otherdriversinemploy,
        otherdriversinjured,
        otherinsurers,
        otherdamagedetails,
        otherclaims,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setShow(true);
          setPolicynumber("");
          setDateofbirth1("");
          setNameofinsured("");
          setOccupation("");
          setAddress("");
          setEmail("");
          setMobile("");
          setDateofbirth("");
          setNameofdriver("");
          setAddressofdriver("");
          setPlaceofissue("");
          setDrlicence("");
          setEndorsed("");
          setDateofissue("");
          setRegnumber("");
          setVehiclemake("");
          setTypeofbody("");
          setYearofmake("");
          setEngine("");
          setChassis("");
          setSignature("");
          setOwnedbyinsured("");
          setOwnedbyinsured2("");
          setVehiclemodified("");
          setVehiclemodified2("");
          setVdescription("");
          setVdescription2("");
          setVdescription3("");
          setEstimatedcost("");
          setSidecar("");
          setPillion("");
          setLearner("");
          setTelephonenumber("");
          setDriveroccupation("");
          setPobox("");
          setReasonforuse("");
          setInsureddriver("");
          setInsureddriverdetails("");
          setEmployedbyinsured("");
          setEmployedbyinsureddetails("");
          setAlcoholinfluence("");
          setAlcoholinfluencedetails("");
          setAlcoholtest("");
          setAlcoholtestdetails("");
          setMentalphysicaldefect("");
          setMentalPhysicalDefectDetails("");
          setMotoringOffence("");
          setMotoringOffenceDetails("");
          setMotorAccident("");
          setMotorAccidentDetails("");
          setMotorInsurance("");
          setMotorInsuranceDetails("");
          setSpecialTerms("");
          setSpecialTermsDetails("");
          setMotorPolicy("");
          setMotorPolicyDetails("");
          setCharged("");
          setChargedDetails("");
          setDateofaccident("");
          setTimeofaccident("");
          setLocationofaccident("");
          setTimeandDateofAdvice("");
          setAdmitLiability("");
          setAdmitLiabilityDetails("");
          setBlamed("");
          setPassengers("");
          setInjured("");
          setInjuredDetails("");
          setEmploy("");
          setWitnesses("");
          setPoliceOfficer("");
          setOtherDrivers("");
          setOtherDriversInEmploy("");
          setOtherDriversInjured("");
          setOtherVehicles("");
          setOtherInsurers("");
          setOtherDamageDetails("");
          setOtherClaims("");
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
        <h1 className="mt-5 pt-5 text-center">Motor Accident Claim Form</h1>
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
                <div className="form-group col-md-12 col-sm-12">
                  <label for="inputPN4">Date of Birth</label>
                  <input
                    type="date"
                    value={dateofbirth1}
                    onChange={(e) => setDateOfBirth1(e.target.value)}
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
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPe4">Make of Vehicle</label>
                  <input
                    type="text"
                    value={vehiclemake}
                    onChange={(e) => setVehicleMake(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputName4">Type of Body (lorry, sedan)</label>
                  <input
                    type="text"
                    value={typeofbody}
                    onChange={(e) => setTypeofbody(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputSig4">Year of Make</label>
                  <input
                    type="date"
                    value={yearofmake}
                    onChange={(e) => setYearofmake(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputSig4">Engine Number</label>
                  <input
                    type="text"
                    value={engine}
                    onChange={(e) => setEngineNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputSig4">Chassis Number</label>
                  <input
                    type="text"
                    value={chassis}
                    onChange={(e) => setChassisNumber(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group my-2 col-md-6 col-sm-12">
                  <label for="inputNID2">
                    <small>Is vehicle owned by the Insured?</small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="ownedbyinsured"
                      value="yes"
                      onChange={(e) => setOwnedByInsured(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="ownedbyinsured"
                      value="no"
                      onChange={(e) => setOwnedByInsured(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label for="inputSig4">If “No”, please advise by whom?</label>
                  <input
                    type="text"
                    value={ownedbyinsured2}
                    onChange={(e) => setOwnedByInsured2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group my-2 col-md-6 col-sm-12">
                  <label for="inputNID2">
                    <small>
                      Is vehicle modified to increase performance above
                      specifications?
                    </small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="vehiclemodified"
                      value="yes"
                      onChange={(e) => setVehicleModified(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="vehiclemodified"
                      value="no"
                      onChange={(e) => setVehicleModified(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
                <div className="form-group col-md-6 col-md-12">
                  <label for="inputDate4">
                    If “Yes”, please provide full details
                  </label>
                  <input
                    type="number"
                    value={vehiclemodified2}
                    onChange={(e) => setVehicleModified2(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Description & name of owner of any goods carried in the
                    vehicle.
                  </label>
                  <input
                    type="text"
                    value={vdescription}
                    onChange={(e) => setVdescription(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Description & number of trailers attached to the vehicle.
                  </label>
                  <input
                    type="text"
                    value={vdescription2}
                    onChange={(e) => setVdescription2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Give details of damage to the insured vehicle.
                  </label>
                  <input
                    type="text"
                    value={vdescription3}
                    onChange={(e) => setVdescription3(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">
                    Estimated cost of repairs & where it can be inspected?
                  </label>
                  <input
                    type="number"
                    value={estimatedcost}
                    onChange={(e) => setEstimatedCost(e.target.value)}
                    className="form-control"
                  />
                </div>
                <small>For motor cycles only</small>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">Was side-car attached?</label>
                  <input
                    type="text"
                    value={sidecar}
                    onChange={(e) => setSidecar(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">Pillion passenger carried?</label>
                  <input
                    type="text"
                    value={pillion}
                    onChange={(e) => setPillion(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">Was driver a learner?</label>
                  <input
                    type="text"
                    value={learner}
                    onChange={(e) => setLearner(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="card-header my-3">
                <h3>PARTICULARS OF DRIVER</h3>
              </div>
              <small>
                N.B. These questions must be answered whether the insured was
                driving the vehicle or not
              </small>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label for="inputFullNames">Full Names</label>
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
                  <label for="inputCD2"> Full residential address</label>
                  <input
                    type="text"
                    value={addressofdriver}
                    onChange={(e) => setAddressofdriver(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">Telephone Number</label>
                  <input
                    type="number"
                    value={telephonenumber}
                    onChange={(e) => setTelephoneNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">Occupation</label>
                  <input
                    type="text"
                    value={driveroccupation}
                    onChange={(e) => setDriverOccupation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">PO Box</label>
                  <input
                    type="text"
                    value={pobox}
                    onChange={(e) => setPOBox(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
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
                  <label for="inputFullNames">
                    Place of driving licence issued
                  </label>
                  <input
                    type="text"
                    value={placeofissue}
                    onChange={(e) => setplaceofissue(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group col-sm-12">
                  <label for="inputCD2">Date of issue of Drivers Licence</label>
                  <input
                    type="date"
                    value={dateofissue}
                    onChange={(e) => setDateofissue(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label for="inputCD2">
                    Has licence ever been endorsed? If yes, give details
                  </label>
                  <input
                    type="text"
                    value={endorsed}
                    onChange={(e) => setEndorsed(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="card-header my-3">The Driver</div>
              <small>Please give a definite answer to each question</small>
              <div className="form-group col-sm-12">
                <label for="inputCD2">
                  State precisely reason for the use of the vehicle at the time
                  of the loss/accident?
                </label>
                <input
                  type="text"
                  value={reasonforuse}
                  onChange={(e) => setReasonForUse(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Was he/she driving with the insured’s knowledge and consent?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="insureddriver"
                    value="yes"
                    onChange={(e) => setInsuredDriver(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="insureddriver"
                    value="no"
                    onChange={(e) => setInsuredDriver(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputFullNames">
                  If “No”, please give full details
                </label>
                <input
                  type="text"
                  value={insureddriverdetails}
                  onChange={(e) => setInsuredDriverDetails(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>Is he/she employed by the insured?</small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="employedbyinsured"
                    value="yes"
                    onChange={(e) => setEmployedByInsured(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="employedbyinsured"
                    value="no"
                    onChange={(e) => setEmployedByInsured(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={employedbyinsureddetails}
                  onChange={(e) => setEmployedByInsuredDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Was he/she driving under the influence of alcohol and/or
                    drugs?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="alcoholinfluence"
                    value="yes"
                    onChange={(e) => setAlcoholInfluence(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="alcoholinfluence"
                    value="no"
                    onChange={(e) => setAlcoholInfluence(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={alcoholinfluencedetails}
                  onChange={(e) => setAlcoholInfluenceDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>Was driver tested for alcohol/drugs?</small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="alcoholtest"
                    value="yes"
                    onChange={(e) => setAlcoholTest(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="alcoholtest"
                    value="no"
                    onChange={(e) => setAlcoholTest(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={alcoholtestdetails}
                  onChange={(e) => setAlcoholTestDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Does he/she suffer from any mental or physical defect?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="mentalphysicaldefect"
                    value="yes"
                    onChange={(e) => setMentalPhysicalDefect(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="mentalphysicaldefect"
                    value="no"
                    onChange={(e) => setMentalPhysicalDefect(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={mentalphysicaldefectdetails}
                  onChange={(e) =>
                    setMentalPhysicalDefectDetails(e.target.value)
                  }
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Has he/she ever been charged or Yes convicted of any
                    motoring offence?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motoringoffence"
                    value="yes"
                    onChange={(e) => setMotoringOffence(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motoringoffence"
                    value="no"
                    onChange={(e) => setMotoringOffence(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={motoringoffencedetails}
                  onChange={(e) => setMotoringOffenceDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Has he/she been involved in any motor Yes accident
                    previously?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motoraccident"
                    value="yes"
                    onChange={(e) => setMotorAccident(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motoraccident"
                    value="no"
                    onChange={(e) => setMotorAccident(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={motoraccidentdetails}
                  onChange={(e) => setMotorAccidentDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Has he/she ever been refused motor Yes vehicle insurance?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motorinsurance"
                    value="yes"
                    onChange={(e) => setMotorInsurance(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motorinsurance"
                    value="no"
                    onChange={(e) => setMotorInsurance(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={motorinsurancedetails}
                  onChange={(e) => setMotorInsuranceDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Has he/she ever had special terms imposed on their insurance
                    policy?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="specialterms"
                    value="yes"
                    onChange={(e) => setSpecialTerms(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="specialterms"
                    value="no"
                    onChange={(e) => setSpecialTerms(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={specialtermsdetails}
                  onChange={(e) => setSpecialTermsDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Has he/she have a motor policy in his/her own name?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motorpolicy"
                    value="yes"
                    onChange={(e) => setMotorPolicy(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="motorpolicy"
                    value="no"
                    onChange={(e) => setMotorPolicy(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={motorpolicydetails}
                  onChange={(e) => setMotorPolicyDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Is he/she being charged by any authority as a result of this
                    accident?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="charged"
                    value="yes"
                    onChange={(e) => setCharged(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="charged"
                    value="no"
                    onChange={(e) => setCharged(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={chargeddetails}
                  onChange={(e) => setChargedDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="card-header my-3">
                <h3>THE ACCIDENT</h3>
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">Date</label>
                <input
                  type="date"
                  value={dateofaccident}
                  onChange={(e) => setDateofAccident(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">Time</label>
                <input
                  type="text"
                  value={timeofaccident}
                  onChange={(e) => setTimeofAccident(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">Location</label>
                <input
                  type="text"
                  value={locationofaccident}
                  onChange={(e) => setLocationofAccident(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  At what time and date was the insured advised of accident?
                </label>
                <input
                  type="text"
                  value={timeanddateofadvice}
                  onChange={(e) => setTimeandDateofAdvice(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>Did the driver admit liability?</small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="admitliability"
                    value="yes"
                    onChange={(e) => setAdmitLiability(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="admitliability"
                    value="no"
                    onChange={(e) => setAdmitLiability(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={admitliabilitydetails}
                  onChange={(e) => setAdmitLiabilityDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Who does the insured believe was to blame and why?
                </label>
                <input
                  type="text"
                  value={blamed}
                  onChange={(e) => setBlamed(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Name and address of ALL passengers in insured vehicle.
                </label>
                <input
                  type="text"
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group my-2 col-md-6 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Was driver or any of the passengers Yes injured in the
                    accident?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="injured"
                    value="yes"
                    onChange={(e) => setInjured(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="injured"
                    value="no"
                    onChange={(e) => setInjured(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group col-sm-12 col-md-6">
                <label for="inputNID2">
                  If “Yes”, please give full details
                </label>
                <input
                  type="text"
                  value={injureddetails}
                  onChange={(e) => setInjuredDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">Do you employ any of them?</label>
                <input
                  type="text"
                  value={employ}
                  onChange={(e) => setEmploy(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Names and addresses of any independent witnesses
                </label>
                <input
                  type="text"
                  value={witnesses}
                  onChange={(e) => setWitnesses(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Name, number and station of the attending/reporting Police
                  Officer.
                </label>
                <input
                  type="text"
                  value={policeofficer}
                  onChange={(e) => setPoliceOfficer(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="card-header my-3">THIRD PARTIES</div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Names & addresses of other drivers and persons involved
                </label>
                <input
                  type="text"
                  value={otherdrivers}
                  onChange={(e) => setOtherDrivers(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Are any of them in your employ?
                </label>
                <input
                  type="text"
                  value={otherdriversinemploy}
                  onChange={(e) => setOtherDriversInEmploy(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">Were any of them injured?</label>
                <input
                  type="text"
                  value={otherdriversinjured}
                  onChange={(e) => setOtherDriversInjured(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Give make & Registration numbers of all other vehicles
                  involved
                </label>
                <input
                  type="text"
                  value={othervehicles}
                  onChange={(e) => setOtherVehicles(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Give names of their Insurers and Certificate or Policy number
                </label>
                <input
                  type="text"
                  value={otherinsurers}
                  onChange={(e) => setOtherInsurers(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Give details of any damage caused to vehicle and/or property
                </label>
                <input
                  type="text"
                  value={otherdamagedetails}
                  onChange={(e) => setOtherDamageDetails(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group col-sm-12">
                <label for="inputFullNames">
                  Please give details of any claims, made against you or to be
                  made by you
                </label>
                <input
                  type="text"
                  value={otherclaims}
                  onChange={(e) => setOtherClaims(e.target.value)}
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <h5>Third Party Instructions (Important)</h5>
                <small>
                  If any claim is made against you either verbally or in
                  writing, or you are advised at any time of an Intended
                  Prosecution, Inquest or Inquiry, notify this office
                  immediately and forward all documents received. DO NOT ADMIT
                  LIABILITY
                </small>
                <h3>DECLARATION</h3>
                <small>
                  I/We declare to the best of my/our knowledge and belief that
                  the foregoing particulars are true and correct, and I/we
                  undertake to render Export Credit Guarantee Corporation of
                  Zimbabwe (Pvt) Ltd every assistance in my/our power in dealing
                  with this matter. I/we also declare that there is no other
                  insurance under which a claim can be made in respect of the
                  accident or loss, and that the said vehicle is my/our
                  property.
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

export default MotorAccident;
