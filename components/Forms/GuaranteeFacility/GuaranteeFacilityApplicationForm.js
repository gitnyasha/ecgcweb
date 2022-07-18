import React, {useState} from 'react'
import styles from "../../../styles/Home.module.scss";
import FormCard from "../FormCard";
import ApplicantDetails from "./steps/ApplicantDetails";
import DirectorsDetails from "./steps/DirectorsDetails";

const GuaranteeFacilityApplicationForm = () => {

    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return(

        <div className={styles.container}>

            <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
                {formStep >= 0 && (
                    <ApplicantDetails formStep={formStep} nextFormStep={nextFormStep} />
                )}
                {formStep >= 1 && (
                    <DirectorsDetails formStep={formStep} nextFormStep={nextFormStep} />
                )}
                {formStep >= 2 && (
                    <ApplicantDetails formStep={formStep} nextFormStep={nextFormStep} />
                )}

                {formStep > 2 && <ApplicantDetails />}
            </FormCard>
        </div>
    );
}

export default GuaranteeFacilityApplicationForm;