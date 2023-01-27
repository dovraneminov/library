import React from 'react';
import { Carousel } from 'react-bootstrap';
import './MySlide.css';

export default function MySlide() {
  return (
    <div>
      <Carousel className="img">
        <Carousel.Item interval={1000}>
          <img
            className="w-20"
            src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="s"
            src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://www.iguides.ru/upload/medialibrary/9f8/9f8fdff471b7d281f81f694c100b5adc.png"
            alt="Third slide"
          />
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
