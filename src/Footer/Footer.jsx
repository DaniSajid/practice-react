import React from 'react'
import NavItems from '../Header/NavItems'

const Footer = () => {
  return (
    <div className="color-design">
        <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-danger">© 2024 Company, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
     <img src="/vite.svg" alt="" />
    </a>

    <ul className="nav col-md-4 justify-content-end">
     <NavItems itemClass="nav-link text-dark" props="Home" urlTo="/" />
     <NavItems itemClass="nav-link text-dark" props="TodoApp" urlTo="TodoApp" />
     <NavItems itemClass="nav-link text-dark" props="Contact" urlTo="contact" />
     <NavItems itemClass="nav-link text-dark" props="Service" urlTo="service" />
    </ul>
  </footer>
</div>
   </div>
  )
}

export default Footer