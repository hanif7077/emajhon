import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // const cart= props.cart;
    // const {cart} = props;
   console.log(cart);
   let totalPrice = 0 ;
   let totalPriceShipping = 0 ; 
   let quantity = 0;
   for (const product of cart) {
       if(product.quantity === 0){
        product.quantity=1;
       }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price*product.quantity;
        totalPriceShipping = totalPriceShipping + product.shipping;
        quantity = quantity +product.quantity;
   }

   const tax = totalPrice*7/100;

   const grandTotal = totalPrice + totalPriceShipping + tax

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {quantity}</p>
            <p>totalPrice Price: $ {totalPrice} </p>
            <p>totalPrice Shipping: $ {totalPriceShipping} </p>
            <p>Tax: $ {tax.toFixed(2)} </p>
            <h6>Grand totalPrice: $ {grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;