import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router'
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from 'nuka-carousel';

const MainBanner = () => {

	const [slideIndex, setSlideIndex] = useState(0);

    return (
        <div className="main-banner-area">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-12 pr-0">
						<Carousel
							autoplayInterval={9000}
							autoplay={true}
							wrapAround={true}
							height={"500px"}
						>
							<img src={"/images/services/Export-Credit2.png"}  alt={"export-insurance"}  onClick={() => Router.push("/export-and-domestic-credit-insurance")}/>
							<img src={"/images/services/bond1.png"}  alt={"bonds"} onClick={() => Router.push("/bonds-and-financial-guarantees")}/>
							<img src={"/images/services/msme-full3.png"}  alt={"msme"} onClick={() => Router.push("/products/msme-credit-guarantee-scheme")}/>
							<img src={"/images/services/general-insurance-full2.png"}  alt={"general-insurance"} onClick={() => Router.push("/general-insurance")}/>
							<img src={"/images/services/news-and-events2.png"}  alt={"news-and-events"} onClick={() => Router.push("/news-and-events")}/>
							{/*<img src={"/images/services/tenders.png"}  alt={"tenders"} onClick={() => Router.push("/news-and-events")}/>*/}
						</Carousel>
					</div>
				</div>
			</div>


			<div className="shape">
				<img src="/images/banner/banner-shape.png" alt="Image" />
			</div>
			<div className="banner-shape-right">
				<img src="/images/banner/banner-shape-right.png" alt="Image" />
			</div>
		</div>
    )
}

export default MainBanner;