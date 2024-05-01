import React from 'react'

const NavLogo = ({logoName}) => {
  return (
    <>
    
        <img src="/vite.svg" alt="" />
    <a className="navbar-brand text-danger" href="#">{logoName}</a>

        
    </>
  )
}

export default NavLogo