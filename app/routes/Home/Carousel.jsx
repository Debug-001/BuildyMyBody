import React, { useState } from "react";

const Carousel = () => {
	const [carouselItems, setCarouselItems] = useState([
		{
			src: "/img/banner1.jpg",
			alt: "First slide",
			active: true,
		},
		{
			src: "/img/banner2.jpg",
			alt: "Second slide",
			active: false,
		},
		{
			src: "/img/banner3.jpg",
			alt: "Third slide",
			active: false,
		},
	]);
	
	return (
		<section>		
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					{carouselItems.map((item, index) => (
						<div
							key={index}
							className={`carousel-item ${item.active ? "active" : ""}`}
						>
							<img className="d-block w-100" src={item.src} alt={item.alt} />
						</div>
					))}
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleControls"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			{/* </div> */}
			</div>
		</section>
	);
};

export default Carousel;
