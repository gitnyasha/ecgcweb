import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Alert from "react-bootstrap/Alert";
import { backend, uri } from "./api/api";

const AllRiskClaimForm = () => {
  const [name, setName] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [dateofloss, setDateofloss] = React.useState("");
  const [timeofloss, setTimeofloss] = React.useState("");
  const [whenandwhome, setWhenandwhome] = React.useState("");
  const [reportdate, setReportdate] = React.useState("");
  const [reporttime, setReporttime] = React.useState("");
  const [policestation, setPolicestation] = React.useState("");
  const [policereference, setPolicereference] = React.useState("");
  const [reporter, setReporter] = React.useState("");
  const [lossinvestigated, setLossinvestigated] = React.useState("");
  const [owneroftheproperty, setOwneroftheproperty] = React.useState("");
  const [otherinsurances, setOtherinsurances] = React.useState("");
  const [nameofinsurer, setNameofinsurer] = React.useState("");
  const [perils, setPerils] = React.useState("");
  const [perilsinsurer, setPerilsinsurer] = React.useState("");
  const [addressofbuilding, setAddressofbuilding] = React.useState("");
  const [occupied, setOccupied] = React.useState("");
  const [daysofoccupation, setDaysofoccupation] = React.useState("");
  const [entryaffected, setEntryaffected] = React.useState("");
  const [buildingdamagesustained, setBuildingdamagesustained] = React.useState(
    ""
  );
  const [roomsentered, setRoomsentered] = React.useState("");
  const [vehiclenumber, setVehiclenumber] = React.useState("");
  const [parked, setParked] = React.useState("");
  const [locked, setLocked] = React.useState("");
  const [entrygained, setEntrygained] = React.useState("");
  const [vehicledamagesustained, setVehicledamagesustained] = React.useState(
    ""
  );
  const [propertyleft, setPropertyleft] = React.useState("");
  const [possession, setPossession] = React.useState("");
  const [normallykept, setNormallykept] = React.useState("");
  const [premisesaccess, setPremisesaccess] = React.useState("");
  const [suspect, setSuspect] = React.useState("");
  const [contentsofpremise, setContentsofpremise] = React.useState("");
  const [personalbelongs, setPersonalbelongs] = React.useState("");
  const [worn, setWorn] = React.useState("");
  const [awayfromhouse, setAwayfromhouse] = React.useState("");
  const [cellnumber, setCellnumber] = React.useState("");
  const [linecancelled, setLinecancelled] = React.useState("");
  const [imei, setImei] = React.useState("");
  const [simcardinside, setSimcardinside] = React.useState("");
  const [detailsofloss, setDetailsofloss] = React.useState("");
  const [desc1, setDesc1] = React.useState("");
  const [dateandplace1, setDateandplace1] = React.useState("");
  const [pricepaid1, setPricepaid1] = React.useState("");
  const [replacement1, setReplacement1] = React.useState("");
  const [depreciation1, setDepreciation1] = React.useState("");
  const [amountclaimed1, setAmountclaimed1] = React.useState("");
  const [desc2, setDesc2] = React.useState("");
  const [dateandplace2, setDateandplace2] = React.useState("");
  const [pricepaid2, setPricepaid2] = React.useState("");
  const [replacement2, setReplacement2] = React.useState("");
  const [depreciation2, setDepreciation2] = React.useState("");
  const [amountclaimed2, setAmountclaimed2] = React.useState("");
  const [desc3, setDesc3] = React.useState("");
  const [dateandplace3, setDateandplace3] = React.useState("");
  const [pricepaid3, setPricepaid3] = React.useState("");
  const [replacement3, setReplacement3] = React.useState("");
  const [depreciation3, setDepreciation3] = React.useState("");
  const [amountclaimed3, setAmountclaimed3] = React.useState("");
  const [dateofsign, setDateofsign] = React.useState("");
  const [signature, setSignature] = React.useState("");

  const [show, setShow] = React.useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    backend
      .post(
        "/api/all-risk",
        {
          name: name,
          business: business,
          address: address,
          telephone: telephone,
          dateofloss: dateofloss,
          timeofloss: timeofloss,
          whenandwhome: whenandwhome,
          reportdate: reportdate,
          reporttime: reporttime,
          policestation: policestation,
          policereference: policereference,
          reporter: reporter,
          lossinvestigated: lossinvestigated,
          owneroftheproperty: owneroftheproperty,
          otherinsurances: otherinsurances,
          nameofinsurer: nameofinsurer,
          perils: perils,
          perilsinsurer: perilsinsurer,
          addressofbuilding: addressofbuilding,
          occupied: occupied,
          daysofoccupation: daysofoccupation,
          entryaffected: entryaffected,
          buildingdamagesustained: buildingdamagesustained,
          roomsentered: roomsentered,
          vehiclenumber: vehiclenumber,
          parked: parked,
          locked: locked,
          entrygained: entrygained,
          vehicledamagesustained: vehicledamagesustained,
          propertyleft: propertyleft,
          possession: possession,
          normallykept: normallykept,
          premisesaccess: premisesaccess,
          suspect: suspect,
          contentsofpremise: contentsofpremise,
          personalbelongs: personalbelongs,
          worn: worn,
          awayfromhouse: awayfromhouse,
          cellnumber: cellnumber,
          linecancelled: linecancelled,
          imei: imei,
          simcardinside: simcardinside,
          detailsofloss: detailsofloss,
          desc1: desc1,
          dateandplace1: dateandplace1,
          pricepaid1: pricepaid1,
          replacement1: replacement1,
          depreciation1: depreciation1,
          amountclaimed1: amountclaimed1,
          desc2: desc2,
          dateandplace2: dateandplace2,
          pricepaid2: pricepaid2,
          replacement2: replacement2,
          depreciation2: depreciation2,
          amountclaimed2: amountclaimed2,
          desc3: desc3,
          dateandplace3: dateandplace3,
          pricepaid3: pricepaid3,
          replacement3: replacement3,
          depreciation3: depreciation3,
          amountclaimed3: amountclaimed3,
          dateofsign: new Date(),
          signature: signature,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": uri + "/api",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          setShow(true);
          setName("");
          setBusiness("");
          setAddress("");
          setTelephone("");
          setDateofloss("");
          setTimeofloss("");
          setWhenandwhome("");
          setReportdate("");
          setReporttime("");
          setPolicestation("");
          setPolicereference("");
          setReporter("");
          setLossinvestigated("");
          setOwneroftheproperty("");
          setOtherinsurances("");
          setNameofinsurer("");
          setPerils("");
          setPerilsinsurer("");
          setAddressofbuilding("");
          setOccupied("");
          setDaysofoccupation("");
          setEntryaffected("");
          setBuildingdamagesustained("");
          setRoomsentered("");
          setVehiclenumber("");
          setParked("");
          setLocked("");
          setEntrygained("");
          setVehicledamagesustained("");
          setPropertyleft("");
          setPossession("");
          setNormallykept("");
          setPremisesaccess("");
          setSuspect("");
          setContentsofpremise("");
          setPersonalbelongs("");
          setWorn("");
          setAwayfromhouse("");
          setCellnumber("");
          setLinecancelled("");
          setImei("");
          setSimcardinside("");
          setDetailsofloss("");
          setDesc1("");
          setDateandplace1("");
          setPricepaid1("");
          setReplacement1("");
          setDepreciation1("");
          setAmountclaimed1("");
          setDesc2("");
          setDateandplace2("");
          setPricepaid2("");
          setReplacement2("");
          setDepreciation2("");
          setAmountclaimed2("");
          setDesc3("");
          setDateandplace3("");
          setPricepaid3("");
          setReplacement3("");
          setDepreciation3("");
          setAmountclaimed3("");
          setSignature("");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 my-5">
        <h1 className="mt-5 pt-5 text-center">All Risk Claim Form</h1>
        <div className="row my-2">
          <div className="col">
            <form onSubmit={handleSubmitForm}>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Name</label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={50}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPN4">Business</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPN4"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Telephone No. Home</label>
                  <input
                    type="number"
                    value={telephone}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setTelephone(e.target.value)}
                    maxLength={15}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPositon4">Address</label>
                  <input
                    type="text"
                    value={address}
                    className="form-control"
                    id="inputPosition4"
                    onChange={(e) => setAddress(e.target.value)}
                    maxLength={5000}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputNum4">
                    <small>Date of Loss</small>
                  </label>
                  <input
                    type="date"
                    value={dateofloss}
                    className="form-control"
                    id="inputNum4"
                    onChange={(e) => setDateofloss(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputinsolvency4">
                    <small>Time /am/pm</small>
                  </label>
                  <input
                    type="time"
                    name={timeofloss}
                    className="form-control"
                    id="inputinsolvency4"
                    onChange={(e) => setTimeofloss(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputAm4">
                    When and by whom was the loss discovered?
                  </label>
                  <input
                    type="text"
                    value={whenandwhome}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setWhenandwhome(e.target.value)}
                    maxLength={5000}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputLN4">
                    When was the loss reported to the police? Date
                  </label>
                  <input
                    type="date"
                    value={reportdate}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setReportdate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputAm4">Time/am/pm</label>
                  <input
                    type="time"
                    value={reporttime}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setReporttime(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputLN4">Which police station</label>
                  <input
                    type="text"
                    value={policestation}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setPolicestation(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputLN4">Police Ref No</label>
                  <input
                    type="text"
                    value={policereference}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setPolicereference(e.target.value)}
                    maxLength={150}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>
                      Full names of person reporting the loss to the police
                    </small>
                  </label>
                  <input
                    type="text"
                    value={reporter}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setReporter(e.target.value)}
                    maxLength={5000}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPe4">
                    <small>Have the police investigated the loss?</small>
                  </label>
                  <input
                    type="text"
                    value={lossinvestigated}
                    className="form-control"
                    id="inputPe4"
                    onChange={(e) => setLossinvestigated(e.target.value)}
                    maxLength={100}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputName4">
                    <small>
                      Are you the sole owner of the missing or damaged property?
                    </small>
                  </label>
                  <input
                    type="text"
                    value={owneroftheproperty}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setOwneroftheproperty(e.target.value)}
                    maxLength={100}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPo4">
                    <small>
                      Are there any other insurances in force upon the same
                      property?
                    </small>
                  </label>
                  <input
                    type="text"
                    value={otherinsurances}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setOtherinsurances(e.target.value)}
                    maxLength={500}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputSig4">
                    <small>If so please state name of insurer</small>
                  </label>
                  <input
                    type="text"
                    value={nameofinsurer}
                    className="form-control"
                    id="inputSig4"
                    onChange={(e) => setNameofinsurer(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>
                      Have you ever had a previous loss by the perils insured?
                    </small>
                  </label>
                  <input
                    type="text"
                    value={perils}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setPerils(e.target.value)}
                  />
                </div>
              </div>
              <hr />
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>If so please give details and name of insurer</small>
                </label>
                <input
                  type="text"
                  value={perilsinsurer}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setPerilsinsurer(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputPe4">
                  <small>Address of building</small>
                </label>
                <input
                  type="text"
                  value={addressofbuilding}
                  className="form-control"
                  id="inputPe4"
                  onChange={(e) => setAddressofbuilding(e.target.value)}
                  maxLength={500}
                  required
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputName4">
                  <small>Was it occupied at time of loss?</small>
                </label>
                <input
                  type="text"
                  value={occupied}
                  className="form-control"
                  id="inputName4"
                  onChange={(e) => setOccupied(e.target.value)}
                  maxLength={500}
                  required
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputPo4">
                  <small>
                    If unoccupied and a residence, for how many days has it been
                    unoccupied during the current period of insuranc
                  </small>
                </label>
                <input
                  type="number"
                  value={daysofoccupation}
                  className="form-control"
                  id="inputPo4"
                  onChange={(e) => setDaysofoccupation(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputSig4">
                  <small>How was entry effected?</small>
                </label>
                <input
                  type="text"
                  value={entryaffected}
                  className="form-control"
                  id="inputSig4"
                  onChange={(e) => setEntryaffected(e.target.value)}
                  required
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>What damage was sustained to the building?</small>
                </label>
                <input
                  type="text"
                  value={buildingdamagesustained}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setBuildingdamagesustained(e.target.value)}
                  required
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Which rooms were entered?</small>
                </label>
                <input
                  type="text"
                  value={roomsentered}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setRoomsentered(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    State make, type and Registration number of vehicle
                  </small>
                </label>
                <input
                  type="text"
                  value={vehiclenumber}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setVehiclenumber(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Where was it parked at time of theft?</small>
                </label>
                <input
                  type="text"
                  value={parked}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setParked(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    Were the doors and boot locked and windows closed?
                  </small>
                </label>
                <input
                  type="text"
                  value={locked}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setLocked(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>How was entry gained?</small>
                </label>
                <input
                  type="text"
                  value={entrygained}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setEntrygained(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>What damage did the vehicle sustain?</small>
                </label>
                <input
                  type="text"
                  value={vehicledamagesustained}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setVehicledamagesustained(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Where in the vehicle was property left?</small>
                </label>
                <input
                  type="text"
                  value={propertyleft}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setPropertyleft(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>When was the property last in your possession?</small>
                </label>
                <input
                  type="text"
                  value={possession}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setPossession(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Where is the property normally kept?</small>
                </label>
                <input
                  type="text"
                  value={normallykept}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setNormallykept(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    Who, apart from the owner, has access to the premises?
                  </small>
                </label>
                <input
                  type="text"
                  value={premisesaccess}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setPremisesaccess(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Whom do you suspect, if anyone?</small>
                </label>
                <input
                  type="text"
                  value={suspect}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setSuspect(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    What was the value at the time of the loss of: (a) Contents
                    of premises
                  </small>
                </label>
                <input
                  type="text"
                  value={contentsofpremise}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setContentsofpremise(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    (b) Clothing, baggage and personal effects belonging to
                    you/your family
                  </small>
                </label>
                <input
                  type="text"
                  value={personalbelongs}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setPersonalbelongs(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>i) worn</small>
                </label>
                <input
                  type="text"
                  value={worn}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setWorn(e.target.value)}
                />
              </div>

              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>(ii) With you away from the house</small>
                </label>
                <input
                  type="text"
                  value={awayfromhouse}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setAwayfromhouse(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Cell No</small>
                </label>
                <input
                  type="text"
                  value={cellnumber}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setCellnumber(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>IMEI No</small>
                </label>
                <input
                  type="text"
                  value={imei}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setImei(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>Has line been cancelled</small>
                </label>
                <input
                  type="text"
                  value={linecancelled}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setLinecancelled(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    Was sim card in the cell phone at the time of loss
                  </small>
                </label>
                <input
                  type="text"
                  value={simcardinside}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setSimcardinside(e.target.value)}
                />
              </div>
              <div className="form-group my-2 col-md-12">
                <label for="inputDate4">
                  <small>
                    Please give a full descriptiuon of the circumstances of
                    loss:
                  </small>
                </label>
                <input
                  type="text"
                  value={detailsofloss}
                  className="form-control"
                  id="inputDate4"
                  onChange={(e) => setDetailsofloss(e.target.value)}
                  required
                />
              </div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">
                      Description of article (please state serial no’s. or any
                      other identifying marks
                    </th>
                    <th scope="col">Date and Place of purchase</th>
                    <th scope="col">Price Paid</th>
                    <th scope="col">Replacement Price</th>
                    <th scope="col">Deduction for depreciation</th>
                    <th scope="col">Amount Claimed</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={desc1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDesc1(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={dateandplace1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDateandplace1(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={pricepaid1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setPricepaid1(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={replacement1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setReplacement1(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={depreciation1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDepreciation1(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={amountclaimed1}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setAmountclaimed1(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={desc2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDesc2(e.target.value)}
                        maxLength={5000}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={dateandplace2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDateandplace2(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={pricepaid2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setPricepaid2(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={replacement2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setReplacement2(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={depreciation2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDepreciation2(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={amountclaimed2}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setAmountclaimed2(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={desc3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDesc3(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={dateandplace3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDateandplace3(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={pricepaid3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setPricepaid3(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={replacement3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setReplacement3(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={depreciation3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setDepreciation3(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={amountclaimed3}
                        className="form-control"
                        id="inputDate4"
                        onChange={(e) => setAmountclaimed3(e.target.value)}
                        maxLength={20}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Signature/Name of Insured:</label>
                  <input
                    type="text"
                    value={signature}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setSignature(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Alert
          show={show}
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Success!</Alert.Heading>
          <p>Form has been successfully sent.</p>
        </Alert>
      </div>
      <Footer />
    </>
  );
};

export default AllRiskClaimForm;
