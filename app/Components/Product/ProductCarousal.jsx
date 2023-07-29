import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
// import "./styles.css";
const ProductCarousal = () => {
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const slider1 = useRef(null);
	const slider2 = useRef(null);
	const slides = [
		"https://buildmybody.in/cdn/shop/products/Prostar-5.28lb-Chocolate-Cream_1024x1024.jpg?v=1596138503",
		"https://buildmybody.in/cdn/shop/products/ezgif-5-3f004922149b_1024x1024.jpg?v=1596138503",
		"https://buildmybody.in/cdn/shop/products/Prostar-5.28lb-3_1024x1024.jpg?v=1596138500",
		"https://buildmybody.in/cdn/shop/products/Authentic-Ultimate-Nutrition_1024x1024.jpg?v=1596138503",
		"https://buildmybody.in/cdn/shop/products/Prostar-5.28lb-2_1024x1024.jpg?v=1596138500",
	];
	//i dont seem to need this
	useEffect(() => {
		setNav1(slider1.current);
		setNav2(slider2.current);
	}, []);

	return (
		<div style={{ padding: "0 30px", maxWidth: "500px" }} className="mx-auto">
			<Slider className="mainSlider" asNavFor={nav2} ref={slider1}>
				{slides.map((slide) => (
					<div className="" style={{ width: "500px" }}>
						<img
							src={slide}
							alt=""
							style={{ margin: "0 auto", width: "100%" }}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductCarousal;
