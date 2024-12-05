import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import Productdisplay from '../Components/ProductDisplay/Productdisplay'
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox'
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts'

const Product = () => {

  const {all_product}=useContext(ShopContext)
  const {productId}= useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <Relatedproducts/>

    </div>
  )
}

export default Product
