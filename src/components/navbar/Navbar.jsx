import React from 'react'
import './navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'
function navbar() {
  return (
    <div className='navbar'>
       <span className='logo'>🚀Crypto Dash</span>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>

        </ul>
        <div className="nav-right">
            <select>
                <option value="USD">USD</option>
                <option value="EU">EU</option>
                <option value="PKR">PKR</option>

            </select>
            <button>Sign Up <img src={arrow_icon} alt="arrow_icon" /></button>
        </div>
    </div>
  )
}

export default navbar