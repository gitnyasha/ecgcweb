import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const GolfersInsuranceDetails = () => {
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
                               <img src="/images/services/golfers-insurance.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                           </div>

                           <div className="col-lg-6">
                               <div className="achievement-content">
                                   <h2>Golfers Insurance</h2>

                                   <p style={{textAlign: "justify"}}>This cover caters for golfers across the spectrum from amateurs, professionals and recreational golfers. This cover typically addresses loss or damage to golfing equipment and accessories, it also covers hole-in one allied expenses and many other golfing related losses and damages.</p>

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

export default GolfersInsuranceDetails;