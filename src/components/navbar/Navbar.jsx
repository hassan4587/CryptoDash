import React, { use, useContext } from 'react'
import './navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'
import { coinContext } from '../../context/CoinContext'
function navbar() {

  const {setCurrency} = useContext(coinContext);

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
            <select onChange={(event)=> setCurrency(event.target.value)}>
                <option value="USD">USD</option>
                <option value="EUR">EU</option>
                <option value="PKR">PKR</option>

            </select>
            <button>Sign Up <img src={arrow_icon} alt="arrow_icon" /></button>
        </div>
    </div>
  )
}

export default navbar