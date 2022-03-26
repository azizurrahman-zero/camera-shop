import React from 'react';

const Cart = ({ cart }) => {
    console.log(cart)
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
            <button>Choose one</button>
        </div>
    );
};

export default Cart;