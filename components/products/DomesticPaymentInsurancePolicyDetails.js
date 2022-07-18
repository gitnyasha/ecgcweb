import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const DomesticPaymentInsurancePolicyDetails = () => {
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
                                    <img src="/images/ecgc/domestic-payment.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">
                                    <h2>Domestic Payments Insurance Policy (DPIP)</h2>

                                    <p style={{textAlign: "justify"}}>The Domestic Insurance Policy (DPIP) is designed to provide protection to Companies against commercial credit risks inherent in local transactions.</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <br/>
                    <div className="row align-items-center">
                        <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                            <div className="col-lg-6">
                                <h2 style={{backgroundColor: '#d4ebf2',color:'black'}}>Risks Covered</h2>
                                <p>&#9642;  Buyer insolvency and protracted default are the commercial risks covered under the Policy</p>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">

                                    <h2 style={{backgroundColor: '#d4ebf2',color:'black'}}>Risks not Covered</h2>

                                    <h3 style={{backgroundColor: '#d4ebf2',color:'black'}}>Losses arising from the following risks are not covered:</h3>

                                    <p style={{textAlign: 'justify'}}>&#9642;  Insolvency of any agent of the Company or of a collecting bank or from any act or default of such agent or collecting bank.</p>
                                    <p>&#9642;  Any failure or inability of the Company or buyer to obtain authority to deliver or accept goods where such authority is required by regulations.</p>
                                    <p>&#9642;  Risks covered by general insurers.</p>
                                    <p>&#9642;  Trade dispute between the Company and the buyer.</p>
                                    <Link href="/contact">
                                        <a className="default-btn">Apply Now</a>
                                    </Link>
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

export default DomesticPaymentInsurancePolicyDetails;