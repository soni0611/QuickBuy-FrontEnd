import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const options={
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth <600 ?20:25,
    value:2.5,
    isHalf:true,
}

const Product = ({product}) => {
  return (
    <div>
      <Link className="productCard" to={product._id}>
        <img src={product.images[0].url } alt={product.name}/>
        <p>{product.name}</p>
        <div>
            <ReactStars {...options} /><span>(255 review)</span>
        </div>
        <span>{product.price}</span>
      </Link>
    </div>
  )
}

export default Product
