import React, { useState } from 'react';
import Cameras from '../Cameras/Cameras';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    const cameraNames = [];

    cart.map(camera => {
        cameraNames.push(camera.name);
        return cameraNames;
    })

    const addToCart = cartedCamera => {
        const totalCart = [...cart, cartedCamera];
        setCart(totalCart);
    }

    const clearCart = () => {
        setCart([]);
        setRandom([]);
    }

    const chooseOne = () => {
        const randomItem = cameraNames[Math.floor(Math.random() * cameraNames.length)];
        setRandom(randomItem);
    }

    return (
        <div className='shop'>
            <Cameras
                addToCart={addToCart}
            ></Cameras>
            <Cart
                cart={cart}
                clearCart={clearCart}
                chooseOne={chooseOne}
                random={random}
            ></Cart>
        </div>
    );
};

export default Shop;