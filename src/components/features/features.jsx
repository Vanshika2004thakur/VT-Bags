import React from 'react'
import { FaRegCheckCircle, FaRegStar, FaShippingFast } from 'react-icons/fa'
import './features.css'
const Features = () =>{
    return(
        <div>
            <div className="features">
                <h2>Why Choose Our Brand </h2>
                <p className="description">ourself required no at thoughts dedicated. here we provide with good quality and vintage bags</p>
                <div className="card_container">
                    <div className="card">
                    <FaRegStar className="icon" />
                    <h3>Best Quality</h3>
                    <p>100% Genuine Product</p>
                    </div>
                    <div className="card">
                    <FaShippingFast className='icon' />
                    <h3>Free Shipping</h3>
                    <p>100% Free Shipping Product</p>
                    </div>
                    <div className="card">
                        <FaRegCheckCircle className='icon' />
                        <h3>Warranty</h3>
                        <p>100% Return Guarantee</p>

                    </div>
                    </div>
                </div>
            </div>

    )
}
export default Features