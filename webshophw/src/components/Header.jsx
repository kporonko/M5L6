import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="main">
        <div className='main-label'>
          <Link to={'/'}  className='link'>
            My Store
          </Link>
        </div>
        <ul>
            <li>Abous Us</li>
            <li>Contact Us</li>
            <li className='bucket-button'><Link className='link' to={'/bucket'}><FaShoppingCart/></Link></li>
        </ul>
  </div>
  )
}
