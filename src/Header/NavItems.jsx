import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = ({props , itemClass ,urlTo}) => {
  return (
    <>
          <li className="nav-item">
          <Link className={itemClass} aria-current="page" to={urlTo}>{props}</Link>
        </li>
    </>
  )
}

export default NavItems