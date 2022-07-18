import React from 'react';
import Link from 'next/link';
import ReadMore from "../../utils/ReadMore";

const BondsAndFinancialGuaranteesProducts = () => {
    return (
        <div className="service-area-two pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Bonds And Guarantees</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-sm-6">
                        <div className="single-service">
                            <img src="/images/services/construstion-bonds.jpg" alt="Image" style={{borderRadius: '15px'}}/>

                            <div className="service-content">
                                <i className="icon-style flaticon-car-insurance"/>
                                <h3>Construction Bonds</h3>
                                <ReadMore description={'A construction contract bond is basically an undertaking whereby the guarantor agrees to indemnify the beneficiary, to a designated amount, against loss or damage sustained by the beneficiary through the failure of the principal to perform a building contract or execute some other construction work.'}/>

                                <div className={"row"}>
                                    <div className={"subscribe col-lg-6"}>
                                        <Link href="/products/construction-bonds">
                                            <a className={"default-btn"}>Read more...</a>
                                        </Link>
                                    </div>

                                    <div className="subscribe col-lg-6">
                                        <Link href="/coming-soon">
                                            <a className="default-btn">
                                                Apply Now
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6">
                        <div className="single-service">
                            <img src="/images/services/customs-bonds.jpeg" alt="Image" style={{borderRadius: '15px'}}/>

                            <div className="service-content">
                                <i className="icon-style flaticon-insurance"></i>
                                <h3>Customs Bonds</h3>
                                <ReadMore description={'In the case of an extension of payment of customs duty granted by the Zimbabwe Revenue Authority (herein after referred to as ‘Zimra’), this guarantees that the principal will pay the customs duty on imported merchandise when the duty falls due. As a fall back, it is necessary to ask for collateral in the form of securities and or personal counter indemnities from third parties.'}/>

                                <div className={"row"}>
                                    <div className={"subscribe col-lg-6"}>
                                        <Link href="/products/customs-bonds">
                                            <a className={"default-btn"}>Read more...</a>
                                        </Link>
                                    </div>

                                    <div className="subscribe col-lg-6">
                                        <Link href="/coming-soon">
                                            <a className="default-btn">
                                                Apply Now
                                            </a>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BondsAndFinancialGuaranteesProducts;