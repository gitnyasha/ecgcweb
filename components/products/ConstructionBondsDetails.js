import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const ConstructionBondsDetails = () => {
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
                        <div className="container">
                            <div className={"row"}>
                                <div className="col-lg-6">
                                    <div className="single-service">
                                        <img src="/images/services/construction.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>

                                <div className="col-lg-6">
                                    <div className="achievement-content">
                                        <h2>Construction Bonds</h2>

                                        <p style={{textAlign: "justify"}}>A construction contract bond is basically an
                                            undertaking whereby the guarantor agrees to indemnify the beneficiary, to a
                                            designated amount, against loss or damage sustained by the beneficiary
                                            through the failure of the principal to perform a building contract or
                                            execute some other construction work.</p>

                                    </div>
                                </div>

                                <div className="col-lg-12" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                    <div className={'row'} style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                        <div className="col-lg-4"/>
                                        <div className="col-lg-4">
                                            <h3 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Type of Construction Bonds:</h3>
                                        </div>
                                        <div className="col-lg-4"/>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <div className="col-lg-12">
                                    <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                        <div className="col-lg-4">
                                            <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Bid Bonds</h6>
                                            <p style={{textAlign: "justify"}}>A bid bond is an obligation to pay a sum
                                                as actual damages in the event that either the Contractor fails to enter
                                                the contract in accordance with its bid or fails to provide the
                                                necessary performance bonds etc as required by the Principal /
                                                Beneficiary.</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Performance Bonds</h6>
                                            <p style={{textAlign: "justify"}}>A performance bond obliges the guarantor
                                                to ensure performance of the contract between the beneficiary and the
                                                principal either by arranging to complete the work or by paying money to
                                                the beneficiary.</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Maintenance Bonds</h6>
                                            <p style={{textAlign: "justify"}}>Maintenance Bonds safeguard that the
                                                Contractor remedies any deficiencies after completing the structure of
                                                the building.</p>
                                        </div>
                                    </div>
                                </div>

                                <br/>

                                <div className="col-lg-12">
                                    <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                        <div className="col-lg-4">
                                            <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Retention Bonds</h6>
                                            <p style={{textAlign: "justify"}}>A retention bond enables the retention
                                                monies to be released to the contractor, at the same time guaranteeing
                                                the employer that in the event of default by the contractor, such monies
                                                will be paid to the employer.</p>
                                        </div>
                                        <div className="col-lg-4">
                                            <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Advance Payment Bonds</h6>
                                            <p style={{textAlign: "justify"}}>An advance payment bond guarantees the
                                                principal or beneficiary in respect of funds he has advanced to the
                                                contractor to finance mobilisation and performance of the work according
                                                to the terms of the contract</p>
                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>
                                    </div>
                                </div>

                                <div className="col-lg-12" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                    <div className={'row'}>
                                        <div className="col-lg-4"/>
                                        <div className="col-lg-4">
                                            <Link href="/contact" style={{justifyContent: 'center'}}>
                                                <a className="default-btn" >Apply Now</a>
                                            </Link>
                                        </div>
                                        <div className="col-lg-4"/>
                                    </div>
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

export default ConstructionBondsDetails;