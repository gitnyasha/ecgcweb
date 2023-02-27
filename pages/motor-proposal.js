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
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
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
        <option value="other">Other</option>
      </select>
    </div>
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
      <label htmlFor="inputIDNumber">
        <b>What is your ID number?</b>
      </label>
      <input
        type="text"
        value={idnumber}
        onChange={(e) => setIdNumber(e.target.value)}
        className="form-control"
        id="inputIDNumber"
      />
    </div>
    <div className="form-group col-md-6 col-sm-12">
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
  </div>

  <div className="form-row my-3">
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
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

                          <div className="form-group col-md-6 col-sm-12">
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
  <div className="form-row my-3">
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
      <label htmlFor="inputRC4">
        <b>What do you do? Employed / Self-employed / Retired / Student / Not in paid work right now</b>
      </label>
      <input
        type="text"
        value={occupation}
        onChange={(e) => setOccupation(e.target.value)}
        className="form-control"
      />
    </div>
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-6 col-sm-12">
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
    <div className="form-group col-md-4 col-sm-12">
      <label htmlFor="inputRC4">
        <b>How many cars do you own?</b>
                                  </label>
                              <input
        type="text"
        value={numberofcars}
        onChange={(e) => setNumberOfCars(e.target.value)}
        className="form-control"
      /> </div>
            <div className="form-group col-md-4 col-sm-12">
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
            <div className="form-group col-md-4 col-sm-12">
                <label style="font-size: 13px">
                    <b>What is licence do you have? Full/Provisional </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ typeoflicence }}</div>
            </div>
        </div>

        <div style="height: 80px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Which cars are you licenced to drive?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ todrive }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Manual and automatic/Automatic only</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ manuoratuo }}</div>
            </div>
        </div>

        <div style="height: 80px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Do you have any additional driving qualifications? Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ drivingqualifications }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Do you have any medical conditions or disabilities that the VID needs to be notified of?
                        Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ disabilities }}</div>
            </div>
        </div>

        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>How many years have you held your current licence?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ years_of_licence }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>When do you want cover to commence:</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ dateofcommence }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you got a full or provisional car driving licence</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ provisional }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>When was your licence issued? </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ licenceissued }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Is your licence for manual vehicles or automatic vehicles?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ manual_auto }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>How long have you held this licence?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ periodoflicence }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you passed any additional driving qualification? </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ passedany }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Has any insurer declined your proposal or required you to specifically carry a portion of any
                        loss or, required an increased premium or imposed special conditions or, refused to renew your
                        policy or cancelled your policy? </b>
                </label>
                <div class="form-control" style="width: 92%; height: 50px">{{ notinsured }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>If yes to the above, state the reason</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ reason }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Name of previous insurer</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ nameofinsurer }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-2 text-center text-white my-5" style="margin: 10px auto">
            <small>Would you like to add any additional drivers? Yes/No <br>
                You can add up to 2 other people on your insurance. <br>

                If YES to any of the above, give details below
            </small>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your first name?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1name }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your date of birth?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1birth }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your gender</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1gender }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Is this the main driver of vehicle? YES No </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ maindriver }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>National ID/Passport No:</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1id }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Licence type (Full, Provisional) </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1licencetype }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Country of Issue of Licence </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1country }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Date of issue of driving Licence (dd/mm/yyyy) </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1licenceissued }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Occupation</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1occupation }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Nature of Business </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1naturebusiness }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>If you are over 70 years of age, have you had a recent medical and been passed fit to drive?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver1passedfit }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your first name?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2name }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your date of birth?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2birth }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is your gender</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2gender }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Is this the main driver of vehicle? YES No </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ maindriver2 }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>National ID/Passport No:</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2id }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Licence type (Full, Provisional) </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2licencetype }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Country of Issue of Licence </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2country }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Date of issue of driving Licence (dd/mm/yyyy) </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2licenceissued }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Occupation</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2occupation }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Nature of Business </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2naturebusiness }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>If you are over 70 years of age, have you had a recent medical and been passed fit to drive?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ driver2passedfit }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you or any of the mentioned drivers had any motor accidents, claims or losses in the past 5
                        years, no matter who was at fault or if a claim was made.? Yes/No<br>If yes, what was the claim
                        amount?
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ claimamount }}</div>
            </div>
        </div>
        <div>
            <small>
                <i>If you don't tell your insurer about previous incidents or claims, your car insurance may not pay out
                    if you make a claim.</i>
            </small>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you had any driving related convictions, endorsements, penalties, disqualifications or bans
                        in the past 5 years, no matter who was at fault or if a claim was made? Yes/No
                        <br>If yes, please state the conviction
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ conviction1 }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you or has any person who will drive this vehicle been subject to a driving
                        disqualification, charged or convicted of any driving offence during the past (5) five years or
                        is any prosecution pending? Yes/No
                        <br>If yes, please state the conviction
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ conviction2 }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Have you had any legal convictions, the past 10 years? Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ conviction3 }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Has any insurance company refused to meet a claim lodged by you or by any person named as the
                        proposer herein, in respect of motor insurance? Yes/No
                        <br>If 'Yes', please provide details
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ refused }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Has any insurance company succeeded in denying a claim lodged by you or any person named as the
                        proposer herein, on the grounds of non-disclosure, misrepresentation and/or fraud, in respect of
                        motor insurance? Yes/No

                        <br>If 'Yes', please provide details

                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ denyingclaim }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>Is there any additional information or detail of which you are aware, and which may assist the
                        ECGC to better assess the nature of the risk? Yes/No
                        <br>If 'Yes', please provide details
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ betteraccess }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-2 text-center text-white my-5" style="margin: 10px auto">
            <small>Has any insurance company in connection with this class of insurance</small>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>declined to accept a proposal from you?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ declinedproposal }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>cancelled a policy, contrary to your wishes? </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ cancelled }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>declined to renew a policy, contrary to your wishes?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ declinedrenew }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>If 'Yes', please provide details
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 50px">{{ providedetails }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>VEHICLE DETAILS </b>
            </h5>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the registration?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ vehiclereg }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What make is the car? </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ makeofcar }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the model?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ model }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What fuel does it run on?</b> a) Electric b) Petrol c) Diesel
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ typeoffuel }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the transmission?</b> a) Automatic b) Manual
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ transmission }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the engine size?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ enginesize }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the Chassis Number?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ chassis }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the Engine capacity?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ enginecapacity }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the year of manufacture/registration?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ yearofmanu }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the trim?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ trim }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What type of alarm does the car have?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ alarm }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Is the car fitted with a tracking device? Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ tracking }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Is the car an import? Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ import }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Has the vehicle been modiﬁed or converted in anyway? Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ modified }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>What is the Value of the car?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ valueofcar }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>VEHICLE USAGE</b>
            </h5>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>How do you use the car? – a) Pleasure only b) Pleasure and commuting c) Pleasure, commuting and
                        for business
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ usage }}</div>
            </div>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>How many kilometres does the car do a year?
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ kilometers }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Where is the car kept during the day?</b>
                    <ul>
                        <li> at home</li>
                        <li> office or factory</li>
                        <li> open in a public car park</li>
                        <li>secure public car park.</li>
                        <li>street away from home</li>

                    </ul>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ keptduringday }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Where is the car kept at night?</b>
                    <ul>
                        <li>locked garage</li>
                        <li>unlocked garage</li>
                        <li>Drive </li>
                        <li>street outside home</li>
                        <li>street away from home</li>
                        <li>other
                        </li>
                    </ul>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ keptatnight }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Do you drive any other cars? e.g. company vehicles, partner’s car etc Yes/No</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ othervehicle }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>COVER POLICY DETAILS</b>
            </h5>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b> What type of cover are you looking for? (tick appropriate)
                        o Comprehensive (Comp)
                        o Full Third-Party Fire & Theft (FTPF&T)
                        o Full Third Party (FTP)
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ coverlookingfor }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>Who is the main driver of the vehicle?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ maindriverofvehicle }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>How much voluntary excess are you prepared to pay in case of a claim?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ voluntary }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>
                        Are you or will you be the registered keeper and legal owner? Yes/No
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ keeper }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>How would you normally pay your cover for your insurance? Monthly/Annually/Quarterly</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ normallypay }}</div>
            </div>
            <div style="float: left; width: 33.3333333%;">
                <label style="font-size: 13px">
                    <b>On which days within the next 30 days would you like your cover to start?</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ days }}</div>
            </div>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b>
                        How many years of claims discount do you have? This will be detailed in your latest policy
                        details
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ discount }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-2 text-center text-white my-5" style="margin: 10px auto">
            <small>Optional extras</small>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 25%;">
                <label style="font-size: 13px">
                    <b>
                        Would you like your policy to include legal cover? Yes/No/Not sure
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ legalcover }}</div>
            </div>
            <div style="float: left; width: 25%;">
                <label style="font-size: 13px">
                    <b>Would like your policy to include personal injury cover? Yes/No/Not sure</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ peronalinjury }}</div>
            </div>
            <div style="float: left; width: 25%;">
                <label style="font-size: 13px">
                    <b>Would like your policy to include breakdown cover? Yes/No/Not sure</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ breakdown }}</div>
            </div>
            <div style="float: left; width: 25%;">
                <label style="font-size: 13px">
                    <b>Would you like your policy to include courtesy car cover? Yes/No/Not sure</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ courtesy }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>GENERAL HEALTH QUESTIONS</b>
            </h5>
        </div>
        <div style="height: 80px;">
            <div style="float: left; width: 100%;">
                <label style="font-size: 13px">
                    <b> Do you suffer from diabetes, epilepsy, heart condition, hearing impairment, defective vision or
                        physical disability, mental disability or disease, which could affect your/their ability to
                        drive? Yes/No
                    </b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ condition }}</div>
            </div>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>REASONABLE PRECAUTIONS AND FRAUDULENT ACTS</b>
            </h5>
        </div>
        <div>
            <small>
                You must take all reasonable precautions for the maintenance and safety of the Insured Property and
                prevention of loss. We will not be liable for any loss, damage, injury or liability arising from a
                deliberate or fraudulent act committed by you or on your behalf
            </small>
        </div>
        <div class=" row bg-primary py-1 text-center text-white my-5" style="margin: 10px auto">
            <h5 style="font-size: 15px">
                <b>DECLARATION.</b>
            </h5>
        </div>
        <div>
            <small>
                I warrant
                <ul>
                    <li>that to the best of my knowledge and belief that all statements and particulars given in this
                        proposal whether in my own hand or not are true and complete in every respect and I have not
                        withheld any material facts.</li>
                    <li>that I agree to give immediate written notice to the Company of any alteration of the risk
                        herein submitted and subject to such notice the payment of each renewal premium shall be
                        considered to have reaffirmed the answers to the questions on the proposal </li>
                    <li>that this Proposal form shall be the basis of the contract between the Company and myself. </li>
                    <li>that my insurance shall not be effective until I have paid the premium.</li>
                    <li>that I understand that non-disclosure or misrepresentation of a material fact may entitle the
                        Company to void the Insurance </li>
                </ul>
            </small>
        </div>
        <div style="height: 80px; margin-top: 20px;">
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Signature of Proposer</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">{{ signature }}</div>
            </div>
            <div style="float: left; width: 50%;">
                <label style="font-size: 13px">
                    <b>Date</b>
                </label>
                <div class="form-control" style="width: 92%; height: 30px">
                    {{ date('F d Y', strtotime($data->signeddate)) }}</div>
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
