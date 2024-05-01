import React from 'react'

const Card = ({pName , pDes , pPrice,imgPath }) => {
  return (
    <>
    <div className="col-6 col-lg-3 col-md-4 col-sm-6">
         <div className="card my-5 bg-light" >
  <img src={imgPath} className="card-img-top card-image-custom" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{pName}</h5>
    <h6>{pPrice}</h6>
    <p className="card-text">{pDes}</p>
    <button type='button' className="btn css-color text-white">Buy Now</button>
  </div>
</div> 
</div>
    </>
  )
}

export default Card