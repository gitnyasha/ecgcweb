import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MsmeCreditGuaranteeSchemeDetails = () => {
    // Popup Video
    const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="achievement-area pt-70" style={{backgroundColor: '#d4ebf2'}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className={"row"}>
                            <div className="col-lg-6">
                                <div className="single-service">
                                    <img src="/images/ecgc/msme.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">
                                    <h2>MSME Credit Guarantee Scheme</h2>

                                    <p style={{textAlign: "justify"}}>A Financial Guarantee is a type of promise given by a guarantor to take responsibility for the borrower in the case of default in payments to the Lender. ECGC offers Financial Guarantees to back the debt of large corporations (the borrower) in payments to the Lending Institution. The guarantee is provided to the Lending Institution covering the risk of default emanating from the borrower and can be called upon if the borrower defaults. Financial guarantees are in many countries around the world, regarded as a policy instrument to support economic growth.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo
                channel='youtube'
                isOpen={!isOpen}
                videoId='bk7McNUjWgw'
                onClose={() => setIsOpen(!isOpen)}
            />
        </>
    )
}

export default MsmeCreditGuaranteeSchemeDetails;