import React from "react";
import Footer from "../components/_App/Footer";
import Navbar from "../components/_App/Navbar";
import Alert from "react-bootstrap/Alert";
import { backend, uri } from "./api/api";

const ExportPaymentInsuaranceForm = () => {
  const [email, setEmail] = React.useState("");
  const [clientname, setClientName] = React.useState("");
  const [policynumber, setPolicyNumber] = React.useState("");
  const [maximumliability, setMaximumLiability] = React.useState("");
  const [physicaladdress, setPhysicalAddress] = React.useState("");
  const [extenof, setExtendOf] = React.useState("");
  const [amountnow, setAmountNow] = React.useState("");
  const [insolvency, setInsolvency] = React.useState("");
  const [failureRadios, setFailureRadios] = React.useState("");
  const [date1, setDate1] = React.useState("");
  const [termsofpayment, setTermsofpayment] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [effectivedate, setEffectiveDate] = React.useState("");
  const [dateOfsales1, setDateOfSales1] = React.useState("");
  const [itemsold1, setItemSold1] = React.useState("");
  const [grossinvoice1, setGrossInvoice1] = React.useState("");
  const [termsofpayment1, setTermsofpayment1] = React.useState("");
  const [duedate1, setDueDate1] = React.useState("");
  const [datedeclared1, setDateDeclared1] = React.useState("");
  const [overdues, setOverdues] = React.useState("");
  const [declaration, setDeclaration] = React.useState("");
  const [particulars, setParticulars] = React.useState("");
  const [payreceive, setPayReceive] = React.useState("");
  const [nonfulfillment, setNonFulFillment] = React.useState("");
  const [proceedsresale, setProceedsResale] = React.useState("");
  const [setoff, setSetOff] = React.useState("");
  const [lesstotal, setLessTotal] = React.useState("");
  const [expenses, setExpenses] = React.useState("");
  const [netamountloss, setNetAmountLoss] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [check1, setCheck1] = React.useState("");
  const [check2, setCheck2] = React.useState("");
  const [check3, setCheck3] = React.useState("");
  const [check4, setCheck4] = React.useState("");
  const [check5, setCheck5] = React.useState("");
  const [check6, setCheck6] = React.useState("");
  const [check7, setCheck7] = React.useState("");
  const [show, setShow] = React.useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    backend
      .post(
        "/api/export-payment",
        {
          email: email,
          clientname: clientname,
          policynumber: policynumber,
          maximumliability: maximumliability,
          physicaladdress: physicaladdress,
          extenof: extenof,
          amountnow: amountnow,
          insolvency: insolvency,
          failureradios: failureRadios,
          date1: date1,
          termsofpayment: termsofpayment,
          amount: amount,
          effectivedate: effectivedate,
          dateofsales1: dateOfsales1,
          itemsold1: itemsold1,
          grossinvoice1: grossinvoice1,
          termsofpayment1: termsofpayment1,
          duedate1: duedate1,
          datedeclared1: datedeclared1,
          overdues: overdues,
          declaration: particulars,
          payreceive: payreceive,
          nonfulfillment: nonfulfillment,
          proceedsresale: proceedsresale,
          setoff: setoff,
          lessTotal: lesstotal,
          expenses: expenses,
          netamountloss: netamountloss,
          check1: check1,
          check2: check2,
          check3: check3,
          check4: check4,
          check5: check5,
          check6: check6,
          check7: check7,
          signdate: new Date(),
          place: place,
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
          setClientName("");
          setPolicyNumber("");
          setMaximumLiability("");
          setPhysicalAddress("");
          setExtendOf("");
          setAmountNow("");
          setInsolvency("");
          setFailureRadios("");
          setDate1("");
          setTermsofpayment("");
          setAmount("");
          setEffectiveDate("");
          setDateOfSales1("");
          setItemSold1("");
          setGrossInvoice1("");
          setTermsofpayment1("");
          setDueDate1("");
          setDateDeclared1("");
          setOverdues("");
          setDeclaration("");
          setParticulars("");
          setPayReceive("");
          setNonFulFillment("");
          setProceedsResale("");
          setSetOff("");
          setLessTotal("");
          setExpenses("");
          setNetAmountLoss("");
          setPlace("");
          setCheck1("");
          setCheck2("");
          setCheck3("");
          setCheck4("");
          setCheck5("");
          setCheck6("");
          setCheck7("");
          setPlace("");
        }
      });
  };

  return (
    <>
      <Navbar />
      <div className="container py-5 my-5">
        <h1 className="mt-5 pt-5 text-center">
          Export Payment Insuarance Form
        </h1>
        <div className="row my-2">
          <div className="col">
            <form onSubmit={handleSubmitForm}>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Name of Client</label>
                  <input
                    type="text"
                    value={clientname}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPN4">Policy Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPN4"
                    value={policynumber}
                    onChange={(e) => setPolicyNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Maximum Liability</label>
                  <input
                    type="text"
                    value={maximumliability}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setMaximumLiability(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPositon4">Physical Address</label>
                  <input
                    type="text"
                    value={physicaladdress}
                    className="form-control"
                    id="inputPosition4"
                    onChange={(e) => setPhysicalAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputNum4">
                    <small>
                      We declare that the under-mentioned buyer is indebted to
                      us to the extent of US$
                    </small>
                  </label>
                  <input
                    type="number"
                    value={extenof}
                    className="form-control"
                    id="inputNum4"
                    onChange={(e) => setExtendOf(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputinsolvency4">
                    <small>
                      Amount now, for months overdue and we hereby claim the
                      amount in terms of the captioned Domestic Payment
                      Insurance Policy.
                    </small>
                  </label>
                  <input
                    type="number"
                    name={amountnow}
                    className="form-control"
                    id="inputinsolvency4"
                    onChange={(e) => setAmountNow(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header my-3">
                1. EVENTS WHICH IS THE CAUSE OF LOSS (PLEASE SELECT AGAINST THE
                APPROPRIATE ITEM)
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputBuyer">
                    <small>Insolvency of buyer</small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inso1"
                      name="insolvency"
                      value="yes"
                      onChange={(e) => setInsolvency(e.target.value)}
                    />
                    <label class="form-check-label" for="inso1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="inso2"
                      name="insolvency"
                      value="no"
                      onChange={(e) => setInsolvency(e.target.value)}
                      checked
                    />
                    <label class="form-check-label" for="inso2">
                      No
                    </label>
                  </div>
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputNID2">
                    <small>Failure of buyer to pay for accepted goods:</small>
                  </label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="exampleRadios1"
                      name="failure"
                      value="yes"
                      onChange={(e) => setFailureRadios(e.target.value)}
                    />
                    <label class="form-check-label" for="exampleRadios1">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      id="exampleRadios2"
                      name="failure"
                      value="no"
                      onChange={(e) => setFailureRadios(e.target.value)}
                      checked
                    />
                    <label class="form-check-label" for="exampleRadios2">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="card-header my-3">
                2 PARTICULARS OF CREDIT LIMIT APPROVED BY THE CORPORATION ON THE
                BUYER
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputAm4">Date</label>
                  <input
                    type="date"
                    value={date1}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setDate1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputLN4">Amount $</label>
                  <input
                    type="number"
                    value={amount}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputAm4">Terms of Payment</label>
                  <input
                    type="text"
                    value={termsofpayment}
                    className="form-control"
                    id="inputAm4"
                    onChange={(e) => setTermsofpayment(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputLN4">Effective Date</label>
                  <input
                    type="date"
                    value={effectivedate}
                    className="form-control"
                    id="inputLN4"
                    onChange={(e) => setEffectiveDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-header my-3">
                3 PARTICULARS OF SALE(S) FOR WHICH PAYMENT(S) IS OVERDUE AND
                WHICH FORM THE SUBJECT OF THIS CLAIM
              </div>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>Date Of Sales</small>
                  </label>
                  <input
                    type="date"
                    value={dateOfsales1}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setDateOfSales1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPe4">
                    <small>Item Sold</small>
                  </label>
                  <input
                    type="text"
                    value={itemsold1}
                    className="form-control"
                    id="inputPe4"
                    onChange={(e) => setItemSold1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputName4">
                    <small>Gross Invoice Value Finance US$</small>
                  </label>
                  <input
                    type="number"
                    value={grossinvoice1}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setGrossInvoice1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPo4">
                    <small>Terms of Payment</small>
                  </label>
                  <input
                    type="text"
                    value={termsofpayment1}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setTermsofpayment1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputSig4">
                    <small>Due Date</small>
                  </label>
                  <input
                    type="date"
                    value={duedate1}
                    className="form-control"
                    id="inputSig4"
                    onChange={(e) => setDueDate1(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>Date on which declared to the Corporation</small>
                  </label>
                  <input
                    type="date"
                    value={datedeclared1}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setDateDeclared1(e.target.value)}
                  />
                </div>
              </div>
              <hr />
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>
                      Date(s) on which the overdues were notified to the
                      Corporation
                    </small>
                  </label>
                  <input
                    type="date"
                    value={overdues}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setOverdues(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPe4">
                    <small>
                      Date(s) on which Default Declaration was submitted to the
                      Corporation
                    </small>
                  </label>
                  <input
                    type="date"
                    value={declaration}
                    className="form-control"
                    id="inputPe4"
                    onChange={(e) => setDeclaration(e.target.value)}
                  />
                </div>
                <h6>Less</h6>
                <div className="form-group my-2 col-md-12">
                  <label for="inputName4">
                    <small>
                      Particulars of the amount of loss Gross Invoice Value of
                      sales: US$
                    </small>
                  </label>
                  <input
                    type="number"
                    value={particulars}
                    className="form-control"
                    id="inputName4"
                    onChange={(e) => setParticulars(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputPo4">
                    <small>Payment received, if any: US$</small>
                  </label>
                  <input
                    type="number"
                    value={payreceive}
                    className="form-control"
                    id="inputPo4"
                    onChange={(e) => setPayReceive(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputSig4">
                    <small>
                      Payment saved by non-fulfillment of contract: US$ e.g.
                      Agent Commission
                    </small>
                  </label>
                  <input
                    type="number"
                    value={nonfulfillment}
                    className="form-control"
                    id="inputSig4"
                    onChange={(e) => setNonFulFillment(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>Proceeds of resale of goods: US$</small>
                  </label>
                  <input
                    type="number"
                    value={proceedsresale}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setProceedsResale(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>
                      Any credit, set-off or counterclaim, which can: US$ be
                      adjusted against the payment(s) due
                    </small>
                  </label>
                  <input
                    type="number"
                    value={setoff}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setSetOff(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>Total US$</small>
                  </label>
                  <input
                    type="number"
                    value={lesstotal}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setLessTotal(e.target.value)}
                  />
                </div>
                <hr />
                <h6>Plus</h6>
                <hr />
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>
                      Expenses incurred for recovery with the approval of the
                      Corporation: US$
                    </small>
                  </label>
                  <input
                    type="number"
                    value={expenses}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setExpenses(e.target.value)}
                  />
                </div>
                <div className="form-group my-2 col-md-12">
                  <label for="inputDate4">
                    <small>Net Amount Loss: US$</small>
                  </label>
                  <input
                    type="number"
                    value={netamountloss}
                    className="form-control"
                    id="inputDate4"
                    onChange={(e) => setNetAmountLoss(e.target.value)}
                  />
                </div>
                <hr />
                <small>
                  Documents attached in support of the claim (please tick
                  against the appropriate items)
                </small>
                <hr />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultCheck1"
                    onChange={(e) => setCheck1(e.target.value)}
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    Copies of the sales contract(s) / orders
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    onChange={(e) => setCheck2(e.target.value)}
                  />
                  <label className="form-check-label">Proof of delivery</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultdatedeclared1"
                    onChange={(e) => setCheck3(e.target.value)}
                  />
                  <label
                    className="form-check-label"
                    for="defaultdatedeclared1"
                  >
                    Any other relevant documents
                  </label>
                </div>
                <hr />
                <small>If the cause of loss is insolvency of buyer</small>
                <hr />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultoverdues"
                    onChange={(e) => setCheck4(e.target.value)}
                  />
                  <label className="form-check-label" for="defaultoverdues">
                    Evidence of insolvency
                  </label>
                </div>
                <hr />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultdeclaration"
                    onChange={(e) => setCheck5(e.target.value)}
                  />
                  <label className="form-check-label" for="defaultdeclaration">
                    Copy of the claim filed with the liquidator
                  </label>
                </div>
                <hr />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultparticulars"
                    onChange={(e) => setCheck6(e.target.value)}
                  />
                  <label className="form-check-label" for="defaultparticulars">
                    Copy of the letter from liquidator receiving/admiting the
                    claim:
                  </label>
                </div>
                <hr />
                <small>
                  If the effectivedate of loss is failure to pay for accepted
                  goods
                </small>
                <hr />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="yes"
                    id="defaultpayreceive"
                    onChange={(e) => setCheck7(e.target.value)}
                  />
                  <label className="form-check-label" for="defaultpayreceive">
                    Copy of all correspondence with buyer
                  </label>
                </div>
              </div>
              <hr />
              <small>
                We declare that the information given here in are true and
                correct in every particular and that we have not omitted to
                state any information relating to the claim.
                <br />
                <br />
                We undertake to pursue all steps, including institution of legal
                proceedings, which may be advised by the Corporation to effect
                recovery of the debt to which this claim relates.
                <br />
                <br />
                Upon payment of this claim, we shall forth with pay to the
                Corporation any and all amounts that we our agents or any other
                persons acting on our behalf may receive from the buyer or from
                any other source in respect of the debt to which this claim
                relates and we acknowledge and declare that all such amounts are
                moneys to which the Corporation alone is beneficially entitled
                and that, until payment to the Corporation is made as afore
                said, the said amounts will be held by us in trust for the
                Corporation.
              </small>
              <div className="form-row">
                <div className="form-group my-2 col-md-12">
                  <label for="inputRC4">Place:</label>
                  <input
                    type="text"
                    value={place}
                    className="form-control"
                    id="inputRC4"
                    onChange={(e) => setPlace(e.target.value)}
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

export default ExportPaymentInsuaranceForm;
