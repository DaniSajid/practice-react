import React from 'react'

const CarouselImgTitle = ({Image,Title,Paragraph,Dot}) => {
  return (
    <>
         <div className={Dot}>
      <img src={Image} className="d-block w-100 css" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>{Title}</h5>
        <p>{Paragraph}</p>
      </div>
    </div>
    </>
  )
}

export default CarouselImgTitle