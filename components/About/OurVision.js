import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const OurVision = () => {
    return (
        <div className="our-vision-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <ScrollAnimation animateIn="fadeInLeft" delay={50} animateOnce={true}>
                                <img src="/images/vision-image.jpg" alt="Image" style={{borderRadius: '15px'}}/>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="vision-content">
                            <span>Our Vision</span>

                            <p>To be the preferred Zimbabwean export credit agency providing
                                trade solutions for supportable economic development.</p>

                        </div>

                        <span/>

                        <div className="vision-content">
                            <span> <br/>Our Mission</span>

                            <p>Developing sustainable trade, financial inclusion and the
                                provision of innovative financial and risk management solutions.</p>

                        </div>

                        <div className="vision-content">
                            <span> <br/>Our Values</span>

                            <div className="vision-list">
                                <ul>
                                    <li>
                                        <i className="flaticon-checked"/>
                                        Professionalism
                                    </li>
                                    <li>
                                        <i className="flaticon-checked"/>
                                        Responsiveness
                                    </li>
                                    <li>
                                        <i className="flaticon-checked"/>
                                        Innovativeness
                                    </li>
                                    <li>
                                        <i className="flaticon-checked"/>
                                        Connectedness
                                    </li>
                                    <li>
                                        <i className="flaticon-checked"/>
                                        Inclusivity
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default OurVision;