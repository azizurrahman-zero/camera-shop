import React, { useState } from 'react';
const Cart = ({ cart }) => {
    let cameraNames = [];
    cart.map(camera => {
        cameraNames.push(camera.name);
        return cameraNames;
    })
    const [random, setRandom] = useState([]);
    const chooseOne = () => {
        var randomItem = cameraNames[Math.floor(Math.random() * cameraNames.length)];
        setRandom(randomItem);

    }

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
            {

            }
            <button onClick={chooseOne}>Choose one</button>
            <p>{random}</p>
        </div>
    );
};

export default Cart;