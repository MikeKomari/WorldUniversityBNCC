import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import Japan1 from "../../public/assets/japan1.webp";
import Japan2 from "../../public/assets/japan2.avif";
import Scene1 from "../../public/assets/scene1.webp";
import Indo1 from "../../public/assets/Indo1.jpg";
import Indo2 from "../../public/assets/Indo2.jpeg";

// Define the style for the images in the carousel
const imageStyle = {
  width: "447px",
  height: "664px",
  borderRadius: "20px",
  border: "1px solid #FFFFFF33",
};

function Carousel() {
  return (
    <div className="relative flex h-full mt-24 mb-24">
      <div className="container max-w-screen-2xl mx-auto relative z-20 overflow-x-hidden">
        <Splide
          options={{
            type: "loop", // Loop back to the beginning when reaching the end
            autoScroll: {
              pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
              pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
              rewind: true, // Rewind to start when the end is reached
              speed: 1, // Scrolling speed
            },
            arrows: false, // Hide navigation arrows
            pagination: false, // Hide pagination dots
            fixedWidth: "445px", // Fixed width for each slide
            gap: "12px", // Gap between slides
          }}
          extensions={{ AutoScroll }} // Use the AutoScroll extension
        >
          <SplideSlide>
            <img src={Japan1} alt="Poster Kapan" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Scene1} alt="Poster Scenery" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Japan2} alt="Poster Japan Lagi" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Indo1} alt="Poster Indo" style={imageStyle} />
          </SplideSlide>
          <SplideSlide>
            <img src={Indo2} alt="Poster Bali kykny" style={imageStyle} />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default Carousel;
