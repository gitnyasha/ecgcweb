import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const HomeProtectionInsuranceDetails = () => {
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
                                <img src="/images/services/home.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </div>

                            <div className="col-lg-6">
                                <div className="achievement-content">
                                    <h2>Home Protection Insurance</h2>

                                    <p style={{textAlign: "justify"}}>This policy covers your buildings and fixtures and fittings against damage caused by fire and allied perils, theft, impact by animals, accidental damage of water pipes, accidental breakage of windows and natural disasters.</p>

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

export default HomeProtectionInsuranceDetails;