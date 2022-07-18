import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const MarineInsuranceDetails = () => {
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
                                <img src="/images/services/marine-insurance.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">
                                    <h2>Marine Insurance</h2>

                                    <p style={{textAlign: "justify"}}>Marine Insurance policy protects against accidental damage to goods or loss of the ship hull, boats and machinery and third-party liabilities arising from use or ownership of such equipment.</p>

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

export default MarineInsuranceDetails;