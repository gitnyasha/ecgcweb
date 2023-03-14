import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import { backend, uri } from "./api/api";
import Alert from "react-bootstrap/Alert";

const TransitForm = () => {
  const [email, setEmail] = React.useState("");
  const [insuredname, setInsuredName] = React.useState("");
  const [policynumber, setPolicyNumber] = React.useState("");
  const [contactnumber, setcontactnumber] = React.useState("");
  const [position, setposition] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [mobile, setmobile] = React.useState("");
  const [occurencedate, setoccurencedate] = React.useState("");
  const [occurencetime, setoccurencetime] = React.useState("");
  const [occurenceplace, setoccurenceplace] = React.useState("");
  const [detailsofload, setdetailsofload] = React.useState("");
  const [numpackagesofarticles1, setnumpackagesofarticles1] = React.useState(
    ""
  );
  const [tweight1, settweight1] = React.useState("");
  const [tvalue1, settvalue1] = React.useState("");
  const [descofgoodsdamaged, setdescofgoodsdamaged] = React.useState("");
  const [numpackagesofarticles2, setnumpackagesofarticles2] = React.useState(
    ""
  );
  const [tweight2, settweight2] = React.useState("");
  const [tvalue2, settvalue2] = React.useState("");
  const [salvage, setsalvage] = React.useState("");
  const [grossclaim, setgrossclaim] = React.useState("");
  const [lessexcess, setlessexcess] = React.useState("");
  const [netclaim, setnetclaim] = React.useState("");
  const [policestation, setpolicestation] = React.useState("");
  const [timeofreport, setTimeOfReport] = React.useState("");
  const [nonfulfillment, setNonFulFillment] = React.useState("");
  const [ownersinvolved, setownersinvolved] = React.useState("");
  const [setoff, setSetOff] = React.useState("");
  const [witnessess, setwitnessess] = React.useState("");
  const [partcularstaken, setpartcularstaken] = React.useState("");
  const [aretherewitnessess, setaretherewitnessess] = React.useState("");
  const [policereferencenumber, setpolicereferencenumber] = React.useState("");
  const [occurencereported, setoccurencereported] = React.useState("");
  const [policeaddress, setpoliceaddress] = React.useState("");
  const [aretherewarnings, setaretherewarnings] = React.useState("");
  const [consigneesaddress, setconsigneesaddress] = React.useState("");
  const [consignorsaddress, setconsignorsaddress] = React.useState("");
  const [whenwherewho, setwhenwherewho] = React.useState("");
  const [receipt, setreceipt] = React.useState("");
  const [goodspacked, setgoodspacked] = React.useState("");
  const [accordance, setaccordance] = React.useState("");
  const [journey, setjourney] = React.useState("");
  const [actiontaken, setactiontaken] = React.useState("");
  const [deliveryaccepted, setdeliveryaccepted] = React.useState("");
  const [inspected, setinspected] = React.useState("");
  const [recieptloading, setrecieptloading] = React.useState("");
  const [ownerorcarrier, setownerorcarrier] = React.useState("");
  const [contractor, setcontractor] = React.useState("");
  const [subcontractor, setsubcontractor] = React.useState("");
  const [contractoraddress, setcontractoraddress] = React.useState("");
  const [subcontratorpremium, setsubcontratorpremium] = React.useState("");
  const [vehicleregnumber, setvehicleregnumber] = React.useState("");
  const [ownvehicle, setownvehicle] = React.useState("");
  const [ownernameaddress, setownernameaddress] = React.useState("");
  const [involvedinaccident, setinvolvedinaccident] = React.useState("");
  const [brief, setbrief] = React.useState("");
  const [capacity, setcapacity] = React.useState("");
  const [name, setname] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    backend
      .post(
        "/api/transit",
        {
          contractoraddress: contractoraddress,
          subcontratorpremium: subcontratorpremium,
          vehicleregnumber: vehicleregnumber,
          ownvehicle: ownvehicle,
          ownernameaddress: ownernameaddress,
          involvedinaccident: involvedinaccident,
          brief: brief,
          email: email,
          insuredname: insuredname,
          policynumber: policynumber,
          contactnumber: contactnumber,
          position: position,
          phone: phone,
          mobile: mobile,
          occurencedate: occurencedate,
          occurencetime: occurencetime,
          occurenceplace: occurenceplace,
          detailsofload: detailsofload,
          numpackagesofarticles1: numpackagesofarticles1,
          tweight1: tweight1,
          tvalue1: tvalue1,
          descofgoodsdamaged: descofgoodsdamaged,
          numpackagesofarticles2: numpackagesofarticles2,
          tweight2: tweight2,
          tvalue2: tvalue2,
          salvage: salvage,
          grossclaim: grossclaim,
          netclaim: netclaim,
          policestation: policestation,
          nonfulfillment: nonfulfillment,
          ownersinvolved: ownersinvolved,
          setoff: setoff,
          witnessess: witnessess,
          partcularstaken: partcularstaken,
          aretherewitnessess: aretherewitnessess,
          policeaddress: policeaddress,
          aretherewarnings: aretherewarnings,
          consigneesaddress: consigneesaddress,
          consignorsaddress: consignorsaddress,
          whenwherewho: whenwherewho,
          receipt: receipt,
          goodspacked: goodspacked,
          lessexcess: lessexcess,
          policereferencenumber: policereferencenumber,
          accordance: accordance,
          journey: journey,
          actiontaken: actiontaken,
          deliveryaccepted: deliveryaccepted,
          inspected: inspected,
          recieptloading: recieptloading,
          ownerorcarrier: ownerorcarrier,
          contractor: contractor,
          subcontractor: subcontractor,
          capacity: capacity,
          name: name,
          datesigned: new Date(),
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
          setEmail("");
          setInsuredName("");
          setPolicyNumber("");
          setcontactnumber("");
          setposition("");
          setphone("");
          setmobile("");
          setoccurencedate("");
          setoccurencetime("");
          setoccurenceplace("");
          setdetailsofload("");
          setnumpackagesofarticles1("");
          settweight1("");
          settvalue1("");
          setdescofgoodsdamaged("");
          setnumpackagesofarticles2("");
          settweight2("");
          settvalue2("");
          setsalvage("");
          setgrossclaim("");
          setlessexcess("");
          setnetclaim("");
          setpolicestation("");
          setTimeOfReport("");
          setNonFulFillment("");
          setownersinvolved("");
          setSetOff("");
          setwitnessess("");
          setpartcularstaken("");
          setaretherewitnessess("");
          setpolicereferencenumber("");
          setoccurencereported("");
          setpoliceaddress("");
          setaretherewarnings("");
          setconsigneesaddress("");
          setconsignorsaddress("");
          setwhenwherewho("");
          setreceipt("");
          setgoodspacked("");
          setaccordance("");
          setjourney("");
          setactiontaken("");
          setdeliveryaccepted("");
          setinspected("");
          setrecieptloading("");
          setownerorcarrier("");
          setcontractor("");
          setsubcontractor("");
          setcontractoraddress("");
          setsubcontratorpremium("");
          setvehicleregnumber("");
          setownvehicle("");
          setownernameaddress("");
          setinvolvedinaccident("");
          setbrief("");
          setcapacity("");
          setname("");
        }
      });
  };
  return (
    <>
      <Navbar />
      <div className="container py-5 my-5">
        <h1 className="mt-5 pt-5 text-center">Goods In Transit Form</h1>
        <div className="row my-2">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <small>(TO BE COMPLETED AND SIGNED BY CLAIMANT)</small>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputRC4">Insured Name:</label>
                  <input
                    type="text"
                    value={insuredname}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setInsuredName(e.target.value)}
                    maxLength={50}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPN4">Policy Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPN4"
                    value={policynumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                    maxLength={25}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputRC4">Contact Number</label>
                  <input
                    type="number"
                    value={contactnumber}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setcontactnumber(e.target.value)}
                    maxLength={15}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPositon4">Insured Address:</label>
                  <input
                    type="text"
                    value={position}
                    className="form-control"
                    id="inputPosition4"
                    onChange={(e) => setposition(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNum4">Agent Name & Number</label>
                  <input
                    type="text"
                    value={phone}
                    className="form-control"
                    id="inputNum4"
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputMobile4">Agent reference</label>
                  <input
                    type="text"
                    value={mobile}
                    className="form-control"
                    id="inputMobile4"
                    onChange={(e) => setmobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12 col-sm-12">
                  <label for="inputFullNames">Date</label>
                  <input
                    type="date"
                    value={occurencedate}
                    className="form-control"
                    id="inputFullNames"
                    onChange={(e) => setoccurencedate(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-2 col-sm-12 col-sm-12">
                  <label for="inputNID2">Time</label>
                  <input
                    type="time"
                    value={occurencetime}
                    className="form-control"
                    id="inputNID2"
                    onChange={(e) => setoccurencetime(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-2 col-sm-12 col-sm-12">
                  <label for="inputCD2">Place</label>
                  <input
                    type="text"
                    value={occurenceplace}
                    className="form-control"
                    id="inputCD2"
                    onChange={(e) => setoccurenceplace(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="exampleFormControlTextarea1">
                    Details of Load:
                  </label>
                  <textarea
                    value={detailsofload}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setdetailsofload(e.target.value)}
                    maxLength={5000}
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputAm4">Number of Packages or Articles</label>
                  <input
                    type="number"
                    value={numpackagesofarticles1}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setnumpackagesofarticles1(e.target.value)}
                    maxLength={50}
                    required
                  />
                </div>

                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputLN4">Total Weight</label>
                  <input
                    type="number"
                    value={tweight1}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => settweight1(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputLN4">Total Value</label>
                  <input
                    type="number"
                    value={tvalue1}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => settvalue1(e.target.value)}
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="my-3">
                DETAILS OF MERCHANDISE AND GOODS LOST OR DAMAGED
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea
                    value={descofgoodsdamaged}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    onChange={(e) => setdescofgoodsdamaged(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputAm4">Number of Packages or Articles</label>
                  <input
                    type="number"
                    value={numpackagesofarticles2}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setnumpackagesofarticles2(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputLN4">Total Weight</label>
                  <input
                    type="number"
                    value={tweight2}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => settweight2(e.target.value)}
                    maxLength={20}
                  />
                </div>

                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputLN4">Total Value</label>
                  <input
                    type="number"
                    value={tvalue2}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => settvalue2(e.target.value)}
                    maxLength={20}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputPe4">Salvage (if any)</label>
                  <input
                    type="text"
                    value={salvage}
                    className="form-control"
                    id="inputPe4"
                    onChange={(e) => setsalvage(e.target.value)}
                    maxLength={50}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputAm4">Gross amount of claim</label>
                  <input
                    type="number"
                    value={grossclaim}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setgrossclaim(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 col-sm-12">
                  <label for="inputLN4">
                    Less Excess under policy (if any)
                  </label>
                  <input
                    type="number"
                    value={lessexcess}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setlessexcess(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 col-sm-12">
                  <label for="inputLN4">Net amount of claim</label>
                  <input
                    type="number"
                    value={netclaim}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setnetclaim(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-3">
                WHERE AVAILABLE THE FOLLOWING SHOULD BE ATTACHED TO THIS CLAIM
                FORM:
              </div>
              <small>Invoice or Account in respect of Loss or Damage</small>
              <ul>
                <li>
                  <small>
                    True copy of Receipt given for the merchandise and goods
                    after loading
                  </small>
                </li>
                <li>
                  <small>
                    Signed Delivery Note obtained when delivering the
                    merchandise and goods
                  </small>
                </li>
                <li>
                  <small>Any other Documents or Correspondence received</small>
                </li>
              </ul>
              <div className="card-header my-3">
                IF LOSS IS DUE TO THEFT, PILFERAGE OR SHORT DELIVERY, STATE:
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputName4">
                    Name and address of Police Station to which is was reported:
                  </label>
                  <input
                    type="text"
                    value={policestation}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setpolicestation(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPo4">
                    Date and time of making such a report
                  </label>
                  <input
                    type="text"
                    value={timeofreport}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setTimeOfReport(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputSig4">
                    Names and addresses of owners of any other vehicles involved
                  </label>
                  <input
                    type="text"
                    value={ownersinvolved}
                    className="form-control"
                    id="inputSig4"
                    onChange={(e) => setownersinvolved(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    Names and addresses of any witnesses
                  </label>
                  <input
                    type="text"
                    value={witnessess}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setwitnessess(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group my-2 col-md-12 col-sm-12">
                <label for="inputBuyer">
                  <small>
                    Were particulars taken by a Police Officer at the scene?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="partcularstaken1"
                    value="yes"
                    onChange={(e) => setpartcularstaken(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="partcularstaken1"
                    value="no"
                    onChange={(e) => setpartcularstaken(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>
              <div className="form-group my-2 col-md-12 col-sm-12">
                <label for="inputNID2">
                  <small>Were there any witness?</small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="aretherewitnessess1"
                    name="aretherewitnessess1"
                    value="yes"
                    onChange={(e) => setaretherewitnessess(e.target.value)}
                  />
                  <label class="form-check-label" for="inso1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="aretherewitnessess2"
                    name="aretherewitnessess1"
                    value="no"
                    onChange={(e) => setaretherewitnessess(e.target.value)}
                    checked
                  />
                  <label class="form-check-label" for="aretherewitnessess2">
                    No
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputSig4">If YES, give Reference Number:</label>
                  <input
                    type="text"
                    value={policereferencenumber}
                    className="form-control"
                    id="inputSig4"
                    onChange={(e) => setpolicereferencenumber(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    If NO, where & when was the occurrence reported?
                  </label>
                  <input
                    type="text"
                    value={occurencereported}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setoccurencereported(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">Address of the Police Station:</label>
                  <input
                    type="text"
                    value={policeaddress}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setpoliceaddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group my-2 col-md-12 col-sm-12">
                <label for="inputNID2">
                  <small>
                    Was any warning given by the Police that you, your driver or
                    any other person might be prosecuted?
                  </small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="aretherewarnings1"
                    name="aretherewarnings1"
                    value="yes"
                    onChange={(e) => setaretherewarnings(e.target.value)}
                  />
                  <label class="form-check-label" for="aretherewarnings1">
                    Yes
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="aretherewarnings2"
                    name="aretherewarnings1"
                    value="no"
                    onChange={(e) => setaretherewarnings(e.target.value)}
                    checked
                  />
                  <label class="form-check-label" for="aretherewarnings2">
                    No
                  </label>
                </div>
              </div>
              <div className="card-header my-3">
                DETAIL OF CONSIGNORS / CONSIGNEES
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputName4">
                    Name and Address of Consignors:
                  </label>
                  <input
                    type="text"
                    value={consignorsaddress}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setconsignorsaddress(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPo4">Address of Consignees:</label>
                  <input
                    type="text"
                    value={consigneesaddress}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setconsigneesaddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="card-header my-3">
                CIRCUMSTANCES OF LOSS OR DAMAGE
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-sm-12">
                  <label for="inputName4">
                    When, Where and Who loaded the goods into the vehicle and
                    did driver count or check the consignment?
                  </label>
                  <input
                    type="text"
                    value={whenwherewho}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setwhenwherewho(e.target.value)}
                  />
                </div>

                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    How were the goods packed, stowed and sheeted?
                  </label>
                  <input
                    type="text"
                    value={goodspacked}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setgoodspacked(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group my-2 col-md-12 col-sm-12">
                <label for="inputBuyer">
                  <small>Were above done in accordance Trade Custom?</small>
                </label>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="accordance1"
                    value="yes"
                    onChange={(e) => setaccordance(e.target.value)}
                  />
                  <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="accordance1"
                    value="no"
                    onChange={(e) => setaccordance(e.target.value)}
                    checked
                  />
                  <label class="form-check-label">No</label>
                </div>
              </div>

              <div className="form-group my-2 col-md-12">
                <label for="exampleFormControlTextarea1">
                  Give full details of the journey from the time of loading
                  until the happening of the loss or damage and describe the
                  event giving rise to the loss or damage:
                </label>
                <textarea
                  className="form-control"
                  value={journey}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={(e) => setjourney(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group my-2 col-md-12">
                <label for="exampleFormControlTextarea2">
                  What action did the driver take immediately after the
                  happening of the loss or damage?
                </label>
                <textarea
                  className="form-control"
                  value={actiontaken}
                  id="exampleFormControlTextarea12"
                  rows="3"
                  onChange={(e) => setactiontaken(e.target.value)}
                ></textarea>
              </div>

              <div className="form-row">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNID2">
                    <small>Have Consignees accepted Delivery?</small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="setdeliveryaccepted"
                      value="yes"
                      onChange={(e) => setdeliveryaccepted(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="setdeliveryaccepted"
                      value="no"
                      onChange={(e) => setdeliveryaccepted(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputName4">
                    Where can the goods be inspected?
                  </label>
                  <input
                    type="text"
                    value={inspected}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setinspected(e.target.value)}
                  />
                </div>
                {/* <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    What receipt was given at time of loading?
                  </label>
                  <input
                    type="text"
                    value={recieptloading}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setrecieptloading(e.target.value)}
                  />
                </div> */}
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    Are you the Owner or Carrier of the Goods?
                  </label>
                  <input
                    type="text"
                    value={ownerorcarrier}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setownerorcarrier(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    Was this load carried by you as Principal Contractor,
                    Sub-contrator or Any Sub-Contractor employed by you
                  </label>
                  <input
                    type="text"
                    value={contractor}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setcontractor(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNID2">
                    <small>
                      If Sub-Contractor, were you charged premium for insurance
                      of this load?
                    </small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="subcontrator1"
                      value="yes"
                      onChange={(e) => setsubcontractor(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="subcontrator1"
                      value="no"
                      onChange={(e) => setsubcontractor(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    Any Sub-Contractor employed by you, state Name and Address
                    of Sub-Contractor
                  </label>
                  <input
                    type="text"
                    value={contractoraddress}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setcontractoraddress(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNID2">
                    <small>
                      Did you charge the Sub-Contractor premium for insurance
                      for this load?
                    </small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="subcontratorpremium1"
                      value="yes"
                      onChange={(e) => setsubcontratorpremium(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="subcontratorpremium1"
                      value="no"
                      onChange={(e) => setsubcontratorpremium(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>

                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    Give Registered Letters and Number of vehicle on which the
                    goods were being carried
                  </label>
                  <input
                    type="text"
                    value={vehicleregnumber}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setvehicleregnumber(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNID2">
                    <small>Do you own the vehicle?</small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="setownvehicle1"
                      value="yes"
                      onChange={(e) => setownvehicle(e.target.value)}
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="setownvehicle1"
                      value="no"
                      onChange={(e) => setownvehicle(e.target.value)}
                      checked
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>

                <div className="form-group my-2 col-sm-12">
                  <label for="inputPo4">
                    If not, state Name and Address of Owner:
                  </label>
                  <input
                    type="text"
                    value={ownernameaddress}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setownernameaddress(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputNID2">
                    <small>
                      Has the driver, to your knowledge been involved in any
                      other accidents?
                    </small>
                  </label>
                  <input
                    className="form-check-input"
                    type="text"
                    value={involvedinaccident}
                    id="involvedinaccident1"
                    placeholder="option1"
                    onChange={(e) => setinvolvedinaccident(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group my-2 col-sm-12">
                <label for="inputPo4">If YES, give brief details.</label>
                <input
                  type="text"
                  value={brief}
                  className="form-control"
                  id="inputPo4"
                  onChange={(e) => setbrief(e.target.value)}
                />
              </div>
              <small>
                I/we warrant and declare that the netclaim given above are true
                in every respect and that I/we have not withheld any information
                whatsoever in connection with the claim.
              </small>
              <div className="row my-3">
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPo4">NAME / SIGNATURE</label>
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12 col-sm-12">
                  <label for="inputPo4">CAPACITY</label>
                  <input
                    type="text"
                    value={capacity}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setcapacity(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group my-2">
                <small>
                  This form should be completed fully without delay and
                  forwarded to the Company at one of the above addresses or your
                  broker / agent. The company does not admit liability by the
                  issue of this form.
                </small>
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
export default TransitForm;
