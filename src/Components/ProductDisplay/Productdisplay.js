import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import ShopCategory from '../../Pages/ShopCategory'
import { ShopContext } from '../../Context/ShopContext'


const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_icon} alt='' />
          <img src={star_dull_icon} alt='' />
          <p>(122)</p>
        </div>
        <div className='productdisplay-right-prices'>
          <p className='productdisplay-right-prices-old'>${product.old_price}</p>
          <p className='productdisplay-right-prices-new'>${product.new_price}</p>
        </div>
        <div className='productdisplay-right-description'>
          A product description is a piece of marketing copy that explains a product's features, benefits, and value to customers. It's often a short paragraph that appears on an ecommerce site next to or below a product's image and title.    </div>
        <div className='productdisplay-right-size'>
          <h1>select size</h1>
          <div className='productdisplay-right-sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>category : </span>women,t-shirt,crop top</p>
        <p className='productdisplay-right-category'><span>tags : </span>modern,latest </p>
      </div>
    </div>
  )
}

export default Productdisplay
