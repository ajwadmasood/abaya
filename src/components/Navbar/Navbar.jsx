import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>Abaya Store</div>
        <div>
            <ul className='gender-categories-list'>
                <li><Link style={{ textDecoration: 'none' }} to='/all'>All</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to='/men'>Men</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to='/women'>Women</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar