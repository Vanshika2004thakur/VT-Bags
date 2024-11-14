import React from 'react'
import { FaFacebookF, FaInstagram,FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'
import './footer.css';
const Footer = () => {
  return (
    <footer className='footer-container'>
        <div className="footer-top">
            <h3 className="footer-title">VT Elegant Bag</h3>
            <p className='footer-address'>
                123,Steet Name,Close Axis, State, Country
            </p>
            <div className='social-icons'>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaGooglePlusG /></a>
            <a href="#">< FaLinkedinIn  /></a>

            </div>
        </div>
        <div className='footer-bottom'>
            <ul className='footer-menu'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Testimonial</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            <p className="copyright">
                Copyright @ VT Bags 2024. All rights Reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;