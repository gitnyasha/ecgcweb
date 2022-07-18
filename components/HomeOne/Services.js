import React from 'react';
import Link from 'next/link';
import Slider from "@madzadev/image-slider";
import styles from "../../public/css/Image.module.css";
import ReadMore from "../../utils/ReadMore";

const ServicesStyleOne = () => {

    const Image = (background) => {
        return (
            <article className={styles.service}>
                <img className={styles.picture} src={background} alt="background" />
                <h1 className={styles.header}>React Is Awesome</h1>
            </article>
        );
    };

    return (
        <div className="services-area pt-0 pb-10">

                <div>
                    <div className={"row"}>
                        <div className="card col-md-3 box" style={{height: "auto",}}>
                            {/*<img src="/images/services/export.jpg" className="card-img-top" alt="..." />*/}

                            <div className="card" style={{backgroundColor: '#d4ebf2', borderColor: '#d4ebf2',borderRadius: '15px'}}>
                                <div className="card-header" style={{
                                    left: '5%',
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}><p style={{color: 'black', fontWeight: "bold", fontSize: 20}}>
                                    <img src="/images/services/s1.png" className="card-img-top" alt="..." />
                                </p></div>
                                <div className="card-body">

                                    <p style={{color: 'black', textAlign: 'justify'}}>Our Export and Domestic Insurance packages provide protection against commercial and political risks inherent in global and domestic trade.</p>

                                </div>
                                <div className="card-footer"  style={{
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}>
                                    <Link href="/export-and-domestic-credit-insurance">
                                        <a className={"default-btn"} style={{
                                            left: '5%',
                                            marginLeft: 100,
                                        }}>Read more...</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="card col-md-3 box" style={{height: "auto"}}>
                            {/*<img src="/images/services/export.jpg" className="card-img-top" alt="..." />*/}

                            <div className="card" style={{backgroundColor: '#d4ebf2', borderColor: '#d4ebf2'}}>
                                <div className="card-header" style={{
                                    left: '5%',
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}><p style={{color: 'black', fontWeight: "bold", fontSize: 20}}><img src="/images/services/s2.png" className="card-img-top" alt="..." /></p></div>
                                <div className="card-body">

                                    <p style={{color: 'black', textAlign: 'justify'}}>
                                       <ReadMore description={'ECGC provides an assorted range of bonds and guarantees aimed at providing insurance should there be failure by the seller to meet contractual obligations.'}/>
                                    </p>

                                </div>
                                <div className="card-footer"  style={{
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}>
                                    <Link href="/bonds-and-financial-guarantees">
                                        <a className={"default-btn"} style={{
                                            left: '5%',
                                            marginLeft: 100,
                                        }}>Read more...</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="card col-md-3 box" style={{height: "auto"}}>
                            {/*<img src="/images/services/export.jpg" className="card-img-top" alt="..." />*/}

                            <div className="card" style={{backgroundColor: '#d4ebf2', borderColor: '#d4ebf2'}}>
                                <div className="card-header" style={{
                                    left: '5%',
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}><p style={{color: 'black', fontWeight: "bold", fontSize: 20}}><img src="/images/services/s3.png" className="card-img-top" alt="..." /></p></div>
                                <div className="card-body">

                                    <p style={{color: 'black', textAlign: 'justify'}}>
                                        <ReadMore description={'The MSME Credit Guarantee Scheme and Financial Guarantees is aimed to facilitate access to MSMEs and individuals with bankable projects.'}/>
                                    </p>

                                </div>
                                <div className="card-footer"  style={{
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}>
                                    <Link href="/products/msme-credit-guarantee-scheme">
                                        <a className={"default-btn"} style={{
                                            left: '5%',
                                            marginLeft: 100,
                                        }}>Read more...</a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="card col-md-3 box" style={{height: "auto"}}>
                            {/*<img src="/images/services/export.jpg" className="card-img-top" alt="..." />*/}

                            <div className="card" style={{backgroundColor: '#d4ebf2', borderColor: '#d4ebf2'}}>
                                <div className="card-header" style={{
                                    left: '5%',
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}><p style={{color: 'black', fontWeight: "bold", fontSize: 20}}><img src="/images/services/s4.png" className="card-img-top" alt="..." /></p></div>
                                <div className="card-body">

                                    <p style={{color: 'black', textAlign: 'justify'}}>
                                       <ReadMore description={' ECGC offers a wide array of general insurance products that provide protection against unforeseeable contingencies.'}/>
                                    </p>

                                </div>
                                <div className="card-footer"  style={{
                                    borderColor: '#d4ebf2',
                                    backgroundColor: '#d4ebf2'
                                }}>
                                    <Link href="/general-insurance">
                                        <a className={"default-btn"} style={{
                                            left: '5%',
                                            marginLeft: 100,
                                        }}>Read more...</a>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>
            </div>

            <div className="services-shape">
                <img src="/images/services-shape-1.png" alt="Image"/>
            </div>
        </div>
    )
}

export default ServicesStyleOne;