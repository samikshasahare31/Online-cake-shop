import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/Carousel.css"
import img1 from "../images/birthday-landingpage-fa-desktop.avif";
import img2 from "../images/chocolate-cake-landingpage-fa-desktop.avif";
import img3 from "../images/mini-cake-landingpage-fa-desktop.avif";

const Carsoule = () => {
  return (
    <div className="CarouselContainer">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carsoule;
