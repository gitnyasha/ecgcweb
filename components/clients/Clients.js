import React from 'react';
import Link from "next/link";

const Clients = () => {

    return (
        <div className="clients-area pt-10 pb-10">
            <div className="container">
                <div className="section-title">
                    <h2>Some of Our Clients</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">

                            <a>
                                <img src="/images/clients/banks.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Banks & Micro-Finance Institutions</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">
                            <a>
                                <img src="/images/clients/sme.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Micro, Small & Medium Enterprises</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">
                            <a>
                                <img src="/images/clients/agric.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Agricultural Sector</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">
                            <a>
                                <img src="/images/clients/manufacturing.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Manufacturing Sector</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">
                            <a>
                                <img src="/images/clients/construction.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Construction Sector</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="single-blog">
                            <a>
                                <img src="/images/clients/mining.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </a>
                            <div className="blog-content" style={{borderRadius: '15px'}}>
                                <a>
                                    <h3 style={{fontSize: 16}}>Mining Sector</h3>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Clients;