import React from 'react';
import { Carousel } from 'react-bootstrap';
import MyCard from '../MyCard/MyCard';
import './MySlide.css';

export default function MySlide() {
  return (
    <div>
      <Carousel className="img">
        <Carousel.Item interval={1000}>
          <img
            className="w-20"
            src=""
            alt="First slide"
          />
          <MyCard />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="s"
            src="-"
            alt="Second slide"
          />
          <MyCard />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="-"
            alt="Third slide"
          />
          <MyCard />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}
