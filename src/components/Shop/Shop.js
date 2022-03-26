import React, { useState } from 'react';
import Cameras from '../Cameras/Cameras';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);

    const addToCart = camera => {
        const totalCart = [...cart, camera];
        setCart(totalCart);
    }
    return (
        <div className='shop'>
            <Cameras addToCart={addToCart}></Cameras>
            <Cart
                cart={cart}
            ></Cart>
        </div>
    );
};

export default Shop;