import React from 'react';
const Cart = ({ cart, clearCart, chooseOne, random }) => {

    return (
        <div>
            <h1>Selected Cloths</h1>
            {
                cart.map(camera =>
                    <div key={camera.id}>
                        <h4>{camera.name}</h4>
                    </div>
                )
            }
            <button onClick={chooseOne}>Choose one</button>
            <p>{random}</p>
            <button onClick={clearCart}>Choose Again</button>
        </div>
    );
};

export default Cart;