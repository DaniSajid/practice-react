import React from 'react'
import NavItems from './NavItems'
import NavLogo from './NavLogo'
import NavBtn from './NavBtn'

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg color-design">
  <div className="container-fluid">
  <NavLogo logoName="React" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <NavItems itemClass="nav-link active" props="Home" urlTo="/" />
      <NavItems itemClass="nav-link " props="TodoApp" urlTo="TodoApp"/>
      <NavItems itemClass="nav-link " props="Contact" urlTo="contact" />
      <NavItems itemClass="nav-link " props="Service" urlTo="service" />
      </ul>
      <form className="d-flex" role="search">
      <NavBtn/>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar