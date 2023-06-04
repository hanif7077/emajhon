import { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../cart/cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    }, []);
    useEffect(()=> {
        
          const storedCart = getShoppingCart ();
          const savedCart = [];
          for  (const id in storedCart){
            // console.log(id);
            const addedProduct = products.find(product => product.id == id)
            if(addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            
           
            // console.log('added Product', addedProduct);
          }
          setCart (savedCart);
    },[products]);

    const HandleAddtoCart =(product) =>{
        // cart.push(product);
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
                products.map(product=> <Product key={product.id} product = {product} HandleAddtoCart={HandleAddtoCart}> </Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;