import React from 'react';

const TopHeader = () => {
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12 col-md-12 col-sm-3">
                        <ul className="header-content-right">
                            <li>
                                <a href="tel:+263 242 745 869" target={"_blank"}>
                                    <i className="bx bx-phone-call"/>
                                    Call Us
                                </a>
                            </li>

                            <li>
                                <a href="mailto:info@ecgc.co.zw" target={"_blank"}>
                                    <i className="bx bx-envelope"/>
                                    Email
                                </a>
                            </li>

                            <li>
                                <a href="https://api.whatsapp.com/send?phone=263719745452" target={"_blank"}>
                                    <i className="bx bxl-whatsapp"/>
                                    Whatsapp
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/company/exportcreditguaranteecorporationofzimbabwe/?viewAsMember=true" target={"_blank"}>
                                    <i className="bx bxl-linkedin"/>
                                    Linkedin
                                </a>
                            </li>

                            <li>
                                <a href="https://twitter.com/credit_export" target={"_blank"}>
                                    <i className="bx bxl-twitter"/>
                                    Twitter
                                </a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/Export-Credit-Guarantee-Corporation-of-Zimbabwe-103987944898662" target={"_blank"}>
                                    <i className="bx bxl-facebook"/>
                                    Facebook
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;