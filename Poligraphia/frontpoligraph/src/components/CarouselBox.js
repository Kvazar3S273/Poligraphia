import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="image 1" />
          <Carousel.Caption>
            <h3>Sky one</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="image 2" />
          <Carousel.Caption>
            <h3>Sky two</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="image 3" />
          <Carousel.Caption>
            <h3>Sky three</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="image 4" />
          <Carousel.Caption>
            <h3>Sky four</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
