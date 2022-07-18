import React from 'react'
import {useFormData} from "../../../../context";
import styles from "../../../../styles/Home.module.scss";

const GuaranteeApplicantDetails = ({ formStep, nextFormStep }) => {


    const { setFormValues } = useFormData();

    return(

        <div className="contact-area ptb-100">
            <div className="form-container">
                <div className="row align-items-center">
                    <div className="col-lg-12">

                                <div className="section-title">
                                    <h2>Guarantee Facility Application Form</h2>
                                </div>
                                <div className={formStep === 0 ? styles.showForm : styles.hideForm}>
                                    <h2>Personal Info</h2>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    id="firstName"
                                                    placeholder="First Name"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    id="lastName"
                                                    placeholder="Last Name"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="officeNumber"
                                                    id="officeNumber"
                                                    placeholder="Office Number"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="mobileNumber"
                                                    id="mobileNumber"
                                                    placeholder="Mobile Number"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="yearOfEstablishment"
                                                    id="yearOfEstablishment"
                                                    placeholder="Year Of Establishment"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-4">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="typeOfOrganisation"
                                                    id="typeOfOrganisation"
                                                    placeholder="Type Of Organisation"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
												<textarea
                                                    name="postalAddress"
                                                    id="postalAddress"
                                                    cols="20"
                                                    rows="2"
                                                    placeholder="Postal Address"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
												<textarea
                                                    name="physicalAddress"
                                                    id="physicalAddress"
                                                    cols="20"
                                                    rows="2"
                                                    placeholder="Physical Address"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-sm-12">
                                            <button type="button" className="default-btn page-btn" onClick={nextFormStep}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GuaranteeApplicantDetails;