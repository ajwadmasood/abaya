import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div>
                <h2>Products</h2>
                <ul className='no-style'>
                    <li>Men</li>
                    <li>Women</li>
                </ul>
            </div>
            <div>
                <h2>Abbaya.com</h2>
            </div>
            <div>
                <h2>Get in Touch!</h2>
                <ul className='no-style'>
                    <li>Timings</li>
                    <li className='green-timings'>03:00 PM to 12:00 PM UK</li>
                    <li>+44 7895 551546</li>
                </ul>
            </div>
        </div>
        <div className='footer-tm'>2024 © Abaya.com. A <span style={{color:'white'}}>Asad Dar</span> website</div>
    </div>
  )
}

export default Footer