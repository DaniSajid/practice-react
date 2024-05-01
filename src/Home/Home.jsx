import React from 'react'
import Carousel from '../Carousel/Carousel'
import Card from './Card/Card';

const Home = () => {
  document.title="Home";
  return (
    <>
        <Carousel/>
        <div className="container text-center">
  <div className="row gy-3">
    <Card pName="Shoes" imgPath="img/hero-image.png" pDes="This is amazing shoes your feet feel better" pPrice="2500.Rs" />
    <Card pName="Dices" imgPath="img/dices.png" pDes="This is amazing shoes your feet feel better" pPrice="500.Rs" />
    <Card pName="React" imgPath="/react.svg" pDes="This is amazing shoes your feet feel better" pPrice="8000.Rs" />
    <Card pName="Painting" imgPath="img/poster.jpg" pDes="This is amazing shoes your feet feel better" pPrice="1600.Rs" />
  </div>
</div>
<div className="p-4 p-md-5 mb-4 rounded text-body-emphasis layout">
    <div className="col-lg-6 px-0">
      <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
      <p className="lead mb-0"><a href="#" className="text-body-emphasis fw-bold">Continue reading...</a></p>
    </div>
  </div>
      
    </>
  )
}

export default Home