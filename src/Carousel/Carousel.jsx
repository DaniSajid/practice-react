import React from 'react'
import CarouselImgTitle from './CarouselImgTitle'

const Carousel = () => {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
   <CarouselImgTitle Dot="carousel-item active" Image="/img/dices.png" Title="Play the Game" Paragraph="Best Game Ever you played & Amazaing Features" />
   <CarouselImgTitle Dot="carousel-item " Image="/img/hero-image.png" Title="Play the Game" Paragraph="Best Game Ever you played & Amazaing Features" />
   <CarouselImgTitle Dot="carousel-item " Image="/img/dice_6.png" Title="Play the Game" Paragraph="Best Game Ever you played & Amazaing Features" />
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel