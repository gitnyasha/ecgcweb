import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Router from "next/router";
import Carousel from "nuka-carousel";

const AboutUsContent = () => {
    return (
        <div className="about-area pt-70">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12">
						<div className="about-content">
							<h3>About Us</h3>
							<p style={{textAlign: "justify", fontSize: '20px'}}>Incorporated in 1999 and commencing operations in 2000, Export Credit Guarantee Corporation of Zimbabwe Private Limited (ECGC) is a wholly owned subsidiary of the Reserve Bank of Zimbabwe and a duly registered short-term insurer. ECGC is regulated and supervised by the Commissioner of Insurance in terms of the Insurance Act and has complied with capital requirements as set out by the Insurance and Pensions Commission (IPEC). Over the years ECGC has played a pivotal role in Zimbabwe’s economy through offering financial solutions and expertise that create an enabling environment for business growth and expansion into new markets in both the domestic and international arena.
								</p>

							<div className="about-list">
								<ul>
									<li>
										<i className="flaticon-checked"></i>
										International Linkages
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Efficient and Effective Service
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Professional Advisor
									</li>
									<li>
										<i className="flaticon-checked"></i>
										Packages carefully crafted for growth
									</li>
									<li>
										<i className="flaticon-checked"></i>
										 Trade Insurance Solutions
									</li>
								</ul>
							</div>
						</div>
					</div>

					{/*<div className="col-lg-6">
						<Carousel
							autoplayInterval={9000}
							autoplay={true}
							wrapAround={true}
						>
							<img src={"/images/services/15.jpg"}  alt={"export-insurance"} onClick={() => Router.push("/export-and-domestic-credit-insurance")}/>
							<img src={"/images/services/16.jpg"}  alt={"bonds"} onClick={() => Router.push("/bonds-and-financial-guarantees")}/>
							<img src={"/images/services/17.jpg"}  alt={"msme"} onClick={() => Router.push("/msme-credit-guarantee-scheme")}/>
							</Carousel>
					</div>*/}
				</div>
			</div>
		</div>
    )
}

export default AboutUsContent;