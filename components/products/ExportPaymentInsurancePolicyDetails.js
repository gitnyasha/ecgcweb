import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const ExportPaymentInsurancePolicyDetails = () => {
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
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-service">
                                    <img src="/images/ecgc/export-credit.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">
                                    <h2>Export Payment Insurance Policy (EPIP)</h2>

                                    <p style={{textAlign: "justify"}}>Export Credit Insurance is designed to protect
                                        Zimbabwe’s exporters from losses that may arise from a variety of commercial and
                                        political risks inherent in all export transactions. This protection will also
                                        enhance their capacity to compete in the international markets and enable them
                                        to break into new markets, introduce new products and take up new buyers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row align-items-center">
                        <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                            <div className="col-lg-6">
                                <h2 style={{backgroundColor: '#d4ebf2',color:'black'}}>Risks Covered</h2>

                                <br/>

                                <h3 style={{backgroundColor: '#d4ebf2',color:'black'}}>Commercial Risks</h3>

                                <p>&#9642;  Insolvency of the buyer, his protracted default and non-acceptance of
                                    exported goods.</p>
                                <p>&#9642;  Insolvency and protracted default of the L/C-issuing bank</p>

                                <h3 style={{backgroundColor: '#d4ebf2',color:'black'}}>Political Risks</h3>

                                <p>&#9642;  War</p>
                                <p>&#9642;  Civil Disturbance</p>
                                <p>&#9642;  Moratorium</p>
                                <p>&#9642;  Imposition of new import or exchange control regulations</p>
                                <p>&#9642;  Transfer Delays</p>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">

                                    <h2 style={{backgroundColor: '#d4ebf2',color:'black'}}>Risks not Covered</h2>

                                    <h3 style={{backgroundColor: '#d4ebf2',color:'black'}}>Losses arising from the following risks are not covered:</h3>

                                    <p className="bi bi-cursor">&#9642;  Insolvency or failure of any agent of the exporter</p>
                                    <p style={{textAlign: 'justify'}}>&#9642;  Failure of the exporter or the buyer to obtain necessary authority to
                                        execute the export.</p>
                                    <p>&#9642;  Exchange rate fluctuation</p>
                                    <p>&#9642;  General and marine insurance risks</p>
                                    <p>&#9642;  Trade dispute between the exporter and the buyer</p>

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

export default ExportPaymentInsurancePolicyDetails;