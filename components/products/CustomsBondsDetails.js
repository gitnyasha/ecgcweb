import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const CustomsBondsDetails = () => {
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
                                        <img src="/images/services/customs.jpeg" alt="Image" style={{borderRadius: '15px'}}/>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="achievement-content">
                                        <h2>Customs Bonds</h2>

                                        <p style={{textAlign: "justify"}}>In the case of an extension of payment of
                                            customs duty granted by the Zimbabwe Revenue Authority (herein after
                                            referred to as ‘Zimra’), this guarantees that the principal will pay the
                                            customs duty on imported merchandise when the duty falls due. As a fall
                                            back, it is necessary to ask for collateral in the form of securities and or
                                            personal counter indemnities from third parties.
                                        </p>

                                        <br/>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="col-lg-12" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                <div className={'row'} style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                    <div className="col-lg-4"/>
                                    <div className="col-lg-4">
                                        <h3 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Type of Customs Bonds:</h3>
                                    </div>
                                    <div className="col-lg-4"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                    <div className="col-lg-4">
                                        <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Agents Bonds</h6>
                                        <p style={{textAlign: "justify"}}>This a ‘good behaviour’ bond, for the due
                                            observation of Zimra regulations, to be lodged by any organization dealing
                                            with Zimra on a commercial basis before being registered by Zimra.</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Removal and Transit Bonds (RIT)</h6>
                                        <p style={{textAlign: "justify"}}>The purpose of the removal and transit bond is
                                            to enable client to handle consignments passing through Zimbabwe without
                                            paying duty. A RIT Bond is put in place to ensure that goods get to their
                                            destination without duty being paid whilst in transit. The consignments are
                                            required to go out of the country within 3 days, failing which client will
                                            be asked to pay duty.</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Warehouse Bonds</h6>
                                        <p style={{textAlign: "justify"}}>The warehouse bond enables the company to
                                            import finished products into the bonded warehouse without paying duty and
                                            VAT. The duty and VAT will only be payable upon sale. Should client sell
                                            products from the bonded warehouse and fail to pay relevant duty ZIMRA will
                                            call on the bond underwriter to pay an amount equivalent to duty and VAT on
                                            the sold goods.</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <div className="col-lg-12">
                                <div className="row" style={{backgroundColor: '#d4ebf2',color:'black'}}>
                                    <div className="col-lg-4">
                                        <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Inward Processing Rebate Bonds</h6>
                                        <p style={{textAlign: "justify"}}>To avoid huge cash outlays as payment for duty
                                            on imported raw materials for use in manufacturing goods for export, at
                                            least 80 %, the raw materials are put in a bonded warehouse, approved by
                                            ZIMRA. As security for the duty at stake, in case the imported raw materials
                                            are not used to produce goods for export, an inward processing rebate bond
                                            (IPR) is lodged with Zimra. In the event that the finished products are sold
                                            on local market and client fails to pay the duty ZIMRA will call on the bond
                                            underwriter to pay an amount equivalent to duty on the imported raw
                                            materials used.</p>
                                    </div>
                                    <div className="col-lg-4">
                                        <h6 style={{backgroundColor: '#d4ebf2',color:'black',textAlign:'center'}}>Commercial Vehicle Guarantees (CVG)/ Temporary
                                            Importation Bonds</h6>
                                        <p style={{textAlign: "justify"}}>The purpose of the guarantee is that principal
                                            will be making an undertaking that vehicles coming into the country to ferry
                                            consignments for various customers will go back to their countries of
                                            origin. Should the vehicles fail to go back, Zimra will ask client to pay
                                            duty on the vehicles failing which the bond will be called up.</p>
                                    </div>
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

export default CustomsBondsDetails;