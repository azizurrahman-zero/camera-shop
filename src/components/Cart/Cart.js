import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart, chooseOne, random }) => {

    return (
        <div className='cart'>
            <h3>Selected Cameras</h3>
            <div className='carts'>
                {
                    cart.map(camera =>
                        <div className='cart-camera' key={camera.id}>
                            <img src={camera.picture} alt="" />
                            <p>{camera.name}</p>
                        </div>
                    )
                }
            </div>
            <button onClick={chooseOne}>Choose one</button>
            <p className='random'>{random}</p>
            <button onClick={clearCart}>Choose Again</button>
        </div>
    );
};

export default Cart;