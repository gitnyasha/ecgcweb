import React from 'react';
import Link from "next/link";

const MakePayment = () => {

    return (
        <div className="online-payment-area ">
                <div className="row">

                    <div className="col-lg-12 ">
                        <div className="pay-now">
                            <Link href="https://www.paynow.co.zw/ecgc" passHref>
                                <a target="_blank" rel="noreferrer">
                                    <img
                                        src="/images/make-payment.png"
                                        alt="Image"
                                        style={{cursor: "pointer",borderRadius: '15px',width: '3000px'}}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
        </div>

    );
}

export default MakePayment;