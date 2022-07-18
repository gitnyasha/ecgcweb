import React from 'react';
import Link from "next/link";

const ContactWithAgent = () => {
    return (
        <div className="agent-now-area ptb-100" style={{backgroundColor: '#d4ebf2'}}>
			<div className="container">
				<div className="section-title">
					<h2>Contact Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<div className="call-now">
							<i className="flaticon-call"></i>
							<p>Call Us</p>
							<span>+263 867 700 8110</span>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="subscribe-wrap">
							<p style={{color: '#1B75BA'}}>p</p>

							<form className="newsletter-form">

								<input type="email" className="form-control" placeholder="Enter Your Email" name="email" required />
								<Link className="default-btn" type="submit" href="/contact">
									<a className={"default-btn"} style={{ width: '100%', fontSize: '30px'}}>Get In Touch</a>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</div>

			<div className="agent-shape">
				<img src="/images/agent.png" alt="Image" />
			</div>
		</div>
    )
}

export default ContactWithAgent;