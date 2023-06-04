import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
   
    let { img, name,  seller, quantity,ratings, price, } = props.product;
    const HandleAddtoCart = props.HandleAddtoCart;

   
    return (
        <div className='product'>
            
            <img src={img} width={200} height={200} alt="" />

            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings} Star </p>
            </div>
            <button onClick={() => HandleAddtoCart(props.product)} 
            className='btn-cart'>
                Add to cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;