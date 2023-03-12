import React from "react";
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { backend } from "./api/api";
import Alert from "react-bootstrap/Alert";

const MotorProposal = () => {
  const [show, setShow] = React.useState(false);

  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const [idnumber, setIdNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [homeowner, setHomeOwner] = React.useState("");
  const [marital, setMarital] = React.useState("");
  const [children, setChildren] = React.useState("");
  const [manuorauto, setManuOrAuto] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [job, setJob] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [numberofcars, setNumberOfCars] = React.useState("");
  const [licencenumber, setLicenceNumber] = React.useState("");
  const [typeoflicence, setTypeOfLicence] = React.useState("");
  const [drivingqualifications, setDrivingQualifications] = React.useState("");
  const [disabilities, setDisabilities] = React.useState("");
  const [years_of_licence, setYearsOfLicence] = React.useState("");
  const [dateofcommence, setDateOfCommence] = React.useState("");
  const [provisional, setProvisional] = React.useState("");
  const [licenceissued, setLicenceIssued] = React.useState("");
  const [manual_auto, setManualAuto] = React.useState("");
  const [periodoflicence, setPeriodOfLicence] = React.useState("");
  const [passedany, setPassedAny] = React.useState("");
  const [notinsured, setNotInsured] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [todrive, setToDrive] = React.useState("");
  const [nameofinsurer, setNameOfInsurer] = React.useState("");
  const [driver1name, setDriver1Name] = React.useState("");
  const [driver1birth, setDriver1Birth] = React.useState("");
  const [driver1gender, setDriver1Gender] = React.useState("");
  const [maindriver, setMainDriver] = React.useState("");
  const [driver1id, setDriver1Id] = React.useState("");
  const [driver1licencetype, setDriver1LicenceType] = React.useState("");
  const [driver1country, setDriver1Country] = React.useState("");
  const [driver1licenceissued, setDriver1LicenceIssued] = React.useState("");
  const [driver1occupation, setDriver1Occupation] = React.useState("");
  const [driver1naturebusiness, setDriver1NatureBusiness] = React.useState("");
  const [driver1passedfit, setDriver1PassedFit] = React.useState("");
  const [driver2name, setDriver2Name] = React.useState("");
  const [driver2birth, setDriver2Birth] = React.useState("");
  const [driver2gender, setDriver2Gender] = React.useState("");
  const [maindriver2, setMainDriver2] = React.useState("");
  const [driver2id, setDriver2Id] = React.useState("");
  const [driver2licencetype, setDriver2LicenceType] = React.useState("");
  const [driver2country, setDriver2Country] = React.useState("");
  const [driver2licenceissued, setDriver2LicenceIssued] = React.useState("");
  const [driver2occupation, setDriver2Occupation] = React.useState("");
  const [driver2naturebusiness, setDriver2NatureBusiness] = React.useState("");
  const [driver2passedfit, setDriver2PassedFit] = React.useState("");
  const [previousaccident, setPreviousAccident] = React.useState("");
  const [claimamount, setClaimAmount] = React.useState("");
  const [conviction1, setConviction1] = React.useState("");
  const [conviction2, setConviction2] = React.useState("");
  const [conviction3, setConviction3] = React.useState("");
  const [refused, setRefused] = React.useState("");
  const [reasonofrefusal, setReasonOfRefusal] = React.useState("");
  const [denyingclaim, setDenyingClaim] = React.useState("");
  const [denyingclaimreason, setDenyingClaimReason] = React.useState("");
  const [betteraccess, setBetterAccess] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [declinedproposal, setDeclinedProposal] = React.useState("");
  const [cancelled, setCancelled] = React.useState("");
  const [declinedrenew, setDeclinedRenew] = React.useState("");
  const [providedetails, setProvideDetails] = React.useState("");
  const [vehiclereg, setVehicleReg] = React.useState("");
  const [makeofcar, setMakeOfCar] = React.useState("");
  const [model, setModel] = React.useState("");
  const [typeoffuel, setTypeOfFuel] = React.useState("");
  const [transmission, setTransmission] = React.useState("");
  const [enginesize, setEngineSize] = React.useState("");
  const [chassis, setChassis] = React.useState("");
  const [enginecapacity, setEngineCapacity] = React.useState("");
  const [yearofmanu, setYearOfManu] = React.useState("");
  const [trim, setTrim] = React.useState("");
  const [alarm, setAlarm] = React.useState("");
  const [tracking, setTracking] = React.useState("");
  const [imports, setImport] = React.useState("");
  const [modified, setModified] = React.useState("");
  const [valueofcar, setValueOfCar] = React.useState("");
  const [usage, setUsage] = React.useState("");
  const [kilometers, setKilometers] = React.useState("");
  const [keptduringday, setKeptDuringDay] = React.useState("");
  const [keptatnight, setKeptAtNight] = React.useState("");
  const [othervehicle, setOtherVehicle] = React.useState("");
  const [coverlookingfor, setCoverLookingFor] = React.useState("");
  const [maindriverofvehicle, setMainDriverOfVehicle] = React.useState("");
  const [voluntary, setVoluntary] = React.useState("");
  const [keeper, setKeeper] = React.useState("");
  const [normallypay, setNormallyPay] = React.useState("");
  const [days, setDays] = React.useState("");
  const [discount, setDiscount] = React.useState("");
  const [legalcover, setLegalCover] = React.useState("");
  const [peronalinjury, setPersonalInjury] = React.useState("");
  const [breakdown, setBreakdown] = React.useState("");
  const [courtesy, setCourtesy] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [signature, setSignature] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post("/api/motor-proposal", {
        firstname,
        lastname,
        gender,
        birth,
        idnumber,
        address,
        telephone,
        email,
        homeowner,
        marital,
        children,
        occupation,
        job,
        industry,
        numberofcars,
        licencenumber,
        typeoflicence,
        drivingqualifications,
        disabilities,
        years_of_licence,
        dateofcommence,
        provisional,
        licenceissued,
        manual_auto,
        periodoflicence,
        passedany,
        notinsured,
        reason,
        nameofinsurer,
        driver1name,
        driver1birth,
        driver1gender,
        maindriver,
        driver1id,
        driver1licencetype,
        driver1country,
        driver1licenceissued,
        driver1occupation,
        driver1naturebusiness,
        driver1passedfit,
        driver2name,
        driver2birth,
        driver2gender,
        maindriver2,
        driver2id,
        driver2licencetype,
        driver2country,
        driver2licenceissued,
        driver2occupation,
        driver2naturebusiness,
        driver2passedfit,
        previousaccident,
        claimamount,
        conviction1,
        conviction2,
        conviction3,
        refused,
        reasonofrefusal,
        denyingclaim,
        denyingclaimreason,
        betteraccess,
        details,
        declinedproposal,
        cancelled,
        declinedrenew,
        providedetails,
        vehiclereg,
        makeofcar,
        model,
        typeoffuel,
        transmission,
        enginesize,
        chassis,
        enginecapacity,
        yearofmanu,
        trim,
        alarm,
        tracking,
        imports,
        modified,
        valueofcar,
        usage,
        kilometers,
        keptduringday,
        keptatnight,
        othervehicle,
        coverlookingfor,
        maindriverofvehicle,
        voluntary,
        keeper,
        normallypay,
        days,
        discount,
        legalcover,
        peronalinjury,
        breakdown,
        courtesy,
        condition,
        signature,
        signeddate: new Date(),
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
                <div className="form-group col-sm-12">
                  <label htmlFor="inputFirstName">
                    <b>What is your first Name?</b>
                  </label>
                  <input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    id="inputFirstName"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputLastName">
                    <b>What is your surname?</b>
                  </label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    id="inputLastName"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputGender">
                    <b>What is your gender?</b>
                  </label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                    id="inputGender"
                  >
                    <option value="">Choose...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputBirth">
                    <b>What is your date of birth?</b>
                  </label>
                  <input
                    type="date"
                    value={birth}
                    onChange={(e) => setBirth(e.target.value)}
                    className="form-control"
                    id="inputBirth"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputAddress">
                    <b>What is your address?</b>
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputAddress">
                    <b>What is your id number?</b>
                  </label>
                  <input
                    type="text"
                    value={idnumber}
                    onChange={(e) => setIdNumber(e.target.value)}
                    className="form-control"
                    id="inputAddress"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputTelephone">
                    <b>What is your telephone number?</b>
                  </label>
                  <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    className="form-control"
                    id="inputTelephone"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputEmail">
                    <b>What is your email address?</b>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="inputTelephone"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Are you a homeowner? Yes/No</b>
                  </label>
                  <select
                    value={homeowner}
                    onChange={(e) => setHomeOwner(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What is your marital status?</b>
                  </label>
                  <select
                    value={marital}
                    onChange={(e) => setMarital(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>How many children under 16 do you have?</b>
                  </label>
                  <input
                    type="text"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      What do you do? Employed / Self-employed / Retired /
                      Student / Not in paid work right now
                    </b>
                  </label>
                  <input
                    type="text"
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What job do you do?</b>
                  </label>
                  <input
                    type="text"
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What industry do you work in?</b>
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>How many cars do you own?</b>
                  </label>
                  <input
                    type="text"
                    value={numberofcars}
                    onChange={(e) => setNumberOfCars(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What is the driving licence number? </b>
                  </label>
                  <input
                    type="text"
                    value={licencenumber}
                    onChange={(e) => setLicenceNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>What licence do you have? Full/Provisional </b>
                  </label>
                  <input
                    type="text"
                    value={typeoflicence}
                    onChange={(e) => setTypeOfLicence(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Which cars are you licenced to drive?</b>
                  </label>
                  <input
                    type="text"
                    value={todrive}
                    onChange={(e) => setToDrive(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Manual and automatic/Automatic only</b>
                  </label>
                  <input
                    type="text"
                    value={manuorauto}
                    onChange={(e) => setManuOrAuto(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Do you have any additional driving qualifications? Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={drivingqualifications}
                    onChange={(e) => setDrivingQualifications(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Do you have any medical conditions or disabilities that
                      the VID needs to be notified of? Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={disabilities}
                    onChange={(e) => setDisabilities(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>How many years have you held your current licence?</b>
                  </label>
                  <input
                    type="text"
                    value={years_of_licence}
                    onChange={(e) => setYearsOfLicence(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>When do you want cover to commence:</b>
                  </label>
                  <input
                    type="date"
                    value={dateofcommence}
                    onChange={(e) => setDateOfCommence(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you got a full or provisional car driving licence
                    </b>
                  </label>
                  <input
                    type="text"
                    value={provisional}
                    onChange={(e) => setProvisional(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>When was your licence issued? </b>
                  </label>
                  <input
                    type="text"
                    value={licenceissued}
                    onChange={(e) => setLicenceIssued(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Is your licence for manual vehicles or automatic vehicles?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={manual_auto}
                    onChange={(e) => setManualAuto(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>How long have you held this licence?</b>
                  </label>
                  <input
                    type="text"
                    value={periodoflicence}
                    onChange={(e) => setPeriodOfLicence(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you passed any additional driving qualification?{" "}
                    </b>
                    <input
                      type="text"
                      value={passedany}
                      onChange={(e) => setPassedAny(e.target.value)}
                      className="form-control"
                    />{" "}
                  </label>
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has any insurer declined your proposal or required you to
                      specifically carry a portion of any loss or, required an
                      increased premium or imposed special conditions or,
                      refused to renew your policy or cancelled your policy?{" "}
                    </b>
                  </label>
                  <input
                    type="text"
                    value={notinsured}
                    onChange={(e) => setNotInsured(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>If yes to the above, state the reason</b>
                  </label>
                  <input
                    type="text"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Name of previous insurer</b>
                  </label>
                  <input
                    type="text"
                    value={nameofinsurer}
                    onChange={(e) => setNameOfInsurer(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class=" row bg-primary py-2 text-center text-white my-5">
                <small>
                  Would you like to add any additional drivers? Yes/No <br />
                  You can add up to 2 other people on your insurance. <br />
                  If YES to any of the above, give details below
                </small>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your name?</b>
                  </label>
                  <input
                    type="text"
                    value={driver1name}
                    onChange={(e) => setDriver1Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your date of birth?</b>
                  </label>
                  <input
                    type="text"
                    value={driver1birth}
                    onChange={(e) => setDriver1Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your gender</b>
                  </label>
                  <input
                    type="text"
                    value={driver1gender}
                    onChange={(e) => setDriver1Gender(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Is this the main driver of vehicle? YES No </b>
                  </label>
                  <input
                    type="text"
                    value={maindriver}
                    onChange={(e) => setMainDriver(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>National ID/Passport No:</b>
                  </label>
                  <input
                    type="text"
                    value={driver1id}
                    onChange={(e) => setDriver1Id(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Licence type (Full, Provisional) </b>
                  </label>
                  <input
                    type="text"
                    value={driver1licencetype}
                    onChange={(e) => setDriver1LicenceType(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Country of Issue of Licence </b>
                  </label>
                  <input
                    type="text"
                    value={driver1country}
                    onChange={(e) => setDriver1Country(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Date of issue of driving Licence (dd/mm/yyyy) </b>
                  </label>
                  <input
                    type="text"
                    value={driver1licenceissued}
                    onChange={(e) => setDriver1LicenceIssued(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Occupation</b>
                  </label>
                  <input
                    type="text"
                    value={driver1occupation}
                    onChange={(e) => setDriver1Occupation(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Nature of Business </b>
                  </label>
                  <input
                    type="text"
                    value={driver1naturebusiness}
                    onChange={(e) => setDriver1NatureBusiness(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      If you are over 70 years of age, have you had a recent
                      medical and been passed fit to drive?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={driver1passedfit}
                    onChange={(e) => setDriver1PassedFit(e.target.value)}
                    className="form-control"
                  />
                </div>
                <h3>Driver Two details</h3>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your name?</b>
                  </label>
                  <input
                    type="text"
                    value={driver2name}
                    onChange={(e) => setDriver2Name(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your date of birth?</b>
                  </label>
                  <input
                    type="text"
                    value={driver2birth}
                    onChange={(e) => setDriver2Birth(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is your gender</b>
                  </label>
                  <input
                    type="text"
                    value={driver2gender}
                    onChange={(e) => setDriver2Gender(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Is this the main driver of vehicle? YES No </b>
                  </label>
                  <input
                    type="text"
                    value={maindriver2}
                    onChange={(e) => setMainDriver2(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>National ID/Passport No:</b>
                  </label>
                  <input
                    type="text"
                    value={driver2id}
                    onChange={(e) => setDriver2Id(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Licence type (Full, Provisional) </b>
                  </label>
                  <input
                    type="text"
                    value={driver2licencetype}
                    onChange={(e) => setDriver2LicenceType(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Country of Issue of Licence </b>
                  </label>
                  <input
                    type="text"
                    value={driver2country}
                    onChange={(e) => setDriver2Country(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Date of issue of driving Licence (dd/mm/yyyy) </b>
                  </label>
                  <input
                    type="text"
                    value={driver2licenceissued}
                    onChange={(e) => setDriver2LicenceIssued(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Occupation</b>
                  </label>
                  <input
                    type="text"
                    value={driver2occupation}
                    onChange={(e) => setDriver2Occupation(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Nature of Business </b>
                  </label>
                  <input
                    type="text"
                    value={driver2naturebusiness}
                    onChange={(e) => setDriver2NatureBusiness(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>
                      If you are over 70 years of age, have you had a recent
                      medical and been passed fit to drive?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={driver2passedfit}
                    onChange={(e) => setDriver2PassedFit(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you or any of the mentioned drivers had any motor
                      accidents, claims or losses in the past 5 years, no matter
                      who was at fault or if a claim was made.? Yes/No
                      <br />
                      If yes, what was the claim amount?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={claimamount}
                    onChange={(e) => setClaimAmount(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div>
                <small>
                  <i>
                    If you don't tell your insurer about previous incidents or
                    claims, your car insurance may not pay out if you make a
                    claim.
                  </i>
                </small>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you had any driving related convictions,
                      endorsements, penalties, disqualifications or bans in the
                      past 5 years, no matter who was at fault or if a claim was
                      made? Yes/No
                      <br />
                      If yes, please state the conviction
                    </b>
                  </label>
                  <input
                    type="text"
                    value={conviction1}
                    onChange={(e) => setConviction1(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you or has any person who will drive this vehicle
                      been subject to a driving disqualification, charged or
                      convicted of any driving offence during the past (5) five
                      years or is any prosecution pending? Yes/No
                      <br />
                      If yes, please state the conviction
                    </b>
                  </label>
                  <input
                    type="text"
                    value={conviction2}
                    onChange={(e) => setConviction2(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Have you had any legal convictions, the past 10 years?
                      Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={conviction3}
                    onChange={(e) => setConviction3(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has any insurance company refused to meet a claim lodged
                      by you or by any person named as the proposer herein, in
                      respect of motor insurance? Yes/No
                      <br />
                      If 'Yes', please provide details
                    </b>
                  </label>
                  <input
                    type="text"
                    value={refused}
                    onChange={(e) => setRefused(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has any insurance company succeeded in denying a claim
                      lodged by you or any person named as the proposer herein,
                      on the grounds of non-disclosure, misrepresentation and/or
                      fraud, in respect of motor insurance? Yes/No
                      <br />
                      If 'Yes', please provide details
                    </b>
                  </label>
                  <input
                    type="text"
                    value={denyingclaim}
                    onChange={(e) => setDenyingClaim(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Is there any additional information or detail of which you
                      are aware, and which may assist the ECGC to better assess
                      the nature of the risk? Yes/No
                      <br />
                      If 'Yes', please provide details
                    </b>
                  </label>
                  <input
                    type="text"
                    value={betteraccess}
                    onChange={(e) => setBetterAccess(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class=" row bg-primary py-2 text-center text-white my-5">
                <small>
                  Has any insurance company in connection with this class of
                  insurance
                </small>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>declined to accept a proposal from you?</b>
                  </label>
                  <input
                    type="text"
                    value={declinedproposal}
                    onChange={(e) => setDeclinedProposal(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>cancelled a policy, contrary to your wishes? </b>
                  </label>
                  <input
                    type="text"
                    value={cancelled}
                    onChange={(e) => setCancelled(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>declined to renew a policy, contrary to your wishes?</b>
                  </label>
                  <input
                    type="text"
                    value={declinedrenew}
                    onChange={(e) => setDeclinedRenew(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>If 'Yes', please provide details</b>
                  </label>
                  <input
                    type="text"
                    value={providedetails}
                    onChange={(e) => setProvideDetails(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>VEHICLE DETAILS </b>
                </h5>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the registration?</b>
                  </label>
                  <input
                    type="text"
                    value={vehiclereg}
                    onChange={(e) => setVehicleReg(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What make is the car? </b>
                  </label>
                  <input
                    type="text"
                    value={makeofcar}
                    onChange={(e) => setMakeOfCar(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the model?</b>
                  </label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What fuel does it run on?</b>
                  </label>
                  <select
                    value={typeoffuel}
                    onChange={(e) => setTypeOfFuel(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Electric">Electric</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the transmission?</b> a) b)
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the engine size?</b>
                  </label>
                  <input
                    type="text"
                    value={enginesize}
                    onChange={(e) => setEngineSize(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the Chassis Number?</b>
                  </label>
                  <input
                    type="text"
                    value={chassis}
                    onChange={(e) => setChassis(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the Engine capacity?</b>
                  </label>
                  <input
                    type="text"
                    value={enginecapacity}
                    onChange={(e) => setEngineCapacity(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the year of manufacture/registration?</b>
                  </label>
                  <input
                    type="text"
                    value={yearofmanu}
                    onChange={(e) => setYearOfManu(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the trim?</b>
                  </label>
                  <input
                    type="text"
                    value={trim}
                    onChange={(e) => setTrim(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What type of alarm does the car have?</b>
                  </label>
                  <input
                    type="text"
                    value={alarm}
                    onChange={(e) => setAlarm(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Is the car fitted with a tracking device? Yes/No</b>
                  </label>
                  <input
                    type="text"
                    value={tracking}
                    onChange={(e) => setTracking(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Is the car an import? Yes/No</b>
                  </label>
                  <input
                    type="text"
                    value={imports}
                    onChange={(e) => setImport(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Has the vehicle been modiﬁed or converted in anyway?
                      Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={modified}
                    onChange={(e) => setModified(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What is the Value of the car?</b>
                  </label>
                  <input
                    type="text"
                    value={valueofcar}
                    onChange={(e) => setValueOfCar(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>VEHICLE USAGE</b>
                </h5>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>How do you use the car?</b>
                  </label>
                  <select
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Pleasure only">Pleasure only</option>
                    <option value="Pleasure and commuting">
                      Pleasure and commuting
                    </option>
                    <option
                      value="Pleasure, commuting and
                      for business"
                    >
                      Pleasure, commuting and for business
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>How many kilometres does the car do a year?</b>
                  </label>
                  <input
                    type="text"
                    value={kilometers}
                    onChange={(e) => setKilometers(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Where is the car kept during the day?</b>
                  </label>
                  <select
                    value={keptduringday}
                    onChange={(e) => setKeptDuringDay(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="at home">at home</option>
                    <option value="office or factory">office or factory</option>
                    <option value="open in a public car park">
                      open in a public car park
                    </option>
                    <option value="secure public car park">
                      secure public car park
                    </option>
                    <option value="street away from home">
                      street away from home
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Where is the car kept at night?</b>
                  </label>
                  <select
                    value={keptatnight}
                    onChange={(e) => setKeptAtNight(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="locked garage">locked garage</option>
                    <option value="unlocked garage">unlocked garage</option>
                    <option value="Drive">Drive</option>
                    <option value="street outside home">
                      street outside home
                    </option>
                    <option value="street away from home">
                      street away from home
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Do you drive any other cars? e.g. company vehicles,
                      partner’s car etc Yes/No
                    </b>
                  </label>
                  <input
                    type="text"
                    value={othervehicle}
                    onChange={(e) => setOtherVehicle(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>COVER POLICY DETAILS</b>
                </h5>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>What type of cover are you looking for?</b>
                  </label>
                  <select
                    value={coverlookingfor}
                    onChange={(e) => setCoverLookingFor(e.target.value)}
                    className="form-control"
                  >
                    <option value="">Please select...</option>
                    <option value="Comprehensive (Comp)">
                      Comprehensive (Comp)
                    </option>
                    <option value="Full Third-Party Fire & Theft (FTPF&T)">
                      Full Third-Party Fire & Theft (FTPF&T)
                    </option>
                    <option value="Full Third Party (FTP)">
                      Full Third Party (FTP)
                    </option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Who is the main driver of the vehicle?</b>
                  </label>
                  <input
                    type="text"
                    value={maindriverofvehicle}
                    onChange={(e) => setMainDriver(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      How much voluntary excess are you prepared to pay in case
                      of a claim?
                    </b>
                  </label>
                  <input
                    type="text"
                    value={voluntary}
                    onChange={(e) => setVoluntary(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Are you or will you be the registered keeper and legal
                      owner? Yes/No
                    </b>
                  </label>
                  <select
                    value={keeper}
                    onChange={(e) => setKeeper(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      How would you normally pay your cover for your insurance?
                    </b>
                  </label>
                  <select
                    value={normallypay}
                    onChange={(e) => setNormallyPay(e.target.value)}
                    className="form-control"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                    <option value="Quarterly">Quarterly</option>
                  </select>
                </div>
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      On which days within the next 30 days would you like your
                      cover to start?
                    </b>
                  </label>
                  <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      How many years of claims discount do you have? This will
                      be detailed in your latest policy details
                    </b>
                  </label>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div class=" row bg-primary py-2 text-center text-white my-5">
                <small>Optional extras</small>
              </div>
              <div className="form-row my-3">
                <div className="col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Would you like your policy to include legal cover?</b>
                  </label>
                  <select
                    value={legalcover}
                    onChange={(e) => setLegalCover(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Not SUre">Not Sure</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Would like your policy to include personal injury cover?
                    </b>
                  </label>
                  <select
                    value={peronalinjury}
                    onChange={(e) => setPersonalInjury(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Not SUre">Not Sure</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputRC4">
                    <b>Would like your policy to include breakdown cover?</b>
                  </label>
                  <select
                    value={breakdown}
                    onChange={(e) => setBreakdown(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Not SUre">Not Sure</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Would you like your policy to include courtesy car cover?
                    </b>
                  </label>
                  <select
                    value={courtesy}
                    onChange={(e) => setCourtesy(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                    <option value="Not SUre">Not Sure</option>
                  </select>
                </div>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>GENERAL HEALTH QUESTIONS</b>
                </h5>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12">
                  <label htmlFor="inputRC4">
                    <b>
                      Do you suffer from diabetes, epilepsy, heart condition,
                      hearing impairment, defective vision or physical
                      disability, mental disability or disease, which could
                      affect your/their ability to drive?
                    </b>
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="form-control"
                  >
                    <option value="NO">No</option>
                    <option value="Yes">Yes</option>
                  </select>
                </div>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>REASONABLE PRECAUTIONS AND FRAUDULENT ACTS</b>
                </h5>
              </div>
              <div>
                <small>
                  You must take all reasonable precautions for the maintenance
                  and safety of the Insured Property and prevention of loss. We
                  will not be liable for any loss, damage, injury or liability
                  arising from a deliberate or fraudulent act committed by you
                  or on your behalf
                </small>
              </div>
              <div class="form-row my-3">
                <h5>
                  <b>DECLARATION.</b>
                </h5>
              </div>
              <div>
                <small>
                  I warrant
                  <ul>
                    <li>
                      that to the best of my knowledge and belief that all
                      statements and particulars given in this proposal whether
                      in my own hand or not are true and complete in every
                      respect and I have not withheld any material facts.
                    </li>
                    <li>
                      that I agree to give immediate written notice to the
                      Company of any alteration of the risk herein submitted and
                      subject to such notice the payment of each renewal premium
                      shall be considered to have reaffirmed the answers to the
                      questions on the proposal{" "}
                    </li>
                    <li>
                      that this Proposal form shall be the basis of the contract
                      between the Company and myself.{" "}
                    </li>
                    <li>
                      that my insurance shall not be effective until I have paid
                      the premium.
                    </li>
                    <li>
                      that I understand that non-disclosure or misrepresentation
                      of a material fact may entitle the Company to void the
                      Insurance{" "}
                    </li>
                  </ul>
                </small>
              </div>
              <div className="form-row my-3">
                <div className="form-group col-md-12 col-sm-12">
                  <label htmlFor="inputRC4">
                    <b>Signature of Proposer</b>
                  </label>
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

export default MotorProposal;
