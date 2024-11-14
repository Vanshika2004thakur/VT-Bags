import React from 'react'
import hero_img from '../../assets/bag1.png'
import './hero.css'
const hero =()=>{
    return(
        <div>
            <div className="hero">
                <div className="hero_content">
                    <div className="hero_left">
                    <h1>VT Leather Quality Bag</h1>
                    <p className="text">Elevate your bag collection with a stylish leather handbag from VT Bags. This ladies handbag is the perfect handbag to add to your series of collection of stylish handbags.</p>
                    <p className="price">$ 75.99</p>
                    <button className='cta'>BUY NOW</button>
                    </div>
                    <div className="hero_right">
                        <img src={hero_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default hero