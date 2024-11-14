import React, { useContext,useState } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import './ProductList.css'
import { IoMdCloseCircle } from 'react-icons/io';
const ProductList =()=>{
    const {products,addToCart}=useContext(ShopContext);
    const [modal, setModal] =useState(false);
    const[selectedProduct, setSelectedProduct]=useState(null);
    const toggleModal= (product=null)=>{
        setModal(!modal);
        setSelectedProduct(product);
    }
    return(
        <div>
            <div className="product_list">
                <h2>Our Bag Collection</h2>
                <div className="product-grid">
                    {products.map((product)=>{
                       
                      const{id,image,title,price}=product;
                      return(
                        <div className='product-card' key={id}>
                        <img src={image} alt=""  className='product-image' onClick={()=>toggleModal(product)}/>
                        <div className="product_info">
                            <h4>{title}</h4>
                            <p>$ {price}</p>
                        </div>
                        <button className="add-to-cart" onClick={()=> addToCart(product,id)}>Add to cart</button>
                        </div>

                      )
                    })}
                </div>
            </div>
            {modal && selectedProduct && (
                <div className="product_modal">
                    <div className="product_modal_content">
                        <IoMdCloseCircle className='modal_close' onClick={toggleModal}/>
                        <div className="modal_content">
                            <img src={selectedProduct.image} alt="" className='modal_img'/>
                            <h3 className="modal_title">{selectedProduct.title}</h3>
                            <h2 className="modal_price">${selectedProduct.price}</h2>
                            <button className="buy_now">Buy Now</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
 export default ProductList