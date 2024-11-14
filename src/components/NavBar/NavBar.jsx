import React, { useContext } from 'react'
import { IoBagOutline } from 'react-icons/io5'
import './NavBar.css'
import { ShopContext } from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom'
const NavBar = () =>{
    const {itemAmount}=useContext(ShopContext)
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                <h2>VT Bags</h2>
                </div>
                <div className="links">
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Contact</li>
                        <li>LOGIN</li>
                    </ul>
                </div>
               <Link to='/cart'>
               <div className="nav_icon_wrapper">
                    <IoBagOutline className='nav-icon' />
                    <p className="nav_cart_qty">{itemAmount}</p>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default NavBar